import TopBar from "@/components/topbar";
import Section from "@/components/section";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <main>
      <TopBar />

      <div className="mx-auto max-w-5xl px-5 pt-24 pb-24">
        <Section id="home" title="shannon lin">
          <p className="font-mono text-sm">
            CS student & builder focused on AI, drones, and real-world systems.
          </p>
        </Section>

        <Section id="lifetimeline" title="life timeline">
          <p className="font-mono text-sm">
            I build systems that combine machine learning, robotics, and software.
          </p>
        </Section>

        <Section id="projects" title="projects">
          <Projects />
        </Section>

        <Section id="contact" title="contact (how to find me)">
          
          <p className="font-mono text-sm">School Email: Sl3454@cornell.edu Professional Email: Shannonlin24@gmail.com</p>
        </Section>

        <Section id="gallery" title="gallery">
          <p className="font-mono text-sm">
            Put pics here 
          </p>
        </Section>
      </div>
    </main>
  );
}
