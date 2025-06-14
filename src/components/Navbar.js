"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoized navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Memoized scroll function
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    
    const targetId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
    const section = document.querySelector(targetId);
    
    if (section) {
      if (isOpen) setIsOpen(false);
      
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - 80, 
          behavior: 'smooth'
        });
      }, isOpen ? 300 : 0);
    }
  }, [isOpen]);

  // Mobile optimized animation variants
  const navVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.2 } }
  };  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled || isOpen ? 'py-3 bg-background/90 backdrop-blur-md' : 'py-5'}`}
         style={{ willChange: 'padding, background-color, border-color', transform: 'translateZ(0)' }}>      {/* Animated border that slides in from the bottom */}
      <div className={`absolute bottom-0 left-0 w-full h-px bg-border-color transition-opacity duration-300 ease-in-out ${scrolled || isOpen ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="container mx-auto px-4 md:px-6">        <div className="flex justify-between items-center min-h-[3rem]"> 
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-gradient">
            Georges Gewargis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">{navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex items-center h-full leading-none" // Added leading-none for consistent baseline
              >
                <motion.div
                  whileHover={{ y: -2, scale: 1.05 }} // Reduced y movement from -3 to -2
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
                  className="text-text-secondary hover:text-white transition-colors duration-200 leading-none"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="/projects/Georges Gewargis - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent hover:bg-accent-light rounded-md text-white flex items-center leading-none" // Added leading-none
              whileHover={{ y: -2, scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }} // Reduced y movement
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-card-bg rounded-lg flex items-center justify-center h-10 w-10 transition-colors duration-200 relative z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - optimized for performance */}
      <AnimatePresence>
        {isOpen && (
          <>            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-x-0 bottom-0 bg-black z-40"
              style={{
                top: '100%',
                willChange: "opacity",
                transform: "translateZ(0)",
                touchAction: "none"
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden bg-card-bg border-b border-border-color relative z-50"
              style={{
                willChange: "opacity, height",
                transform: "translateZ(0)",
                overflowY: "hidden"
              }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-text-secondary hover:text-foreground py-2"
                    >
                      <div className="text-text-secondary hover:text-white">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                  <a 
                    href="/projects/Georges Gewargis - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent hover:bg-accent-light rounded-md w-full text-center text-white"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;