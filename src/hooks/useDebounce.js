import { useCallback, useEffect } from "react";

const useDebounce = (func, delay, deps) => {
  const callback = useCallback(func, deps);

  useEffect(() => {
    const handler = setTimeout(callback, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

export default useDebounce;
