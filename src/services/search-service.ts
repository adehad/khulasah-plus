/**
 * Client-side search service with diacritics normalization.
 */

import {
  Document,
  type DocumentData,
  Encoder,
  type EnrichedDocumentSearchResults,
} from "flexsearch";
import { resolveRouterPath } from "@/router";
import { hasTashkeel, normalizeArabic } from "@/utils/arabic-normalize";
import { normalizeTranslit } from "@/utils/search-normalize";

/**
 * Search document structure (matches the build-time index)
 * Extended with index signature for FlexSearch DocumentData compatibility
 */
export interface SearchDocument extends DocumentData {
  id: string;
  title: string;
  arabic: string;
  arabicOriginal: string;
  translit: string;
  translitOriginal: string;
  translation: string;
  contentType: string;
}

/**
 * Search result with relevance score and highlight info
 */
export interface SearchResult {
  document: SearchDocument;
  score: number;
  matchedField: "arabic" | "translit" | "translation" | "title";
  snippet: string;
  highlightStart: number; // Position in snippet where match starts
  highlightEnd: number; // Position in snippet where match ends
}

/**
 * Create a custom Arabic encoder that strips diacritics (tashkeel)
 * and normalizes hamza variants for flexible search.
 */
function createArabicEncoder(): Encoder {
  const encoder = new Encoder({
    normalize: (str: string) => str.toLowerCase(),
  });

  // Strip Arabic diacritics (tashkeel): fatha, kasra, damma, sukun, shadda, etc.
  encoder.addReplacer(/[\u064B-\u065F\u0670]/g, "");

  // Strip tatweel (kashida)
  encoder.addReplacer(/\u0640/g, "");

  // Normalize hamza variants to base alif
  encoder.addMapper("أ", "ا");
  encoder.addMapper("إ", "ا");
  encoder.addMapper("آ", "ا");
  encoder.addMapper("ٱ", "ا");

  // Normalize other Arabic letter variants
  encoder.addMapper("ؤ", "و");
  encoder.addMapper("ئ", "ي");
  encoder.addMapper("ى", "ي");
  encoder.addMapper("ة", "ه");

  return encoder;
}

/**
 * Create a transliteration encoder that normalizes special diacritical
 * Latin characters used in Arabic transliteration to ASCII equivalents.
 */
function createTranslitEncoder(): Encoder {
  const encoder = new Encoder({
    normalize: (str: string) => normalizeTranslit(str),
  });

  return encoder;
}

/**
 * Singleton search service using FlexSearch
 */
class SearchService {
  private documents: SearchDocument[] = [];
  private index: Document<SearchDocument> | null = null;
  private isLoading = false;
  private loadPromise: Promise<void> | null = null;
  private isInitialized = false;

  /**
   * Initialize the search index by loading the pre-built JSON index
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    if (this.loadPromise) return this.loadPromise;

    this.isLoading = true;
    this.loadPromise = this.loadIndex();
    await this.loadPromise;
    this.isLoading = false;
  }

  /**
   * Load the search index from the JSON file and build FlexSearch index
   */
  private async loadIndex(): Promise<void> {
    try {
      const response = await fetch(resolveRouterPath("/search-index.json"));
      if (!response.ok) {
        throw new Error(`Failed to load search index: ${response.status}`);
      }

      this.documents = await response.json();

      // Create FlexSearch Document index with custom encoders
      const arabicEncoder = createArabicEncoder();
      const translitEncoder = createTranslitEncoder();

      this.index = new Document<SearchDocument>({
        document: {
          id: "id",
          index: [
            {
              field: "title",
              tokenize: "forward",
              encoder: translitEncoder,
            },
            {
              field: "arabic",
              tokenize: "forward",
              encoder: arabicEncoder,
            },
            {
              field: "translit",
              tokenize: "forward",
              encoder: translitEncoder,
            },
            {
              field: "translation",
              tokenize: "forward",
              encoder: translitEncoder,
            },
          ],
          store: true,
        },
      });

      // Add all documents to the index
      for (const doc of this.documents) {
        this.index.add(doc);
      }

      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize search index:", error);
      throw error;
    }
  }

  /**
   * Check if the search service is ready
   */
  isReady(): boolean {
    return this.isInitialized;
  }

  /**
   * Check if the search service is currently loading
   */
  isInitializing(): boolean {
    return this.isLoading;
  }

  /**
   * Search for documents matching the query
   * Supports Arabic diacritics normalization via FlexSearch encoder
   */
  async search(query: string, limit = 20): Promise<SearchResult[]> {
    await this.initialize();

    if (!query.trim() || !this.index) {
      return [];
    }

    const queryHasTashkeel = hasTashkeel(query);

    // Search across all indexed fields with enrichment
    const searchResults = this.index.search<false, false, true, true>(query, {
      limit,
      enrich: true,
    }) as EnrichedDocumentSearchResults<SearchDocument>;

    // Process results and calculate scores
    const resultMap = new Map<string, SearchResult>();

    // Field weights for scoring
    const fieldWeights: Record<string, number> = {
      title: 2.6, // title weight * title boost (2.0 * 1.3)
      arabic: 1.5,
      translit: 1.2,
      translation: 1.0,
    };

    for (const fieldResult of searchResults) {
      const fieldName = fieldResult.field as keyof typeof fieldWeights;
      const weight = fieldWeights[fieldName] || 1.0;

      if (!fieldResult.result) continue;

      for (const item of fieldResult.result) {
        const doc = item.doc as SearchDocument;
        if (!doc) continue;

        const docId = doc.id;
        let score = weight;

        // Boost if query has tashkeel and matches original Arabic exactly
        if (
          queryHasTashkeel &&
          fieldName === "arabic" &&
          doc.arabicOriginal?.includes(query)
        ) {
          score *= 1.5;
        }

        // Generate snippet with highlight positions
        const { snippet, highlightStart, highlightEnd } = this.generateSnippet(
          doc,
          fieldName as SearchResult["matchedField"],
          query,
        );

        const existing = resultMap.get(docId);
        if (!existing || score > existing.score) {
          resultMap.set(docId, {
            document: doc,
            score,
            matchedField: fieldName as SearchResult["matchedField"],
            snippet,
            highlightStart,
            highlightEnd,
          });
        }
      }
    }

    // Sort by score descending and return
    const results = Array.from(resultMap.values());
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, limit);
  }

  /**
   * Generate a snippet from the matched content with highlight positions
   */
  private generateSnippet(
    doc: SearchDocument,
    field: "arabic" | "translit" | "translation" | "title",
    query: string,
  ): { snippet: string; highlightStart: number; highlightEnd: number } {
    let text: string;

    // Use original text with diacritics for display
    if (field === "arabic") {
      text = doc.arabicOriginal;
    } else if (field === "translit") {
      text = doc.translitOriginal;
    } else {
      text = doc[field];
    }

    if (!text) return { snippet: "", highlightStart: 0, highlightEnd: 0 };

    // Find match position using appropriate normalization
    const matchInfo = this.findNormalizedMatch(text, query, field);

    if (matchInfo.pos === -1) {
      // If not found with normalized match, return beginning of text
      const snippet = text.slice(0, 150) + (text.length > 150 ? "..." : "");
      return { snippet, highlightStart: 0, highlightEnd: 0 };
    }

    const { pos, matchLength } = matchInfo;

    // Calculate snippet bounds
    const snippetLength = 150;
    const contextBefore = 50;
    let start = Math.max(0, pos - contextBefore);
    let end = Math.min(text.length, start + snippetLength);

    // Adjust start to not cut words
    if (start > 0) {
      const spacePos = text.indexOf(" ", start);
      if (spacePos !== -1 && spacePos < pos) {
        start = spacePos + 1;
      }
    }

    // Adjust end to not cut words
    if (end < text.length) {
      const spacePos = text.lastIndexOf(" ", end);
      if (spacePos > start + 50) {
        end = spacePos;
      }
    }

    let snippet = text.slice(start, end);
    const prefixLength = start > 0 ? 3 : 0; // "..." prefix length
    if (start > 0) snippet = `...${snippet}`;
    if (end < text.length) snippet = `${snippet}...`;

    // Calculate highlight positions relative to the snippet
    const highlightStart = pos - start + prefixLength;
    const highlightEnd = highlightStart + matchLength;

    return { snippet, highlightStart, highlightEnd };
  }

  /**
   * Find a match in text using appropriate normalization for the field type.
   * Returns the position in the ORIGINAL text and the length of the match in original text.
   */
  private findNormalizedMatch(
    originalText: string,
    query: string,
    field: "arabic" | "translit" | "translation" | "title",
  ): { pos: number; matchLength: number } {
    // For simple lowercase normalization (translation/title), use direct indexOf
    if (field === "translation" || field === "title") {
      const normalizedQuery = query.toLowerCase();
      const pos = originalText.toLowerCase().indexOf(normalizedQuery);
      return { pos, matchLength: query.length };
    }

    // For Arabic and translit, normalize the full text first, then map positions back
    const normalize = field === "arabic" ? normalizeArabic : normalizeTranslit;

    const normalizedQuery = normalize(query);
    const normalizedText = normalize(originalText);

    // Find the match in normalized text
    const normalizedPos = normalizedText.indexOf(normalizedQuery);

    if (normalizedPos === -1) {
      return { pos: -1, matchLength: 0 };
    }

    // Map normalized position back to original text position
    // We need to find which original character corresponds to the normalized position
    const { originalStart, originalEnd } = this.mapNormalizedToOriginal(
      originalText,
      normalizedPos,
      normalizedPos + normalizedQuery.length,
      normalize,
    );

    return {
      pos: originalStart,
      matchLength: originalEnd - originalStart,
    };
  }

  /**
   * Map positions from normalized text back to original text.
   * Handles cases where normalization removes characters (Arabic diacritics)
   * or changes character count (transliteration NFD decomposition).
   */
  private mapNormalizedToOriginal(
    originalText: string,
    normalizedStart: number,
    normalizedEnd: number,
    normalize: (s: string) => string,
  ): { originalStart: number; originalEnd: number } {
    let originalStart = -1;
    let originalEnd = originalText.length;

    for (let i = 0; i < originalText.length; i++) {
      // Normalize text up to and including current character
      const normalizedUpTo = normalize(originalText.substring(0, i + 1)).length;

      // Check if we've reached the start position in normalized text
      if (originalStart === -1 && normalizedUpTo > normalizedStart) {
        originalStart = i;
      }

      // Check if we've reached or passed the end position in normalized text
      if (normalizedUpTo >= normalizedEnd) {
        originalEnd = i + 1;
        break;
      }
    }

    // If start wasn't found, default to 0
    if (originalStart === -1) {
      originalStart = 0;
    }

    return { originalStart, originalEnd };
  }

  /**
   * Get suggestions for autocomplete
   */
  async getSuggestions(query: string, limit = 5): Promise<string[]> {
    const results = await this.search(query, limit);
    return results.map((r) => r.document.title);
  }

  /**
   * Get a document by its ID (path)
   */
  getDocument(id: string): SearchDocument | undefined {
    return this.documents.find((doc) => doc.id === id);
  }

  /**
   * Get all documents (useful for browsing)
   */
  getAllDocuments(): SearchDocument[] {
    return [...this.documents];
  }
}

// Export singleton instance
export const searchService = new SearchService();
