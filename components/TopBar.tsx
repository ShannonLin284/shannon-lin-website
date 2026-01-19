export default function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold">Shannon</span>

        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:opacity-60">
            Projects
          </a>
          <a href="#about" className="hover:opacity-60">
            About
          </a>
          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
