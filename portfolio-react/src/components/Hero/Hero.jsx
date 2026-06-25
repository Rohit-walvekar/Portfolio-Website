import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">Available for opportunities</div>
          <h1>
            Rohit
            <br />
            <span className="hero-accent">Walvekar</span>
          </h1>
          <div className="hero-sub">
            Frontend Developer | MERN Stack Enthusiast
            <br />
            <br />I build fast, responsive web applications with a focus on
            clean code and exceptional user experiences using React, JavaScript,
            and Full Stack technologies.
          </div>
          <div className="hero-ctas">
            <a
              href="/RohitChandrakantWalvekarResume.pdf"
              download="RohitChandrakantWalvekarResume.pdf"
              className="btn-primary"
              target="_blank"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Rohit-walvekar"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FontAwesomeIcon icon={faGithub} size="1.5x" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-walvekar/"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="1.5x" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">developer.json</span>
            </div>
            <pre className="code-body">
              <code>
                {`{
  "name": "Rohit Walvekar",
  "role": "Frontend Developer",
  "skills": [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "MySQL"
  ],
  "passionateAbout": [
    "Clean UI/UX",
    "Web Performance",
    "Scalable Architecture"
  ]
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
