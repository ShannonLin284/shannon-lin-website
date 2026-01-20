import TopBar from "@/components/TopBar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      {/* navigation bar thingy */}
      <TopBar />

      {/* hello my name is sticker */}
      <section className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="relative">
          {/* sticker shadow */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[22px] bg-[#FF5B00]" />

          {/* sticker */}
          <div
            className="
              relative
              w-[360px]
              sm:w-[480px]
              md:w-[640px]
              lg:w-[760px]
              xl:w-[880px]
              rounded-[26px]
              bg-[#1f4d44]
              p-5 sm:p-6 md:p-7
            "
          >
            
            {/* white border */}
            <div className="rounded-[18px] bg-white p-3">
              
              {/* red header */}
              <div className="rounded-[14px] bg-[#1f4d44] py-4 text-center">
                <p className="text-white font-extrabold text-4xl tracking-wide">
                  HELLO
                </p>
                <p className="text-white font-bold text-lg tracking-wide">
                  MY NAME IS
                </p>
              </div>

              {/* name area */}
              <div className="mt-4 rounded-[14px] bg-[#f4f1e8] py-10 px-4">
                <h1
                  className="
                    text-center
                    font-black
                    tracking-tight
                    leading-[0.9]
                    scale-x-[1.35]
                    scale-y-[1.1]
                    text-4xl sm:text-5xl md:text-8xl
                    text-black
                  "
                >
                  SHANNON
                  <br />
                  LIN
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section title="Projects">
        <Projects />
      </Section>

      {/* ABOUT */}
      <Section title="About">
        <About />
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
