import React from "react";

function About() {
  return (
    <section className="w-full md:min-h-[75dvh] xl:min-h-screen bg-[#68899475] flex items-center py-24 md:py-6 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full sm:w-11/12 lg:w-2/5 flex justify-center">
          <img
            src="about.png"
            alt="About"
            className="w-4/5 h-auto rounded-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-between gap-2 md:gap-6 transition-all md:px-8">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-sans font-medium lg:text-left">
            About Vizzle
          </p>
          <p className="font-sans text-sm sm:text-lg lg:text-xl tracking-wide lg:text-left">
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
