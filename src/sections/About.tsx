import { useEffect, useRef, useState } from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiRedux,
  SiKubernetes,
  SiPython,
  SiDjango,
} from 'react-icons/si';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const skills = [
  { name: 'AWS', icon: SiAmazonwebservices, category: 'Tools' },
  { name: 'Python', icon: SiPython, category: 'Backend' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'React JS', icon: SiReact, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  // { name: 'Bootstrap', icon: SiBootstrap, category: 'Frontend' },
  // { name: 'CSS3', icon: SiCss3, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express JS', icon: SiExpress, category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend' },
  // { name: 'Redux', icon: SiRedux, category: 'Tools' },
  { name: 'Docker', icon: SiDocker, category: 'Tools' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'Tools' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'Figma', icon: SiFigma, category: 'Tools' },
];

const experiences = [
  {
    title: 'SDE',
    company: 'Tata Communications',
    period: '2023 - Present',
    description: 'Building Scalable Web Applications & Plugins',
    icon: Briefcase,
  },
];

const education = [
  {
    degree: 'B.Tech',
    institution: 'SRM Institute of Science and Technology',
    period: '2019-2023',
    description: 'Bachelor of Computer Applications with focus on software development.',
    icon: GraduationCap,
  },
];

// const achievements = [
//   { name: 'GSSoC\'24 Ext Contributor', icon: Award },
//   { name: 'Hacktoberfest\'24 Contributor', icon: Award },
//   { name: 'Developer Program Member', icon: Award },
// ];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-[#0f0f0f]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Text */}
          <div>
            <div className="reveal opacity-0 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                About Me
              </h2>
            </div>

            <div className="reveal opacity-0 space-y-6 text-[#b9b9b9] text-base md:text-lg leading-relaxed">
              <p>
                I'm a tech enthusiast with a strong foundation in{' '}
                <span className="text-white font-medium">Python</span>,{' '}
                <span className="text-white font-medium">React</span>,{' '}
                <span className="text-white font-medium">AWS</span>,{' '}
              </p>

              <p>
                I'm a <span className="text-[#2dd4bf] font-medium">SDE</span> with 
                hands-on experience in building scalable web applications. My journey includes 
                valuable experience as an <span className="text-white font-medium">SDE at Tata Communications</span>.
              </p>

              {/* <p>
                💬 <span className="text-white">Ask me about</span> Web Development and modern JavaScript frameworks.
              </p> */}

              <p>
                🤝 <span className="text-white">Open to:</span> Collaborations with passionate developers, 
                startups, and open-source communities.
              </p>

              <p>
                🎯 <span className="text-white">2026 Vision:</span> Dive deeper into{' '}
                <span className="text-[#2dd4bf]">Gen AI</span>,{' '}
                {/* <span className="text-[#2dd4bf]">Next.js</span>, and{' '}
                <span className="text-[#2dd4bf]">Data Structures & Algorithms</span>. */}
              </p>

              <p>
                🎉 <span className="text-white">Fun Fact:</span> I'm always up for networking and love 
                making meaningful connections in the tech world!
              </p>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-[#141414] rounded-xl border border-white/5">
                <div className="text-3xl md:text-4xl font-bold text-[#2dd4bf] mb-1">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="text-sm text-[#909090]">Repositories</div>
              </div>
              <div className="text-center p-4 bg-[#141414] rounded-xl border border-white/5">
                <div className="text-3xl md:text-4xl font-bold text-[#2dd4bf] mb-1">
                  <AnimatedCounter target={3} suffix="+" />
                </div>
                <div className="text-sm text-[#909090]">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-[#141414] rounded-xl border border-white/5">
                <div className="text-3xl md:text-4xl font-bold text-[#2dd4bf] mb-1">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-sm text-[#909090]">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-10">
            {/* Skills */}
            <div>
              <div className="reveal opacity-0 mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Skills & Technologies
                </h3>
                <p className="text-[#909090]">
                  Technologies I work with on a daily basis
                </p>
              </div>

              <div className="reveal opacity-0 flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-tag flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/5 rounded-full cursor-default"
                    >
                      <Icon size={18} className="text-[#2dd4bf]" />
                      <span className="text-sm text-[#e2e2e2]">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="reveal opacity-0 mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Experience
                </h3>
              </div>

              <div className="reveal opacity-0 space-y-6">
                {experiences.map((exp) => {
                  const Icon = exp.icon;
                  return (
                    <div key={exp.title} className="experience-card">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-[#2dd4bf]" />
                        <span className="text-[#2dd4bf] text-sm font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-[#909090] text-sm mb-1">{exp.company}</p>
                      <p className="text-[#b9b9b9] text-sm">{exp.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="reveal opacity-0 mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Education
                </h3>
              </div>

              <div className="reveal opacity-0 space-y-6">
                {education.map((edu) => {
                  const Icon = edu.icon;
                  return (
                    <div key={edu.degree} className="experience-card">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-[#2dd4bf]" />
                        <span className="text-[#2dd4bf] text-sm font-medium">{edu.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-[#909090] text-sm mb-1">{edu.institution}</p>
                      <p className="text-[#b9b9b9] text-sm">{edu.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            {/* <div>
              <div className="reveal opacity-0 mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Achievements
                </h3>
              </div>

              <div className="reveal opacity-0 flex flex-wrap gap-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.name}
                      className="flex items-center gap-2 px-4 py-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 rounded-full"
                    >
                      <Icon size={16} className="text-[#2dd4bf]" />
                      <span className="text-sm text-[#2dd4bf]">{achievement.name}</span>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
