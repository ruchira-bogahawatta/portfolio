import { useEffect, useRef, useState } from "react";

// Drives a scroll-filled timeline. The line runs from the first dot to the last; its filled part and
// the set of "reached" entries follow a trigger line sitting a bit above the middle of the viewport.
// Returns refs to attach (track, fill, one per dot) and which entries have been reached.
export function useTimelineProgress(count) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const dotRefs = useRef([]);
  const [reached, setReached] = useState(() => Array(count).fill(false));

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const dots = dotRefs.current.filter(Boolean);
      if (dots.length === 0) return;

      const parentTop = track.parentElement.getBoundingClientRect().top;
      const centre = (dot) => {
        const r = dot.getBoundingClientRect();
        return r.top + r.height / 2;
      };
      const first = centre(dots[0]);
      const last = centre(dots[dots.length - 1]);
      const length = Math.max(0, last - first);

      track.style.top = `${first - parentTop}px`;
      track.style.height = `${length}px`;

      const trigger = reduceMotion ? Infinity : window.innerHeight * 0.55;
      fill.style.height = `${Math.min(length, Math.max(0, trigger - first))}px`;

      const next = dots.map((dot) => centre(dot) <= trigger);
      setReached((prev) => (prev.join() === next.join() ? prev : next));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [count]);

  return { trackRef, fillRef, dotRefs, reached };
}
