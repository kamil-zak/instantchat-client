import { MouseEventHandler, RefObject, useEffect } from 'react';

const useInfiniteScroll = (ref: RefObject<HTMLDivElement>, getMore: () => void) => {
  useEffect(() => {
    if (!ref.current) return;
    let lastElement: HTMLDivElement;

    const listener: MouseEventHandler<HTMLDivElement> = (e) => {
      if (!(e.currentTarget.scrollTop === 0)) return;
      lastElement = ref.current?.firstElementChild as HTMLDivElement;
      getMore();
    };
    const div = ref.current;
    div.addEventListener('scroll', listener as any);

    return () => {
      div.removeEventListener('scroll', listener as any);
      if (div && lastElement) div.scrollTop = lastElement.offsetTop;
    };
  }, [getMore, ref]);
};

export default useInfiniteScroll;
