import { PROJECTS } from "../../data/portfolioData";

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">04</span>
          <span className="section-label-line" />
          <span className="section-label-text">Projects</span>
        </div>

        <h2 className="section-title">Selected work<span className="accent">.</span></h2>
        <p className="section-sub">A handful of projects I'm proud of — ranging from production apps to experimental builds.</p>

        {featured && (
          <div className="project-featured">
            <div className="project-feat-label">01 / Featured</div>
            {featured.link && (
              <a href={featured.link} target="_blank" rel="noreferrer" className="project-link-icon">↗</a>
            )}
            <h3>{featured.title}</h3>
            <div className="project-subtitle">Educational Platform</div>
            <p>{featured.desc}</p>
            <div className="tag-row">
              {featured.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        )}

        <div className="projects-sub-grid">
          {rest.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-num">
                <span>0{i + 2}</span>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "var(--muted)", textDecoration: "none" }}>↗</a>}
              </div>
              <h3>{p.title}</h3>
              <div className="project-subtitle-sm">E-Commerce Platform</div>
              <p>{p.desc}</p>
              <div className="tag-row" style={{ marginBottom: "12px" }}>
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="project-card-link">VIEW PROJECT →</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
