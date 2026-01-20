import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <nav className="topbar-inner">
        <a href="/" className="topbar-logo">Shannon</a>
        <div className="topbar-links">
          <a href="/" className="topbar-link">Hello</a>
          <a href="/projects" className="topbar-link">Projects</a>
          <a href="/about" className="topbar-link">About</a>
          <a href="/contact" className="topbar-link">Contact</a>
        </div>
      </nav>
    </header>
  );
}
