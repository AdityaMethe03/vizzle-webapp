import React from "react";

function HomePage() {
  return (
    <section className="h-fit flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-20 lg:px-10 py-5">
      <div className="flex items-center justify-center">
        <div className="space-y-2 md:space-y-4 lg:space-y-6">
          <div className="flex bg-[#1D8DB240] w-4/5 md:w-5/12 px-1 py-1 rounded-full">
            <button className="bg-white text-xs md:text-sm px-4 py-2 rounded-full shadow-md">
              What’s new?
            </button>
            <button className="text-xs md:text-sm pl-3 md:pl-1">
              Check our deals →
            </button>
          </div>

          <h1 className="text-4xl font-baloo font-extrabold md:text-6xl lg:text-7xl text-[#235D71]">
            The Future of
            <br />
            Fashion is VIZZLE.
          </h1>

          <p className="text-[#555] text-md">
            Visualize Your Style in Augmented Reality.
          </p>

          {/* Buttons for md and up */}
          <div className="hidden md:flex gap-4">
            <button className="bg-[#1D8DB2] text-white px-6 py-3 rounded-full text-sm shadow-md tracking-wide">
              Join waitlist
            </button>
            <button className="text-[#1D8DB2] border border-[#1D8DB2] px-6 py-3 rounded-full text-sm shadow-md tracking-wide">
              Download App
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/vizzle_visuals.png"
          alt="Hero visual"
          className="w-[250px] sm:w-[300px] md:w-[400px] xl:w-[500px]"
        />
      </div>
      <div className="md:hidden flex gap-2 md:gap-4">
        <button className="bg-[#1D8DB2] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm shadow-md tracking-wide">
          Join waitlist
        </button>
        <button className="text-[#1D8DB2] border border-[#1D8DB2] px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm  shadow-md tracking-wide">
          Download App
        </button>
      </div>
    </section>
  );
}

export default HomePage;
