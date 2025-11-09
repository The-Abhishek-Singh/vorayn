'use client';

import { motion, Variants } from 'framer-motion';
import {
  Rocket,
  Code,
  Palette,
  Zap,
  Users,
  ArrowRight,
  Star,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[hsla(222.2,_84%,_4.9%,_1)] text-white overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center gap-2 mb-6 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">
              Launching Dreams into Reality
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent"
          >
            CodeAstera
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Launching startups and businesses into the digital orbit —
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold mt-2">
              beautifully.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Web Development</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
              <Palette className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Design & Branding</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Digital Marketing</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At CodeAstera, we bridge the gap between cutting-edge technology
                and creative design. Our mission is to empower startups and
                businesses with digital solutions that are not only functional but
                also visually stunning.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Tech Precision</h4>
                    <p className="text-gray-400 text-sm">
                      Cutting-edge technologies and best practices
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Creative Vision</h4>
                    <p className="text-gray-400 text-sm">
                      Designs that captivate and convert
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Real Impact</h4>
                    <p className="text-gray-400 text-sm">
                      Results that drive growth and engagement
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={scaleIn}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div animate={floatingAnimation.animate} transition={floatingAnimation.transition}>
                    <Rocket className="w-32 h-32 text-blue-400 opacity-50" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 border-y border-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={scaleIn}
              className="relative md:order-2"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div animate={floatingAnimation.animate} transition={floatingAnimation.transition}>
                    <Star className="w-32 h-32 text-purple-400 opacity-50" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="md:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We envision a future where CodeAstera becomes the go-to creative
                tech agency for businesses looking to make their mark in the
                digital universe.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Expanding beyond web into animation & immersive experiences</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Pioneering AI integration and emerging technologies</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Helping clients stay ahead in an evolving landscape</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision and project we undertake
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We embrace cutting-edge technologies and forward-thinking approaches
                  to create solutions that are ahead of their time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500/10 mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-400 leading-relaxed">
                  Transparency and ethical practices define our relationships.
                  We deliver on promises and maintain the highest standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Impact</h3>
                <p className="text-gray-400 leading-relaxed">
                  We measure success by tangible results. Every project drives
                  growth and creates lasting value for our clients.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-blue-900/5 border-y border-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-gray-400">
              Three pivotal moments that shaped CodeAstera
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-12 group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30">
                    <Rocket className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold">The Genesis</h3>
                    <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
                      Year 1
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    CodeAstera emerged with a clear vision: merge technical excellence
                    with creative brilliance. We started with web development, setting
                    out to redefine industry standards with innovative solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-r from-purple-500/10 to-blue-500/5 border border-purple-500/20 rounded-2xl p-8 md:p-12 group hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-400/30">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold">Expansion Era</h3>
                    <span className="inline-block w-fit px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
                      Year 2-3
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    As our client base grew, so did our capabilities. We expanded
                    into branding, animation, and digital marketing, becoming a
                    comprehensive creative tech agency trusted by startups and
                    established businesses worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-12 group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold">Beyond the Horizon</h3>
                    <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300">
                      Present & Future
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we're pioneering AI integration, immersive experiences,
                    and next-gen web solutions. Our commitment to innovation means
                    we're always exploring what's next to help our clients lead
                    their industries.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Team
            </h2>
            <p className="text-lg text-gray-400">
              Talented individuals united by passion for excellence
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  animate={floatingAnimation.animate}
                  transition={floatingAnimation.transition}
                  className="relative z-10"
                >
                  <Users className="w-24 h-24 text-blue-400 opacity-30" />
                </motion.div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-1">Founder & CEO</h3>
                <p className="text-blue-400 text-sm mb-3 font-semibold">Visionary Leader</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Orchestrating the mission to revolutionize digital experiences
                  with creativity and precision engineering.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  animate={floatingAnimation.animate}
                  transition={floatingAnimation.transition}
                  className="relative z-10"
                >
                  <Code className="w-24 h-24 text-purple-400 opacity-30" />
                </motion.div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-1">Tech Director</h3>
                <p className="text-purple-400 text-sm mb-3 font-semibold">Engineering Excellence</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading technical innovation with scalable, performant solutions
                  built to stand the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  animate={floatingAnimation.animate}
                  transition={floatingAnimation.transition}
                  className="relative z-10"
                >
                  <Palette className="w-24 h-24 text-blue-400 opacity-30" />
                </motion.div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-1">Creative Director</h3>
                <p className="text-blue-400 text-sm mb-3 font-semibold">Design Visionary</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Crafting captivating visual experiences that bring brands to
                  life and create meaningful connections.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border-t border-blue-500/10">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Ready to Launch Your Next Big Idea?
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Let&apos;s collaborate to bring your digital vision to life with
              precision, creativity, and passion.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
