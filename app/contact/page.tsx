import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Section title="Contact">
        <p className="text-neutral-600">
          Reach out at{" "}
          <a
            href="mailto:Shannonlin24@gmail.com"
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
