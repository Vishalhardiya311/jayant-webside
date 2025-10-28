import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]); // Parallax background

  // Floating Particles Animation
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
    }[ ] = [];

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
    <section
      id="home"
      className="relative h-[100vh] bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* 🔹 Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />

      {/* 🔹 Floating Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 🔹 Lens Flare (Animated light streak) */}
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

      {/* 🔹 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-5"
      >
        <img
          src="https://res.cloudinary.com/dhze9zwfx/image/upload/c_crop,w_300,h_250/v1761627468/WhatsApp_Image_2025-10-28_at_10.22.58_AM-removebg-preview_gx2jya.png"
          alt=""
          className=" md:text-7xl  tracking-wide drop-shadow-lg"
        />
        <div className="text-gray-300  text-lg md:text-2xl mb-10  font-light">
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

        {/* 🔹 Buttons */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#services"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            Explore Services
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://wa.me/919827314661"
            className="border border-blue-400 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full font-semibold text-lg transition duration-300"
          >
            Contact Now
          </motion.a>
        </div>
      </motion.div>

      {/* 🔹 Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 text-gray-400 text-sm font-light z-10"
      >
        ↓ Scroll to Explore ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;
