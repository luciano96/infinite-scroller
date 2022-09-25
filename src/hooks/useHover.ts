import { useState } from "react";

/**
 * This hook allows to implement onHover mechanics offering the possibility to add a delay to the hover event
 *
 * @param time @type {number} in ms, that it should wait before considering hovering
 * @returns if its hovering and the handlers for the element
 */
const useHover = (time = 0) => {
  const [hovering, setHovering] = useState(false);
  let mouseInTimeout: NodeJS.Timeout;

  const onHoverProps = {
    onMouseEnter: () => {
      mouseInTimeout = setTimeout(() => setHovering(true), time);
    },
    onMouseLeave: () => {
      clearTimeout(mouseInTimeout);
      setHovering(false);
    },
  };
  return { hovering, onHoverProps };
};

export default useHover;
