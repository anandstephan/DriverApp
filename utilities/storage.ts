import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

/**
 * Save data to storage
 * @param key unique string identifier
 * @param value any value (string | number | boolean | object)
 */
export const setItem = (key: string, value: any) => {
  if (typeof value === "string") {
    storage.set(key, value);
  } else if (typeof value === "number") {
    storage.set(key, value);
  } else if (typeof value === "boolean") {
    storage.set(key, value);
  } else {
    // store object/array as JSON
    storage.set(key, JSON.stringify(value));
  }
};

/**
 * Get data from storage
 * @param key unique string identifier
 */
export const getItem = <T = any>(key: string): T | undefined => {
  if (!storage.contains(key)) return undefined;

  const str = storage.getString(key);
  const num = storage.getNumber(key);
  const bool = storage.getBoolean(key);

  if (str !== undefined) {
    try {
      // try parse JSON (for object/array)
      return JSON.parse(str) as T;
    } catch {
      return str as unknown as T;
    }
  }

  if (num !== undefined) return num as unknown as T;
  if (bool !== undefined) return bool as unknown as T;

  return undefined;
};

/**
 * Remove data
 */
export const removeItem = (key: string) => {
  storage.delete(key);
};
