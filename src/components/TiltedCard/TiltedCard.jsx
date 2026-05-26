import { motion, useMotionValue, useSpring } from "motion/react";
import "./TiltedCard.css";

const springValues = {
  damping: 32,
  stiffness: 120,
  mass: 1.6,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  rotateAmplitude = 6,
  scaleOnHover = 1.015,
  className = "",
  children,
}) {
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <figure
      className={`tilted-card-figure ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children || <img src={imageSrc} alt={altText} className="tilted-card-img" />}
      </motion.div>
    </figure>
  );
}
