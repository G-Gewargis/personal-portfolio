"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animation';
import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      id="experience"
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        variants={slideUp}
      >
        My <span className="text-gradient">Experience</span>
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
                src="/logos/engineering-test-kitchen.png"
                alt="Engineering Test Kitchen"
                width={80}
                height={80}
                className="object-contain" 
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Incoming Data Engineer Intern at Engineering Test Kitchen</h3>
              <p className="text-text-secondary">May 2025</p>
            </div>
          </div>
          <p className="text-text-secondary mb-4">
            Assisting in the development of a machine learning model for image classification and object counting at Independent Stave Company. Contributing to the research, construction, and tuning of a system aimed at improving inventory management and reducing operational costs by leveraging practical AI solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-card-bg rounded-xl border border-border-color"
          variants={slideUp}
          whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent rounded-full text-background">
              <Image 
                src="/logos/bliss-glenview.jpg"
                alt="Bliss Salon of Glenview"
                width={80}
                height={80}
                className="object-contain" 
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Developer at Bliss Salon of Glenview</h3>
              <p className="text-text-secondary">April 2025 - Present</p>
            </div>
          </div>
          <p className="text-text-secondary mb-4">
            Designed and built a fully responsive salon website using React, Vite, SCSS, and JavaScript. Optimized SEO with sitemap, robots.txt, Open Graph metadata, and JSON-LD structured data. Integrated custom DNS/SSL with Vercel and GoDaddy to enable secure public deployment.
          </p>
          <p className="text-text-secondary">
            <a href="https://blissglenview.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              blissglenview.com
            </a>
          </p>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-card-bg rounded-xl border border-border-color"
          variants={slideUp}
          whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent rounded-full text-background">
              <Image 
                src="/logos/bliss-winnetka.jpg"
                alt="Bliss Salon of Winnetka"
                width={80}
                height={80}
                className="object-contain" 
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Data Analyst at Bliss Salon of Winnetka</h3>
              <p className="text-text-secondary">2021 - 2024</p>
            </div>
          </div>
          <p className="text-text-secondary">
            Managed customer service data, analyzing trends that led to a 30% increase in satisfaction ratings. Tracked and recorded financial transactions, monitoring revenue trends for services and product sales totaling thousands of dollars.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}