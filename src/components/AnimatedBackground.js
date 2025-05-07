"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile devices to simplify animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Mobile-optimized properties
  const mobileTransitionConfig = {
    duration: 30,
    repeat: Infinity,
    repeatType: "reverse"
  };
  
  // Desktop properties
  const desktopTransitionConfig = {
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse"
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs - conditionally rendered based on device */}
      {!isMobile ? (
        // Full animation for desktop
        <>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/20 blur-[100px]"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={desktopTransitionConfig}
            style={{ willChange: "transform" }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-light/20 blur-[120px]"
            animate={{
              x: [0, -70, 70, 0],
              y: [0, 70, -70, 0],
            }}
            transition={desktopTransitionConfig}
            style={{ willChange: "transform" }}
          />
        </>
      ) : (
        // Simplified animation for mobile
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/20 blur-[100px]"
          animate={{ scale: [1, 1.1, 0.9, 1] }}
          transition={mobileTransitionConfig}
          style={{ willChange: "transform" }}
        />
      )}
      
      {/* Static grid pattern - no animation needed */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default AnimatedBackground;