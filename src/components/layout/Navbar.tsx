'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { nav, personal } from '@/lib/data';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-16 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-lg bg-bg-primary/70 border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-accent-teal rounded-full" />
            <span className="font-mono text-sm font-medium">Rupesh Kumar</span>
          </div>

          {/* Center: Theme Toggle */}
          <div className="hidden md:flex gap-1 bg-bg-tertiary rounded-full p-1 border border-border-subtle">
            <button
              onClick={() => setTheme('light')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                theme === 'light' ? 'bg-bg-secondary text-text-primary' : 'text-text-muted'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                theme === 'dark' ? 'bg-bg-secondary text-text-primary' : 'text-text-muted'
              }`}
            >
              Dark
            </button>
          </div>

          {/* Right: Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={nav.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent-teal transition-colors"
            >
              GitHub →
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 top-16 z-30 bg-bg-primary/95 backdrop-blur-lg md:hidden p-6"
        >
          <nav className="flex flex-col gap-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-display font-bold text-text-primary hover:text-accent-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border-subtle pt-4 mt-4">
              <div className="flex gap-4">
                <a
                  href={nav.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={nav.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${nav.social.email}`}
                  className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
