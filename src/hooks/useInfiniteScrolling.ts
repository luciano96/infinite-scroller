import { useCallback, useEffect, useRef } from "react";

/**
 *  We use this hook to help setup the infinite scrolling section
 * @param {() => void} updateFn the function to execute when we intersect the loading element
 * @param {(() => void)} shouldUpdateFn an optional helper functino to decide if the update should ocurr
 * @returns the reference for the element we should observer intersection and the reference for a root element
 */
const useInfiniteScrolling = (
  updateFn: () => void,
  shouldUpdateFn?: () => void
) => {
  const intersectionContainer = useRef(null);
  const rootContainer = useRef(null);
  const shouldRunUpdate = useRef(false);

  const handleScrolling = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const { isIntersecting } = entities[0] ?? { isIntersecting: false };
      // guard against firing the first time since IntersectionObserver fires the handler when its instanced
      if (isIntersecting && shouldRunUpdate.current && (shouldUpdateFn?.() ?? true)) {
        updateFn();
      }
      shouldRunUpdate.current = true;
    },
    [updateFn, shouldUpdateFn]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrolling, {
      root: rootContainer.current,
      rootMargin: "100px",
      threshold: 0.1,
    });
    if (intersectionContainer.current) {
      observer.observe(intersectionContainer.current);
    }
  }, [handleScrolling]);

  return { loadRef: intersectionContainer, rootRef: rootContainer };
};

export default useInfiniteScrolling;
