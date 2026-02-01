import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Star, Radio, MessageSquare, Mail, Linkedin, Twitter } from 'lucide-react';

const milestones = [
  {
    icon: BookOpen,
    value: 1.5,
    suffix: 'M+',
    label: 'Reads on DEV',
    url: 'https://dev.to',
  },
  {
    icon: MessageSquare,
    value: 900,
    suffix: 'K+',
    label: 'Answers on DevQuizzes',
    url: 'https://example.com',
  },
  {
    icon: Radio,
    value: 1.8,
    suffix: 'M+',
    label: 'Plays on DevTunes FM',
    url: 'https://example.com',
  },
  {
    icon: Star,
    value: 1,
    suffix: 'K+',
    label: 'GitHub Stars',
    url: 'https://github.com',
  },
  {
    icon: Mail,
    value: 6,
    suffix: 'K+',
    label: 'Newsletter Subs',
    url: 'https://substack.com',
  },
  {
    icon: Linkedin,
    value: 20,
    suffix: 'K+',
    label: 'LinkedIn Connects',
    url: 'https://linkedin.com',
  },
  {
    icon: Twitter,
    value: 100,
    suffix: 'K+',
    label: 'Twitter Follows',
    url: 'https://twitter.com',
  },
  {
    icon: Users,
    value: 300,
    suffix: 'K+',
    label: 'Reads on Hashnode',
    url: 'https://hashnode.com',
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function (outQuart)
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              setDisplayValue(target * easeOutQuart);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (num: number) => {
    if (num >= 1) {
      return num.toFixed(1).replace(/\.0$/, '');
    }
    return num.toFixed(1);
  };

  return (
    <span ref={numberRef}>
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}

export function Milestones() {
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
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#0e0e10] to-[#090909]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal opacity-0 mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Featured Milestones
          </h2>
          <p className="text-[#909090] text-lg max-w-xl mx-auto">
            Numbers that reflect my journey and impact in the developer
            community.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <a
                key={milestone.label}
                href={milestone.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal opacity-0 group p-6 bg-[#121212] rounded-2xl border border-white/5 hover:border-[#4a3aff]/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-[#4a3aff]/10 rounded-xl group-hover:bg-[#4a3aff]/20 transition-colors">
                  <Icon size={24} className="text-[#4a3aff]" />
                </div>

                {/* Value */}
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedNumber
                    target={milestone.value}
                    suffix={milestone.suffix}
                  />
                </div>

                {/* Label */}
                <div className="text-sm text-[#909090]">{milestone.label}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
