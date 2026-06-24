import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Building responsive, accessible, and fast web interfaces using React, JavaScript, HTML, and CSS.",
    btnLabel: "View Projects",
    isPrimary: true,
  },
  {
    title: "Backend Engineering",
    desc: "Creating robust RESTful APIs and managing data with Node.js, Express, PHP, and MongoDB/MySQL.",
    btnLabel: "Read More",
    isPrimary: false,
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-label">01. Who I am</div>
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-text-column reveal">
          <p className="about-lead">
            Hello! I'm a passionate <strong>BCA graduate</strong> with a strong
            foundation in modern web development. My journey started with
            curiosity about how the web works, which quickly evolved into a
            drive to build scalable, user-centric applications.
          </p>
          <p>
            My expertise lies in the <strong>MERN Stack</strong> (MongoDB,
            Express, React, Node.js), along with solid experience in PHP and
            MySQL. I enjoy working across the entire stack—from designing
            intuitive user interfaces to architecting robust backend APIs.
          </p>
          <p>
            I'm constantly learning and building. Whether it's integrating AI
            APIs like Gemini or optimizing database queries, I strive to write
            clean, efficient, and maintainable code.
          </p>
          <a href="#contact" className="btn-primary mt-4">
            Let's Talk
          </a>
        </div>

        <div className="about-cards-column reveal">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className={`service-card ${srv.isPrimary ? "primary-card" : "secondary-card"}`}
            >
              <div className="service-header">
                <div className="service-icon">
                  {idx === 0 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  )}
                </div>
                <div className="service-dot"></div>
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
              <div className="service-footer">
                <button
                  className={`service-btn ${srv.isPrimary ? "btn-solid" : "btn-ghost"}`}
                >
                  {srv.btnLabel}
                </button>
                <div className="service-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
