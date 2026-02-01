import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactCTAConfig } from '@/config/contact-cta.config';

export function ContactCTA() {
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
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 rounded-full mb-6">
            <Sparkles size={16} className="text-[#2dd4bf]" />
            <span className="text-sm text-[#2dd4bf] font-medium">
              {contactCTAConfig.badge.label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="reveal opacity-0 text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {contactCTAConfig.heading}
          </h2>

          {/* Subheading */}
          <p className="reveal opacity-0 text-lg md:text-xl text-[#909090] mb-8">
            {contactCTAConfig.subheading}
          </p>

          {/* CTA */}
          <div className="reveal opacity-0 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-[#2dd4bf] text-black hover:bg-[#14b8a6] px-8 py-6 text-base font-semibold btn-hover"
            >
              <a
                href={contactCTAConfig.cta.href}
                className="inline-flex items-center gap-2"
              >
                {contactCTAConfig.cta.label}
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="reveal opacity-0 flex items-center justify-center gap-4">
            {contactCTAConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#141414] border border-white/5 text-[#909090] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/30 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
