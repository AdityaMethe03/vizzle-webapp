function Home() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 px-10 md:px-28 py-5 bg-[#fdf5f8]">
      {/* Left Text Block */}
      <div className="max-w-3xl space-y-6">
        <div className="flex gap-2 bg-[#1D8DB240] w-5/12 px-1 py-1 rounded-full">
          <button className="bg-white text-sm px-4 py-2 rounded-full shadow-md">
            What’s new?
          </button>
          <button className="text-sm">Check our deals →</button>
        </div>

        <h1 className="text-4xl font-baloo-800 font-extrabold sm:text-7xl text-[#235D71]">
          The Future of
          <br />
          Fashion is VIZZLE.
        </h1>

        <p className="text-[#555] text-lg">
          Visualize Your Style in Augmented Reality.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#1D8DB2] text-white px-6 py-3 rounded-full text-sm shadow-md">
            Join waitlist
          </button>
          <button className=" text-[#1D8DB2] border border-[#1D8DB2] px-6 py-3 rounded-full text-sm shadow-md">
            Download App
          </button>
        </div>
      </div>

      {/* Right 3D Image Block */}
      <div className="mt-10 lg:mt-0">
        <img
          src="/vizzle_visuals.png"
          alt="Hero visual"
          className="w-[400px] sm:w-[500px] lg:w-[550px]"
        />
      </div>
    </section>
  );
}

export default Home;
