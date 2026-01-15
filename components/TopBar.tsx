export default function Navbar() {
  const links = [
    { href: "#home", label: "home" },
    { href: "#lifetimeline", label: "life timeline" },
    { href: "#projects", label: "projects" },
    { href: "#gallery", label: "gallery" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-black/60 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-5 py-4 flex justify-between">
        <div className="text-sm font-medium">Shannon Lin</div>

        <div className="flex gap-5 text-sm text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
