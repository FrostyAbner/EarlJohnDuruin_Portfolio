import { SOCIALS } from "../../data/portfolioData";

export default function Hero({ scrollTo }) {
  return (
    <div id="home" className="hero">
      <div className="hero-eyebrow">Software Developer</div>

      <h1 className="hero-name">
        Earl John<br />
        Durui<span className="accent">n</span>
      </h1>

      <div className="hero-role">
        <span className="role-dot" />
        Full-Stack Developer · Creative Technologist
      </div>

      <p className="hero-desc">
        Building digital experiences at the intersection of clean code and
        thoughtful design. Passionate about crafting software that is both
        functional and beautiful.
      </p>

      <div className="hero-btns">
        <a
          href="#projects"
          className="btn-primary"
          onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
        >
          View Work →
        </a>
        <a
          href="#contact"
          className="btn-ghost"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
