"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react"; // removed unused Mail, Phone



interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  delay: number;
}

const SocialLink = ({ icon, href, label, delay }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1, y: -3 }}
      className="relative group"
    >
      <div className="relative p-4 rounded-full border border-gray-700 bg-black/20 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-300">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

        <div className="relative text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
          {icon}
        </div>
      </div>
    </motion.a>
  );
};

export const ContactInfo = () => {
  return (
    <div className="relative w-full py-16">

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-10 mx-auto w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />

        <h3 className="text-2xl text-white font-light mb-4 tracking-wide">
          Connect With Us
        </h3>
        <p className="text-gray-400 font-light mb-10">
          Follow our journey on social media
        </p>

        <div className="flex items-center justify-center gap-4">
          <SocialLink
            icon={<Github size={24} strokeWidth={1.5} />}
            href="https://github.com"
            label="GitHub"
            delay={0.5}
          />
          <SocialLink
            icon={<Linkedin size={24} strokeWidth={1.5} />}
            href="https://linkedin.com"
            label="LinkedIn"
            delay={0.6}
          />
          <SocialLink
            icon={<Twitter size={24} strokeWidth={1.5} />}
            href="https://twitter.com"
            label="Twitter"
            delay={0.7}
          />
        </div>
      </motion.div>
    </div>
  );
};
