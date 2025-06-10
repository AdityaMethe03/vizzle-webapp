/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Homesection({ launchingRef, aboutRef, setIsFormOpen }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (ref, offset = 0) => {
    if (ref && ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-28 z-40 bg-[#F9F3FA]">
      <div className="container mx-auto my-8 px-1 flex flex-col items-center justify-evenly gap-6 transform animate-slideContentInleft sm:flex-row sm:gap-0 sm:my-4">
        <div className="max-w-2xl flex flex-col items-center sm:items-start ">
          <div className="hidden flex-wrap justify-start max-w-fit px-1 py-1 text-xs shadow-inner rounded-full bg-[#1D8DB2] sm:flex">
            <button
              onClick={() => scrollToSection(aboutRef, -100)}
              className="px-3 py-2 rounded-full shadow-lg bg-white sm:px-4 sm:py-2"
            >
              What's new?
            </button>
            <button
              onClick={() => scrollToSection(aboutRef, -100)}
              className="px-2 text-white"
            >
              Check our deals →
            </button>
          </div>
          <div className="my-4 mx-8 text-center sm:text-left sm:my-8 sm:mx-0">
            <h1 className="mt-0 mb-2 text-4xl font-baloo font-extrabold text-[#235D71] sm:text-5xl lg:text-7xl sm:mt-4">
              The Future of Fashion is VIZZLE.
            </h1>
            <p className="text-sm text-[#555] sm:text-xl">
              Visualize Your Style in Augmented Reality.
            </p>
          </div>
          <div className="flex flex-row justify-start gap-2 text-xs sm:text-sm">
            <button
              onClick={() => {
                scrollToSection(launchingRef, -50);
                setIsFormOpen(true);
              }}
              className="px-3 py-3 rounded-full shadow-lg tracking-wide hover:shadow-md text-white bg-[#1D8DB2] sm:px-5"
            >
              Join waitlist
            </button>
            <button
              onClick={() => {
                scrollToSection(launchingRef, -50);
                setIsFormOpen(true);
              }}
              className="px-3 py-3 rounded-full shadow-lg border hover:shadow-md border-[#1D8DB2] text-[#1D8DB2] sm:px-4"
            >
              Download App
            </button>
          </div>
        </div>
        <div className="w-[22.5rem] md:w-[35rem] h-auto">
          <img
            src="vizzleVisuals.png"
            alt="vizzleVisuals"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Homesection;
