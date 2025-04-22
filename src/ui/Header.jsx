function Header() {
  return (
    <header className="flex items-center justify-around pt-4 pb-3 ">
      <img
        src="/vizzle_logo.png"
        alt="vizzle_logo"
        className="w-32 sm:w-44 h-auto"
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-28 rounded-full px-4 py-2 text-sm placeholder:text-stone-700 sm:w-80 sm:focus:w-96 transition-all duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-opacity-50"
      />
      <button className="w-40 h-12 rounded-full bg-[#1D8DB2] text-white text-sm shadow-md">
        Download Now
      </button>
    </header>
  );
}

export default Header;
