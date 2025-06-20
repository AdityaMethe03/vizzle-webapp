/* eslint-disable react/prop-types */
import WaitlistForm from "./WaitlistForm";

function LaunchingPage({ isFormOpen, setIsFormOpen }) {
  return (
    <section className="relative h-screen bg-white overflow-hidden">
      {/* Dimmed overlay behind form */}
      {isFormOpen && (
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300"></div>
      )}

      {/* Main content */}
      <div
        className={`container relative mx-auto flex flex-col items-center justify-center gap-4 py-8 px-4 text-center h-full sm:gap-8 md:gap-12 sm:py-10 md:py-14 transition-all duration-300 ${
          isFormOpen ? "z-0" : "z-10"
        }`}
      >
        <p className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl leading-tight">
          Launching Soon
        </p>
        <p className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl leading-tight">
          Become a member of Vizzle!
        </p>
        <p className="font-sans font-normal text-lg sm:text-2xl md:text-3xl leading-snug max-w-3xl">
          We don’t follow trends, we create the next wave
        </p>
        <button
          className="tracking-wider px-6 py-3 rounded-full shadow-xl transition duration-300 text-sm hover:shadow-md sm:text-base md:text-lg bg-gradient-to-r from-[#1D8DB2] to-[#0C3C4C] text-white"
          onClick={() => setIsFormOpen(true)}
        >
          Join Waitlist
        </button>
      </div>

      {/* Form container - on top */}
      {isFormOpen && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20 w-[90%] h-2/3 sm:w-[50%] md:w-[40%] xl:w-[33%] xl:top-20">
          <WaitlistForm handleFormOpen={setIsFormOpen} />
        </div>
      )}
    </section>
  );
}

export default LaunchingPage;
