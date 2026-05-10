import { useState } from "react";
import { CONTACT_CHIPS, SOCIALS } from "../../data/portfolioData";

const SOCIAL_LINKS = [
  { icon: "FB", label: "Facebook", href: "https://www.facebook.com/earl.john.duruin" },
  { icon: "IG", label: "Instagram", href: "https://www.instagram.com/edjieey/" },
  { icon: "LI", label: "LinkedIn", href: "linkedin.com/in/earl-john-lauren-duruin-37574a408" },
  { icon: "✉", label: "Email", href: "mailto:earljohnlaurenfranciaduruin@gmail.com" },
  { icon: "GH", label: "GitHub", href: "https://github.com/FrostyAbner" },
  { icon: "📞", label: "Phone", href: "tel:+639381657398" },
];

export default function Contact() {
  const [btnState, setBtnState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState("sending");
    setTimeout(() => {
      setBtnState("sent");
      e.target.reset();
      setTimeout(() => setBtnState("idle"), 3500);
    }, 1500);
  };

  const btnLabel = { idle: "Send Message →", sending: "Sending…", sent: "✓ Message Sent!", error: "Error — try again" }[btnState];
  const btnStyle = btnState === "sent" ? { background: "#4ade80", color: "#0b0f0b" } : btnState === "error" ? { background: "#dc2626" } : {};

  return (
    <section id="contact" data-reveal>
      <div className="section-inner">
        <div className="section-label">
          <span className="section-num">06</span>
          <span className="section-label-line" />
          <span className="section-label-text">Contact</span>
        </div>

        <div className="contact-layout">
          <div>
            <h2 className="section-title">
              Let's build<br />
              <span className="accent">something great.</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              I'm currently open to new opportunities, freelance projects, and
              collaborations. If you have a project in mind or just want to say
              hello — my inbox is always open.
            </p>

            <div className="contact-socials">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-social-btn">
                  <span className="cs-icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea placeholder="Tell me about your project…" required />
              </div>
              <button type="submit" className="submit-btn" disabled={btnState === "sending" || btnState === "sent"} style={btnStyle}>
                {btnLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
