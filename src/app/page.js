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
  // Add state for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', 'submitting', or ''
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    if (!formData.email.includes('@')) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      type: 'submitting',
      message: 'Sending your message...'
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setFormStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! I will get back to you soon.'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        // API error
        setFormStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      // Network error
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Contact submission error:', error);
    }
  };
  
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 pt-32">
        {/* Hero Section */}
        <motion.section 
          className="w-full max-w-5xl mx-auto text-center mb-24 py-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          id="home"
        >
          {/* Profile Image with animated border */}
          <motion.div 
            className="relative mx-auto w-44 h-44 mb-8 rounded-full overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-light animate-spin-slow" />
            <div className="absolute inset-[3px] rounded-full bg-background overflow-hidden">
              {/* Replace with your own image */}
              <div className="w-full h-full bg-card-bg flex items-center justify-center">
                <motion.div 
                  className="text-accent w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Image
                  src="/logos/hero-img.jpeg"
                  alt="Georges Gewargis"
                  fill={true}
                  className="object-cover"
                />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={slideUp}
          >
            Hi, I&#39;m <span className="text-gradient relative inline-block">
              Georges Gewargis
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl text-text-secondary mb-8"
            variants={slideUp}
          >
            Computer Science Student & Web Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            variants={slideUp}
          >
            I am currently learning and creating beautiful, responsive websites with smooth animations and modern designs.
            Studying at Washington University in St. Louis, I am passionate about technology and CS as a whole.
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
                I&#39;m a passionate Computer Science student with a love for full-stack development. I&#39;ve built several personal and business projects using a wide range of modern technologies and frameworks.
              </p>
              <p className="text-text-secondary mb-4">
                Outside of coding, I love playing video games, listening to music, skateboarding, basketball & the gym, and spending time with friends. 
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-text-secondary">St. Louis, MO | Chicago, IL</p>
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
              whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
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
              description="Building interactive, animated interfaces with modern technologies."
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
        {/* Education Section */}
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
                Relevant Coursework: Data Structures & Algorithms, Calculus 3, Introduction to Computer Science, Introduction to Computer Engineering
              </p>
            </motion.div>
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
                  alt="Bliss Salon of Glenview"
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
              title="Bliss Salon of Glenview"
              description="Professional salon website built for a real-world client with responsive design, optimized SEO, and secure DNS/SSL integration. Developed with React, Vite, SCSS, and JavaScript."
              tags={["React", "Vite", "SCSS", "JavaScript"]}
              liveLink="https://blissglenview.com"
              githubLink="https://github.com/G-Gewargis/bliss-glenview"
              imageUrl="/logos/bliss-glenview.jpg"
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
              
              {/* Form Status Messages */}
              {formStatus.type && (
                <div 
                  className={`mb-4 p-3 rounded-md ${
                    formStatus.type === 'success' 
                      ? 'bg-green-900/20 text-green-300 border border-green-800' 
                      : formStatus.type === 'error'
                        ? 'bg-red-900/20 text-red-300 border border-red-800'
                        : 'bg-accent/10 text-accent-light border border-accent/30'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                    whileHover={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.3)" }}
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.6)" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                    whileHover={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.3)" }}
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.6)" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                  <motion.textarea 
                    id="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border-color rounded-md px-4 py-2 focus:border-accent focus:outline-none"
                    whileHover={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.3)" }}
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.6)" }}
                  ></motion.textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent hover:bg-accent-light rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", cursor: "pointer" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  disabled={formStatus.type === 'submitting'}
                >
                  {formStatus.type === 'submitting' ? 'Sending...' : 'Send Message'}
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
              <motion.a 
                href="#" 
                className="text-text-secondary hover:text-foreground transition-colors"
                whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-text-secondary hover:text-foreground transition-colors"
                whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#projects" 
                className="text-text-secondary hover:text-foreground transition-colors"
                whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-text-secondary hover:text-foreground transition-colors"
                whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                Contact
              </motion.a>
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
      className="p-3 bg-card-bg rounded-full hover:bg-accent/20"
      whileHover={{ y: -8, scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)", backgroundColor: "rgba(139, 92, 246, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      variants={fadeIn}
    >
      {icon}
    </motion.a>
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

