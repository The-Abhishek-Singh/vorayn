"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  index: number;
}

export const ContactCard = ({ icon: Icon, title, details, index }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      {/* Glassmorphic Card */}
      <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50"
            aria-hidden="true"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Details */}
          <div className="space-y-2">
            {details.map((detail, idx) => (
              <p
                key={idx}
                className="text-sm text-gray-300/80 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
              >
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
