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
          logo="/logos/oracle.svg"
          logoBg="bg-white"
          company="Oracle"
          subtitle="Oracle Cloud Infrastructure (OCI)"
          location="Nashville, TN"
          roles={[
            {
              title: "Software Engineering Intern, Cloud Safety Team",
              date: "May 2026 – Aug 2026",
              description:
                `• Built a Django feature for an internal hazard-tracking tool that renders weekly reports into customizable Slack Block Kit messages for executives, with payload validation, three checks before any live post, and 86 unit tests
• Reproduced a bug in an internal deployment system that could leave two copies of an application running after a deploy, then wrote the after-action report proposing a fix and a way to detect it automatically
• Owned triage of 13 infrastructure hazards across more than 10 OCI service teams, chasing each one down to a named owner and evidence that the fix actually worked
• Prototyped a pipeline that scraped and de-identified 1M+ public Oracle Forums posts for an internal harm-review tool, classifying them by harm type and severity to find problems customers never filed tickets about
• Added the harm-review tool's first accessibility support, testing keyboard and screen-reader flows in a CLI browser`
            }
          ]}
          links={["https://www.oracle.com/cloud/"]}
        />

        <ExperienceCard
          logo="/logos/habitat-financial.jpeg"
          company="Habitat Financial"
          location="St. Louis, MO"
          roles={[
            {
              title: "Software Engineer",
              date: "Jul 2025 – Present",
              description:
                `• Lead engineer on JukeHouse.FM, a Django/PostgreSQL publishing platform that automates registering a songwriter's catalog with collection societies instead of filing with each one by hand
• Registered JukeHouse as a publisher with ASCAP, BMI, and The MLC, then built its CWR 2.1/3.0 generator and validator that packages each work into the format those societies require
• Designed its deployment architecture: Docker on Railway with PostgreSQL, Redis, and Celery for asynchronous royalty jobs, and S3-backed media storage`
            },
            {
              title: "Software Development Intern",
              date: "May 2025 – Aug 2025",
              description:
                `• Developed full-stack interfaces (Django, PostgreSQL, HTMX, JavaScript) for album/artist management, revenue tracking, and financial reporting for 120+ client teams across 486K+ track records
• Implemented royalty pipelines that normalize territories, stores, and currencies from raw CSV files, then apply deal terms, splits, and tax to produce artist earnings across 5,000+ statements to date`
            }
          ]}
          links={["https://www.habitat.financial/", "https://jukehouse.fm"]}
        />
      </div>

    </motion.section>
  );
}

function ExperienceCard({ logo, company, subtitle, location, roles, links, logoBg = "bg-accent" }) {
  return (
    <motion.div
      className="p-6 bg-card-bg rounded-xl border border-border-color"
      variants={slideUp}
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-20 h-20 shrink-0 flex items-center justify-center text-background ${logoBg}`}>
          <Image
            src={logo}
            alt={company}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          {subtitle && <p className="text-text-secondary">{subtitle}</p>}
          {location && <p className="text-text-secondary">{location}</p>}
        </div>
      </div>

      <div className="space-y-4 mb-4">
        {roles.map((role, index) => (
          <div key={index}>
            <h4 className="font-bold">{role.title}</h4>
            <p className="text-text-secondary mb-2">{role.date}</p>
            <p className="text-text-secondary whitespace-pre-line">{role.description}</p>
          </div>
        ))}
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {new URL(href).hostname}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
