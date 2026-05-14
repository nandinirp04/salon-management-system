import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaMapPin,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#6A8791] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold mb-5">
              LuxeSalon
            </h2>

            <p className="text-[#F0EDE6] leading-relaxed">
              Premium salon and wellness experiences designed to enhance your
              beauty, confidence, and relaxation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">

              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6A8791] transition duration-300 cursor-pointer">
                <FaInstagram  />
              </div>

              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6A8791] transition duration-300 cursor-pointer">
                <FaFacebook />
              </div>

              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#6A8791] transition duration-300 cursor-pointer">
                <FaTwitter  />
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#F0EDE6]">

              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Services
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Products
              </li>

              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-[#F0EDE6]">

              <div className="flex items-start gap-3">
                <FaMapPin  />
                <p>Pune, Maharashtra, India</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone  />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <p>luxesalon@gmail.com</p>
              </div>

            </div>
          </div>

          {/* Opening Hours */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Opening Hours
            </h3>

            <div className="space-y-4 text-[#F0EDE6]">

              <div className="flex items-center gap-3">
                <FaClock />
                <p>Mon - Fri : 9 AM - 9 PM</p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock />
                <p>Saturday : 10 AM - 8 PM</p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock  />
                <p>Sunday : Closed</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-[#F0EDE6]">

          <p>
            © 2026 LuxeSalon. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;