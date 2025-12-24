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
          logo="https://www.studlife.com/wp-content/themes/student-life-2019/img/logo-studentlife-white.svg"
          company="Student Life (Studlife Newspaper)"
          title="Web Development Lead"
          date="Jan 2026 – Present"
          description={
            `• Manage and maintain the newspaper’s website (WordPress, custom PHP)
• Lead UI redesign to modernize layout and improve UX
• Implement updates and troubleshoot backend for smooth publishing`
          }
          website="https://www.studlife.com/"
        />

        <ExperienceCard
          logo="/logos/jukehouse.png"
          company="JukeHouse Music Publishing"
          title="Co-Founder & Lead Developer"
          date="July 2025 - Present"
          description={
            `• Lead full-stack development of JukeHouse.fm (Django, PostgreSQL)
• Built RESTful APIs for royalty tracking and songwriter management
• Integrated with global music organizations for automated royalty collection`
          }
          website="https://jukehouse.fm"
        />

        <ExperienceCard
          logo="/logos/habitat-financial.jpeg"
          company="Habitat Financial"
          title="Software Development Intern"
          date="June 2025 - August 2025"
          description={
            `• Developed full-stack features for royalty processing (Django, PostgreSQL, HTMX)
• Built responsive interfaces for artist and revenue management
• Implemented data pipelines for complex royalty calculations
• Contributed to API integration with music platforms and payment systems`
          }
          website={"https://www.habitat.financial/"}
        />

        <ExperienceCard
          logo="/logos/bliss-glenview.jpg"
          company="Bliss Salon of Glenview"
          title="Web Developer"
          date="April 2025 - Present"
          description={
            `• Designed and built responsive salon website (React, Vite, SCSS)
• Optimized SEO with sitemap, robots.txt, and structured data
• Integrated custom DNS/SSL for secure deployment`
          }
          website="https://blissglenview.com"
        />
      </div>

    </motion.section>
  );
}

function ExperienceCard({ logo, title, company, date, description, website }) {
  // Add a red background for the Studlife SVG logo only
  const isStudlifeLogo = logo === "https://www.studlife.com/wp-content/themes/student-life-2019/img/logo-studentlife-white.svg";
  return (
    <motion.div
      className="p-6 bg-card-bg rounded-xl border border-border-color"
      variants={slideUp}
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-20 h-20 flex items-center justify-center text-background ${isStudlifeLogo ? 'bg-red-600' : 'bg-accent'}`}>
          <Image
            src={logo}
            alt={company}
            width={70}
            height={70}
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