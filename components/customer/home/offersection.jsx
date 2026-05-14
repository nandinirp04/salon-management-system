function Offers() {
  return (
    <section className="bg-[#EDE7DC] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#6A8791] font-semibold tracking-wide mb-3">
            Exclusive Salon Deals
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            Special Offers & Memberships
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover premium salon offers crafted to give you luxury beauty
            experiences at the best value.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Discount Banner */}
         <div className="bg-[#F0EDE6] rounded-[30px] p-8 border border-[#C6BFA2] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

            <p className="text-[#6A8791] font-semibold mb-4">
              Limited Time Offer
            </p>

            <h3 className="text-3xl font-bold text-black mb-4">
              Flat 30% OFF
            </h3>

            <p className="text-gray-800 leading-relaxed mb-8">
              Enjoy exclusive discounts on premium hair styling and skincare
              services this week.
            </p>

            <button className="bg-[#6A8791] hover:bg-[#58717A] text-white px-6 py-3 rounded-full transition duration-300 shadow-md">
              Claim Offer
            </button>
          </div>

          {/* Festival Offer */}
         <div className="bg-[#C6BFA2] rounded-[30px] p-8 border border-[#6A8791]/20 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <p className="text-[#6A8791] font-semibold mb-4">
              Festival Special
            </p>

            <h3 className="text-3xl font-bold text-black mb-4">
              Bridal Glow Package
            </h3>

            <p className="text-gray-800 leading-relaxed mb-8">
              Celebrate special occasions with luxury bridal makeup and spa
              packages designed for elegance.
            </p>

            <button className="bg-[#6A8791] hover:bg-[#58717A] text-white px-6 py-3 rounded-full transition duration-300 shadow-md">
              Explore Package
            </button>
          </div>

          {/* Membership Offer */}
         <div className="bg-[#6A8791] rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-white">

            <p className="font-semibold mb-4">
              Premium Membership
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Luxe Beauty Club
            </h3>

            <p className="leading-relaxed mb-8 text-[#F0EDE6]">
              Become a premium member and unlock monthly discounts, priority
              bookings, and exclusive salon benefits.
            </p>

            <button className="bg-white text-[#6A8791] hover:bg-[#F0EDE6] px-6 py-3 rounded-full transition duration-300 shadow-md font-medium">
              Join Membership
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Offers;