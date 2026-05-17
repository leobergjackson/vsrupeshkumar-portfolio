'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export function CTAButton({ label, href, onClick, variant = 'primary', className }: CTAButtonProps) {
  const baseClass = 'inline-flex items-center gap-2 rounded-full font-body text-sm font-medium transition-all';

  if (variant === 'primary') {
    const content = (
      <span className="flex items-center gap-3 bg-text-primary text-bg-primary px-6 py-3 rounded-full hover:shadow-glow-teal">
        {label}
        <motion.div
          whileHover={{ rotate: -45 }}
          className="w-10 h-10 rounded-full bg-accent-teal text-bg-primary flex items-center justify-center"
        >
          <ArrowRight size={16} />
        </motion.div>
      </span>
    );

    return href ? (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={baseClass + ' ' + className}>
        {content}
      </a>
    ) : (
      <button onClick={onClick} className={baseClass + ' ' + className}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={`${baseClass} border border-border-strong text-text-primary px-6 py-3 hover:border-accent-teal hover:text-accent-teal ${className}`}>
      {label}
      <ArrowRight size={14} />
    </a>
  );
}
