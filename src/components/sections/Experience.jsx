import { EXPERIENCE } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">03</span>
          <span className="section-label-line" />
          <span className="section-label-text">Experience</span>
        </div>

        <h2 className="section-title">Where I've<br /><span className="accent">worked.</span></h2>
        <p className="section-sub">Hands-on experience building real products.</p>

        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div className="exp-card" key={i}>
              <div className="exp-left">
                <div className="exp-dot" />
                {i < EXPERIENCE.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="tag-row">
                  {exp.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
