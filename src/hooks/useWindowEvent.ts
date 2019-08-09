import { useEffect } from 'react';

export const useWindowEvent = <T extends keyof WindowEventMap>(
  event: T,
  fn: (e: WindowEventMap[T]) => void,
  deps: any[] = [],
) => {
  useEffect(() => {
    window.addEventListener(event, fn);
    return () => {
      window.removeEventListener(event, fn);
    };
  }, [event, fn, ...deps]);
};
