import { useEffect, useState } from "react";

const useDebounceRequest = (value: string, time = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const timoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, time);
      return () => {
        clearTimeout(timoutId);
      };
    },
    [value, time])

    return debouncedValue;
};

export default useDebounceRequest;
