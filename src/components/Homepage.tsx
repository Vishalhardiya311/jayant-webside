import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]); // Parallax background

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🔹 SEO Tags */}
      <Helmet>
        <title>
          Jayant Studio | Cinematic Wedding & Pre-Wedding Photography
        </title>
        <meta
          name="description"
          content="Jayant Studio offers cinematic wedding films, pre-wedding shoots, drone videography, and creative photography — capturing your special moments beautifully."
        />
        <meta
          name="keywords"
          content="Jayant Studio, wedding photography, pre-wedding shoot, cinematic videos, drone shoot, videography, photography in India, cinematic films"
        />
        <meta name="author" content="Jayant Pal" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Jayant Studio | Cinematic Wedding Photography"
        />
        <meta
          property="og:description"
          content="We create cinematic wedding films, drone shoots, and pre-wedding stories that capture your emotions forever."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760451985/WhatsApp_Image_2025-10-06_at_6.10.25_PM_1_utrvnx.jpg"
        />
        <meta property="og:url" content="https://jayantstudio.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jayant Studio | Cinematic Wedding Photography"
        />
        <meta
          name="twitter:description"
          content="Cinematic pre-wedding and wedding photography by Jayant Studio."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760451985/WhatsApp_Image_2025-10-06_at_6.10.25_PM_1_utrvnx.jpg"
        />
      </Helmet>

      {/* 🔹 Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "150%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-md opacity-60"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/c_crop,w_300,h_250/v1761627468/WhatsApp_Image_2025-10-28_at_10.22.58_AM-removebg-preview_gx2jya.png"
            alt="Jayant Studio Logo"
            className="w-48 sm:w-60 md:w-72 lg:w-80 mb-6 object-contain"
          />

          <div className="text-gray-300 text-base sm:text-lg md:text-2xl mb-8 font-light px-2">
            <Typewriter
              options={{
                strings: [
                  "Cinematic Wedding Films 🎬",
                  "Pre-Wedding Magic 📸",
                  "Drone & Aerial Mastershots 🚁",
                  "Turning Moments into Memories 💫",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-lg transition duration-300 text-center"
            >
              Explore Services
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/919827314661"
              className="border border-blue-400 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full font-semibold text-sm sm:text-lg transition duration-300 text-center"
            >
              Contact Now
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 text-gray-400 text-xs sm:text-sm font-light z-10"
        >
          ↓ Scroll to Explore ↓
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
