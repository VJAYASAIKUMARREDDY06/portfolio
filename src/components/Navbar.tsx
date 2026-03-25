import { useState, useEffect } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#riddle', label: 'Riddle Challenge' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-[1000] transition-all duration-300 border-b"
      style={{
        background: scrolled ? 'rgba(15,15,35,0.95)' : 'rgba(15,15,35,0.9)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
        borderColor: 'rgba(255,255,255,0.15)',
        padding: '1rem 2rem',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div
          className="text-2xl font-extrabold bg-clip-text"
          style={{
            background: 'linear-gradient(135deg, #667eea, #f093fb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VJSKR
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={e => handleClick(e, l.href)}
                className="nav-link-hover font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: '#f1f5f9' }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#f093fb';
                  (e.target as HTMLElement).style.background = 'rgba(240,147,251,0.1)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#f1f5f9';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-2 mt-4">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={e => handleClick(e, l.href)}
                className="block px-4 py-2 rounded-full font-medium transition-all"
                style={{ color: '#f1f5f9' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
