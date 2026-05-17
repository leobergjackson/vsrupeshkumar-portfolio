import { personal } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Want to Reach Out?</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personal.email}`}
                className="block text-sm text-text-primary hover:text-accent-teal transition-colors"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                className="block text-sm text-text-primary hover:text-accent-teal transition-colors"
              >
                {personal.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Based In</h3>
            <p className="text-sm text-text-primary mb-2">{personal.location}</p>
            <p className="text-xs text-text-muted">Open to remote and on-site globally</p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="border-t border-border-subtle pt-8 font-mono text-xs text-text-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <span>{personal.location} · Open to Global Opportunities</span>
          <span>Built with Next.js · Tailwind · Framer Motion</span>
          <span>© {new Date().getFullYear()} {personal.name}</span>
        </div>
      </div>
    </footer>
  );
}
