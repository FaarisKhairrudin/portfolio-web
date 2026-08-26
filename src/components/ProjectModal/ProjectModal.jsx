import { useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
    opacity: 0.3,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0,
    opacity: 0.3,
  }),
};

const slideTransition = {
  x: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
  opacity: { duration: 0.18, ease: "linear" },
};

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : []);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
    setIsLightboxOpen(false);
  }, [project]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (images.length > 1) {
        if (event.key === "ArrowLeft") {
          paginate(-1);
        } else if (event.key === "ArrowRight") {
          paginate(1);
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, isLightboxOpen, images.length, currentIndex]);

  const handlePrev = (event) => {
    event.stopPropagation();
    paginate(-1);
  };

  const handleNext = (event) => {
    event.stopPropagation();
    paginate(1);
  };

  return (
    <>
      <motion.div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          className="project-modal__panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="project-modal__close" type="button" onClick={onClose} aria-label="Close project story">
            <X size={18} />
          </button>

          {images.length > 0 ? (
            <div className="project-modal__media-wrapper">
              <div
                className="project-modal__media project-modal__media--interactive"
                onClick={() => setIsLightboxOpen(true)}
                title="Click to expand full image"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt={`${project.title} preview ${currentIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                  />
                </AnimatePresence>

                <button
                  type="button"
                  className="project-modal__zoom-badge"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  aria-label="View larger image"
                >
                  <Maximize2 size={13} />
                  <span>Enlarge</span>
                </button>
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    className="project-modal__nav-btn project-modal__nav-btn--prev"
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="project-modal__nav-btn project-modal__nav-btn--next"
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div className="project-modal__carousel-bar">
                    <div className="project-modal__dots">
                      {images.map((img, idx) => (
                        <button
                          key={img || idx}
                          type="button"
                          className={`project-modal__dot ${idx === currentIndex ? "is-active" : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(idx);
                          }}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="project-modal__counter">
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                </>
              ) : null}
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

          <div className="project-modal__actions">
            {project.demo ? (
              <a className="repo-link" href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} />
                View Live Dashboard
                <ArrowUpRight size={16} />
              </a>
            ) : null}
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
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Lightbox Fullscreen Preview */}
    <AnimatePresence>
      {isLightboxOpen && images.length > 0 ? (
        <motion.div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="project-lightbox__close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            aria-label="Close enlarged view"
          >
            <X size={22} />
          </button>

          <div className="project-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`${project.title} expanded preview ${currentIndex + 1}`}
                className="project-lightbox__img"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>

          {images.length > 1 ? (
            <>
              <button
                className="project-lightbox__nav-btn project-lightbox__nav-btn--prev"
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="project-lightbox__nav-btn project-lightbox__nav-btn--next"
                type="button"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>

              <div className="project-lightbox__footer">
                <div className="project-modal__dots">
                  {images.map((img, idx) => (
                    <button
                      key={img || idx}
                      type="button"
                      className={`project-modal__dot ${idx === currentIndex ? "is-active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="project-modal__counter">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  </>
  );
}
