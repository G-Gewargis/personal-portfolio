"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animation';
import Image from 'next/image';
import { useState } from 'react';

const TECH_LOGOS = [
  { name: "React", icon: "/logos/react.svg" },
  { name: "Python", icon: "/logos/python.svg" },
  { name: "Java", icon: "/logos/java.svg" },
  { name: "Tailwind CSS", icon: "/logos/tailwind.svg" },
  { name: "JavaScript", icon: "/logos/javascript.svg" },
  { name: "Next.js", icon: "/logos/nextjs.svg" },
  { name: "Node.js", icon: "/logos/nodejs.svg" },
  { name: "HTML", icon: "/logos/html.svg" },
  { name: "CSS", icon: "/logos/css.svg" },
];

export default function SkillsSection() {
  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      id="skills"
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        variants={slideUp}
      >
        My <span className="text-gradient">Skills</span>
      </motion.h2>

      <motion.div variants={staggerContainer}>
        <SkillGroup
          title="Technical Skills"
          items={[
            "Python", "JavaScript", "SQL", "Java", "C", "C++", "HTML/CSS",
            "Django", "React", "Node.js", "Express.js", "Celery", "Redis",
            "PostgreSQL", "MongoDB", "Docker", "AWS (EC2, S3)", "Git", "Pytest",
          ]}
        />
      </motion.div>

      <div className="mt-12">
        <div className="overflow-hidden rounded-lg border border-border-color">
          <LanguagesCarousel />
        </div>
      </div>
    </motion.section>
  );
}

function SkillGroup({ title, items }) {
  return (
    <motion.div
      className="p-6 bg-card-bg rounded-xl border border-border-color"
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      variants={slideUp}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <motion.span
            key={item}
            className="px-3 py-1 text-sm bg-background rounded-full text-text-secondary"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function LanguagesCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated so the track can scroll continuously without a visible seam.
  const track = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <div className="carousel-container py-8 bg-card-bg">
      <div className={`carousel-track ${isPaused ? 'paused' : ''}`}>
        {track.map((tech, index) => (
          <TechLogo
            key={`${tech.name}-${index}`}
            name={tech.name}
            icon={tech.icon}
            setIsPaused={setIsPaused}
          />
        ))}
      </div>
    </div>
  );
}

function TechLogo({ name, icon, setIsPaused }) {
  return (
    <div className="tech-logo-container">
      <motion.div 
        className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-background p-2"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(139, 92, 246, 0.8)",
          backgroundColor: "rgba(139, 92, 246, 0.2)" 
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-contain duration-300 
                   group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
        />
      </motion.div>
      
      {/* Name that appears underneath on hover */}
      <span className="tech-name text-foreground">
        {name}
      </span>
    </div>
  );
}
