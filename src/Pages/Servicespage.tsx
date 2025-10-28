import React from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "../components/Servicecard";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Photography",
      description:
        "Capture timeless moments with creative and professional photography for events, portraits, and products.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761591942/makeup-artist-and-stylist-working-on-model_-_Copy_pqppwm.webp",
    },
    {
      title: "Videography",
      description:
        "High-quality video production with cinematic angles, storytelling, and seamless editing for every occasion.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761591943/female-filmmaker-crouches-with-camera-rig-and-shoots-scene-on-film-set_r0blcu.webp",
    },
    {
      title: "Drone Shoot",
      description:
        "Aerial shots that bring a cinematic edge to your videos — perfect for weddings, real estate, and events.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761591942/DJI-Warns-a-Ban-of-its-Drones-in-the-USA-May-Be-Imminent-550x288_chwv3b.webp",
    },
    {
      title: "Pre-Wedding Shoot",
      description:
        "Romantic and cinematic pre-wedding shoots that beautifully tell your love story through the lens.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761591942/WhatsApp_Image_2025-10-28_at_12.31.51_AM_ftokt5.jpg",
    },
    {
      title: "Cinematic Shoot",
      description:
        "Experience the art of cinematic visuals — from color grading to storytelling, all in one perfect frame.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761591943/WhatsApp_Image_2025-10-28_at_12.34.53_AM_opslin.jpg",
    },
    {
      title: "Wedding Shoot",
      description:
        "Capture every emotion and detail of your big day with elegant, timeless, and cinematic wedding shoots.",
      image:
        "https://res.cloudinary.com/dhze9zwfx/image/upload/v1761592512/P1197189_l09zuv.jpg",
    },
  ];

  return (
    <>
      {/* ✅ SEO Optimization */}
      <Helmet>
        <title>Our Services | Jayant Studio</title>
        <meta
          name="description"
          content="Explore Jayant Studio’s professional services — photography, videography, drone shoots, and cinematic wedding experiences. Capturing your story with art and emotion."
        />
        <meta
          name="keywords"
          content="Jayant Studio, Photography, Cinematic Shoots, Wedding Photography, Drone Videography, Pre-Wedding Shoot"
        />
        <meta name="author" content="Jayant Pal" />
        <meta
          property="og:title"
          content="Jayant Studio | Photography & Cinematic Shoots"
        />
        <meta
          property="og:description"
          content="We capture timeless visual stories through cinematic photography, videography, and drone shoots."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761592512/P1197189_l09zuv.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Responsive & Accessible Layout */}
      <section
        className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-16"
        id="services"
      >
        <div className="max-w-6xl mx-auto text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-3">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We specialize in creating cinematic and timeless visual stories —
            from aerial drone shots to cinematic weddings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
