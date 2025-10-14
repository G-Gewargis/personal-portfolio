"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animation';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
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
          title="Story Blog"
          description="A custom multi-user blogging platform built from scratch with PHP. Implemented user authentication, post management, and deployed on an AWS EC2 instance using Apache on Linux, gaining hands-on experience in server configuration and web hosting."
          tags={["PHP", "MySQL", "Apache", "AWS Linux (EC2)"]}
          liveLink="https://storyblog.georgesgewargis.com"
          githubLink="https://github.com/G-Gewargis/story-blog"
          imageUrl="/logos/story-blog.png"
        />
        
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio website showcasing my projects and skills. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations."
          tags={["Next.js", "Tailwind CSS", "React", "Framer Motion"]}
          liveLink="georgesgewargis.com"
          githubLink="https://github.com/G-Gewargis/personal-portfolio"
          imageUrl="/projects/portfolio.png"
        />

        <ProjectCard 
          title="Pomodoro App"
          description="Built using HTML, CSS, and JavaScript, a productivity web app implementing the Pomodoro Technique with customizable work and break timers. Integrated task management features for adding, viewing, and managing tasks."
          tags={["HTML", "CSS", "JavaScript"]}
          liveLink="https://g-gewargis.github.io/pomodoro-app/"
          githubLink="https://github.com/G-Gewargis/pomodoro-app"
          imageUrl={"/projects/pomodoro.png"}
        />
        
        <ProjectCard 
          title="NutriScan"
          description="Advanced Streamlit application leveraging image analysis to assess nutritional content of food. Implemented API integrations with OpenAI and Foodvisor for personalized recipe suggestions and daily caloric intake calculations."
          tags={["Python", "Streamlit", "OpenAI API", "Foodvisor API"]}
          githubLink="https://github.com/G-Gewargis/NutriScan"
          imageUrl={"/projects/nutriscan.jpeg"}
        />
        
        <ProjectCard 
          title="ML Recidivism Predictor"
          description="Designed and implemented a fair and ethical machine learning model to predict recidivation rates with 80% accuracy using Florida county jail data. Analyzed 11,000-row dataset using Pandas, Scikit-learn neural networks, and NumPy."
          tags={["Python", "Pandas", "Scikit-learn", "NumPy"]}
          imageUrl={"/projects/recidivism.png"}
        />
      </motion.div>
    </motion.section>
  );
}

function ProjectCard({ title, description, tags, imageUrl, liveLink, githubLink }) {
  return (
    <motion.div 
      className="group rounded-xl overflow-hidden border border-border-color hover:border-accent/50 bg-card-bg flex flex-col"
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.98 }}
      variants={slideUp}
    >
      <div className="relative h-48">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-contain translate-y-3 transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1 text-sm bg-background rounded-full"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-auto">
          {liveLink && (
            <motion.a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-accent rounded-md hover:bg-accent-light text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
          )}
          {githubLink && (
            <motion.a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-card-bg border border-border-color rounded-md hover:border-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}