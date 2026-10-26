import { useEffect, useRef } from "react";

// Adds `is-shown` to the element once it scrolls into view, which plays the
// staggered entrance of its `[data-reveal]` children (see index.css).
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
