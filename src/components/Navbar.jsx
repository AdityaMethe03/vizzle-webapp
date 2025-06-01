import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // sm breakpoint in Tailwind (640px)
        setIsMenuOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    // <header className="bg-[#F9F3FA] w-full fixed top-0 left-0 right-0 z-50 text-sm md:text-base lg:text-lg">
    <header className="backdrop-blur-lg w-[100%] fixed top-0 left-1/2 transform -translate-x-1/2 z-50 text-sm rounded-none bg-[#F9F3FA] md:text-base lg:text-lg sm:w-[95%] sm:rounded-3xl sm:top-2 sm:bg-[#F9F3FA]/80">
      <nav className="container mx-auto flex items-center justify-between h-[6.5rem] px-4 gap-2 sm:px-1 2xl:px-16 md:gap-0 animate-slideContentInleft">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Vizzle logo"
            className={`w-[175px] h-auto transition-all duration-500 md:w-[200px]`}
            placeholder="blur"
          />
        </Link>
        <div className="hidden sm:flex ">
          <button className="px-5 py-4 rounded-full bg-[#1D8DB2] text-white text-sm shadow-md hover:shadow-inner md:px-7 md:py-5">
            Download Now
          </button>
        </div>

        <div className="sm:hidden relative w-10 h-10 z-50">
          <Bars3Icon
            className={`absolute top-0 left-0 w-10 h-10 cursor-pointer text-blue-950 transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-0 rotate-90 pointer-events-none"
                  : "opacity-100 rotate-0 pointer-events-auto"
              }`}
            onClick={() => setIsMenuOpen(true)}
          />
          <XMarkIcon
            className={`absolute top-0 left-0 w-10 h-10 cursor-pointer text-blue-950 transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 rotate-90 pointer-events-auto"
                  : "opacity-0 rotate-0 pointer-events-none"
              }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <div
          className={`absolute flex flex-col items-start w-full h-20 backdrop-blur-3xl bg-[#F9F3FA] top-24 left-0 p-5 gap-5 bg-gray-50/97 z-40 transform transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="sm:hidden flex">
            <button className="px-3 py-3 rounded-full bg-[#1D8DB2] text-white text-xs shadow-md">
              Download Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
