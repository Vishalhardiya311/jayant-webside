import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black py-4 px-4 flex justify-between items-center relative">
      {/* Left Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760451985/WhatsApp_Image_2025-10-06_at_6.10.25_PM_1_utrvnx.jpg"
          alt="Logo"
          className="size-16 md:size-20 rounded-full"
        />
        <h1 className="text-2xl md:text-3xl font-[Josefin-Sans] text-white">
          Jayant Studio
        </h1>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`${
          menuOpen
            ? "flex flex-col absolute top-20 left-0 w-full bg-black items-center py-6 space-y-4 z-50"
            : "hidden"
        } lg:flex lg:flex-row lg:items-center lg:justify-center lg:static lg:bg-transparent lg:space-x-4 text-gray-400 font-[Segoe UI] text-sm`}
      >
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            HOME
          </a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            GALLERY
          </a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#aboutpage" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#contactpage" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex items-center justify-evenly space-x-4">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/919827314661"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/jayantstudio11?igsh=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-transform transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;
