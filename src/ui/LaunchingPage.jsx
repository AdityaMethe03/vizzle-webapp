import React from "react";

function LaunchingPage() {
  return (
    <div className="w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-14 px-4 bg-white text-center">
      <p className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl leading-tight">
        Launching Soon
      </p>
      <p className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl leading-tight">
        Become a member of Vizzle!
      </p>
      <p className="font-sans font-normal text-lg sm:text-2xl md:text-3xl leading-snug max-w-3xl">
        We’re not following trends — we’re creating the next wave.
      </p>
      <button className="tracking-wider bg-gradient-to-r from-[#1D8DB2] to-[#0C3C4C] text-white px-6 py-3 rounded-full shadow-xl transition duration-300 hover:opacity-95 text-sm sm:text-base md:text-lg">
        Join Waitlist
      </button>
    </div>
  );
}

export default LaunchingPage;
