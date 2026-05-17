'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypingEffect } from '@/hooks';
import { typingPhrases, personal } from '@/lib/data';

export function Hero() {
  const { displayText } = useTypingEffect({
    strings: typingPhrases,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-transparent to-accent-violet/20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container text-center px-4"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary border border-border-subtle rounded-full">
            <div className="w-2 h-2 bg-accent-teal rounded-full animate-pulse-glow" />
            <span className="font-mono text-xs font-medium text-text-muted">Open to opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight uppercase tracking-tighter mb-6"
        >
          Building at the<br />
          edge of what's<br />
          possible.
        </motion.h1>

        {/* Subheader */}
        <motion.p variants={itemVariants} className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-muted mb-6">
          AI / ML Engineer · Web3 Builder · Full Stack · Open-Source Contributor
        </motion.p>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-8 h-6 md:h-8">
          <code className="font-code text-sm md:text-base text-accent-teal">
            {displayText}
            <span className="animate-bounce">▌</span>
          </code>
        </motion.div>

        {/* Body Text */}
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-base md:text-lg text-text-muted mb-12 leading-relaxed">
          {personal.degree} at {personal.university}. I build systems at the intersection of AI research, decentralized
          protocols, and full-stack engineering — the kind of systems that don't exist yet.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#projects"
            className="px-8 py-3 bg-text-primary text-bg-primary rounded-full font-body font-medium hover:shadow-glow-teal transition-all"
          >
            View My Work
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="px-8 py-3 border border-border-strong text-text-primary rounded-full font-body font-medium hover:border-accent-teal hover:text-accent-teal transition-all"
          >
            Download Resume ↓
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-full bg-accent-teal text-bg-primary flex items-center justify-center hover:shadow-glow-teal transition-all"
          >
            <ArrowDown size={20} />
          </button>
        </motion.div>

        {/* Footer Links */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-0 right-0 flex justify-center gap-8">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent-teal transition-colors">
            GitHub
          </a>
          <span className="text-text-dim">·</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent-teal transition-colors">
            LinkedIn
          </a>
          <span className="text-text-dim">·</span>
          <a href={`mailto:${personal.email}`} className="font-mono text-xs text-text-muted hover:text-accent-teal transition-colors">
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
