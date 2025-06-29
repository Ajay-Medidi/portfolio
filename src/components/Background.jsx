import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  GitBranch, 
  Cloud,
  Layers,
  Terminal,
  Brackets,
  FileCode,
  Cpu,
  Zap,
  Settings,
  Box,
  Palette
} from 'lucide-react';

const Background = () => {
  // Define tech stack icons with their properties
  const techIcons = [
    // React icons
    { Icon: Code, name: 'React', color: '#61DAFB', size: 40, x: '10%', y: '20%' },
    { Icon: Code, name: 'React', color: '#61DAFB', size: 32, x: '85%', y: '70%' },
    
    // Node.js
    { Icon: Server, name: 'Node.js', color: '#339933', size: 36, x: '20%', y: '80%' },
    { Icon: Server, name: 'Node.js', color: '#339933', size: 28, x: '75%', y: '15%' },
    
    // MongoDB
    { Icon: Database, name: 'MongoDB', color: '#47A248', size: 38, x: '15%', y: '50%' },
    { Icon: Database, name: 'MongoDB', color: '#47A248', size: 30, x: '90%', y: '40%' },
    
    // JavaScript
    { Icon: FileCode, name: 'JavaScript', color: '#F7DF1E', size: 34, x: '5%', y: '70%' },
    { Icon: FileCode, name: 'JavaScript', color: '#F7DF1E', size: 42, x: '80%', y: '85%' },
    
    // HTML
    { Icon: Globe, name: 'HTML', color: '#E34F26', size: 36, x: '25%', y: '25%' },
    { Icon: Globe, name: 'HTML', color: '#E34F26', size: 28, x: '70%', y: '60%' },
    
    // CSS
    { Icon: Palette, name: 'CSS', color: '#1572B6', size: 32, x: '35%', y: '75%' },
    { Icon: Palette, name: 'CSS', color: '#1572B6', size: 38, x: '85%', y: '25%' },
    
    // Tailwind CSS
    { Icon: Layers, name: 'Tailwind', color: '#06B6D4', size: 34, x: '45%', y: '15%' },
    { Icon: Layers, name: 'Tailwind', color: '#06B6D4', size: 30, x: '15%', y: '85%' },
    
    // Express
    { Icon: Zap, name: 'Express', color: '#000000', size: 36, x: '55%', y: '65%' },
    { Icon: Zap, name: 'Express', color: '#68D391', size: 32, x: '10%', y: '35%' },
    
    // Git
    { Icon: GitBranch, name: 'Git', color: '#F05032', size: 34, x: '65%', y: '20%' },
    { Icon: GitBranch, name: 'Git', color: '#F05032', size: 28, x: '30%', y: '90%' },
    
    // AWS
    { Icon: Cloud, name: 'AWS', color: '#FF9900', size: 40, x: '75%', y: '45%' },
    { Icon: Cloud, name: 'AWS', color: '#FF9900', size: 32, x: '40%', y: '40%' },
    
    // Additional tech icons
    { Icon: Terminal, name: 'Terminal', color: '#4A5568', size: 30, x: '50%', y: '85%' },
    { Icon: Brackets, name: 'Code', color: '#805AD5', size: 28, x: '90%', y: '10%' },
    { Icon: Settings, name: 'Config', color: '#718096', size: 32, x: '5%', y: '10%' },
    { Icon: Box, name: 'Package', color: '#E53E3E', size: 34, x: '60%', y: '75%' },
    { Icon: Cpu, name: 'Processing', color: '#3182CE', size: 36, x: '25%', y: '60%' }
  ];

  // Animation variants for different movement patterns
  const floatingVariants = {
    float1: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [0, 25, 0],
      x: [0, -20, 0],
      rotate: [0, -8, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float3: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    drift: {
      y: [0, -40, 0],
      x: [0, 25, -10, 0],
      rotate: [0, 10, -5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getRandomVariant = () => {
    const variants = ['float1', 'float2', 'float3', 'drift'];
    return variants[Math.floor(Math.random() * variants.length)];
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {techIcons.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="absolute opacity-15 hover:opacity-30 transition-opacity duration-500"
            style={{
              left: tech.x,
              top: tech.y,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              opacity: 0.15, 
              scale: 1,
              ...floatingVariants[getRandomVariant()]
            }}
            transition={{
              initial: { duration: 2, delay: index * 0.2 }
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.4,
              transition: { duration: 0.3 }
            }}
          >
            <tech.Icon 
              size={tech.size} 
              color={tech.color}
              className="drop-shadow-lg filter"
              style={{
                filter: `drop-shadow(0 0 10px ${tech.color}40)`
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-blue-300/20 font-mono text-sm select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {['</>', '{}', '[]', '()', '=>', '&&', '||', '++', 'const', 'let', 'var', 'function'][Math.floor(Math.random() * 12)]}
          </motion.div>
        ))}
      </div>

      {/* Subtle animated gradients for depth */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`gradient-${i}`}
            className="absolute rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#06B6D4' : '#8B5CF6'
              }60, transparent)`,
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
            }}
            animate={{
              x: [0, 200, -100, 0],
              y: [0, -150, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 60 + 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;