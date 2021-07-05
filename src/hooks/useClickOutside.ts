import { useEffect, MutableRefObject, RefObject, useCallback } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: MutableRefObject<T> | RefObject<T>,
  callback: () => any
) {
  //* Setup the click function
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        callback();
      }
    },
    [callback, ref]
  );
  //* Add the function to the dom
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
}

export default useOutsideClick;
