import { SKILLS } from "../../data/portfolioData";

const SKILL_CATS = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 62 },
      { name: "React", level: 40 },
      { name: "Tailwind CSS", level: 50 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP", level: 60 },
      { name: "C#", level: 35 },
      { name: "Java", level: 78 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    label: "Tools & DB",
    items: [
      { name: "MySQL", level: 50 },
      { name: "phpMyAdmin", level: 70 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Git", level: 78 },
    ],
  },
  {
    label: "Other",
    items: [
      { name: "Bootstrap", level: 45 },
      { name: "ASP.NET", level: 40 },
      { name: "OOP", level: 70 },
      { name: "REST APIs", level: 50 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">02</span>
          <span className="section-label-line" />
          <span className="section-label-text">Skills</span>
        </div>

        <h2 className="section-title">
          Tech I work with<span className="accent">.</span>
        </h2>

        <p className="section-sub">
          A curated toolkit refined through real-world projects and continuous learning.
        </p>

        <div className="skills-cats">
          {SKILL_CATS.map((cat) => (
            <div className="skill-cat" key={cat.label}>
              <div className="skill-cat-label">{cat.label}</div>

              <div className="skill-progress-list">
                {cat.items.map((skill) => (
                  <div className="skill-progress-item" key={skill.name}>
                    <div className="skill-progress-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}