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
          logo="/logos/jukehouse.png"
          company="JukeHouse Music Publishing"
          title="Co-Founder & Lead Developer"
          date="July 2025 - Present"
          description={`Currently leading the development of JukeHouse, a music publishing administration platform that empowers songwriters to collect royalties globally while retaining 100% ownership of their rights. Designing and building a full-stack system to handle worldwide music publishing administration, royalty collection, and songwriter account management.

Key Contributions:

- Architecting and implementing the platform using Django, PostgreSQL, and modern web technologies to provide a robust, scalable backend and user-friendly frontend

- Designing scalable database schemas and building RESTful APIs with Django REST Framework (DRF) to integrate with global collection societies, performance rights organizations (PROs), and digital service providers for automated royalty tracking and distribution

- Building comprehensive user dashboards and reporting systems that deliver real-time earnings analytics, detailed monthly reports, and transparent royalty breakdowns for thousands of songwriters worldwide

- Managing technical decisions across the platform, including system architecture, API design, and database optimizations, while coordinating product requirements and implementation priorities
        `}

        />

        <ExperienceCard 
          logo="/logos/habitat-financial.jpeg"
          company="Habitat Financial"
          title="Software Development Intern"
          date="June 2025 - August 2025"
          description={`Contributed to Habitat Financial, a sophisticated Django-based platform that revolutionizes how music industry professionals manage royalties, deals, and payments. Developed a comprehensive system that processed royalties from several sources and distributors.

Key Contributions:
- Developed full-stack features using Django, HTMX/Bootstrap CSS, and JavaScript for royalty statement processing and payee management improving processing efficiency by 30%
- Built responsive web interfaces for album/artist management, revenue stream tracking, and financial reporting, used by dozens of labels and hundreds of artists
- Implemented data processing pipelines that handle complex royalty calculations in 10+ currencies across 20+ territories, ensuring accuracy and compliance
- Contributed to API development for seamless integration with external music platforms and payment systems

The platform processes millions in royalties and provides comprehensive analytics for artists, labels, and music professionals. Through this role, I gained hands-on experience with enterprise-level Django development, database optimization, and music industry business logic.`}
        />


        
        <ExperienceCard 
          logo="/logos/bliss-glenview.jpg"
          company="Bliss Salon of Glenview"
          title="Web Developer"
          date="April 2025 - Present"
          description="Designed and built a fully responsive salon website using React, Vite, SCSS, and JavaScript. Optimized SEO with sitemap, robots.txt, Open Graph metadata, and JSON-LD structured data. Integrated custom DNS/SSL with Vercel and GoDaddy to enable secure public deployment."
          website="https://blissglenview.com"
        />

        <ExperienceCard
          logo="/logos/Inspirit-AI.png"
          company="Inspirit AI"
          title="Student AI Scholar"
          date="June 2023 - August 2023"
          description="I completed the Inspirit AI Scholars Program, where I gained a strong foundation in Python, artificial intelligence, and machine learning. Through hands-on projects, I explored natural language processing (NLP) and convolutional neural networks (CNNs) while also studying the ethical implications of AI, particularly in criminal justice."
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
      <p className="text-text-secondary mb-4 whitespace-pre-line">{description}</p>
      
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