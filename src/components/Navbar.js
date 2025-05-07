"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll to section function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Strip the # from the sectionId if present to ensure proper selector format
    const targetId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
    const section = document.querySelector(targetId);
    
    if (section) {
      // Close mobile menu if open
      if (isOpen) setIsOpen(false);
      
      // Add a small delay on mobile to allow the menu to close
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - 80, 
          behavior: 'smooth'
        });
      }, isOpen ? 300 : 0); // Small delay only if menu was open
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/90 backdrop-blur-md border-b border-border-color' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="font-bold text-xl text-gradient">
              Georges Gewargis
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
                  style={{ display: "inline-block" }}
                  className="text-text-secondary hover:text-white"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="/projects/Georges Gewargis - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent hover:bg-accent-light rounded-md inline-block text-white"
              whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)", cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              Resume
            </motion.a>
          </motion.div>

          {/* Mobile Navigation Button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-card-bg rounded-lg"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay behind the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-card-bg border-b border-border-color relative z-50"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-text-secondary hover:text-foreground transition-colors py-2"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                      style={{ display: "inline-block" }}
                      className="text-text-secondary hover:text-white"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.a 
                  href="/projects/Georges Gewargis - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent hover:bg-accent-light rounded-md w-full transition-all inline-block text-center text-white"
                  whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;