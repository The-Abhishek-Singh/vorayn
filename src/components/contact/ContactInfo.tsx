"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  delay: number;
}

const ContactCard = ({ icon, title, value, href, delay }: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group relative block"
    >
      <div className="relative p-8 overflow-hidden">
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Top line */}
        <div className="relative h-[1px] w-full mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Icon */}
        <motion.div
          className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-light tracking-wider uppercase">
            {title}
          </p>
          <p className="text-lg text-white font-light group-hover:text-purple-300 transition-colors duration-300">
            {value}
          </p>
        </div>

        {/* Bottom line */}
        <div className="relative h-[1px] w-full mt-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </div>
      </div>
    </motion.a>
  );
};

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
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
        
        {/* Icon */}
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
      {/* Contact Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={<Mail size={32} strokeWidth={1.5} />}
            title="Email"
            value="hello@vorayn.com"
            href="mailto:hello@vorayn.com"
            delay={0.1}
          />
          <ContactCard
            icon={<Phone size={32} strokeWidth={1.5} />}
            title="Phone"
            value="+1 (555) 123-4567"
            href="tel:+15551234567"
            delay={0.2}
          />
        </div>
      </div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* Decorative line */}
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

        {/* Social Icons */}
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
