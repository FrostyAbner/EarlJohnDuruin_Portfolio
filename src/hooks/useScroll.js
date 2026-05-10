import { useState, useEffect } from "react";
import { SECTIONS } from "../data/portfolioData";

/**
 * useScroll — tracks scrollY, active section, progress bar %, and
 * triggers section reveal animations.
 */
export function useScroll() {
  const [scrollY, setScrollY]               = useState(0);
  const [activeSection, setActiveSection]   = useState("home");
  const [progress, setProgress]             = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(total ? (sy / total) * 100 : 0);

      let current = "home";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && sy >= el.offsetTop - 200) current = id;
      });
      setActiveSection(current);

      document.querySelectorAll("section[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Smooth-scroll to a section by id and close mobile menu. */
  const scrollTo = (id, onBeforeScroll) => {
    if (typeof onBeforeScroll === "function") onBeforeScroll();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollY, activeSection, progress, scrollTo };
}

/**
 * useTheme — toggles light/dark mode on <body>.
 */
export function useTheme() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  return { light, setLight };
}
