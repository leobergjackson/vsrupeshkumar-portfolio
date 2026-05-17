'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-bg-secondary/50">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted flex items-center gap-2">
              <span className="w-4 h-px bg-accent-teal" />
              Technical Arsenal
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl font-black uppercase tracking-tighter mt-4 mb-6"
          >
            What I Use
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.number}
              variants={itemVariants}
              className="p-6 bg-card border border-border-subtle rounded-lg hover:border-accent-teal hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-text-muted">{skill.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-2">{skill.domain}</h3>
                  <p className="font-mono text-xs text-text-muted leading-relaxed">{skill.items}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
