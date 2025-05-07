"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animation';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto text-center mb-24 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      id="home"
    >
      {/* Profile Image with animated border */}
      <motion.div 
        className="relative mx-auto w-44 h-44 mb-8 rounded-full overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-light animate-spin-slow" />
        <div className="absolute inset-[3px] rounded-full bg-background overflow-hidden">
          <div className="w-full h-full bg-card-bg flex items-center justify-center">
            <motion.div 
              className="text-accent w-full h-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Image
                src="/logos/hero-img.jpeg"
                alt="Georges Gewargis"
                fill={true}
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6"
        variants={slideUp}
      >
        Hi, I&#39;m <span className="text-gradient relative inline-block">
          Georges Gewargis
        </span>
      </motion.h1>
      
      <motion.h2 
        className="text-xl md:text-3xl text-text-secondary mb-8"
        variants={slideUp}
      >
        Computer Science Student & Web Developer
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        variants={slideUp}
      >
        I am currently learning and creating beautiful, responsive websites with smooth animations and modern designs.
        Studying at Washington University in St. Louis, I am passionate about technology and CS as a whole.
      </motion.p>
      
      {/* Social Links */}
      <motion.div 
        className="flex justify-center gap-4 mb-12"
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <SocialLink href="https://github.com/G-Gewargis" icon={<IconBrandGithub size={24} />} />
        <SocialLink href="https://www.linkedin.com/in/georges-gewargis" icon={<IconBrandLinkedin size={24} />} />
        <SocialLink href="mailto:g.georges@wustl.edu" icon={<IconMail size={24} />} />
      </motion.div>
    </motion.section>
  );
}

// Private variants to avoid importing entire staggerContainer
const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SocialLink({ href, icon }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-card-bg rounded-full hover:bg-accent/20"
      whileHover={{ y: -8, scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", backgroundColor: "rgba(139, 92, 246, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      variants={fadeIn}
    >
      {icon}
    </motion.a>
  );
}