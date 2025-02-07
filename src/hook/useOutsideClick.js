import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (!ref?.current) return;

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("pointerdown", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, callback]);
};