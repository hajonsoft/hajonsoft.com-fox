import { useState, useEffect, useRef } from "react";

/**
 * useInView — returns [ref, isInView].
 * Once the element enters the viewport the state is set to true
 * and the observer is disconnected (fire-once behaviour for entrance animations).
 * Falls back to inView=true immediately in environments (e.g. tests) where
 * IntersectionObserver is unavailable.
 */
const useInView = (options = {}) => {
  const ref = useRef(null);
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
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

export default useInView;
