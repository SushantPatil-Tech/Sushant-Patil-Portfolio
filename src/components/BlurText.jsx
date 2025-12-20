import { useEffect, useRef, useState } from "react";

export default function BlurText({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words",
  threshold = 0.2,
  rootMargin = "0px",
  onAnimationComplete,
}) {
  const items = animateBy === "words" ? text.split(" ") : text.split("");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-700 ease-out ${
            visible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          }`}
          style={{ transitionDelay: `${i * delay}ms` }}
          onTransitionEnd={
            i === items.length - 1 ? onAnimationComplete : undefined
          }
        >
          {item}
          {animateBy === "words" && i !== items.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
