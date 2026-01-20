import Image from "next/image";
import "./Footer.css";
import cow1 from "@/public/cow1.png";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-images">
          <Image src={cow1} alt="Cow 1" className="cow-image" width={100} height={50} />
        </div>

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
