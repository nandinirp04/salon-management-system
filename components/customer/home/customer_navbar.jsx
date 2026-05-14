"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Customer_Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F0EDE6] border-b border-[#C6BFA2] shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-[#6A8791] cursor-pointer">
          LuxeSalon
        </h1>

        {/* Desktop Section */}
        <div className="hidden md:flex items-center gap-8 ml-auto">

          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-[14px] font-medium text-black">
            
            <li className="text-[#6A8791] border-b-2 border-[#6A8791] pb-1 cursor-pointer">
             Home
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Services
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Products
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              About Us
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Auth + CTA */}
          <div className="flex items-center gap-5">

            <button className="text-[15px] font-medium text-black hover:text-[#6A8791] transition duration-300 whitespace-nowrap">
              Login / Sign Up
            </button>

            <button className="bg-[#6A8791] hover:bg-[#58717A] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition duration-300 whitespace-nowrap">
              Book Appointment
            </button>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F0EDE6] border-t border-[#C6BFA2] shadow-lg">

          <ul className="flex flex-col gap-5 px-6 py-6 text-black font-medium">

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Services
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Products
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              About Us
            </li>

            <li className="hover:text-[#6A8791] transition duration-300 cursor-pointer">
              Contact
            </li>

            <button className="text-left hover:text-[#6A8791] transition duration-300">
              Login / Sign Up
            </button>

            <button className="bg-[#6A8791] hover:bg-[#58717A] text-white py-3 rounded-full transition duration-300 shadow-md">
              Book Appointment
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Customer_Navbar;