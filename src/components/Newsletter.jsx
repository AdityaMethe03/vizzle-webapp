function Newsletter() {
  return (
    <div className="w-full h-52 bg-[#0081FE] bg-opacity-[10%] flex flex-row items-center justify-center gap-4 sm:gap-8">
      <div>
        <p className="text-black text-base sm:text-2xl font-medium tracking-wide">
          Newsletter
        </p>
      </div>
      <div className="relative flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Your email"
          className="text-black text-xs sm:text-lg px-3 py-3 md:px-6 md:py-4 rounded-full outline-none focus:ring focus:ring-stone-200 focus:ring-opacity-50 transition-all duration-300"
        />
        <i className="bx bxs-paper-plane absolute right-2 md:right-3 text-lg md:text-2xl text-white bg-[#0081FE] px-1 md:px-2 md:py-1 rounded-full"></i>
      </div>
    </div>
  );
}

export default Newsletter;
