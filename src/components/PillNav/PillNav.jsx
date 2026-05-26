import "./PillNav.css";

export default function PillNav({ items }) {
  return (
    <nav className="pill-nav-root" aria-label="Primary navigation">
      <a className="pill-nav-logo" href="#top" aria-label="Faaris Khairrudin home">
        <span>FK</span>
      </a>
      <ul className="pill-nav-list">
        {items.map((item) => (
          <li key={item.href}>
            <a className="pill-nav-link" href={item.href}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
