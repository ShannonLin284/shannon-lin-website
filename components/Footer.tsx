import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Shannon Lin</span>

        <div className="footer-links">
          <a href="https://github.com" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
