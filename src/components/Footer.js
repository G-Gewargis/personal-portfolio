"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto text-center pb-8">
      <div className="border-t border-border-color pt-8 mt-16">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} Georges Gewargis. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <motion.a 
            href="#" 
            className="text-text-secondary hover:text-foreground transition-colors"
            whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-text-secondary hover:text-foreground transition-colors"
            whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#projects" 
            className="text-text-secondary hover:text-foreground transition-colors"
            whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-text-secondary hover:text-foreground transition-colors"
            whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </footer>
  );
}