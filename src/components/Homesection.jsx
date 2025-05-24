import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
function Homesection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-28 z-40 bg-[#F9F3FA]">
      <div className="max-w-72 absolute bottom-5 right-0  transform animate-slideBikeInLeft z-50">
        <img src="vizzleBike.png" alt="Bike" />
      </div>

      <div className="container mx-auto my-6 px-1 flex flex-row items-center justify-evenly transform animate-slideContentInleft">
        <div className="max-w-2xl">
          <div className="flex flex-wrap justify-start max-w-fit px-1 py-1 text-sm shadow-inner rounded-full bg-[#1D8DB240]">
            <button className="px-4 py-2 rounded-full shadow-lg bg-white">
              What's new?
            </button>
            <button className="px-2">Check our deals→</button>
          </div>
          <div className="my-8">
            <h1 className="mt-4 mb-2 text-7xl font-baloo font-extrabold text-[#235D71]">
              The Future of Fashion is VIZZLE.
            </h1>
            <p className="text-xl text-[#555]">
              Visualize Your Style in Augmented Reality.
            </p>
          </div>
          <div className="flex flex-row justify-start gap-2 text-sm">
            <button className="px-5 py-3 rounded-full shadow-lg hover:shadow-md text-white bg-[#1D8DB2]">
              Join waitlist
            </button>
            <button className="px-4 py-3 rounded-full shadow-lg border hover:shadow-md border-[#1D8DB2] text-[#1D8DB2]">
              Download App
            </button>
          </div>
        </div>
        <div className="w-[15rem] md:w-[30rem] h-auto">
          <img src="vizzleVisuals.png" alt="vizzleVisuals" />
        </div>
      </div>
    </section>
  );
}

export default Homesection;
