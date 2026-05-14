function CTA() {
  return (
    <section className="bg-[#EDE7DC] py-24">

      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="bg-[#6A8791] rounded-[40px] px-8 py-16 lg:px-16 text-center shadow-2xl">

          <p className="text-[#F0EDE6] font-semibold tracking-wide mb-4">
            Luxury Beauty Experience
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready To Transform Your Style & Confidence?
          </h2>

          <p className="text-[#F0EDE6] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book your salon appointment today and experience premium beauty,
            wellness, skincare, and grooming services designed just for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">

            <button className="bg-white text-[#6A8791] hover:bg-[#F0EDE6] px-7 py-3 rounded-full font-medium shadow-md transition duration-300">
              Book Appointment
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-[#6A8791] px-7 py-3 rounded-full font-medium transition duration-300">
              Explore Services
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;