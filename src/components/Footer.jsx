import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ajay-Medidi',
      label: 'GitHub',
      color: 'hover:text-[#00C6FF]'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ajay-medidi-42a7942b1',
      label: 'LinkedIn',
      color: 'hover:text-[#0072FF]'
    },
    {
      icon: Mail,
      href: 'mailto:ajaym14355@gmail.com',
      label: 'Email',
      color: 'hover:text-[#FF6B00]'
    }
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white py-8 px-4 mt-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-400">
              © {currentYear} Ajay Medidi. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/5 relative group`}
                aria-label={social.label}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${
                      social.label === 'GitHub' ? '#00C6FF' : 
                      social.label === 'LinkedIn' ? '#0072FF' : '#FF6B00'
                    }20, transparent)`
                  }}
                />
                
                <social.icon size={20} className="relative z-10" />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Code size={16} className="text-blue-400" />
              <span>Full Stack Developer</span>
            </motion.div>
            <span className="hidden md:inline">•</span>
            <span>Kattamuru, Andhra Pradesh, India</span>
            <span className="hidden md:inline">•</span>
            <motion.a
              href="tel:+917997914353"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              +91 7997914353
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;