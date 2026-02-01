import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { socialLinks } from '@/config/hero.config';

const projects = [
  {
    title: 'FinPilot',
    description:
      'An open-source, enterprise-grade expense approval system that streamlines reimbursements with secure workflows. Employees submit claims, managers approve, and finance teams validate.',
    image: '/images/project-finpilot.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Expense claim submission',
      'Manager approval workflow',
      'Finance team validation',
      'Secure authentication',
      'Real-time notifications',
    ],
    liveUrl: 'https://finpilot-demo.vercel.app',
    sourceUrl: 'https://github.com/shivhere007/FinPilot',
  },
  // {
  //   title: 'Uber Clone',
  //   description:
  //     'A full-stack ride-hailing application clone with real-time tracking, driver-passenger matching, and payment integration.',
  //   image: '/images/project-uber.jpg',
  //   tags: ['JavaScript', 'React', 'Node.js', 'Socket.io'],
  //   features: [
  //     'Real-time ride tracking',
  //     'Driver-passenger matching',
  //     'Interactive maps',
  //     'Payment integration',
  //     'Rating system',
  //   ],
  //   liveUrl: 'https://uber-clone-demo.vercel.app',
  //   sourceUrl: 'https://github.com/shivhere007/Uber-Clone',
  // },
  // {
  //   title: 'PicStore E-Commerce',
  //   description:
  //     'A multi-vendor e-commerce platform for photographers, featuring user and seller dashboards, real-time analytics, and a seamless buying experience.',
  //   image: '/images/project-picstore.jpg',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
  //   features: [
  //     'Multi-vendor support',
  //     'Seller dashboard',
  //     'Real-time analytics',
  //     'Image upload & management',
  //     'Secure payments',
  //   ],
  //   liveUrl: 'https://picstore-demo.vercel.app',
  //   sourceUrl: 'https://github.com/shivhere007/Pic_store_e-commerce',
  // },
  // {
  //   title: 'XORA - Modern React Landing Page',
  //   description:
  //     'A stunning, responsive landing page built with modern React practices, featuring smooth animations and pixel-perfect design.',
  //   image: '/images/project-xora.jpg',
  //   tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  //   features: [
  //     'Responsive design',
  //     'Smooth animations',
  //     'Modern UI/UX',
  //     'Performance optimized',
  //     'SEO friendly',
  //   ],
  //   liveUrl: 'https://xora-demo.vercel.app',
  //   sourceUrl: 'https://github.com/shivhere007/XORA-Modern-React-Landing-page',
  // },
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal opacity-0 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[#909090] text-lg max-w-xl">
            A selection of my recent work showcasing full-stack development,
            UI/UX design, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="reveal opacity-0 group project-glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#2dd4bf]/10 text-[#2dd4bf] border-none text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#2dd4bf] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#909090] text-sm md:text-base mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[#b9b9b9]"
                    >
                      <Check size={14} className="text-[#2dd4bf]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#2dd4bf] text-black text-sm font-semibold rounded-lg hover:bg-[#14b8a6] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="reveal opacity-0 mt-12 text-center">
          <a
            href={socialLinks.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2dd4bf] text-[#2dd4bf] rounded-lg hover:bg-[#2dd4bf]/10 transition-colors font-medium"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
