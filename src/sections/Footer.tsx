import { socialLinks } from '@/config/hero.config';
import { Github, Linkedin, Instagram, Mail, Heart, Flame } from 'lucide-react';

const footerlinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: socialLinks.Github
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: socialLinks.LinkedIn,
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: socialLinks.Instagram,
  },
  {
    name: 'Email',
    icon: Mail,
    url: `mailto:${socialLinks.Email}`,
  },
];

const quickLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Quick Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* <a
              href="#"
              className="text-xl font-bold text-white hover:text-[#2dd4bf] transition-colors"
            >
              SS.
            </a> */}
            <nav className="flex items-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#909090] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerlinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141414] border border-white/5 text-[#909090] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-[#909090] flex items-center justify-center gap-1">
            © {currentYear} Shivam Singh. Made with{' '}
            <Flame size={14} className="text-yellow-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
