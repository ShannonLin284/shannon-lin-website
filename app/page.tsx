import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            I design & build
            <br />
            accessibility and startup applications
          </h1>
          <p className="mt-6 text-lg text-neutral-500">
            Both front and backend!
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <Section title="Projects">
        <Projects />
      </Section>

      {/* ABOUT */}
      <Section title="About">
        <p className="max-w-3xl text-neutral-600">
          I'm a sophomore studying computer science at Cornell University.
        </p>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <p className="text-neutral-600">
          Reach out at{" "}
          <a
            href="mailto:you@email.com"
            className="underline underline-offset-4"
          >
            Shannonlin24@gmail.com
          </a>
        </p>
      </Section>

      <Footer />
    </>
  );
}
