"use client";

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animation';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useState } from 'react';

export default function ContactSection() {
  // Contact form state
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
  );
}