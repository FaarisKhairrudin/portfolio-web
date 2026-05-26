import "./LogoLoop.css";

export default function LogoLoop({
  logos,
  speed = 30,
  logoHeight = 28,
  gap = 18,
  ariaLabel = "Technology logos",
}) {
  const loopItems = [...logos, ...logos];

  return (
    <div
      className="logo-loop"
      aria-label={ariaLabel}
      style={{
        "--logo-loop-duration": `${speed}s`,
        "--logo-loop-height": `${logoHeight}px`,
        "--logo-loop-gap": `${gap}px`,
      }}
    >
      <div className="logo-loop__track">
        <ul className="logo-loop__list">
          {loopItems.map((logo, index) => (
            <li className="logo-loop__item" key={`${logo.title}-${index}`} aria-hidden={index >= logos.length}>
              <span className="logo-chip" title={logo.title}>
                <img src={logo.src} alt="" loading="lazy" decoding="async" draggable="false" />
                <span>{logo.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
