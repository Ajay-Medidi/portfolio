import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    role: 'NIELIT-AWS Intern',
    period: 'Jun 2024 – Aug 2024',
    description: 'Gained hands-on experience in EC2, S3, VPC while designing a static blogging platform.',
    skills: ['AWS EC2', 'AWS S3', 'VPC', 'Cloud Architecture'],
    color: 'from-orange-500 to-red-500'
  },
  {
    role: 'EduSkills Web Full Stack Developer Intern',
    period: 'Oct 2024 – Dec 2024',
    description: 'Built dynamic full-stack apps using HTML, CSS, JS, Node.js, MongoDB with auth and routing.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Authentication'],
    color: 'from-green-500 to-teal-500'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">Professional journey and internships</p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}
                >
                  <Briefcase size={24} className="text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-400 mt-1 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;