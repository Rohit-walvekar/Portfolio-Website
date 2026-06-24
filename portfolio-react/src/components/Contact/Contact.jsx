import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section-label">06. What's Next?</div>
      <h2>Get In Touch</h2>
      
      <div className="contact-grid">
        <div className="contact-info reveal">
          <p className="contact-desc">
            Although I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <strong>Email:</strong>
              <a href="mailto:rohit@example.com">rohit@example.com</a>
            </div>
            <div className="detail-item">
              <strong>Location:</strong>
              <span>Kolhapur, Maharashtra</span>
            </div>
            <div className="detail-item">
              <strong>Socials:</strong>
              <div className="social-links">
                <a href="https://github.com/rohitwalvekar" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/rohitwalvekar" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Hello Rohit..." required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
