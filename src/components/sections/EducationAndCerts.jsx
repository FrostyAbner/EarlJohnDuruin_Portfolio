import { EDUCATION, CERTIFICATIONS } from "../../data/portfolioData";
import Timeline from "../ui/Timeline";


export default function EducationAndCerts() {
  return (
    <section id="education" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">05</span>
          <span className="section-label-line" />
          <span className="section-label-text">Background</span>
        </div>

        <div className="two-col">
          <div>
            <h2 className="section-title">Education<span className="accent">.</span></h2>
            <Timeline items={EDUCATION} labelField="period" />
          </div>
          <div id="certification">
            <h2 className="section-title">Certifications<span className="accent">.</span></h2>
            <Timeline items={CERTIFICATIONS} labelField={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
