import { forwardRef, useRef } from "react";
import "./SpotlightCard.css";

const SpotlightCard = forwardRef(function SpotlightCard(
  { children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)", ...props },
  forwardedRef
) {
  const divRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const setRefs = (node) => {
    divRef.current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  return (
    <div
      ref={setRefs}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export default SpotlightCard;
