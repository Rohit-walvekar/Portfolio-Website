import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Education.css";

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="education" ref={ref}>
      <div className="section-label">05. Academic Background</div>
      <h2>Education</h2>

      <div className="edu-card reveal">
        <div className="edu-header">
          <div>
            <h3 className="edu-degree">
              Bachelor of Computer Applications (BCA)
            </h3>
            <div className="edu-school">University of Example, Kolhapur</div>
          </div>
          <div className="edu-date">2023 — 2026</div>
        </div>

        <div className="edu-details">
          <div className="edu-gpa">
            <strong>CGPA:</strong> 8.95
          </div>
          <ul className="edu-achievements">
            <li>Consistently ranked in the top 5% of the graduating class.</li>
            <li>
              Participated at Ideathon 2026 for presenting idea of 'AI Personal
              Trainer'.
            </li>
            <li>
              Completed Front-End Development Internship at Cognifyz
              Technologies.
            </li>
            <li>
              Completed multiple web development projects using React.js,
              JavaScript, PHP, and MySQL, focusing on responsive and
              user-friendly interfaces.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
