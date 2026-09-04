"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animation';
import { IconCode, IconDatabase, IconCloud } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

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
        What I <span className="text-gradient">Do</span>
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        <SkillCard 
          icon={<IconCode size={32} />}
          title="Full-Stack Development"
          description="I've built the whole thing more than once — Django or Node on the back, React on the front, and all the wiring in between. I don't really have a favorite layer."
        />
        
        <SkillCard 
          icon={<IconDatabase size={32} />}
          title="Backend & Data"
          description="Most of what I work on touches money or legal filings, so close enough doesn't cut it. That means schema design, validation, and a lot of unglamorous checks that catch bad data before anyone sees it."
        />
        
        <SkillCard 
          icon={<IconCloud size={32} />}
          title="Infrastructure & Deployment"
          description="I like knowing how my code actually runs. Docker, Celery, Redis, Postgres, a box on AWS or Railway — I'd rather set it up myself than hand it off and hope."
        />
      </motion.div>

      {/* Technical Skills */}
      <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer}>
        <SkillGroup
          title="Languages"
          items={["Python", "JavaScript", "SQL", "Java", "C", "C++", "HTML/CSS"]}
        />
        <SkillGroup
          title="Frameworks & Tools"
          items={[
            "Django", "React", "Node.js", "Express.js", "Celery", "Redis",
            "PostgreSQL", "MongoDB", "Docker", "AWS (EC2, S3)", "Git", "Pytest",
          ]}
        />
      </motion.div>

      {/* Programming Languages Carousel */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 text-center">Programming Languages</h3>
        <div className="overflow-hidden rounded-lg border border-border-color">
          <LanguagesCarousel />
        </div>
      </div>
    </motion.section>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <motion.div 
      className="p-6 bg-card-bg rounded-xl border border-border-color hover:border-accent/50"
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      variants={slideUp}
    >
      <motion.div 
        className="text-accent mb-4"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
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
  
  return (
    <div className="carousel-container py-8 bg-card-bg">
      <div className={`carousel-track ${isPaused ? 'paused' : ''}`}>
        {/* First set of logos */}
        <TechLogo name="React" icon="/logos/react.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Python" icon="/logos/python.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Java" icon="/logos/java.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Tailwind CSS" icon="/logos/tailwind.svg" setIsPaused={setIsPaused} />
        <TechLogo name="JavaScript" icon="/logos/javascript.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Next.js" icon="/logos/nextjs.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Node.js" icon="/logos/nodejs.svg" setIsPaused={setIsPaused} />
        <TechLogo name="HTML" icon="/logos/html.svg" setIsPaused={setIsPaused} />
        <TechLogo name="CSS" icon="/logos/css.svg" setIsPaused={setIsPaused} />
        
        {/* Duplicated set for continuous scrolling */}
        <TechLogo name="React" icon="/logos/react.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Python" icon="/logos/python.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Java" icon="/logos/java.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Tailwind CSS" icon="/logos/tailwind.svg" setIsPaused={setIsPaused} />
        <TechLogo name="JavaScript" icon="/logos/javascript.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Next.js" icon="/logos/nextjs.svg" setIsPaused={setIsPaused} />
        <TechLogo name="Node.js" icon="/logos/nodejs.svg" setIsPaused={setIsPaused} />
        <TechLogo name="HTML" icon="/logos/html.svg" setIsPaused={setIsPaused} />
        <TechLogo name="CSS" icon="/logos/css.svg" setIsPaused={setIsPaused} />
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