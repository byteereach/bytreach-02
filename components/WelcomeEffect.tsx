
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

export const WelcomeEffect: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Check local storage to see if user has visited before
    // Using a specific key version to ensure we can reset it if needed in future updates
    const hasVisited = localStorage.getItem('bytereach_visited_v1');
    
    if (!hasVisited) {
      // Mark as visited immediately to prevent double firing in React Strict Mode
      localStorage.setItem('bytereach_visited_v1', 'true');
      setIsVisible(true);
      
      // Generate 50 particles for the explosion
      setParticles(Array.from({ length: 50 }, (_, i) => i));
      
      // Auto hide the welcome message after 6 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  // Brand colors for the confetti
  const colors = ['#E6FF2B', '#00F0FF', '#B026FF', '#ffffff'];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Particle Explosion Container */}
          <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden flex justify-center items-center">
            {particles.map((i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  scale: 0 
                }}
                animate={{ 
                  opacity: 0, 
                  // Random explosion direction covering most of the screen
                  x: (Math.random() - 0.5) * (typeof window !== 'undefined' ? window.innerWidth : 1000) * 0.8, 
                  y: (Math.random() - 0.5) * (typeof window !== 'undefined' ? window.innerHeight : 800) * 0.8, 
                  scale: Math.random() * 1.5 + 0.5,
                  rotate: Math.random() * 360
                }}
                transition={{ 
                  duration: Math.random() * 2 + 1.5, 
                  ease: "easeOut" 
                }}
                className="absolute w-3 h-3 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ 
                  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  // Mix of circles and squares
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px'
                }}
              />
            ))}
          </div>

          {/* Welcome Toast Notification */}
          <motion.div
            initial={{ opacity: 0, y: -100, x: '-50%' }}
            animate={{ opacity: 1, y: 32, x: '-50%' }}
            exit={{ opacity: 0, y: -100, x: '-50%' }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-0 left-1/2 z-[101] bg-deep-teal/90 backdrop-blur-xl border border-neon-yellow/30 text-white pl-5 pr-12 py-4 rounded-2xl shadow-[0_0_40px_rgba(230,255,43,0.2)] flex items-center gap-4 min-w-[320px] max-w-[90vw]"
          >
            <div className="relative shrink-0">
               <div className="absolute inset-0 bg-neon-yellow blur-md opacity-40 animate-pulse"></div>
               <div className="relative p-2.5 bg-deep-teal-dark rounded-xl border border-neon-yellow/50">
                 <Sparkles className="w-6 h-6 text-neon-yellow" />
               </div>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-lg text-white leading-tight">Welcome!</h3>
              <p className="text-sm text-gray-300 mt-0.5">Experience the neon future.</p>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close welcome message"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Progress bar for auto close */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow opacity-70"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
