import { useRef, useEffect } from 'react';

export const usePrevious = <T>(prev: T) => {
  const prevRef = useRef<T>(prev);
  useEffect(() => {
    prevRef.current = prev;
  }, [prev]);
  return prevRef.current;
};
