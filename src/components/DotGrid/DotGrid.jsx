import { useEffect, useMemo, useRef } from "react";
import "./DotGrid.css";

function hexToRgb(hex) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return { r: 255, g: 255, b: 255 };
  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
}

function mixColor(base, active, amount) {
  const r = Math.round(base.r + (active.r - base.r) * amount);
  const g = Math.round(base.g + (active.g - base.g) * amount);
  const b = Math.round(base.b + (active.b - base.b) * amount);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function DotGrid({
  dotSize = 2.2,
  gap = 30,
  baseColor = "#214044",
  activeColor = "#55d7ff",
  proximity = 115,
  opacity = 0.72,
  className = "",
}) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const colors = useMemo(
    () => ({
      base: hexToRgb(baseColor),
      active: hexToRgb(activeColor),
    }),
    [activeColor, baseColor]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let frameId = 0;
    let dots = [];

    const buildGrid = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cell = dotSize + gap;
      const cols = Math.ceil(rect.width / cell) + 2;
      const rows = Math.ceil(rect.height / cell) + 2;
      const offsetX = (rect.width - (cols - 1) * cell) / 2;
      const offsetY = (rect.height - (rows - 1) * cell) / 2;

      dots = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          dots.push({
            x: offsetX + col * cell,
            y: offsetY + row * cell,
          });
        }
      }
    };

    const draw = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.globalAlpha = opacity;

      for (const dot of dots) {
        const dx = dot.x - pointerRef.current.x;
        const dy = dot.y - pointerRef.current.y;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / proximity);
        const radius = dotSize + influence * 1.8;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = mixColor(colors.base, colors.active, influence);
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const onLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
    };

    buildGrid();
    draw();

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(canvas.parentElement);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("blur", onLeave);
    };
  }, [colors, dotSize, gap, opacity, proximity]);

  return (
    <div className={`dot-grid ${className}`}>
      <canvas ref={canvasRef} className="dot-grid__canvas" />
    </div>
  );
}
