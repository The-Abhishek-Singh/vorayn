"use client";
import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start animation earlier
    const timer = setTimeout(() => setIsVisible(true), 50);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollProgress = Math.min(scrollY / 800, 1);
  const videoOpacity = 1 - scrollProgress * 0.7;
  const videoScale = 1 + scrollProgress * 0.15;
  const videoBlur = scrollProgress * 8;
  const contentOpacity = 1 - Math.pow(scrollProgress, 1.5) * 1.2;
  const contentTranslateY = scrollProgress * 100;
  const contentScale = 1 - scrollProgress * 0.1;

  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          style={{
            opacity: videoOpacity,
            transform: `scale(${videoScale})`,
            filter: `blur(${videoBlur}px)`,
            transition: 'opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out',
            objectPosition: '40% center',
          }}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/about/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Bottom gradient overlay for blending */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, #020714 100%)',
          }}
        />
        
        {/* Scroll-triggered overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020714]"
          style={{
            opacity: scrollProgress * 0.8,
            transition: 'opacity 300ms ease-out',
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div
            className="w-full flex flex-col items-center text-center mt-[-40px]"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslateY}px) scale(${contentScale})`,
              transition: 'opacity 200ms ease-out, transform 200ms ease-out',
            }}
          >
            <h1
              className="font-sans text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-opacity-70"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1) 200ms, transform 1200ms cubic-bezier(0.4, 0, 0.2, 1) 200ms',
              }}
            >
              Turning vision into momentum
            </h1>

            <p
              className="mt-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1) 400ms, transform 1400ms cubic-bezier(0.4, 0, 0.2, 1) 400ms',
              }}
            >
              <span className="font-sans font-normal text-7xl text-white">The road to the</span>
              <br />
              <span className="font-serif italic font-normal text-8xl text-white">perfect loaf</span>
            </p>

            <p
              className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70 max-w-2xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1) 600ms, transform 1400ms cubic-bezier(0.4, 0, 0.2, 1) 600ms',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus
              pellentesque dolor consequat ligula egestas massa gravida. Porttitor
              venenatis enim praesent.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#020714]">
      <HeroSection />
      
    </div>
  );
}

export default App;