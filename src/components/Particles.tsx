import { useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 6000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-animation" />
      <div className="particles" ref={containerRef} />
    </>
  );
}
