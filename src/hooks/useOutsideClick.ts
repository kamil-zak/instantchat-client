import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (!(target instanceof HTMLElement)) return;
      if (ref.current && !ref.current.contains(target)) callback();
    };
    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, [callback]);

  return ref;
};

export default useOutsideClick;
