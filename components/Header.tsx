import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isHome?: boolean;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isHome = true, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Results', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (!isHome && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 200);
      return;
    }

    const element = document.querySelector(href);
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

  // When scrolled: darker background, blur, shadow, and neon border
  // Transition duration set to 1000ms (1 second) as requested
  const headerClasses = scrolled || !isHome
    ? 'bg-deep-teal/95 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(230,255,43,0.15)]'
    : 'bg-transparent py-5 md:py-7';

  // The neon gradient line at the bottom
  const neonBorderClass = scrolled || !isHome
    ? 'opacity-100 scale-x-100'
    : 'opacity-0 scale-x-0';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-1000 ease-in-out ${headerClasses}`}>
      {/* Neon Gradient Border Bottom - Multi-color Neon Gradient */}
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue via-neon-yellow via-neon-purple to-transparent transition-all duration-1000 transform origin-center ${neonBorderClass} shadow-[0_0_15px_rgba(0,240,255,0.6)]`}></div>

      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-2 cursor-pointer group z-50" 
          onClick={() => handleNavClick('#hero')}
        >
            <div className="relative">
                <div className="absolute inset-0 bg-neon-yellow blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                <div className="relative bg-deep-teal border border-neon-yellow/30 p-1.5 md:p-2 rounded-lg group-hover:border-neon-yellow transition-colors duration-300">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-neon-yellow group-hover:drop-shadow-[0_0_5px_rgba(230,255,43,0.8)] transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 22h20L12 2z" />
                        <path d="M2 22L14.5 7" />
                        <path d="M2 22L17 12" />
                        <path d="M2 22L19.5 17" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white leading-none group-hover:text-neon-yellow transition-colors drop-shadow-sm">
                    BYTEREACH
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-neon-yellow group-hover:text-white transition-colors font-medium">
                    Marketing
                </span>
            </div>
        </div>

        {/* Desktop Nav - Updated for Neon Yellow Fill Effect */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="relative px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(230,255,43,0.3)]"
            >
              {/* Text with color transition - turns dark on yellow background */}
              <span className="relative z-10 group-hover:text-deep-teal font-semibold transition-colors duration-300">
                  {link.name}
              </span>
              
              {/* Background Fill on Hover - Neon Yellow */}
              <span className="absolute inset-0 bg-neon-yellow scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></span>
            </button>
          ))}

          <div className="w-px h-6 bg-white/20 mx-4"></div>

          <motion.button
            onClick={() => handleNavClick('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-transparent border border-neon-yellow text-neon-yellow px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_10px_rgba(230,255,43,0.2)] hover:shadow-[0_0_25px_rgba(230,255,43,0.6)] transition-all overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-deep-teal transition-colors">Book a Call</span>
            <div className="absolute inset-0 bg-neon-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-neon-yellow transition-colors z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-deep-teal/98 backdrop-blur-xl z-40 lg:hidden pt-24 px-6 pb-10 overflow-y-auto flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-display font-bold text-white hover:text-neon-yellow text-left flex items-center justify-between group border-b border-white/5 py-4 transition-colors"
                >
                  {link.name}
                  <span className="text-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity text-lg transform group-hover:translate-x-2 duration-300 shadow-[0_0_10px_rgba(230,255,43,0.5)]">→</span>
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-neon-yellow text-deep-teal px-8 py-4 rounded-xl font-bold text-xl mt-8 shadow-[0_0_20px_rgba(230,255,43,0.3)] hover:bg-white hover:shadow-[0_0_30px_rgba(230,255,43,0.5)] transition-all"
              >
                Book Strategy Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};