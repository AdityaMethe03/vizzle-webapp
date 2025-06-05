/* eslint-disable react/prop-types */
// import { useState } from "react";
import WaitlistForm from "./WaitlistForm";

function LaunchingPage({ isFormOpen, setIsFormOpen }) {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section>
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-4 py-8 px-4 text-center overflow-hidden bg-white h-screen sm:gap-8 md:gap-12 sm:py-10 md:py-14">
        <p className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl leading-tight">
          Launching Soon
        </p>
        <p className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl leading-tight">
          Become a member of Vizzle!
        </p>
        <p className="font-sans font-normal text-lg sm:text-2xl md:text-3xl leading-snug max-w-3xl">
          We’re not following trends — we’re creating the next wave.
        </p>
        <button
          className="tracking-wider px-6 py-3 rounded-full shadow-xl transition duration-300 text-sm hover:shadow-md sm:text-base md:text-lg bg-gradient-to-r from-[#1D8DB2] to-[#0C3C4C] text-white"
          onClick={() => setIsFormOpen(true)}
        >
          Join Waitlist
        </button>
        <div
          className={`${
            isFormOpen
              ? "absolute top-5 w-[90%] h-2/3 sm:w-[50%] md:w-[40%] xl:w-[33%] xl:top-20"
              : // "relative max-w-md w-full bg-[#fff7f3] rounded-xl shadow-xl p-6 mx-auto"
                "hidden transform transition-all duration-500 ease-in-out opacity-0"
          } `}
        >
          <WaitlistForm handleFormOpen={setIsFormOpen} />
        </div>
      </div>
    </section>
  );
}

export default LaunchingPage;
