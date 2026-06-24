import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Experience.css";

const EXPERIENCES = [
  {
    role: "Web Development Intern",
    org: "Cognifyz Technologies",
    date: "Jan 2026 — Present",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript while following modern UI/UX principles.",
      "Completed assigned development tasks involving front-end design, responsive layouts, and interactive web components.",
      "Strengthened practical knowledge of web development workflows, debugging, and code optimization techniques.",
      "Collaborated effectively in a remote internship environment, demonstrating strong communication, coordination, and problem-solving skills.",
      "Applied best practices for clean code structure, cross-browser compatibility, and mobile-first responsive design.",
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="section-label">04. Where I've Worked</div>
      <h2>Experience</h2>

      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <h3 className="timeline-role">{exp.role}</h3>
            <div className="timeline-org">{exp.org}</div>
            <ul className="timeline-bullets">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
