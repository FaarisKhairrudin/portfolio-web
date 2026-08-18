import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import GithubIcon from "@/components/GithubIcon/GithubIcon.jsx";
import "./ProjectModal.css";

function StarBlock({ label, children, accent = false }) {
  return (
    <div className={`project-modal__block${accent ? " project-modal__block--accent" : ""}`}>
      <span className="project-modal__label">{label}</span>
      {children}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        className="project-modal__panel"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="project-modal__close" type="button" onClick={onClose} aria-label="Close project story">
          <X size={18} />
        </button>

        {project.image ? (
          <div className="project-modal__media">
            <img src={project.image} alt={`${project.title} preview`} />
          </div>
        ) : null}

        <div className="project-modal__body">
          <span className="project-modal__badge">{project.badge}</span>
          <h3>{project.title}</h3>
          {project.summary ? <p className="project-modal__summary">{project.summary}</p> : null}

          {project.star ? (
            <div className="project-modal__story">
              <StarBlock label="Situation">{project.star.situation}</StarBlock>
              <StarBlock label="Task">{project.star.task}</StarBlock>
              <StarBlock label="Action">
                <ul>
                  {project.star.action.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </StarBlock>
              <StarBlock label="Result" accent>
                {project.star.result}
              </StarBlock>
            </div>
          ) : null}

          {project.stack?.length ? (
            <div className="project-modal__stack">
              <span className="project-modal__label">Stack</span>
              <div className="stack-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ) : null}

          {project.link ? (
            <a className="repo-link" href={project.link} target="_blank" rel="noreferrer">
              <GithubIcon />
              View Code on GitHub
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="repo-link repo-link--muted" aria-disabled="true">
              <GithubIcon />
              Repository unavailable
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
