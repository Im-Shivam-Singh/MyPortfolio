import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';

export const socialLinks = {
  Github : "https://github.com/Im-Shivam-Singh",
  LinkedIn : "https://www.linkedin.com/in/singhshivam-007",
  Instagram : "#",
  Email : "shivamsingh6318@gmail.com",
}

export const heroConfig = {
  profile: {
    name: 'Shivam Singh',
    greeting: 'Hi! I am',
    avatar: '/images/avatar.jpeg',
    signature: '/images/signature.png',
    online: true,
  },

  role: 'A Full-Stack Developer',

  description: {
    text: `Building scalable, dynamic, and visually compelling digital solutions.`,
    highlight: 'Tata Communications',
    prefix: 'Currently working as SDE at',
  },

  cta: {
    primary: {
      label: 'View My Work',
      href: '#projects',
    },
    secondary: {
      label: 'Get in Touch',
      href: '#contact',
    },
  },

  socialLinks: [
    {
      label: 'GitHub',
      href: socialLinks.Github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: socialLinks.LinkedIn,
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: socialLinks.Instagram,
      icon: Instagram,
    },
    {
      label: 'Email',
      href: `mailto:${socialLinks.Email}`,
      icon: Mail,
    },
  ],

  scroll: {
    label: 'Scroll',
    href: '#techstack',
  },
};
