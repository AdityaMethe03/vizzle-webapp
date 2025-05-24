import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function LaunchingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section>
      <div className="container relative min-h-[80vh] mx-auto flex flex-col items-center justify-center gap-4 py-8 px-4 text-center overflow-hidden bg-white sm:min-h-[90vh] md:min-h-screen sm:gap-8 md:gap-12 sm:py-10 md:py-14">
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
              ? "absolute top-2/5 left-1/3 w-1/3 h-2/3 py-4 bg-opacity-95 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out opacity-100 bg-white"
              : "hidden transform transition-all duration-500 ease-in-out opacity-0"
          } `}
        >
          <XMarkIcon
            className="absolute w-10 h-10 right-2 top-2"
            onClick={() => setIsFormOpen(false)}
          />
          <div className="flex flex-row items-center justify-center">
            <p>Join the Fashion!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaunchingPage;
