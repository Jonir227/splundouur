import { useRef, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useOnClickOutside = <T extends HTMLElement>(
  fn: (e?: WindowEventMap['click']) => void,
) => {
  const ref = useRef<T>(null);
  const fnRef = useRef(fn);

  // 매번 등록된 함수를 업데이트
  fnRef.current = fn;

  const onClickOutSide = useCallback(
    (e: WindowEventMap['click']) => {
      if (ref.current && e.target && !ref.current.contains(e.target as HTMLElement)) {
        fnRef.current(e);
      }
    },
    [fnRef, ref],
  );

  useWindowEvent('click', onClickOutSide, [onClickOutSide]);

  return ref;
};
