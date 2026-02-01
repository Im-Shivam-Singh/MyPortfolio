import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'How I Built an Audio Player to Showcase my own Tracks',
    excerpt:
      'A deep dive into building a custom audio player with React, featuring playlist management, visualizations, and seamless playback.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    url: 'https://dev.to',
  },
  {
    title: 'Understanding State Management in NextJS',
    excerpt:
      'Exploring different state management approaches in Next.js applications, from Context API to Zustand and Redux.',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    url: 'https://dev.to',
  },
  {
    title: 'How to Build a React Calculator from Scratch',
    excerpt:
      'Step-by-step guide to building a fully functional calculator with React, including handling edge cases and keyboard support.',
    date: 'Oct 10, 2024',
    readTime: '10 min read',
    url: 'https://dev.to',
  },
  {
    title: '65 Things I wish I knew when I started to Code',
    excerpt:
      'Lessons learned from years of programming that would have saved me countless hours of frustration and debugging.',
    date: 'Sep 5, 2024',
    readTime: '15 min read',
    url: 'https://dev.to',
  },
];

export function Articles() {
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
      id="articles"
      ref={sectionRef}
      className="section-padding bg-[#090909]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal opacity-0 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-[#909090] text-lg max-w-xl">
            Thoughts on development, technology, and lessons learned along the
            way.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal opacity-0 group block p-6 bg-[#121212] rounded-2xl border border-white/5 hover:border-[#4a3aff]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Meta */}
              <div className="flex items-center gap-4 mb-4 text-sm text-[#909090]">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#4a3aff] transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#909090] text-sm md:text-base mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-2 text-[#4a3aff] font-medium text-sm">
                Read Article
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="reveal opacity-0 mt-12 text-center">
          <a
            href="https://dev.to"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#4a3aff] text-[#4a3aff] rounded-lg hover:bg-[#4a3aff]/10 transition-colors font-medium"
          >
            Read All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
