import { Star } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Sophia Williams",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Absolutely loved the salon experience. The staff was professional and the ambience felt luxurious and relaxing.",
    },

    {
      name: "Emma Johnson",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "One of the best salon services I’ve experienced. Their skincare and spa treatments are exceptional.",
    },

    {
      name: "Olivia Brown",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "The makeup artists are incredibly talented. Everything from styling to hospitality felt premium.",
    },
  ];

  return (
    <section className="bg-[#F0EDE6] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#6A8791] font-semibold tracking-wide mb-3">
            Client Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            What Our Customers Say
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from our happy clients who trust us for premium beauty,
            wellness, and salon experiences.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#EECAB5] p-8 rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-[#C6BFA2]"
            >

              {/* User */}
              <div className="flex items-center gap-4 mb-6">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#6A8791]"
                />

                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {review.name}
                  </h3>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 mt-1 text-[#6A8791]">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-800 leading-relaxed">
                {review.review}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;