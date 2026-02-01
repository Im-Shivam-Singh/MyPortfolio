import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiAmazonwebservices,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,

} from 'react-icons/si';

const technologies = [
  { name: 'React JS', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Express JS', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },

];

export function TechStack() {
  // Duplicate technologies for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="techstack" className="py-12 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex animate-marquee hover:pause">
          {duplicatedTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 mx-6 flex-shrink-0 group"
              >
                <div className="tech-icon-card">
                  <Icon
                    size={28}
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-[#909090] text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
