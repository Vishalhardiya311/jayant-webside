import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div id="services">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative group bg-[#0f0f0f] overflow-hidden rounded-2xl shadow-lg border border-gray-800 hover:shadow-blue-500/20"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>

        <div className="absolute bottom-5 left-5 right-5 text-left">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
