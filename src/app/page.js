"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconCode,
  IconPalette,
  IconDeviceDesktop,
  IconBriefcase,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 pt-32">
        {/* Hero Section */}
        <motion.section 
          className="w-full max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          id="home"
        >
          {/* Profile Image with animated border */}
          <motion.div 
            className="relative mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-light animate-spin-slow" />
            <div className="absolute inset-[3px] rounded-full bg-background overflow-hidden">
              {/* Replace with your own image */}
              <div className="w-full h-full bg-card-bg flex items-center justify-center text-accent">
                <span className="text-2xl font-bold">YN</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={slideUp}
          >
            Hi, I'm <span className="text-gradient">Georges Gewargis</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-text-secondary mb-6"
            variants={slideUp}
          >
            Computer Science Student & Web Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-2xl mx-auto mb-8"
            variants={slideUp}
          >
            I am currently learning and creating beautiful, responsive websites with smooth animations and modern designs.
            Studying at Washington University in St. Louis [Class of '28'], I am passionate about technology and CS as a whole.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <SocialLink href="https://github.com/G-Gewargis" icon={<IconBrandGithub size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/georges-gewargis" icon={<IconBrandLinkedin size={24} />} />
            <SocialLink href="mailto:g.georges@wustl.edu" icon={<IconMail size={24} />} />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="w-full max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          id="about"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={slideUp}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={slideUp}
              className="order-2 md:order-1"
            >
              <h3 className="text-xl font-bold mb-4">Who am I?</h3>
              <p className="text-text-secondary mb-4">
                I'm a passionate Computer Science student with a passionate for full-stack development. I've worked on several personal and business-based projects over the span of many years, incorporating modern technologies and frameworks.
              </p>
              <p className="text-text-secondary mb-4">
                Outside of coding, I love playing video games, skateboarding, basketball & the gym, and spending time with friends. 
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-text-secondary">Chicago, IL</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-text-secondary">g.georges@wustl.edu</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden border border-border-color bg-card-bg h-60 md:h-80 relative order-1 md:order-2"
              variants={fadeIn}
            >
                <Image
                  src="/profile.png"
                  alt="Georges Gewargis"
                  fill="fill"
                  className="object-cover rounded-xl"
                />
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
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
              title="Web Development"
              description="Creating responsive websites using React, Next.js, and modern CSS. Strong focus on performance and clean code."
            />
            
            <SkillCard 
              icon={<IconPalette size={32} />}
              title="UI/UX Design"
              description="Designing intuitive and beautiful user interfaces with attention to detail and user experience."
            />
            
            <SkillCard 
              icon={<IconDeviceDesktop size={32} />}
              title="Frontend Engineering"
              description="Building interactive, animated interfaces with modern technologies like Framer Motion and GSAP."
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

        {/* Experience Section */}
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
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent rounded-full text-background">
                  <IconBriefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Web Developer at Bliss Salon of Glenview</h3>
                  <p className="text-text-secondary">April 2025 - Present</p>
                </div>
              </div>
              <p className="text-text-secondary">
                Brief description of your role and achievements. Focus on impact and technologies used.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card-bg rounded-xl border border-border-color"
              variants={slideUp}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent rounded-full text-background">
                  <IconBriefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Internship Title at Company</h3>
                  <p className="text-text-secondary">Jun 2022 - Aug 2022</p>
                </div>
              </div>
              <p className="text-text-secondary">
                Brief description of your internship role and projects. Highlight learning and contributions.
              </p>
            </motion.div>
          </div>
        </motion.section>
        {/* Projects Section */}
        <motion.section 
          className="w-full max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          id="projects"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={slideUp}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <ProjectCard 
              title="Project One"
              description="A modern web application with sleek animations and responsive design."
              tags={["React", "Framer Motion", "Tailwind CSS"]}
            />
            
            <ProjectCard 
              title="Project Two"
              description="A beautiful portfolio website showcasing creative design and smooth interactions."
              tags={["Next.js", "GSAP", "CSS Modules"]}
            />
            
            <ProjectCard 
              title="Project Three"
              description="An e-commerce platform with advanced filtering and search capabilities."
              tags={["React", "Node.js", "MongoDB"]}
            />
            
            <ProjectCard 
              title="Project Four"
              description="A mobile-first dashboard with real-time data visualization and analytics."
              tags={["Vue.js", "D3.js", "Firebase"]}
            />
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        

        {/* Contact Section */}
        <motion.section 
          className="w-full max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          id="contact"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            variants={slideUp}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={slideUp}>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-text-secondary mb-6">
                Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-card-bg rounded-full text-accent">
                    <IconMail size={20} />
                  </div>
                  <p className="text-text-secondary">g.georges@wustl.edu</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-card-bg rounded-full text-accent">
                    <IconBrandLinkedin size={20} />
                  </div>
                  <p className="text-text-secondary">linkedin.com/in/georges-gewargis</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-card-bg rounded-full text-accent">
                    <IconBrandGithub size={20} />
                  </div>
                  <p className="text-text-secondary">github.com/G-Gewargis</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-card-bg p-6 rounded-xl border border-border-color"
              variants={slideUp}
            >
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent hover:bg-accent-light rounded-md font-medium transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto text-center pb-8">
          <div className="border-t border-border-color pt-8 mt-16">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} Georges Gewargis. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-text-secondary hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-text-secondary hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-text-secondary hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-text-secondary hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Helper Components
function SocialLink({ href, icon }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-card-bg rounded-full hover:bg-accent/20 transition-all"
      whileHover={{ y: -5 }}
      variants={fadeIn}
    >
      {icon}
    </motion.a>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <motion.div 
      className="p-6 bg-card-bg rounded-xl border border-border-color hover:border-accent/50 transition-all"
      whileHover={{ y: -10 }}
      variants={slideUp}
    >
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ title, description, tags, imageUrl }) {
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden border border-border-color hover:border-accent/50 transition-all bg-card-bg"
      whileHover={{ y: -10 }}
      variants={slideUp}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm bg-background rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LanguagesCarousel() {
  return (
    <div className="carousel-container py-8 bg-card-bg">
      <div className="carousel-track">
        {/* First set of logos */}
        <TechLogo name="React" icon="/logos/react.svg" />
        <TechLogo name="Python" icon="/logos/python.svg" />
        <TechLogo name="Java" icon="/logos/java.svg" />
        <TechLogo name="Tailwind CSS" icon="/logos/tailwind.svg" />
        <TechLogo name="JavaScript" icon="/logos/javascript.svg" />
        <TechLogo name="Next.js" icon="/logos/nextjs.svg" />
        <TechLogo name="Node.js" icon="/logos/nodejs.svg" />
        <TechLogo name="HTML" icon="/logos/html.svg" />
        <TechLogo name="CSS" icon="/logos/css.svg" />
        
        {/* Duplicated set for continuous scrolling */}
        <TechLogo name="React" icon="/logos/react.svg" />
        <TechLogo name="Python" icon="/logos/python.svg" />
        <TechLogo name="Java" icon="/logos/java.svg" />
        <TechLogo name="Tailwind CSS" icon="/logos/tailwind.svg" />
        <TechLogo name="JavaScript" icon="/logos/javascript.svg" />
        <TechLogo name="Next.js" icon="/logos/nextjs.svg" />
        <TechLogo name="Node.js" icon="/logos/nodejs.svg" />
        <TechLogo name="HTML" icon="/logos/html.svg" />
        <TechLogo name="CSS" icon="/logos/css.svg" />
      </div>
    </div>
  );
}

function TechLogo({ name, icon }) {
  return (
    <div className="tech-logo-container">
      <motion.div 
        className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-background p-2"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(139, 92, 246, 0.8)",
          backgroundColor: "rgba(139, 92, 246, 0.2)" 
        }}
      >
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-contain transition-all duration-300 
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

