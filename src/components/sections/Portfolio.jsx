import { useState, useEffect, useRef } from "react";
import { useScroll, useTheme } from "../../hooks/useScroll";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import EducationAndCerts from "./EducationAndCerts";
import Contact from "./Contact";

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    let stars = [];
    let comets = [];
    let gridOffset = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();

      const STAR_COUNT = 7000; // 👈 increase density

        stars = Array.from({ length: STAR_COUNT }, () => {
          const angle = Math.random() * Math.PI * 2;

          // better distribution (more stars toward outer space)
          const radius =
            Math.pow(Math.random(), 0.7) *
            Math.max(window.innerWidth, window.innerHeight);

          const depth = Math.random();

          return {
            angle,
            radius,

            r: depth * 1.4 + 0.15, // slightly smaller to avoid clutter
            alpha: Math.random() * 0.6 + 0.1,

            speed: 0.0004 + depth * 0.00012, // slightly slower for smoothness
            twinkleSpeed: Math.random() * 0.09 + 0.005,
            twinkleDir: Math.random() > 0.5 ? 1 : -1,

            depth,
          };
        });

      comets = [];
    };

    const spawnComet = () => {
      const isBig = Math.random() < 0.4;

      let x, y;
      if (Math.random() < 0.5) {
        x = Math.random() * window.innerWidth;
        y = -80;
      } else {
        x = -80;
        y = Math.random() * window.innerHeight * 0.6;
      }

      const angle = Math.PI / 4 + Math.random() * 0.6;

      const speed = isBig
        ? Math.random() * 2 + 2
        : Math.random() * 4 + 4;

      comets.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: isBig
          ? Math.random() * 400 + 300
          : Math.random() * 180 + 120,
        size: isBig ? 8 : 1.5,
        life: 0,
        maxLife: isBig
          ? 200 + Math.random() * 80
          : 100 + Math.random() * 50,
      });
    };

    const easeInOut = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const drawHorizonGrid = (isLight) => {
      if (!isLight) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      const horizonY = h * 0.68;
      const vanishingX = w / 2;

      ctx.save();

      gridOffset += 0.6;

      // 🔥 GRID STYLE
      ctx.strokeStyle = "rgba(0,0,0,0.63)";
      ctx.lineWidth = 1.5;

      const depthLines = 50;
      const maxDepth = h * 2;

      // --- HORIZONTAL LINES (depth compression)
      for (let i = 0; i < depthLines; i++) {
        const t = (i + gridOffset * 0.02) / depthLines;

        // exponential perspective curve
        const y = horizonY + Math.pow(t, 2.2) * maxDepth;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // --- VERTICAL LINES (true convergence)
      const cols = 18;

      for (let i = -cols; i <= cols; i++) {
        const startX = vanishingX + i * 90;

        ctx.beginPath();
        ctx.moveTo(startX, h);
        ctx.lineTo(vanishingX, horizonY);
        ctx.stroke();
      }

      ctx.restore();

      // 🔥 SMOOTH FADE (very important)
      const fade = ctx.createLinearGradient(0, horizonY, 0, h);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(0.25, "rgba(0,0,0,0.5)");
      fade.addColorStop(1, "rgba(0,0,0,1)");

      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = fade;
      ctx.fillRect(0, horizonY, w, h - horizonY);
      ctx.globalCompositeOperation = "source-over";
    };
    
    let globalRotation = 540;
    const drawStars = (isLight) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      stars.forEach((s) => {
        // orbit motion
        s.angle += s.speed;

        const x = cx + Math.cos(s.angle) * s.radius;
        const y = cy + Math.sin(s.angle) * s.radius;

        // twinkle
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha > 1 || s.alpha < 5) s.twinkleDir *= -1;

        const lime = isLight ? "120,180,120" : "200,241,53";
        const white = isLight ? "80,90,85" : "240,244,240";

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${lime},${s.alpha * 0.25})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, s.r * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${white},${s.alpha})`;
        ctx.fill();
      });
    };

    const drawComets = (isLight) => {
      comets.forEach((c, i) => {
        c.life++;

        const t = c.life / c.maxLife;
        const eased = easeInOut(t);

        const vx = c.vx * eased;
        const vy = c.vy * eased;

        c.x += vx;
        c.y += vy;

        const alpha = 1 - t;

        ctx.shadowBlur = 25;
        ctx.shadowColor = isLight
          ? "rgba(120,180,120,0.6)"
          : "rgba(200,241,53,0.8)";

        const grad = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - vx * c.len,
          c.y - vy * c.len
        );

        grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
        grad.addColorStop(0.25, `rgba(200,241,53,${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(200,241,53,0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = c.size;
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - vx * c.len, c.y - vy * c.len);
        ctx.stroke();

        ctx.shadowBlur = 0;

        if (c.life > c.maxLife) {
          comets.splice(i, 1);
        }
      });
    };

    const draw = () => {
      const isLight = document.body.classList.contains("light");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawHorizonGrid(isLight);

      // 🔥 rotate ONCE around center
      globalRotation += 0.0003;

      ctx.save();
      ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
      ctx.rotate(globalRotation);
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2);

      drawStars(isLight); // 👈 ONLY DRAW HERE

      ctx.restore();

      drawComets(isLight);

      if (Math.random() < 0.05) spawnComet();

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="starfield" />;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { light, setLight } = useTheme();
  const { scrollY, activeSection, progress, scrollTo } = useScroll();

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <div className="prog-bar" style={{ width: `${progress}%` }} />

      <div className="nebula" />
      <Starfield />

      <Navbar
        scrollY={scrollY}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        light={light}
        setLight={setLight}
        scrollTo={handleScrollTo}
      />

      <Hero scrollTo={handleScrollTo} />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <EducationAndCerts />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}