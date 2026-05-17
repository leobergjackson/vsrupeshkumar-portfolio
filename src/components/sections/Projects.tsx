'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { TechChip } from '@/components/ui/TechChip';
import Link from 'next/link';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32">
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
              Selected Work
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl font-black uppercase tracking-tighter mt-4 mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl text-text-muted text-lg">
            Systems I've built from first principles. Every project open source. From zero-knowledge protocols to RL benchmarks and topology-driven anomaly detectors.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full p-8 bg-card border border-border-subtle rounded-xl hover:border-accent-teal hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <TechChip label={project.chip} variant={project.chipColor as any} />
                  <span className="font-mono text-xs text-text-dim">0{projects.indexOf(project) + 1} / 06</span>
                </div>

                <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-accent-teal transition-colors">
                  {project.name}
                </h3>

                <p className="text-text-muted mb-4">{project.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>→ github.com/vsrupeshkumar/{project.name.replace(/\s+/g, '-').toLowerCase()}</span>
                  <span>MIT License</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
