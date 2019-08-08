import { useRef, useEffect, useCallback } from 'react';

export const useOnClickOutside = <T extends HTMLElement>(
  fn: (e?: WindowEventMap['click']) => void,
) => {
  const ref = useRef<T>(null);
  const fnRef = useRef(fn);

  // 매번 등록된 함수를 업데이트
  useEffect(() => {
    fnRef.current = fn;
  });

  const onClickOutSide = useCallback(
    (e: WindowEventMap['click']) => {
      if (ref.current && e.target && !ref.current.contains(e.target as HTMLElement)) {
        fnRef.current(e);
      }
    },
    [fnRef, ref],
  );

  useEffect(() => {
    window.addEventListener('click', onClickOutSide);
    return () => {
      window.removeEventListener('click', onClickOutSide);
    };
  }, []);

  return ref;
};
