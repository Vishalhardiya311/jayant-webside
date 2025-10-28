import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("🚀 Message sent successfully!");

    // TODO: Add backend (Express / Firebase etc.)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-screen  bg-[#0f0f0f] rounded-2xl p-8 m-20 shadow-2xl text-white border border-gray-800 hover:shadow-blue-500/20 transition">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-400 tracking-wide">
        Contact Me
      </h2>
      {/* form textarea */}
      <div className="flex flex-1 gap-30 justify-center">
        <form onSubmit={handleSubmit} className="space-y-5  ">
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-10 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-28 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
        <div className="">
          {" "}
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761576967/vector-illustration-of-a-mobile-phone-displaying-a-contact-us-form-with-fields-for-name-email-and-message-illustration-svg-download-png-12636139_gkcpof.webp"
            alt=""
          />
        </div>
      </div>

      {/* --- Social Media Section --- */}
      <div className="mt-8 flex flex-1 justify-center space-x-6 text-2xl">
        <a
          href="https://www.instagram.com/jayantstudio11?igsh=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
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

export default ContactForm;
