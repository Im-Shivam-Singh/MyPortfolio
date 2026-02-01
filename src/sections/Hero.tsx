import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroConfig } from '@/config/hero.config';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center framer-bg overflow-hidden"
    >
      <div className="relative z-10 container-custom pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile */}
          <div className="reveal opacity-0 mb-8 animate-float">
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#2dd4bf]/30 glow-cyan">
                <img
                  src={heroConfig.profile.avatar}
                  alt={heroConfig.profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {heroConfig.profile.online && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a0a0a]" />
              )}
            </div>
          </div>

          {/* Greeting */}
          <p className="reveal opacity-0 text-lg md:text-xl text-[#2dd4bf] font-medium mb-2">
            {heroConfig.profile.greeting}
          </p>

          <h1 className="reveal opacity-0 text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {heroConfig.profile.name}
          </h1>

          {/* Role */}
          <p className="reveal opacity-0 text-xl md:text-2xl lg:text-3xl gradient-text font-semibold mb-6">
            {heroConfig.role}
          </p>

          {/* Description */}
          <p className="reveal opacity-0 text-base md:text-lg text-[#909090] max-w-2xl mb-8">
            {heroConfig.description.text}{' '}
            {heroConfig.description.prefix}{' '}
            <span className="text-[#2dd4bf]">
              {heroConfig.description.highlight}
            </span>
            .
          </p>

          {/* CTA */}
          <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="bg-[#2dd4bf] text-black font-semibold px-8 py-6">
              <a href={heroConfig.cta.primary.href}>
                {heroConfig.cta.primary.label}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2dd4bf] text-[#2dd4bf] px-8 py-6"
            >
              <a href={heroConfig.cta.secondary.href}>
                {heroConfig.cta.secondary.label}
              </a>
            </Button>
          </div>

          {/* Socials */}
          <div className="reveal opacity-0 flex items-center gap-5">
            {heroConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#909090] hover:text-[#2dd4bf] transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <a
          href={heroConfig.scroll.href}
          className="flex flex-col items-center text-[#909090] hover:text-[#2dd4bf]"
        >
          <span className="text-xs mb-2">{heroConfig.scroll.label}</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
