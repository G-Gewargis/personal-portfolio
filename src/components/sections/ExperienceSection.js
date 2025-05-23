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
        <ExperienceCard 
          logo="/logos/habitat-financial.jpeg"
          company="Habitat Financial"
          title="Software Development Intern"
          date="June 2025 - August 2025"
          description="Selected to work directly with the CTO and CEO of a music-tech startup to develop and deploy innovative software solutions for the independent music industry. Assisting in writing and debugging production-level code, participating in code reviews, and contributing to feature development, bug fixes, and product improvements. Gaining hands-on experience with modern web development tools and agile startup workflows."
        />

        <ExperienceCard 
          logo="/logos/engineering-test-kitchen.png"
          company="Engineering Test Kitchen"
          title="Data Engineer Intern"
          date="May 2025"
          description="Assisting in the development of a machine learning model for image classification and object counting at Independent Stave Company. Contributing to the research, construction, and tuning of a system aimed at improving inventory management and reducing operational costs by leveraging practical AI solutions."
        />
        
        <ExperienceCard 
          logo="/logos/bliss-glenview.jpg"
          company="Bliss Salon of Glenview"
          title="Web Developer"
          date="April 2025 - Present"
          description="Designed and built a fully responsive salon website using React, Vite, SCSS, and JavaScript. Optimized SEO with sitemap, robots.txt, Open Graph metadata, and JSON-LD structured data. Integrated custom DNS/SSL with Vercel and GoDaddy to enable secure public deployment."
          website="https://blissglenview.com"
        />
      
      </div>
    </motion.section>
  );
}

function ExperienceCard({ logo, title, company, date, description, website }) {
  return (
    <motion.div 
      className="p-6 bg-card-bg rounded-xl border border-border-color"
      variants={slideUp}
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-accent rounded-full text-background">
          <Image 
            src={logo}
            alt={company}
            width={80}
            height={80}
            className="object-contain" 
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title} at {company}</h3>
          <p className="text-text-secondary">{date}</p>
        </div>
      </div>
      <p className="text-text-secondary mb-4">{description}</p>
      
      {website && (
        <p className="text-text-secondary">
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            {new URL(website).hostname}
          </a>
        </p>
      )}
    </motion.div>
  );
}