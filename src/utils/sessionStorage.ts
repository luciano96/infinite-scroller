/**
 * Get an item from sessionStorage.
 *
 * @param {string} key - Key under which the item is stored.
 * @returns {string|null} - The item from sessionStorage.
 */
 export const get = (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (err) {
      console.warn('sessionStorage API is not available');
  
      return null;
    }
  }
  
  /**
   * Store an item in sessionStorage.
   *
   * @param {String} key - Key under which to store the item.
   * @param {String} value - Value to store.
   */
  export const set = (key: string, value: string) => {
    try {
        sessionStorage.setItem(key, value);
    } catch (err) {
      console.warn('sessionStorage API is not available');
    }
  }
  