import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { heroConfig, socialLinks } from '@/config/hero.config';

interface NavigationProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-white hover:text-[#2dd4bf] transition-colors"
          >
          <div className="relative inline-block">
            <span className="relative z-10 text-white text-5xl font-signature">
              Shivam .
            </span>
          </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#909090] hover:text-white transition-colors link-underline text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={socialLinks.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#2dd4bf] text-black text-sm font-semibold rounded-full hover:bg-[#14b8a6] transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#909090] hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={socialLinks.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#2dd4bf] text-black text-sm font-semibold rounded-full hover:bg-[#14b8a6] transition-colors text-center mt-2"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
