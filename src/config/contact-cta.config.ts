import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';

export const contactCTAConfig = {
  badge: {
    label: 'Open to opportunities',
  },

  heading: "Let's Work Together",

  subheading: `I'm always up for networking and love making meaningful connections 
  in the tech world. Let's build something amazing!`,

  cta: {
    label: 'Get in Touch',
    href: 'mailto:shivamsingh6318@gmail.com',
  },

  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/Im-Shivam-Singh',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/singhshivam-007',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: '',
      icon: Instagram,
    },
    {
      label: 'Email',
      href: 'mailto:shivamsingh6318@gmail.com',
      icon: Mail,
    },
  ],
};
