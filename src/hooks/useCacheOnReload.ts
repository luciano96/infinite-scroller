import { useEffect } from "react";
import useSessionStorage from "./useSessionStorage";

/**
 * This hook attempts to store data with session storage, before refreshing the page.
 *
 * @param {string} cacheKey
 * @param {any} dataToCache
 * @returns  a method to retrieve the cached data
 */
const useCacheOnReload = <T>(cacheKey: string, dataToCache: T) => {
  const { getSessionData, updateSessionStorage } = useSessionStorage<T>(cacheKey);

  useEffect(() => {
    const saveCache = () => updateSessionStorage(dataToCache);
    window.addEventListener("beforeunload", saveCache);
    return () => window.removeEventListener("beforeunload", saveCache);
  }, [dataToCache, updateSessionStorage]);

  return { getCachedData: getSessionData };
};

export default useCacheOnReload;
