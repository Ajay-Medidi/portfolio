import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const Header = () => {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const name = "Ajay Medidi";

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Photo Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8, type: "spring", damping: 15 }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            }}
            className="relative"
          >
            {/* Animated border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>
            
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img
                  src="/photo.jpg"
                  alt="Ajay Medidi - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to a professional placeholder if the image fails to load
                    e.currentTarget.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{
                  background: `linear-gradient(45deg, 
                    hsl(${200 + index * 15}, 70%, 60%), 
                    hsl(${250 + index * 10}, 80%, 70%)
                  )`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 360,
                  transition: { duration: 0.6 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #ffffff, #60a5fa, #a78bfa, #ffffff)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Full Stack Developer | Cloud Enthusiast | AI Explorer
          </motion.h2>
        </motion.div>

        {/* Resume View Button - Prominent CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.a
            href="https://drive.google.com/file/d/1fG1QmZxNDurBteojIGBJxmH9a35bMAV_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ExternalLink size={24} />
            </motion.div>
            View Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Mail, text: 'ajaym14355@gmail.com', href: 'mailto:ajaym14355@gmail.com' },
            { icon: Phone, text: '+91 7997914353', href: 'tel:+917997914353' },
            { icon: Github, text: 'GitHub', href: 'https://github.com/Ajay-Medidi' },
            { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/ajay-medidi-42a7942b1' },
          ].map(({ icon: Icon, text, href }, index) => (
            <motion.a
              key={text}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon size={20} />
              <span className="hidden sm:inline">{text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;