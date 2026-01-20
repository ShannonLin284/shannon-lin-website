import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <Section title="Projects">
        <Projects />
      </Section>
      <Footer />
    </>
  );
}
