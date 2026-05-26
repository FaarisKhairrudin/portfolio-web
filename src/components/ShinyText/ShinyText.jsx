import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import "./ShinyText.css";

export default function ShinyText({
  text,
  disabled = false,
  speed = 3.8,
  className = "",
  color = "#6ff0c6",
  shineColor = "#ffffff",
  spread = 120,
  direction = "left",
  delay = 1.2,
}) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === "left" ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame((time) => {
    if (disabled) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    const cycleDuration = animationDuration + delayDuration;
    const cycleTime = elapsedRef.current % cycleDuration;

    if (cycleTime < animationDuration) {
      const p = (cycleTime / animationDuration) * 100;
      progress.set(directionRef.current === 1 ? p : 100 - p);
    } else {
      progress.set(directionRef.current === 1 ? 100 : 0);
    }
  });

  useEffect(() => {
    directionRef.current = direction === "left" ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
  }, [direction, progress]);

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  return (
    <motion.span
      className={`shiny-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 38%, ${shineColor} 50%, ${color} 62%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}
