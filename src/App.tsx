import { useEffect, useState } from 'react';
import { Hero } from './sections/Hero';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { ContactCTA } from './sections/ContactCTA';
import { Footer } from './sections/Footer';
import { Navigation } from './sections/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e2e2e2]">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
