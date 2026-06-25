import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../components/Projects/Projects.css";

const PROJECTS = [
  {
    //Project 1
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 2
  {
    title: "NOTED – Notes Provider System",
    description:
      "A comprehensive educational platform allowing students to upload, download notes, take interactive quizzes, and features a full admin dashboard.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    challenges:
      "Handling secure file uploads and designing a normalized database schema for the quiz system.",
    solution:
      "Built a custom PHP file handler with strict MIME type checking and designed relational tables with foreign key constraints.",
    github: "https://github.com/Rohit-walvekar/miniProject",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 3
  {
    title: "Weather Predictor",
    description:
      "A responsive web app that fetches real-time weather data based on user search or geolocation, providing accurate forecasts.",
    tech: ["React", "Weather API", "CSS"],
    challenges:
      "Handling async API calls gracefully and managing loading/error states for a smooth UX.",
    solution:
      "Utilized custom React hooks for data fetching and implemented skeleton loaders during network requests.",
    github: "https://github.com/Rohit-walvekar/weather-predictor",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 4
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 5
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 6
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 7
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 8
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  //Project 9
  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },

  {
    title: "Resumify – AI Resume Builder",
    description:
      "An intelligent resume builder that leverages the Gemini API to help users generate professional, tailored resumes with live preview functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI API"],
    challenges:
      "Integrating the Gemini API for reliable structured outputs and maintaining state across a complex multi-step form.",
    solution:
      "Implemented strict prompt engineering for JSON responses and used React Context API for global state management.",
    github: "https://github.com/Rohit-walvekar/AI-RESUME-BUILDER",
    // demo: '#',
    image: "/project-placeholder.jpg",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-label">03. What I've Built</div>

      <div className="projects-header">
        <h2>Selected Projects</h2>
        <div className="project-stats">
          <div className="stat-pill">
            <span className="stat-val">3</span>
            <span className="stat-lbl">Major Projects</span>
          </div>
          <div className="stat-pill">
            <span className="stat-val">20k+</span>
            <span className="stat-lbl">Lines of Code</span>
          </div>
        </div>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="project-card reveal">
            <div className="project-image-wrapper">
              <div className="project-image-placeholder">
                <span>{project.title.charAt(0)}</span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-insight">
                <div className="insight-block">
                  <strong>Challenge:</strong> {project.challenges}
                </div>
                <div className="insight-block">
                  <strong>Solution:</strong> {project.solution}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link
          to="/"
          className="btn-primary"
          style={{ display: "inline-block", textDecoration: "none" }}
        >
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
