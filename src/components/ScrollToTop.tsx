import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl z-[1000] cursor-pointer transition-all duration-300 hover:scale-110 border-none"
      style={{
        background: 'linear-gradient(135deg, #667eea, #f093fb)',
        color: 'white',
        boxShadow: '0 10px 30px rgba(102,126,234,0.3)',
      }}
    >
      ⬆
    </button>
  );
}
