import { useScrollReveal } from "../hooks/useScrollReveal";
import "../components/Projects/Projects.css";

export default function BackendDetails() {
  return (
    <div
      style={{ padding: "100px 20px", minHeight: "100vh", textAlign: "center" }}
    >
      <h1>Backend Engineering</h1>
      <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6" }}>
        In my backend engineering work, I focus on creating robust RESTful APIs
        and managing data efficiently. I have experience with Node.js, Express,
        PHP, and databases like MongoDB and MySQL. My goal is to build scalable
        architectures that provide seamless data flow for frontend applications.
      </p>
      <a
        href="/"
        className="btn-primary"
        style={{ display: "inline-block", marginTop: "20px" }}
      >
        Back to Home
      </a>
    </div>
  );
}
