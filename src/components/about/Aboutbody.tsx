'use client';

import { motion, Variants } from 'framer-motion';
import {
  Rocket,
  Star,
  Sparkles,
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



export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#010817] to-[hsla(222.2,84%,4.9%,1)] text-white overflow-hidden">
     

      <section className="px-4 py-24 bg-gradient-to-r from-blue-900/5 via-cyan-900/5 to-blue-900/5 border-y border-cyan-500/10">
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
                    Today, we&apos;re pioneering AI integration, immersive experiences,
                    and next-gen web solutions. Our commitment to innovation means
                    we&apos;re always exploring what&apos;s next to help our clients lead
                    their industries.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

  

    </main>
  );
}
