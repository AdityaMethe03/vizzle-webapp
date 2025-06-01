/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <section className="w-full bg-[#70BBD4C9]">
      {/* BENEFITS  */}
      <div className="container mx-auto py-10 flex flex-col items-center">
        <p className="text-3xl font-normal py-6 sm:text-5xl lg:text-6xl text-center">
          Benefits of joining Vizzle!
        </p>
        <div className="flex flex-wrap items-center justify-evenly gap-8 my-10 ">
          <div className="w-72 flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl shadow-lg bg-white">
            <p className="text-lg font-semibold text-[#1D8DB2]">
              First in Line, First in Style
            </p>
            <img
              src="about1.png"
              alt="Benefits_of_Vizzle"
              className="w-1/2 rounded-full"
            />
            <p className="text-center text-lg font-semibold text-[#1D8DB2]">
              Get exclusive early access to Ubbaco 60-minute fashion delivery
              revolution.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl shadow-lg bg-white">
            <p className="text-lg font-semibold text-[#1D8DB2]">
              First in Line, First in Style
            </p>
            <img
              src="about2.png"
              alt="Benefits_of_Vizzle"
              className="w-1/2 rounded-full"
            />
            <p className="text-center text-lg font-semibold text-[#1D8DB2]">
              Get exclusive early access to Ubbaco 60-minute fashion delivery
              revolution.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl shadow-lg bg-white">
            <p className="text-lg font-semibold text-[#1D8DB2]">
              First in Line, First in Style
            </p>
            <img
              src="about3.png"
              alt="Benefits_of_Vizzle"
              className="w-1/2 rounded-full"
            />
            <p className="text-center text-lg font-semibold text-[#1D8DB2]">
              Get exclusive early access to Ubbaco 60-minute fashion delivery
              revolution.
            </p>
          </div>
          <div className="w-72 flex flex-col items-center justify-center px-4 py-8 gap-6 rounded-xl shadow-lg bg-white">
            <p className="text-lg font-semibold text-[#1D8DB2]">
              First in Line, First in Style
            </p>
            <img
              src="about3.png"
              alt="Benefits_of_Vizzle"
              className="w-1/2 rounded-full"
            />
            <p className="text-center text-lg font-semibold text-[#1D8DB2]">
              Get exclusive early access to Ubbaco 60-minute fashion delivery
              revolution.
            </p>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div className="container max-w-screen-lg mx-auto py-5 flex flex-col items-center justify-around gap-12 sm:py-20 sm:flex-row">
        <img
          src="about.png"
          alt="About Vizzle"
          className="max-w-80 rounded-lg shadow-lg "
        />
        <div>
          <h1 className="text-4xl text-center font-medium mb-4 sm:text-left">
            About Vizzle
          </h1>
          <p className="text-center px-4 pb-4 font-medium tracking-wider leading-7 text-[#3A3A3A] sm:px-0 sm:text-left">
            Vizzle is a cutting-edge fashion technology startup that
            revolutionizes the way you experience style. By harnessing the power
            of augmented reality, Vizzle transforms your clothing choices into
            immersive, interactive visual experiences. Whether you're exploring
            new outfits or curating your personal wardrobe, Vizzle brings a
            futuristic twist to fashion by letting you see, try on, and mix and
            match styles in real-time. With a keen focus on blending aesthetics
            and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
