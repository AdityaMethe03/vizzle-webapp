import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full h-fit py-6 px-4 sm:px-16 lg:px-24 xl:px-32">
      <header className="flex justify-between items-center text-black">
        <a href="#">
          <img
            src="vizzle_logo.png"
            alt=""
            className="w-auto h-auto max-w-[160px] max-h-[60px] sm:max-w-[180px] sm:max-h-[70px] md:max-w-[200px] md:max-h-[80px] lg:max-w-[220px] lg:max-h-[90px] hover:scale-105 transition-transform"
          />
        </a>

        <div className="relative hidden xl:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-12 pr-40 rounded-full outline-none focus:ring focus:ring-stone-200 focus:ring-opacity-50 transition-all duration-300"
          />
        </div>

        <div className="hidden xl:flex ">
          <button className="w-40 h-12 rounded-full bg-[#1D8DB2] text-white text-sm shadow-md">
            Download Now
          </button>
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-[#073E50]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`absolute xl:hidden top-32 pb-6 px-8 left-0 w-full bg-[#F9F3FA] bg-opacity-95 flex flex-col items-start gap-6 font-semibold text-lg  drop-shadow-md transform transition-transform ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {/* Now visible on mobile */}
          <div className="relative flex items-center justify-center gap-3">
            <i className="bx bx-search absolute left-3 text-base md:text-2xl text-gray-500"></i>
            <input
              type="text"
              placeholder="Search..."
              className="text-base pl-10 py-2 rounded-full outline-none focus:ring focus:ring-stone-200 focus:ring-opacity-50 transition-all duration-300"
            />
          </div>

          <div className="flex">
            <button className="w-32 md:w-40 h-10 md:h-12 rounded-full bg-[#1D8DB2] text-white text-xs md:text-sm shadow-md">
              Download Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
