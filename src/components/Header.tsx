import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black py-4 flex justify-between items-center">
      <div className="flex-2 flex">
        <img
          src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760451985/WhatsApp_Image_2025-10-06_at_6.10.25_PM_1_utrvnx.jpg"
          alt=""
          className="size-20"
        />
        <h1 className="text-3xl  py-3 font-[Josefin-Sans] text-white">
          Jayant Studio
        </h1>
      </div>
      <ul className="flex-3 items-center justify-center hidden lg:flex text-gray-400 font-[Segoe UI] text-xs -tracking-[-0.1rem]">
        <li className="px-4 py-5 hover:text-green-500 cursor-pointer">
          <a href="#home">HOME</a>
        </li>
        <li className="px-4 py-5 hover:text-green-500 cursor-pointer">
          <a href="#gallery">GALLERY</a>
        </li>

        <li className="px-4 py-5 hover:text-green-500 cursor-pointer">
          <a href="#services">SERVICES</a>
        </li>

        <li className="px-4 py-5 hover:text-green-500 cursor-pointer">
          <a href="#aboutpage">ABOUT </a>
        </li>
        <li className="px-4 py-5 hover:text-green-500 cursor-pointer">
          <a href="#contactpage">CONTACT</a>
        </li>
      </ul>
      <div className="flex-1 hidden  lg:flex items-center justify-evenly">
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
    </div>
  );
};

export default Header;
