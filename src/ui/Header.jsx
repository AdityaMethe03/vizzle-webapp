function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-3 sm:px-6">
      <img
        src="/vizzle_logo.png"
        alt="vizzle_logo"
        className="w-[150px] h-[90px]"
      />
      Hello
      <button className="w-[150px] h-[50px] rounded-full bg-[#1D8DB2] text-white">
        Download
      </button>
    </header>
  );
}

export default Header;
