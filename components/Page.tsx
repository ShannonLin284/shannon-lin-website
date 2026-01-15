import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main>
      <TopBar />

      <div className="mx-auto max-w-5xl px-5 pt-24 pb-24">
        <Section id="home" title="Shannon Lin">
          <p className="text-zinc-300">
            CS student & builder focused on AI, drones, and real-world systems.
          </p>
        </Section>

        <Section id="about" title="About">
          <p className="text-zinc-300">
            I build systems that combine machine learning, robotics, and software.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-zinc-300">Email: your@email.com</p>
        </Section>
      </div>
    </main>
  );
}
