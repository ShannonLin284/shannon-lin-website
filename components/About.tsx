import Image from "next/image";

import portrait from "@/public/portrait.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center md:my-48 px-6"
    >
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row-reverse">
        {/* TEXT SIDE */}
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <h2 className="mx-auto my-5 w-fit px-5 text-center text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tight">
            Get to know me
          </h2>

		<div className='  mx-auto mb-2 flex w-full flex-col justify-center  bg-skin-bg p-6 text-center font-paragraph text-xl tracking-wide text-skin-base md:text-2xl lg:mx-0  lg:mb-0     '>
			<p className='mx-auto mb-4 w-5/6 lg:mx-auto '>
				I'm shannon!
			</p>
			<p className='mx-auto mb-4 w-5/6 lg:mx-auto '>
				Love teddy!
			</p>
			<p className='mx-auto w-5/6 md:text-2xl lg:mx-auto '>
        Aspiring 
      </p>
		</div>

        </div>

        {/* IMAGE SIDE */}
        <div className="mx-auto my-10 w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={portrait}
            alt="Portrait"
            className="rounded-xl"
            priority
          />
        </div>
      </div>

      {/* OPTIONAL SPACER / FUTURE CONTENT */}
      <div className="mx-auto mt-16 lg:flex lg:w-full lg:justify-evenly">
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
};

export default About;
