import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Cloud, Code, Database, Brain, Briefcase, Bot } from 'lucide-react';

const certificationsData = [
  {
    title: 'Virtual Internship in Cloud Computing (NIELIT)',
    description: 'Comprehensive training in cloud technologies and infrastructure management',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1PRewVcLGJPXfsmbA-PZYj-pubPpKGhO6/view?usp=sharing'
  },
  {
    title: 'Web Full Stack Developer Internship (EduSkills)',
    description: 'End-to-end web development with modern frameworks and technologies',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    link: 'https://drive.google.com/file/d/1P-AAlo6uzCdTGKhBdsvdYI6s2T31ubG3/view?usp=sharing'
  },
  {
    title: 'Amazon Web Services Internship (EduSkills)',
    description: 'Hands-on experience with AWS cloud services and deployment strategies',
    icon: Cloud,
    color: 'from-orange-500 to-yellow-500',
    link: 'https://drive.google.com/file/d/1cfBQveOrtj_-46VdckHC_XtudH7kbzdg/view?usp=sharing'
  },
  {
    title: 'TCS iON Career Edge – Young Professional',
    description: 'Professional development program focusing on industry-ready skills',
    icon: Briefcase,
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/file/d/1IOVX2U0wHs6kLUVyob85-gHcUCNBxsny/view?usp=sharing'
  },
  {
    title: 'Internship in Data Science & Generative AI (MNK TechFocus)',
    description: 'Advanced training in machine learning, data analysis, and AI technologies',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    link: 'https://drive.google.com/file/d/1FJRvsaBy1FtALd9CYcZpTs3D7VmCGZBa/view?usp=sharing'
  },
  {
    title: 'Python Automation Internship (BlackBucks)',
    description: 'Specialized training in Python scripting and process automation',
    icon: Bot,
    color: 'from-teal-500 to-green-500',
    link: '#' // No link provided yet
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">Professional achievements and credentials</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link !== '#' ? cert.link : undefined}
              target={cert.link !== '#' ? "_blank" : undefined}
              rel={cert.link !== '#' ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 block relative overflow-hidden ${
                cert.link !== '#' ? 'cursor-pointer' : 'cursor-default opacity-90'
              }`}
            >
              {/* Background Glow Effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-xl`}
              />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ 
                      rotate: cert.icon === Bot ? [0, 5, -5, 0] : 360,
                      scale: 1.1
                    }}
                    transition={{ 
                      duration: cert.icon === Bot ? 0.6 : 0.6,
                      repeat: cert.icon === Bot ? 1 : 0
                    }}
                    className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} flex-shrink-0 relative overflow-hidden shadow-lg`}
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
                    <cert.icon size={24} className="text-white relative z-10" />
                  </motion.div>
                  
                  {cert.link !== '#' && (
                    <motion.div
                      className="text-gray-400 group-hover:text-white transition-colors duration-300 ml-auto"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white leading-relaxed mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  
                  {cert.link !== '#' && (
                    <motion.div
                      className="flex items-center gap-2 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={14} />
                      <span className="font-medium">View Certificate</span>
                    </motion.div>
                  )}
                  
                  {cert.link === '#' && (
                    <div className="flex items-center gap-2 text-yellow-500 text-sm">
                      <Award size={14} />
                      <span className="font-medium">Certificate pending</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              {cert.link !== '#' && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color.replace('from-', 'from-').replace('to-', 'to-')}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  initial={false}
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;