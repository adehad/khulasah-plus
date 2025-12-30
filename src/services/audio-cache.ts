/**
 * Audio cache service using IndexedDB for offline audio storage.
 *
 * IndexedDB is chosen over Cache API because audio files need metadata
 * (title, cached date) stored alongside the blob, and IndexedDB provides
 * structured storage with querying capabilities.
 *
 * Uses the 'idb' library for a cleaner Promise-based API over raw IndexedDB.
 */

import { type IDBPDatabase, openDB } from "idb";

const DB_NAME = "khulasah-audio-cache";
const DB_VERSION = 1;
const STORE_NAME = "audio-files";

/**
 * Represents a cached audio file with its metadata.
 * The URL serves as the primary key since audio files are uniquely identified by their source.
 */
export interface CachedAudio {
  /** Source URL - used as primary key since each audio has a unique origin */
  url: string;
  /** The actual audio data - stored as Blob to preserve binary format */
  blob: Blob;
  /** User-friendly title for display in cache management UI */
  title: string;
  /** MIME type from response headers, defaults to audio/opus for our content */
  mimeType: string;
  /** Pre-computed size in bytes - avoids re-reading blob for size calculations */
  size: number;
  /** Timestamp when cached - enables sorting by recency in UI */
  cachedAt: number;
}

/**
 * Type definition for the IndexedDB schema.
 * Required by 'idb' library for type-safe database operations.
 */
interface AudioCacheDB {
  [STORE_NAME]: {
    key: string;
    value: CachedAudio;
  };
}

/**
 * Service for caching audio files in IndexedDB for offline playback.
 *
 * Design decisions:
 * - Singleton pattern via exported instance ensures single DB connection
 * - Lazy initialization defers DB open until first use (faster page load)
 * - All methods are async to handle IndexedDB's async nature
 */
class AudioCacheService {
  /** Cached database connection - reused across all operations */
  private _db: IDBPDatabase<AudioCacheDB> | null = null;

  /**
   * Stored initialization promise to prevent concurrent init() calls
   * from opening multiple database connections.
   */
  private _initPromise: Promise<void> | null = null;

  /**
   * Initialize the IndexedDB database connection.
   *
   * Uses a cached promise pattern to ensure only one initialization runs,
   * even if multiple callers invoke init() concurrently. On failure, the
   * promise is reset to allow retry on next call.
   */
  async init(): Promise<void> {
    if (this._db) return;
    if (this._initPromise) return this._initPromise;

    this._initPromise = this._openDatabase().catch((err) => {
      // Reset promise on failure so subsequent calls can retry
      // rather than returning the cached rejection forever
      this._initPromise = null;
      throw err;
    });
    await this._initPromise;
  }

  /**
   * Opens the IndexedDB database, creating the object store if needed.
   * Called once during initialization.
   */
  private async _openDatabase(): Promise<void> {
    this._db = await openDB<AudioCacheDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Only create store if it doesn't exist - handles fresh installs
        // and avoids errors on version upgrades where store already exists
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "url" });
        }
      },
    });
  }

  /**
   * Ensures database is initialized before any operation.
   * All public methods call this to guarantee _db is available.
   *
   * @throws Error if database fails to initialize after init() attempt
   */
  private async _ensureDb(): Promise<IDBPDatabase<AudioCacheDB>> {
    await this.init();
    if (!this._db) {
      throw new Error("Failed to initialize audio cache database");
    }
    return this._db;
  }

  /**
   * Downloads and caches an audio file from a URL.
   *
   * Fetches the audio, extracts metadata from response headers, and stores
   * everything in IndexedDB. Uses put() instead of add() to allow re-caching
   * the same URL (updates existing entry rather than failing on duplicate).
   *
   * @param url - The audio file URL to fetch and cache
   * @param metadata - Additional metadata not derivable from the response
   */
  async cache(url: string, metadata: { title: string }): Promise<void> {
    const db = await this._ensureDb();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.status}`);
    }

    const blob = await response.blob();
    // Default to audio/opus since that's our primary audio format
    const mimeType = response.headers.get("content-type") ?? "audio/opus";

    const entry: CachedAudio = {
      url,
      blob,
      title: metadata.title,
      mimeType,
      size: blob.size,
      cachedAt: Date.now(),
    };

    await db.put(STORE_NAME, entry);
  }

  /**
   * Retrieves a cached audio file by its URL.
   *
   * @returns The cached entry including blob, or undefined if not cached
   */
  async get(url: string): Promise<CachedAudio | undefined> {
    const db = await this._ensureDb();
    return db.get(STORE_NAME, url);
  }

  /**
   * Checks if an audio file is cached without loading the full entry.
   *
   * Uses getKey() instead of get() to avoid loading the blob into memory,
   * which is important for performance when just checking cache status.
   */
  async isCached(url: string): Promise<boolean> {
    const db = await this._ensureDb();
    const key = await db.getKey(STORE_NAME, url);
    return key !== undefined;
  }

  /**
   * Removes a cached audio file.
   * No-op if the URL isn't cached (IndexedDB delete is idempotent).
   */
  async delete(url: string): Promise<void> {
    const db = await this._ensureDb();
    await db.delete(STORE_NAME, url);
  }

  /**
   * Retrieves all cached audio files.
   *
   * Note: This loads all blobs into memory simultaneously. For cache
   * management UI where we need full metadata including titles, this is
   * acceptable. For size-only operations, use getTotalSize() instead.
   */
  async getAll(): Promise<CachedAudio[]> {
    const db = await this._ensureDb();
    return db.getAll(STORE_NAME);
  }

  /**
   * Removes all cached audio files.
   * Used by the "Clear All" action in settings.
   */
  async clearAll(): Promise<void> {
    const db = await this._ensureDb();
    await db.clear(STORE_NAME);
  }

  /**
   * Calculates total size of all cached audio files.
   *
   * Uses a cursor to iterate entries without loading all blobs into memory.
   * This is memory-efficient for large caches since we only access the
   * pre-computed size field, not the blob data itself.
   */
  async getTotalSize(): Promise<number> {
    const db = await this._ensureDb();
    let total = 0;

    // Cursor iteration avoids loading all blobs into memory at once
    const tx = db.transaction(STORE_NAME, "readonly");
    for await (const cursor of tx.store) {
      total += cursor.value.size;
    }

    return total;
  }

  /**
   * Creates a blob URL for playing a cached audio file.
   *
   * Caller is responsible for revoking the URL via URL.revokeObjectURL()
   * when done to prevent memory leaks. Returns undefined if not cached
   * to allow graceful fallback to network fetch.
   */
  async getBlobUrl(url: string): Promise<string | undefined> {
    const entry = await this.get(url);
    if (!entry) return undefined;
    return URL.createObjectURL(entry.blob);
  }
}

/** Singleton instance - ensures single database connection across the app */
export const audioCache = new AudioCacheService();
