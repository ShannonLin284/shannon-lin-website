import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <nav className="topbar-inner">
        <a href="/" className="topbar-logo">Shannon</a>
        <div className="topbar-links">
          <a href="/projects" className="topbar-link">Projects</a>
          <a href="/about" className="about-link">About</a>
          <a href="/contact" className="contact-link">Contact</a>
        </div>
      </nav>
    </header>
  );
}
