import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'projects', 'riddle', 'education', 'experience', 'connect'];

export default function FloatingCard() {
  const [visible, setVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > window.innerHeight * 0.3);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY >= el.offsetTop - 200) {
          const name = sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
          setCurrentSection(sections[i] === 'riddle' ? 'Riddle Challenge' : name);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className="fixed top-1/2 right-6 w-[280px] rounded-[20px] p-5 z-[999] transition-all duration-400 hidden lg:block"
      style={{
        transform: visible ? 'translateY(-50%)' : 'translateY(-50%) translateX(300px)',
        opacity: visible ? 1 : 0,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-lg font-bold"
          style={{ background: 'linear-gradient(135deg, #667eea, #f093fb)', color: 'white' }}
        >
          VJ
        </div>
        <div>
          <h3 className="text-base font-semibold m-0 whitespace-nowrap">V Jaya Sai Kumar Reddy</h3>
          <p className="text-xs m-0" style={{ color: '#f1f5f9' }}>AI/ML Developer</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { num: '5+', label: 'Projects' },
          { num: '50+', label: 'Problems' },
          { num: '8.56', label: 'CGPA' },
        ].map(s => (
          <div
            key={s.label}
            className="text-center p-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <span className="text-base font-bold block" style={{ color: '#f093fb' }}>{s.num}</span>
            <div className="text-[0.6rem]" style={{ color: '#f1f5f9' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-3 px-3 py-1.5 rounded-xl text-center text-[0.7rem] font-medium"
        style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}
      >
        Viewing: {currentSection}
      </div>
    </div>
  );
}
