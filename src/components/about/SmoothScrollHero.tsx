"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-gradient-to-b from-[#020714] to-[hsla(222.2,84%,4.9%,1)]">
      <Hero />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-[hsla(222.2,_84%,_4.9%,_0)] to-[hsla(222.2,_84%,_4.9%,_1)]" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  // Text moves with background
  const textY = useTransform(scrollY, [0, 1500], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 800, 1500], [1, 1, 0]);
  const textScale = useTransform(scrollY, [0, 1500], [1, 0.8]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full relative overflow-hidden"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(/about/mainAbout.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Cosmic overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/40" />
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{
          y: textY,
          opacity: textOpacity,
          scale: textScale,
        }}
      >
        <div className="text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Cosmic glow effect */}
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 animate-pulse" />
            
            <h2 className="relative text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] text-white">
              <span className="block mb-2 text-xs sm:text-sm md:text-base tracking-[0.3em] text-blue-200/80 font-extralight" style={{ fontFamily: 'Georgia, serif' }}>
                DISCOVER
              </span>
              <span 
                className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,197,253,0.5)]"
                style={{ 
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontWeight: 300,
                  letterSpacing: '0.15em'
                }}
              >
                The Core of
              </span>
              <span 
                className="block mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(167,139,250,0.6)]"
                style={{ 
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontWeight: 300,
                  letterSpacing: '0.2em'
                }}
              >
                CodeAstera
              </span>
            </h2>
            
            {/* Decorative line */}
            <motion.div 
              className="mt-6 sm:mt-8 mx-auto w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/about/About1.webp"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        title="Innovation First"
        description="Creating solutions that push boundaries and redefine possibilities"
      />
      <ParallaxImg
        src="/about/Aboutwe.jpg"  
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-2/4"
        title="Team Excellence"
        description="Collaboration and expertise driving every project forward"
      />
      <ParallaxImg
        src="/about/About3.webp"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        title="Client Focus"
        description="Your vision transformed into powerful digital experiences"
      />
      <ParallaxImg
        src="/about/About4.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-0 sm:ml-12 md:ml-24 w-full sm:w-3/4 md:w-2/3 lg:w-5/12"
        title="Future Ready"
        description="Building tomorrow's technology with today's innovation"
      />
    </div>
  );
};

interface ParallaxImgProps {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
  title?: string;
  description?: string;
}

const ParallaxImg = ({ className, alt, src, start, end, title, description }: ParallaxImgProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      className={`relative ${className} mb-12 sm:mb-16 md:mb-20`}
      ref={ref}
      style={{ transform, opacity }}
    >
      {/* Image with overlay gradient */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text overlay - now inside the same container */}
        {(title || description) && (
          <div className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8">
            <div className="text-white max-w-full">
              {title && (
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight leading-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {title}
                </h3>
              )}
              {description && (
                <p 
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-md font-medium"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};