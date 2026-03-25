import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

import { getRandomRiddle, revealRandomLetter, hintLetter } from '@/utils/riddleLogic';

export default function Riddle() {
  const [riddle] = useState(() => getRandomRiddle());
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [clue, setClue] = useState('');
  const [clueColor, setClueColor] = useState('#f093fb');
  const [solved, setSolved] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState(['_', '_', '_', '_', '_', '_']);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLetterPopup, setShowLetterPopup] = useState(false);

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === 'resume') {
      setFeedback('🎉 Correct! You\'ve unlocked my Resume!');
      setFeedbackColor('#4CAF50');
      setClue(riddle.explanation);
      setClueColor('#f1f5f9');
      setSolved(true);
    } else {
      setFeedback('❌ Not quite! Here\'s a clue:');
      setFeedbackColor('#ff6b6b');
      const newLetters = revealRandomLetter(revealedLetters);
      setRevealedLetters(newLetters);
      setClue(newLetters.join(' '));
      setClueColor('#f093fb');
    }
  };

  const showHint = useCallback(() => {
    const envelope = document.createElement('div');
    envelope.className = 'envelope';
    envelope.innerHTML = '<div class="wing left"></div><div class="wing right"></div>';
    document.body.appendChild(envelope);

    envelope.style.setProperty('--random-scale', String(0.8 + Math.random() * 0.4));
    const wingLeft = envelope.querySelector('.wing.left') as HTMLElement;
    const wingRight = envelope.querySelector('.wing.right') as HTMLElement;
    if (wingLeft) wingLeft.style.animationDuration = (0.2 + Math.random() * 0.3) + 's';
    if (wingRight) wingRight.style.animationDuration = (0.2 + Math.random() * 0.3) + 's';

    const paths = [
      (el: HTMLElement) => el.animate([
        { left: '-150px', top: '50%', transform: 'rotate(0deg)' },
        { left: '50%', top: '50%', transform: 'rotate(720deg)' },
      ], { duration: 3000, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' as FillMode }),
      (el: HTMLElement) => el.animate([
        { left: '-150px', top: '20%' },
        { left: '20%', top: '15%' },
        { left: '40%', top: '30%' },
        { left: '50%', top: '50%' },
      ], { duration: 3000, easing: 'ease-in-out', fill: 'forwards' as FillMode }),
      (el: HTMLElement) => el.animate([
        { left: '-150px', top: '50%' },
        { left: '70%', top: '20%' },
        { left: '50%', top: '50%' },
      ], { duration: 3000, easing: 'cubic-bezier(0.68,-0.55,0.265,1.55)', fill: 'forwards' as FillMode }),
    ];

    paths[Math.floor(Math.random() * paths.length)](envelope);

    envelope.addEventListener('click', () => {
      setShowOverlay(true);
      setShowLetterPopup(true);
      envelope.remove();
    });

    setTimeout(() => {
      if (document.body.contains(envelope)) envelope.remove();
    }, 5000);
  }, []);

  const closeLetter = () => {
    setShowOverlay(false);
    setShowLetterPopup(false);
  };

  return (
    <>
      <section id="riddle" className="py-20 px-8 max-w-[900px] mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 relative section-title-line"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          Riddle Challenge
        </motion.h2>
        <motion.div
          className="riddle-conic rounded-[20px] p-12 text-center my-12 relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8 relative z-10" style={{ color: '#f093fb' }}>
            🧩 Let's Solve a Riddle
          </h3>
          <p className="text-lg italic mb-8 leading-relaxed relative z-10" style={{ color: '#f1f5f9' }}>
            {riddle.text}
          </p>
          <div className="flex gap-4 justify-center items-center mb-8 flex-wrap relative z-10">
            <input
              type="text"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && checkAnswer()}
              placeholder="Type your answer..."
              className="px-6 py-4 rounded-full text-base min-w-[250px] transition-all duration-300 focus:outline-none"
              style={{
                border: '2px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                backdropFilter: 'blur(20px)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#f093fb';
                e.target.style.boxShadow = '0 0 20px rgba(240,147,251,0.3)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={checkAnswer}
              className="px-8 py-4 rounded-full font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1 border-none"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
              }}
            >
              ✅ Submit
            </button>
            <button
              onClick={showHint}
              className="px-8 py-4 rounded-full font-semibold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1"
              style={{
                background: 'transparent',
                border: '2px solid #f093fb',
                color: '#f093fb',
              }}
            >
              💡 Need a Hint?
            </button>
          </div>
          {feedback && (
            <p className="text-lg font-semibold my-4 relative z-10" style={{ color: feedbackColor }}>
              {feedback}
            </p>
          )}
          {clue && (
            <p
              className="text-xl font-bold my-4 tracking-wider font-mono relative z-10"
              style={{ color: clueColor }}
            >
              {clue}
            </p>
          )}
          {solved && (
            <div className="mt-8 relative z-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-6 rounded-full font-bold text-lg uppercase tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  color: 'white',
                  boxShadow: '0 15px 35px rgba(76,175,80,0.4)',
                  animation: 'resumePulse 3s infinite',
                  textDecoration: 'none',
                }}
              >
                📄 View My Resume
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* Overlay + Letter popup */}
      {showOverlay && (
        <div className="overlay-bg show" onClick={closeLetter} />
      )}
      {showLetterPopup && (
        <div
          className="letter-popup show"
          onClick={closeLetter}
          style={{ color: '#fff' }}
        >
          <div style={{ fontSize: 30, marginBottom: 15 }}>💡</div>
          <h3 style={{ color: '#f093fb', marginTop: 0 }}>Secret Hint 🔍</h3>
          <div
            style={{ fontStyle: 'italic', color: '#f1f5f9', lineHeight: 1.4, marginBottom: 15 }}
            dangerouslySetInnerHTML={{ __html: hintLetter }}
          />
          <p style={{ fontSize: 14, color: '#f1f5f9' }}>Click anywhere to close</p>
        </div>
      )}
    </>
  );
}
