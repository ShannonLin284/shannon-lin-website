const projects = [
  {
    title: "cheese quiz",
    desc: "insert later",
  },
  {
    title: "buzz website",
    desc: "insert later",
  },
  {
    title: "music buds",
    desc: "insert later",
  },
];

export default function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.title}
          className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-5 hover:bg-zinc-950/60 transition"
        >
          <h3 className="font-medium">{p.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
          <div className="mt-4 text-sm text-zinc-300">Learn more →</div>
        </div>
      ))}
    </div>
  );
}
