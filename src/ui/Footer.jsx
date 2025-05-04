import React from "react";

function Footer() {
  return (
    <div className="bg-white w-full h-fit py-12 sm:py-24 px-10">
      <div className="flex flex-col items-center justify-between gap-10 md:gap-5">
        {/* Navigation */}
        <ul className="grid grid-cols-2 md:flex md:flex-row items-center gap-4 md:gap-14 text-base sm:text-lg text-center">
          <li>Home</li>
          <li>Experience</li>
          <li>News</li>
          <li>About us</li>
          <li>Jobs</li>
          <li>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
          <i className="bx bxl-facebook text-xl sm:text-2xl"></i>
          <i className="bx bxl-twitter text-xl sm:text-2xl"></i>
          <i className="bx bxl-youtube text-xl sm:text-2xl"></i>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm sm:text-base opacity-60">
          © Copyright 2025 - Vizzle
        </p>
      </div>
    </div>
  );
}

export default Footer;
