import Image from "next/image";
import "./About.css";
import portrait from "@/public/portrait.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        {/* TEXT SIDE */}
        <div className="about-text">
          <h2 className="about-title">Get to know me</h2>

          <div className="about-card">
            <p className="about-paragraph">I'm shannon!</p>
            <p className="about-paragraph">Love teddy!</p>
            <p className="about-paragraph">Aspiring</p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="about-imageWrap">
          <Image src={portrait} alt="Portrait" className="about-image" priority />
        </div>
      </div>

      {/* OPTIONAL SPACER / FUTURE CONTENT */}
      <div className="about-spacer">
        <div className="about-spacerHalf" />
      </div>
    </section>
  );
}
