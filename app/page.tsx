import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";
import HelloSticker from "@/components/HelloSticker";

export default function Home() {
  return (
    <>
      <TopBar />

      <HelloSticker />

      <Section title="Projects">
        <Projects />
      </Section>

      <Section title="About">
        <About />
      </Section>

      <Section title="Contact">
        <p className="text-neutral-600">
          Reach out at{" "}
          <a href="mailto:you@email.com" className="underline underline-offset-4">
            Shannonlin24@gmail.com
          </a>
        </p>
      </Section>

      <Footer />
    </>
  );
}
