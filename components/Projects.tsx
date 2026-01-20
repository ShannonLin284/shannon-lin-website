import "./Projects.css";

const projects = [
  {
    title: "Bring the Buzz Over Website",
    description: "Website for Bring the Buzz Over",
  },
  {
    title: "Epsilon Nu Tau Website",
    description: "Website for ENT, professional fraternity",
  },
];

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
