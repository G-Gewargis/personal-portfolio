"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animation';
import Image from 'next/image';

export default function AboutSection() {
  return (
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
            At just the age of three, I stepped into the world of tech by playing Call of Duty with my cousins. I&#39;ve been
            passionate about it ever since, and it&#39;s why I ended up in software. My work has spanned frontend, backend,
            safety engineering, chaos engineering, and distributed cloud systems at Oracle. I care about computer science
            as a discipline, not just web development.
          </p>
          <p className="text-text-secondary mb-4">
          Outside of coding, I enjoy playing video games, listening to music, skateboarding, playing basketball, going to
          the gym, and spending time with friends. I&#39;m a big music head and I&#39;ll listen to just about anything, which
          is part of why building software for the music industry appealed to me. Lately it&#39;s been a lot of Laufey,
          Phoebe Bridgers, and a band called Petite League.
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
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}