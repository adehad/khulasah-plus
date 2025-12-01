/**
 * Type-safe localStorage utility with Pydantic-style schema validation.
 *
 * This module provides a strongly-typed interface for localStorage operations,
 * with automatic fallback to defaults when storage is unavailable (e.g., incognito mode).
 */


// ============================================================================
// Type-Safe Storage
// ============================================================================

/**
 * Schema definition for all localStorage items.
 * Add new storage keys here with their types.
 */
export interface StorageSchema {
	settings: SettingsModel;
	theme: ThemeValue;
}

/**
 * Settings model - controls display preferences
 */
export interface SettingsModel {
	arabicFontSize: number;
	translationFontSize: number;
	transliterationFontSize: number;
	showArabic: boolean;
	showTranslation: boolean;
	showTransliteration: boolean;
}

/**
 * Theme values - light, dark, or auto (system preference)
 */
export type ThemeValue = "light" | "dark" | "auto";

/**
 * Default values for each storage key (like Pydantic Field defaults)
 */
const storageDefaults: StorageSchema = {
	settings: {
		arabicFontSize: 2,
		translationFontSize: 1,
		transliterationFontSize: 1,
		showArabic: true,
		showTranslation: true,
		showTransliteration: true,
	},
	theme: "auto",
};

/**
 * Type-safe storage class with Pydantic-style get/set operations.
 *
 * Features:
 * - Compile-time type checking for all storage keys
 * - Auto-completion in IDE for available keys and values
 * - Graceful fallback when localStorage is unavailable
 * - No JSON.parse errors from corrupted data
 *
 * @example
 * ```typescript
 * // Get typed settings with defaults
 * const settings = storage.get("settings");
 * console.log(settings.arabicFontSize); // Type: number, default: 2
 *
 * // Update a single setting
 * storage.update("settings", (s) => ({ ...s, arabicFontSize: 3 }));
 *
 * // Theme access with union type
 * const theme = storage.get("theme"); // Type: "light" | "dark" | "auto"
 * storage.set("theme", "dark"); // TypeScript validates the value
 * ```
 */
class TypedStorage {
	private _isAvailable: boolean | null = null;

	/**
	 * Check if localStorage is available (cached after first check).
	 * This handles incognito mode and other cases where storage may be blocked.
	 */
	get isAvailable(): boolean {
		if (this._isAvailable === null) {
			try {
				const testKey = "__storage_test__";
				localStorage.setItem(testKey, testKey);
				localStorage.removeItem(testKey);
				this._isAvailable = true;
			} catch {
				this._isAvailable = false;
				console.warn(
					"localStorage is not available. Using in-memory defaults.",
				);
			}
		}
		return this._isAvailable;
	}

	/**
	 * Get a typed value from storage.
	 * Returns the default value if:
	 * - localStorage is unavailable
	 * - Key doesn't exist
	 * - Stored value is corrupted/invalid JSON
	 *
	 * @param key - The storage key (must be defined in StorageSchema)
	 * @returns The stored value or default
	 */
	get<K extends keyof StorageSchema>(key: K): StorageSchema[K] {
		if (!this.isAvailable) {
			return storageDefaults[key];
		}
		try {
			const raw = localStorage.getItem(key);
			if (raw === null) {
				return storageDefaults[key];
			}
			return JSON.parse(raw) as StorageSchema[K];
		} catch {
			console.warn(`Failed to parse localStorage key "${key}". Using default.`);
			return storageDefaults[key];
		}
	}

	/**
	 * Set a typed value in storage.
	 *
	 * @param key - The storage key (must be defined in StorageSchema)
	 * @param value - The value to store (TypeScript validates the type)
	 * @returns true if successful, false if storage is unavailable
	 */
	set<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]): boolean {
		if (!this.isAvailable) {
			return false;
		}
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch {
			console.warn(`Failed to save to localStorage key "${key}".`);
			return false;
		}
	}

	/**
	 * Update a storage value using an updater function.
	 * Useful for updating nested properties within settings.
	 *
	 * @param key - The storage key (must be defined in StorageSchema)
	 * @param updater - Function that receives current value and returns updated value
	 * @returns true if successful, false if storage is unavailable
	 *
	 * @example
	 * ```typescript
	 * // Update just the arabicFontSize
	 * storage.update("settings", (s) => ({ ...s, arabicFontSize: 3 }));
	 * ```
	 */
	update<K extends keyof StorageSchema>(
		key: K,
		updater: (current: StorageSchema[K]) => StorageSchema[K],
	): boolean {
		const current = this.get(key);
		const updated = updater(current);
		return this.set(key, updated);
	}

	/**
	 * Get the default value for a storage key.
	 * Useful when you need to reset to defaults.
	 *
	 * @param key - The storage key
	 * @returns The default value for that key
	 */
	getDefault<K extends keyof StorageSchema>(key: K): StorageSchema[K] {
		return storageDefaults[key];
	}

	/**
	 * Reset a storage key to its default value.
	 *
	 * @param key - The storage key to reset
	 * @returns true if successful, false if storage is unavailable
	 */
	reset<K extends keyof StorageSchema>(key: K): boolean {
		return this.set(key, storageDefaults[key]);
	}

	/**
	 * Clear all stored values (resets to defaults on next get).
	 *
	 * @returns true if successful, false if storage is unavailable
	 */
	clear(): boolean {
		if (!this.isAvailable) {
			return false;
		}
		try {
			for (const key of Object.keys(storageDefaults)) {
				localStorage.removeItem(key);
			}
			return true;
		} catch {
			return false;
		}
	}
}

/**
 * Singleton instance of the typed storage.
 * Import and use this throughout the application.
 *
 * @example
 * ```typescript
 * import { storage } from "@/utils/storage";
 *
 * const theme = storage.get("theme");
 * storage.set("theme", "dark");
 * ```
 */
export const storage = new TypedStorage();
