import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact | Jayant Pal - Photographer & Cinematographer</title>
        <meta
          name="description"
          content="Contact Jayant Pal for professional photography, cinematic shoots, wedding and pre-wedding photography. Get in touch to capture your moments beautifully."
        />
        <meta
          name="keywords"
          content="Contact Jayant Pal, Wedding Photographer, Cinematic Shoots, Drone Videography, Pre-Wedding Photography"
        />
        <meta property="og:title" content="Contact Jayant Pal | Photographer" />
        <meta
          property="og:description"
          content="Reach out to Jayant Pal for photography, videography, drone, and cinematic shoot services."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761576967/vector-illustration-of-a-mobile-phone-displaying-a-contact-us-form-with-fields-for-name-email-and-message-illustration-svg-download-png-12636139_gkcpof.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayant Pal" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Responsive Contact Section */}
      <div className="max-w-screen bg-[#0f0f0f] rounded-2xl p-6 sm:p-8 md:m-20 m-6 shadow-2xl text-white border border-gray-800 hover:shadow-blue-500/20 transition">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400 tracking-wide">
          Contact Me
        </h2>

        {/* ✅ Form Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 w-full md:w-1/2 order-2 md:order-1"
          >
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 sm:px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
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
                className="w-full px-4 sm:px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
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
                className="w-full px-4 sm:px-6 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-28 resize-none text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          {/* ✅ Image Section */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761576967/vector-illustration-of-a-mobile-phone-displaying-a-contact-us-form-with-fields-for-name-email-and-message-illustration-svg-download-png-12636139_gkcpof.webp"
              alt="Contact illustration"
              className="w-64 sm:w-80 md:w-[420px] h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* ✅ Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6 text-2xl sm:text-3xl">
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
            className="text-green-400 hover:text-green-300 transition-transform transform hover:scale-110"
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
    </>
  );
};

export default ContactForm;
