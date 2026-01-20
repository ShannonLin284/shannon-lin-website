import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Section title="About">
        <About />
      </Section>
      <Footer />
    </>
  );
}
