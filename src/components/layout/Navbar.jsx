import { SECTIONS } from "../../data/portfolioData";
import { useEffect } from "react";

export default function Navbar({ scrollY, activeSection, menuOpen, setMenuOpen, light, setLight, scrollTo }) {

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setLight(saved === "light");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <>
      <nav className={scrollY > 30 ? "compact" : ""}>
        <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
          <span className="logo-dot" />
          E.J.D.
        </a>

        <ul className="nav-links">
          {SECTIONS.filter(s => ["about","skills","experience","projects","education","certification","contact"].includes(s)).map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={activeSection === s ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollTo(s); }}
              >
                {s.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="theme-btn" onClick={() => setLight(!light)} title="Toggle theme">
            {light ? "🌙" : "☀️"}
          </button>
          <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {SECTIONS.map((s) => (
          <a key={s} href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); setMenuOpen(false); }}>
            {s.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
}