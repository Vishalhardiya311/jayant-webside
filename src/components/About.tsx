import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
      <Helmet>
        <title>
          About Jayant Pal | Professional Photographer & Cinematographer
        </title>
        <meta
          name="description"
          content="Meet Jayant Pal, a professional photographer and cinematographer capturing cinematic wedding, pre-wedding, drone, and creative shoots with passion and emotion."
        />
        <meta
          name="keywords"
          content="Jayant Pal, Photographer, Cinematographer, Wedding Photography, Pre-wedding Shoot, Drone Videography, Jayant Studio"
        />
        <meta name="author" content="Jayant Pal" />
        <meta
          property="og:title"
          content="Jayant Pal | Professional Photographer & Cinematographer"
        />
        <meta
          property="og:description"
          content="Jayant Pal transforms moments into timeless cinematic memories through wedding, pre-wedding, and drone photography."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761589629/WhatsApp_Image_2025-10-27_at_11.51.39_PM_ohibyk.jpg"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      {/* ✅ Responsive & Animated About Section */}
      <section
        id="aboutpage"
        className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side – Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761589629/WhatsApp_Image_2025-10-27_at_11.51.39_PM_ohibyk.jpg"
                alt="Jayant Pal"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-lg shadow-blue-500/20 border border-gray-800 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          </motion.div>

          {/* Right Side – Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left px-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Josefin-Sans] text-blue-400">
              Jayant Pal
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-300 font-[Josefin-Sans]">
              Professional Photographer & Cinematographer
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I’m <span className="text-blue-400">Jayant Pal</span>, a
              passionate photographer and filmmaker who loves turning moments
              into timeless memories. With a cinematic vision and a creative
              eye, I specialize in
              <span className="text-white font-medium">
                {" "}
                wedding, pre-wedding, drone, and cinematic shoots
              </span>
              . Every frame I capture tells a story — your story — with
              emotions, colors, and light that speak beyond words.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Whether it's capturing love, joy, or raw emotion, my goal is to
              make every shot a masterpiece. Let’s create something magical
              together.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
