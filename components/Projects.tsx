const projects = [
  {
    title: "Bring the Buzz Over Website",
    description: "Website for Bring the Buzz Over",
  },
  {
    title: "Epsilon Nu Tau Website",
    description: "Website for ENT, professional fraternity",
  }
];

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border rounded-xl p-6 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-xl">{project.title}</h3>
          <p className="mt-2 text-neutral-500">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}
