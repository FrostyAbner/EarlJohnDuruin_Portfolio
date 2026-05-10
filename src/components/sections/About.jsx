import { INFO_CARDS } from "../../data/portfolioData";

export default function About() {
  return (
    <section id="about" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">01</span>
          <span className="section-label-line" />
          <span className="section-label-text">About</span>
        </div>

        <div className="about-layout">
          <div className="about-text">
            <h2 className="section-title">
              Crafting code<br />
              <span className="accent">with intent.</span>
            </h2>
            <p>
              Hi, I'm <strong>Earl John Duruin</strong> — a software developer with a strong
              foundation in programming and software development principles. I enjoy building
              clean, efficient, and scalable applications.
            </p>
            <p>
              Currently pursuing BS Information Technology at STI College Lucena (2026),
              with hands-on experience across web frontends, backend logic, and database design.
            </p>
            <div className="about-download">
              <a href="assets/Earl_John_Duruin_CV.pdf" download className="btn-primary">
                Download Résumé ↓
              </a>
            </div>
          </div>

          <div>
            <div className="info-grid">
              {INFO_CARDS.map((card, i) => (
                <div key={i} className={`info-cell${card.span ? " span2" : ""}`}>
                  <small>{card.label}</small>
                  <h4>
                    {card.isEmail
                      ? <a href={`mailto:${card.value}`}>{card.value}</a>
                      : card.value}
                  </h4>
                </div>
              ))}
            </div>
            <div className="stat-row">
              <div className="stat-label">Years Coding</div>
              <div className="stat-num">4+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
