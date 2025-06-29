import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Award } from 'lucide-react';

const achievementsData = [
  {
    title: 'Smart India Hackathon 2024',
    description: 'Shortlisted for the prestigious national-level hackathon',
    details: 'Selected among thousands of participants nationwide',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'College Kabaddi Team Winner',
    description: 'Led my college team to victory in the Inter-College Kabaddi Tournament',
    details: 'Held at SRKR Engineering College, Bhimavaram',
    icon: Award,
    color: 'from-green-500 to-emerald-500'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Extra-Curricular Activities
          </h2>
          <p className="text-gray-400 text-lg">Recognition, accomplishments, and leadership experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                >
                  <achievement.icon size={24} className="text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-2 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {achievement.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;