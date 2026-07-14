import { useEffect, useRef } from "react";

/** Wraps each word in a span and reveals them with a staggered clip animation on scroll. */
export default function SplitReveal({ text, as: Tag = "span", className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag className={`reveal-line ${className}`} ref={ref}>
      {words.map((w, i) => (
        <span
          className="reveal-word"
          key={i}
          style={{ transitionDelay: `${delay + i * 0.05}s` }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
