import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Riddle from '@/components/Riddle';
import Experience from '@/components/Experience';
import Connect from '@/components/Connect';
import FloatingCard from '@/components/FloatingCard';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <Particles />
      <Navbar />
      <FloatingCard />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Riddle />
      <Experience />
      <Connect />
      <ScrollToTop />
    </>
  );
};

export default Index;
