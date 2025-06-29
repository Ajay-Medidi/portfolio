import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech, Computer Science Engineering',
    institution: 'SRKR Engineering College, Bhimavaram',
    grade: 'CGPA: 7.92',
    period: '2022–2026',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: 'Intermediate, MPC',
    institution: 'Tirumala Jr College',
    grade: '95.2%',
    period: '2020–2022',
    color: 'from-cyan-500 to-purple-500'
  },
  {
    degree: 'SSC',
    institution: 'Trinity High School',
    grade: 'CGPA: 10.00',
    period: '2019–2020',
    color: 'from-purple-500 to-pink-500'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg">Academic journey and achievements</p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`mx-4 p-3 rounded-full bg-gradient-to-r ${edu.color} flex-shrink-0`}
                >
                  <GraduationCap size={24} className="text-white" />
                </motion.div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-center gap-4 text-gray-400">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold`}>
                      {edu.grade}
                    </span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;