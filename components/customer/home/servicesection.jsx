import {
  Scissors,
  Flower2,
  Sparkles,
  Brush,
  Palette,
  HeartHandshake,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Scissors size={28} />,
      title: "Hair Styling",
      description:
        "Professional hair styling tailored to your personality and occasion.",
    },

    {
      icon: <Flower2 size={28} />,
      title: "Spa",
      description:
        "Relax your body and mind with luxurious spa therapies and wellness care.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Facial",
      description:
        "Premium skincare and facial treatments for naturally glowing skin.",
    },

    {
      icon: <Brush size={28} />,
      title: "Makeup",
      description:
        "Elegant makeup services for weddings, parties, and special events.",
    },

    {
      icon: <Palette size={28} />,
      title: "Hair Coloring",
      description:
        "Trendy hair coloring with premium products and expert stylists.",
    },

    {
      icon: <HeartHandshake size={28} />,
      title: "Grooming",
      description:
        "Complete grooming solutions designed for confidence and elegance.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#EDE7DC] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#6A8791] font-semibold tracking-wide mb-3">
            Our Premium Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            Luxury Salon Services
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience high-quality beauty and wellness services designed to
            enhance your confidence and style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#EECAB5] p-8 rounded-[30px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-[#C6BFA2] cursor-pointer"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#6A8791] text-white flex items-center justify-center mb-6 shadow-md">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;