import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Zap, Bot } from 'lucide-react';

const projectsData = [
  {
    title: 'Python AI Bot Assistant',
    description: 'Intelligent conversational AI bot with natural language processing, voice recognition, and task automation capabilities.',
    tech: ['Python', 'OpenAI API', 'Speech Recognition', 'Text-to-Speech', 'NLP', 'Tkinter', 'JSON'],
    github: '#',
    color: 'from-emerald-500 to-cyan-500',
    icon: Bot
  },
  {
    title: 'SmartQuiz',
    description: 'Generate quizzes from PDFs/DOCs using NLP. Shareable links, animated UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Framer Motion', 'Hugging Face', 'PDF.js', 'Mammoth.js'],
    github: '#',
    color: 'from-blue-500 to-purple-500',
    icon: Zap
  },
  {
    title: 'Event Management Portal',
    description: 'Sports/fest portal with auth, team management, and real-time email alerts.',
    tech: ['ReactJS', 'Tailwind', 'Node.js', 'MongoDB', 'JWT', 'ReactRouterDOM'],
    github: '#',
    color: 'from-green-500 to-teal-500',
    icon: Code
  },
  {
    title: 'Blogging Platform (AWS)',
    description: 'Static blog site deployed using EC2, S3, and VPC',
    tech: ['HTML', 'CSS', 'JavaScript', 'AWS'],
    github: '#',
    color: 'from-orange-500 to-red-500',
    icon: ExternalLink
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my development journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.div
                  className={`h-40 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center relative`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{
                      rotate: project.icon === Bot ? [0, 5, -5, 0] : 0,
                      scale: project.icon === Bot ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: project.icon === Bot ? 2 : 0,
                      repeat: project.icon === Bot ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    <project.icon size={56} className="text-white drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Special AI effect for the bot project */}
                  {project.icon === Bot && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        animate={{
                          background: [
                            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </>
                  )}
                </motion.div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-md border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                style={{
                  boxShadow: `0 4px 15px ${project.color.includes('emerald') ? 'rgba(16, 185, 129, 0.25)' : 'rgba(59, 130, 246, 0.25)'}`
                }}
              >
                <Github size={16} />
                View Code
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;