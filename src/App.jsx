import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Mail,
  MapPin,
  Moon,
  PencilLine,
  RefreshCcw,
  Save,
  Sun,
  Trophy,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import BounceCards from "@/components/BounceCards/BounceCards.jsx";
import CountUp from "@/components/CountUp/CountUp.jsx";
import LogoLoop from "@/components/LogoLoop/LogoLoop.jsx";
import PillNav from "@/components/PillNav/PillNav.jsx";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal.jsx";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard.jsx";
import { portfolioData } from "./data/portfolio.js";

const STORAGE_KEY = "faaris-portfolio-data";

function normalizePortfolioData(data) {
  const metricDefaults = portfolioData.metrics.reduce((acc, metric) => {
    acc[metric.label] = metric;
    return acc;
  }, {});
  const projectDefaults = portfolioData.projects.reduce((acc, project) => {
    acc[project.title] = project;
    return acc;
  }, {});

  return {
    ...portfolioData,
    ...data,
    profile: { ...portfolioData.profile, ...data.profile },
    metrics: (data.metrics || portfolioData.metrics).map((metric) => ({
      ...metricDefaults[metric.label],
      ...metric,
    })),
    focusAreas: data.focusAreas || portfolioData.focusAreas,
    profileImages: portfolioData.profileImages,
    projects: portfolioData.projects.map((project) => {
      const savedProject = (data.projects || []).find((item) => item.title === project.title);
      return {
        ...project,
        ...savedProject,
        image: project.image,
        categories: project.categories,
      };
    }),
    experience: data.experience || portfolioData.experience,
    skills: data.skills || portfolioData.skills,
  };
}

function useEditablePortfolio() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? normalizePortfolioData(JSON.parse(saved)) : portfolioData;
    } catch {
      return portfolioData;
    }
  });

  const saveData = (nextData) => {
    setData(normalizePortfolioData(nextData));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));
  };

  const resetData = () => {
    setData(portfolioData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { data, saveData, resetData };
}

function Section({ eyebrow, title, children, className = "", id }) {
  return (
    <section id={id} className={`section ${className}`}>
      <ScrollReveal className="section__heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </ScrollReveal>
      {children}
    </section>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Header({ onAdmin, theme, onToggleTheme }) {
  const isDev = import.meta.env.DEV;
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header">
      <PillNav items={navItems} />

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {isDev ? (
          <button className="icon-button" type="button" onClick={onAdmin} aria-label="Open admin mode">
            <PencilLine size={16} />
          </button>
        ) : null}
      </div>
    </header>
  );
}

function Hero({ data }) {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const nameWords = data.profile.name.split(" ");

  const wordVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <main id="top" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div
        className="hero-glow"
        style={{ "--mx": mousePos.x, "--my": mousePos.y }}
        aria-hidden="true"
      />
      <div className="hero__content">
        <motion.div
          className="hero__kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          AI & Data Science Portfolio
        </motion.div>
        <h1>
          {nameWords.map((word, i) => (
            <motion.span
              className="word"
              key={word}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={wordVariants}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.profile.role}
        </motion.p>
        <motion.p
          className="hero__blurb"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.profile.headline}
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--ghost" href={data.profile.cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </motion.div>
        <motion.div
          className="hero__focus"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.focusAreas.slice(0, 4).map((area) => (
            <span key={area}>{area}</span>
          ))}
        </motion.div>
      </div>
      <motion.aside
        className="hero__photo-col"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img className="hero__photo" src={data.profile.image} alt={data.profile.name} />
      </motion.aside>
    </main>
  );
}

function Metrics({ metrics }) {
  const parseMetric = (value) => {
    const match = String(value).match(/(\d+(\.\d+)?)/);
    return match ? Number(match[1]) : null;
  };

  return (
    <section className="metrics" aria-label="Portfolio highlights">
      {metrics.map((item, index) => (
        <ScrollReveal as="div" className="metric" delay={index * 70} key={item.label}>
          <strong>
            {typeof item.countTo === "number" || parseMetric(item.value) !== null ? (
              <CountUp
                to={item.countTo ?? parseMetric(item.value)}
                duration={2.1}
                prefix={item.prefix || ""}
                suffix={item.suffix || ""}
              />
            ) : (
              item.value
            )}
          </strong>
          <span>{item.label}</span>
        </ScrollReveal>
      ))}
    </section>
  );
}

function About({ data }) {
  return (
    <Section eyebrow="About" title="Built through competitions, research, and production systems.">
      <div className="about-layout">
        <div className="about-copy">
          <ScrollReveal as="p">
            I build AI that ships. Models connected to data pipelines, dashboards, APIs, and
            decision workflows, shaped by national competitions, research projects, and Big
            Data Lab leadership at Telkom University.
          </ScrollReveal>
          <div className="focus-grid">
            {data.focusAreas.map((area, index) => (
              <ScrollReveal as="span" className="pill-reveal" delay={index * 45} key={area}>
                <Pill>{area}</Pill>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal className="profile-moments" delay={120}>
          <BounceCards
            className="profile-bounceCards"
            images={data.profileImages || []}
            containerWidth={500}
            containerHeight={250}
            animationDelay={0.2}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={[
              "rotate(5deg) translate(-150px)",
              "rotate(0deg) translate(-70px)",
              "rotate(-5deg)",
              "rotate(5deg) translate(70px)",
              "rotate(-5deg) translate(150px)",
            ]}
            enableHover
          />
        </ScrollReveal>
      </div>
    </Section>
  );
}

function Projects({ projects }) {
  const projectGroups = ["Featured", "AI & Deep Learning", "Forecasting & Machine Learning", "Data & Automation"];
  const [activeGroup, setActiveGroup] = useState(projectGroups[0]);
  const projectsForGroup = projects.filter((project) => (project.categories || ["Featured"]).includes(activeGroup));
  const visibleProjects = projectsForGroup.slice(0, 6);

  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects with proof of depth." className="section--wide">
      <ScrollReveal className="project-tabs" y={12}>
        {projectGroups.map((group) => (
          <button
            className={`project-tab ${group === "Featured" ? "is-featured" : ""} ${activeGroup === group ? "is-active" : ""}`}
            type="button"
            onClick={() => setActiveGroup(group)}
            key={group}
          >
            <span>{group === "Featured" ? "★ Featured" : group}</span>
            <small>{Math.min(projects.filter((project) => (project.categories || ["Featured"]).includes(group)).length, 6)}</small>
          </button>
        ))}
      </ScrollReveal>

      <div className="project-grid" key={activeGroup}>
        {visibleProjects.map((project, index) => (
            <ScrollReveal className="project-reveal" delay={100 + index * 80} duration={800} y={28} key={project.title}>
            <SpotlightCard className="project-card" spotlightColor="rgba(16, 185, 129, 0.14)">
              {project.image ? (
                <div className="project-card__media">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />
                </div>
              ) : null}
              <div className="project-card__top">
                <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-card__type">{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-card__badge">{project.badge}</p>
              <p>{project.description}</p>
              <div className="project-card__stack">
                <span className="project-card__stack-label">Stack</span>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              {project.link ? (
                <a className="repo-link" href={project.link} target="_blank" rel="noreferrer">
                  <GithubIcon />
                  View Details on GitHub
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="repo-link repo-link--muted" aria-disabled="true">
                  <GithubIcon />
                  Repository unavailable
                </span>
              )}
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal className="projects-cta">
        <a
          className="projects-cta__link"
          href="https://github.com/FaarisKhairrudin"
          target="_blank"
          rel="noreferrer"
        >
          <span>More projects on</span>
          <GithubIcon />
        </a>
      </ScrollReveal>
    </Section>
  );
}

function GithubIcon() {
  return (
    <svg className="github-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 7c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function Experience({ experience }) {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleTop = Math.max(0, -rect.top);
          const totalHeight = rect.height;
          const visibleHeight = windowHeight - rect.top;
          const pct = Math.min(1, Math.max(0, (visibleTop + visibleHeight * 0.5) / totalHeight));
          setProgress(pct);
        }
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    observer.observe(el);

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleTop = Math.max(0, -rect.top);
      const totalHeight = rect.height;
      const visibleHeight = windowHeight - rect.top;
      const pct = Math.min(1, Math.max(0, (visibleTop + visibleHeight * 0.5) / totalHeight));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section id="experience" eyebrow="Experience" title="Academic, research, and leadership.">
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-progress" style={{ '--progress': progress }} />
        {experience.map((item, index) => (
          <ScrollReveal
            as="article"
            className="timeline-item"
            delay={index * 100}
            key={`${item.title}-${item.period}`}
          >
            <div className="timeline-item__marker" />
            <div>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-item__org">{item.org}</p>
              <p>{item.details}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

function Skills({ skills, techLogos }) {
  return (
    <Section id="skills" eyebrow="Stack" title="Tools I reach for daily.">
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], index) => (
          <ScrollReveal as="article" className="skill-card" delay={100 + index * 80} key={group}>
            <div className="skill-card__icon">
              <Code2 size={20} />
            </div>
            <h3>{group}</h3>
            <div className="stack-list">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal className="logo-loop-panel">
        <LogoLoop logos={techLogos} speed={34} logoHeight={26} gap={14} />
      </ScrollReveal>
    </Section>
  );
}

function Contact({ data }) {
  return (
    <ScrollReveal as="section" id="contact" className="contact">
      <div className="contact__copy">
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s build something together.</h2>
        <p>
          Open for AI projects, research collaborations, competition teams, and data science
          opportunities.
        </p>
      </div>
      <div className="contact__actions">
        <a className="contact-link contact-link--primary" href={`mailto:${data.profile.email}`}>
          <span className="contact-link__icon">
            <Mail size={18} />
          </span>
          <span>
            <strong>Email</strong>
            <small>{data.profile.email}</small>
          </span>
        </a>
        <a className="contact-link" href={data.profile.github} target="_blank" rel="noreferrer">
          <span className="contact-link__icon">
            <GithubIcon />
          </span>
          <span>
            <strong>GitHub</strong>
            <small>Explore repositories</small>
          </span>
        </a>
        <a className="contact-link" href={data.profile.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-link__icon">
            <BriefcaseBusiness size={18} />
          </span>
          <span>
            <strong>LinkedIn</strong>
            <small>Connect professionally</small>
          </span>
        </a>
      </div>
      <div className="contact__meta">
        <span>
          <MapPin size={16} />
          {data.profile.location}
        </span>
        <span>
          <Trophy size={16} />
          4th Place National Winner - Satria Data 2025
        </span>
      </div>
    </ScrollReveal>
  );
}

function AdminPanel({ data, onClose, onSave, onReset }) {
  const [draft, setDraft] = useState(() => JSON.stringify(data, null, 2));
  const [status, setStatus] = useState("");

  const isValidJson = useMemo(() => {
    try {
      JSON.parse(draft);
      return true;
    } catch {
      return false;
    }
  }, [draft]);

  const save = () => {
    try {
      onSave(JSON.parse(draft));
      setStatus("Saved to this browser.");
    } catch {
      setStatus("Invalid JSON.");
    }
  };

  const reset = () => {
    onReset();
    setDraft(JSON.stringify(portfolioData, null, 2));
    setStatus("Restored default content.");
  };

  return (
    <div className="admin-drawer" role="dialog" aria-modal="true" aria-label="Admin mode">
      <div className="admin-drawer__header">
        <div>
          <span className="eyebrow">Admin Mode</span>
          <h2>Portfolio content</h2>
        </div>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close admin mode">
          <X size={18} />
        </button>
      </div>
      <textarea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        spellCheck="false"
        aria-label="Portfolio JSON content"
      />
      <div className="admin-drawer__footer">
        <div className={isValidJson ? "admin-status admin-status--ok" : "admin-status"}>
          {isValidJson ? <Check size={16} /> : <X size={16} />}
          {status || (isValidJson ? "Valid JSON" : "Invalid JSON")}
        </div>
        <div className="admin-drawer__actions">
          <button className="button button--ghost" type="button" onClick={reset}>
            <RefreshCcw size={18} />
            Reset
          </button>
          <button className="button button--primary" type="button" onClick={save} disabled={!isValidJson}>
            <Save size={18} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { data, saveData, resetData } = useEditablePortfolio();
  const [adminOpen, setAdminOpen] = useState(false);
  const isDev = import.meta.env.DEV;

  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("faaris-theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch {}
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return "light";
    return "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try { localStorage.setItem("faaris-theme", next); } catch {}
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header onAdmin={() => setAdminOpen(true)} theme={theme} onToggleTheme={toggleTheme} />
      <Hero data={data} />
      <Metrics metrics={data.metrics} />
      <About data={data} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} techLogos={data.techLogos || portfolioData.techLogos} />
      <Contact data={data} />
      <footer className="footer">AI systems, research stories, and competition proof - built by Faaris Khairrudin.</footer>
      {isDev && adminOpen ? (
        <AdminPanel
          data={data}
          onClose={() => setAdminOpen(false)}
          onSave={saveData}
          onReset={resetData}
        />
      ) : null}
    </>
  );
}
