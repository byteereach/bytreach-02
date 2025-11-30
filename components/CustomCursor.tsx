import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues for high performance updates without re-renders
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation for the follower ring
  // UPDATED PHYSICS: Lower stiffness and adjusted damping for a "buttery smooth" floaty feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Only set visible if it wasn't already to avoid state thrashing
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      const isLink = target.closest('a') || 
                     target.closest('button') || 
                     target.closest('[role="button"]') ||
                     target.classList.contains('cursor-pointer');
      
      // Check for text inputs
      const isText = target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' || 
                     target.isContentEditable;

      setIsHoveringLink(!!isLink);
      setIsHoveringText(!!isText);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Do not render on touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      {/* Main Dot - follows instantly (Raw Mouse Position) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-neon-yellow rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(230,255,43,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Follower Ring - follows with smooth spring physics */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-neon-blue/60"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHoveringLink ? 60 : 35, // Slightly larger expansion for better effect
          height: isHoveringLink ? 60 : 35,
          backgroundColor: isHoveringLink ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
          borderColor: isHoveringLink ? 'rgba(230, 255, 43, 0.5)' : 'rgba(0, 240, 255, 0.4)',
          scale: isHoveringText ? 0.5 : 1, // Shrink on text inputs
          borderWidth: isHoveringLink ? '2px' : '1px'
        }}
        transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.3
        }}
      />
    </>
  );
};