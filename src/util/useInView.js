import { useState, useEffect, useRef } from "react";

/**
 * useInView — returns [ref, isInView].
 * By default, once the element enters the viewport the state is set to true
 * and the observer is disconnected (fire-once behaviour for entrance animations).
 * Pass { once: false } to keep tracking enter/leave events.
 * Falls back to inView=true immediately in environments (e.g. tests) where
 * IntersectionObserver is unavailable.
 */
const useInView = (options = {}) => {
  const ref = useRef(null);
  const { once = true, ...observerOptions } = options;
  // Default to visible if IntersectionObserver is not supported
  const [inView, setInView] = useState(
    typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (entry.isIntersecting && once) {
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...observerOptions }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return [ref, inView];
};

export default useInView;
