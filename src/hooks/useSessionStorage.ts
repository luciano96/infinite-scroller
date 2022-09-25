import { useCallback } from "react";
import { get, set } from "../utils/sessionStorage";

/**
 * Hook abstracts sessionStorage usage with two methods.
 * @param key key for the storage entry
 * @returns how to retrieve and insert data for the key
 */
const useSessionStorage = <T>(key: string) => {
  const updateSessionStorage = useCallback(
    (item: T) => set(key, JSON.stringify(item)),
    [key]
  );
  const getSessionData = useCallback((): T => JSON.parse(get(key) ?? "[]"), [key]);

  return {
    getSessionData,
    updateSessionStorage,
  }; 
};

export default useSessionStorage;
