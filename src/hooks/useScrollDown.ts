import { RefObject, useCallback } from 'react';

const useScrollDown = (ref: RefObject<HTMLDivElement>) => {
  const scrollDown = useCallback(() => {
    const { current } = ref;
    if (!current) return;
    const { scrollHeight } = current;
    current.scroll(0, scrollHeight);
  }, [ref]);
  return scrollDown;
};

export default useScrollDown;
