import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Server, Database, Wrench, Brain, ChevronRight, Zap } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C'],
    preview: ['Python', 'Java', 'JavaScript']
  },
  {
    category: 'Frontend',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
    preview: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth'],
    preview: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Database',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    preview: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-yellow-500 to-orange-500',
    skills: ['Git', 'AWS', 'Docker', 'Kubernetes', 'Postman', 'VS Code'],
    preview: ['Git', 'AWS', 'Docker']
  },
  {
    category: 'Concepts',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'Cloud Computing', 'DevOps'],
    preview: ['Data Structures', 'Algorithms', 'System Design']
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background with Floating Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section with Badge and Gradient Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Technical Arsenal Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <motion.div
              className="px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-md relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative z-10 flex items-center gap-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-bold text-sm uppercase tracking-wider">
                  Technical Arsenal
                </span>
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
            </motion.div>
          </motion.div>

          {/* Large Gradient Title */}
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #8B5CF6, #EC4899, #06B6D4, #10B981, #F59E0B, #EF4444, #8B5CF6)',
              backgroundSize: '400% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills & Technologies
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive technical expertise across the full development stack, 
            from modern frontend frameworks to scalable cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Interactive Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((skillGroup, index) => {
            const isSelected = selectedCategory === skillGroup.category;
            
            return (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glassmorphism Card with Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-3xl`}
                  animate={isSelected ? { opacity: 0.2 } : {}}
                />
                
                <motion.div
                  className="relative bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
                  onClick={() => toggleCategory(skillGroup.category)}
                  animate={{
                    height: isSelected ? 'auto' : 'initial'
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 rounded-2xl bg-gradient-to-r ${skillGroup.color} mr-5 shadow-2xl relative overflow-hidden`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <skillGroup.icon size={32} className="text-white relative z-10" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skillGroup.category}
                        </motion.h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {skillGroup.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isSelected ? 90 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </div>

                  {/* Preview Skills (Always Visible) */}
                  <div className="space-y-4 mb-6">
                    {skillGroup.preview.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          x: 8,
                          transition: { duration: 0.2 }
                        }}
                        onHoverStart={() => setHoveredSkill(skill)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="group/skill"
                      >
                        <motion.div
                          className={`
                            px-5 py-4 rounded-xl font-semibold text-sm
                            bg-white/10 text-gray-300 border border-white/20
                            hover:bg-gradient-to-r hover:${skillGroup.color} hover:text-white 
                            hover:border-transparent hover:shadow-2xl
                            transition-all duration-400 cursor-pointer
                            flex items-center justify-between relative overflow-hidden
                          `}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/5 opacity-0 group-hover/skill:opacity-100"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          <span className="relative z-10">{skill}</span>
                          <motion.div
                            className="w-3 h-3 rounded-full bg-current opacity-0 group-hover/skill:opacity-100 relative z-10"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                    
                    {/* More Skills Indicator */}
                    {!isSelected && skillGroup.skills.length > skillGroup.preview.length && (
                      <motion.div
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="px-5 py-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 border-dashed text-gray-400 text-sm flex items-center justify-center gap-3 hover:text-white hover:border-white/20 hover:from-white/10 hover:to-white/15 transition-all duration-300"
                      >
                        <span className="font-medium">
                          +{skillGroup.skills.length - skillGroup.preview.length} more technologies
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Expanded Skills */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="border-t border-white/10 pt-6"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="mb-4"
                        >
                          <h4 className="text-lg font-semibold text-white mb-3">
                            All Technologies
                          </h4>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {skillGroup.skills.slice(skillGroup.preview.length).map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              variants={skillVariants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ 
                                scale: 1.05,
                                x: 8,
                                transition: { duration: 0.2 }
                              }}
                              onHoverStart={() => setHoveredSkill(skill)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className="group/skill"
                            >
                              <motion.div
                                className={`
                                  px-5 py-4 rounded-xl font-semibold text-sm
                                  bg-white/10 text-gray-300 border border-white/20
                                  hover:bg-gradient-to-r hover:${skillGroup.color} hover:text-white 
                                  hover:border-transparent hover:shadow-2xl
                                  transition-all duration-400 cursor-pointer
                                  flex items-center justify-between relative overflow-hidden
                                `}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-white/5 opacity-0 group-hover/skill:opacity-100"
                                  animate={{
                                    x: ['-100%', '100%'],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                                <span className="relative z-10">{skill}</span>
                                <motion.div
                                  className="w-3 h-3 rounded-full bg-current opacity-0 group-hover/skill:opacity-100 relative z-10"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;