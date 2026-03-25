import { useState, useEffect, useCallback } from 'react';

const texts = [
  'AI/ML Developer',
  'Data Analyst',
  'Machine Learning Engineer',
  'Deep Learning Enthusiast',
  'Problem Solver',
  'Prompt Engineer',
  'AI Researcher & Innovator',
  'Web Developer',
];

export function useTypingEffect() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeEffect = useCallback(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex(prev => prev - 1);
    } else {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
    }
  }, [textIndex, charIndex, isDeleting]);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
      typeSpeed = 500;
      const timeout = setTimeout(() => {}, typeSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(typeEffect, typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, typeEffect]);

  return displayText;
}
