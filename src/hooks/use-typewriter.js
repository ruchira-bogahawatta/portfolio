import { useEffect, useState } from "react";

// Types each phrase out, holds it, deletes it, moves to the next. With reduced motion the first
// phrase is shown as-is. `phrases` must be a stable array (define it outside the component).
export function useTypewriter(phrases, { typeMs = 55, deleteMs = 30, holdMs = 2000 } = {}) {
  const [text, setText] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? phrases[0] : ""
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let index = 0;
    let length = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const phrase = phrases[index];
      length += deleting ? -1 : 1;
      setText(phrase.slice(0, length));

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && length === phrase.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && length === 0) {
        deleting = false;
        index = (index + 1) % phrases.length;
        delay = typeMs * 4;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
  }, [phrases, typeMs, deleteMs, holdMs]);

  return text;
}
