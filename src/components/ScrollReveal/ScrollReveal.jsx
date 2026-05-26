import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  duration = 650,
  y = 18,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        "--scroll-reveal-delay": `${delay}ms`,
        "--scroll-reveal-duration": `${duration}ms`,
        "--scroll-reveal-y": `${y}px`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
