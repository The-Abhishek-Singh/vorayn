"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FloatingInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: string;
  error?: string;
  multiline?: boolean;
}

const FloatingInput = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  multiline = false,
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className="relative w-full group">
      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        animate={{
          y: isFocused || value ? -28 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused
            ? "rgb(168, 85, 247)" // purple-500
            : error
            ? "rgb(239, 68, 68)" // red-500
            : "rgb(156, 163, 175)", // gray-400
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-0 pointer-events-none origin-left font-light text-lg"
      >
        {placeholder}
      </motion.label>

      {/* Input Field */}
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={multiline ? 4 : undefined}
        className={`
          w-full bg-transparent border-0 outline-none
          text-white text-lg font-light
          pt-2 pb-3 px-0
          ${multiline ? "resize-none" : ""}
          placeholder:text-transparent
        `}
      />

      {/* Animated Underline */}
      <div className="relative h-[2px] w-full overflow-hidden">
        {/* Base line */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
        
        {/* Animated glow line */}
        <motion.div
          animate={{
            scaleX: isFocused ? 1 : 0,
            opacity: isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 origin-center"
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
        </motion.div>

        {/* Error state line */}
        {error && !isFocused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute inset-0 bg-red-500 origin-left"
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400 font-light"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export const ContactFormMinimal = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      onSubmit={handleSubmit}
      className="relative max-w-3xl mx-auto"
    >
      <div className="space-y-12">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <FloatingInput
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            error={errors.name}
          />
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <FloatingInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            error={errors.email}
          />
        </motion.div>

        {/* Subject Field */}
        <motion.div variants={itemVariants}>
          <FloatingInput
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            error={errors.subject}
          />
        </motion.div>

        {/* Message Field */}
        <motion.div variants={itemVariants}>
          <FloatingInput
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            error={errors.message}
            multiline
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants} className="pt-8">
          <motion.button
            type="submit"
            disabled={isLoading || isSuccess}
            whileHover={{ scale: isLoading || isSuccess ? 1 : 1.02 }}
            whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
            className="relative group w-full sm:w-auto min-w-[200px]"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(236,72,153,0.5), rgba(168,85,247,0.5))",
              }}
            />

            {/* Button border and content */}
            <div className="relative px-12 py-4 rounded-full border border-purple-500/30 bg-black/20 backdrop-blur-sm overflow-hidden group-hover:border-purple-500/60 transition-colors duration-300">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Button text */}
              <div className="relative flex items-center justify-center gap-3 text-white font-light tracking-wide">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.form>
  );
};
