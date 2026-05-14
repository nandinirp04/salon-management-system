function Hero() {
  return (
    <section className="bg-[#F0EDE6] min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>

          <p className="text-[#6A8791] font-semibold tracking-wide mb-4">
            Luxury Salon Experience
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black mb-6">
            Enhance Your Natural Beauty With Premium Care
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
            Experience world-class salon services, relaxing spa therapies,
            premium skincare, and expert beauty professionals — all in one
            luxurious place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <button className="bg-[#6A8791] hover:bg-[#58717A] text-white px-7 py-3 rounded-full shadow-md transition duration-300">
              Book Appointment
            </button>

            <button className="border border-[#6A8791] text-[#6A8791] hover:bg-[#6A8791] hover:text-white px-7 py-3 rounded-full transition duration-300">
              Explore Services
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-tr from-[#6A8791]/20 to-[#EECAB5]/30 rounded-[40px] blur-2xl"></div>

          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
            alt="Salon Hero"
            className="relative rounded-[40px] shadow-2xl object-cover w-full h-[650px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;