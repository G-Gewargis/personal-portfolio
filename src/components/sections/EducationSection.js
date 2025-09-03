"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animation';
import Image from 'next/image';

export default function EducationSection() {
  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      id="education"
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        variants={slideUp}
      >
        My <span className="text-gradient">Education</span>
      </motion.h2>
      
      <div className="space-y-8">
        <motion.div 
          className="p-6 bg-card-bg rounded-xl border border-border-color"
          variants={slideUp}
          whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent rounded-full text-background">
              <Image 
                src="/logos/WashU.svg"
                alt="Washington University in St. Louis"
                width={80}
                height={80}
                className="object-contain" 
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Washington University in St. Louis</h3>
              <p className="text-text-secondary">Bachelor of Science in Computer Science</p>
              <p className="text-text-secondary">2024 - 2028</p>
            </div>
          </div>
          <p className="text-text-secondary">
            Relevant Coursework: Data Structures & Algorithms, Rapid Prototype Development & Creative Programming, Web Development, Discrete Math, Calculus 3
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}