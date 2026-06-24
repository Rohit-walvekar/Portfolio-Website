import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL', 'Mongoose']
  },
  {
    category: 'Tools & Others',
    items: ['Git & GitHub', 'VS Code', 'Vite', 'Postman']
  }
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-label">02. My Toolkit</div>
      <h2>Technical Skills</h2>
      
      <div className="skills-grid">
        {SKILLS.map((skillGroup, idx) => (
          <div key={idx} className="skill-category reveal">
            <h3 className="skill-title">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
