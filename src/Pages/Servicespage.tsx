import React from "react";
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
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
          Our Services
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          We specialize in creating cinematic and timeless visual stories — from
          aerial drone shots to cinematic weddings.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
