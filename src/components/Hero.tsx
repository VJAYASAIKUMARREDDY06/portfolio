import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export default function Hero() {
  const typingText = useTypingEffect();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-8 relative">
      <motion.div
        className="max-w-[800px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1
          className="font-extrabold mb-4 leading-[1.1]"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            background: 'linear-gradient(135deg, #fff, #f093fb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          V JAYA SAI KUMAR REDDY
        </h1>
        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#f1f5f9', fontWeight: 300, marginBottom: '2rem' }}>
          <span className="typing-cursor">{typingText}</span>
        </p>
        <p style={{ fontSize: '1.2rem', color: '#f1f5f9', marginBottom: '2rem' }}>
          Passionate about creating intelligent solutions that make a difference.
          Specializing in machine learning, deep learning, and data-driven applications.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mt-8">
          <button
            onClick={() => handleClick('#projects')}
            className="btn-shimmer ripple px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 cursor-pointer text-base hover:-translate-y-1 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              boxShadow: '0 10px 30px rgba(102,126,234,0.3)',
            }}
          >
            🚀 View My Work
          </button>
          <button
            onClick={() => handleClick('#riddle')}
            className="btn-shimmer ripple px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 cursor-pointer text-base hover:-translate-y-1 hover:scale-105"
            style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          >
            🧩 Riddle Challenge
          </button>
          <button
            onClick={() => handleClick('#connect')}
            className="btn-shimmer ripple px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 cursor-pointer text-base hover:-translate-y-1 hover:scale-105"
            style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          >
            ✉️ Get In Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
}
