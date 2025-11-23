import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateResults?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateResults }) => {
  const badgeText = "Let's build something big";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-deep-teal">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[120vw] md:w-[50vw] h-[120vw] md:h-[50vw] bg-neon-blue opacity-[0.15] rounded-full blur-[80px] md:blur-[100px]"
        ></motion.div>
        
        {/* Bottom Right Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[10%] -right-[10%] w-[120vw] md:w-[50vw] h-[120vw] md:h-[50vw] bg-neon-purple opacity-[0.1] rounded-full blur-[80px] md:blur-[100px]"
        ></motion.div>
        
        {/* Center Yellow Accent */}
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-neon-yellow opacity-[0.05] rounded-full blur-[80px] md:blur-[100px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full mb-8 md:mb-10 border border-neon-blue/30 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-neon-blue"></span>
            </span>
            <span className="text-neon-blue text-xs md:text-sm font-bold tracking-wide uppercase">
              {badgeText}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg"
          >
            Scale Your Brand with <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-yellow">
                Intelligent Growth
              </span>
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
                className="absolute bottom-2 left-0 h-3 md:h-6 bg-neon-blue/10 blur-md -z-10 rounded-full"
              ></motion.div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            Bridging the gap between data and creativity. A full-service agency obsessed with ROI, aesthetic excellence, and sustainable scaling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
          >
            <motion.a
              href="#contact"
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-neon-blue text-deep-teal font-bold text-base md:text-lg rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-3"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            
            <motion.button
              onClick={onNavigateResults}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-semibold text-base md:text-lg rounded-full hover:bg-white/10 hover:border-neon-yellow/50 transition-all flex items-center justify-center gap-3"
            >
              View Our Results
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-neon-yellow" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};