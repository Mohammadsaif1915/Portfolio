import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onEnter, onStartAudio }) => {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [typedTagline, setTypedTagline] = useState('');
  const nameRef = useRef(null);
  const fullName = 'Mohammad Saif';
  const tagline = 'Full Stack Developer & Engineer';

  // Typewriter for name
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedName(fullName.slice(0, i));
      if (i >= fullName.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, []);

  // Typewriter for tagline (starts after name)
  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTypedTagline(tagline.slice(0, i));
        if (i >= tagline.length) clearInterval(id);
      }, 45);
      return () => clearInterval(id);
    }, fullName.length * 80 + 300);
    return () => clearTimeout(delay);
  }, []);

  // Progress bar
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        const next = Math.min(100, p + Math.random() * 12 + 3);
        if (next >= 100) clearInterval(id);
        return next;
      });
    }, 150);
    return () => clearInterval(id);
  }, []);

  // Show Enter button when loading completes
  useEffect(() => {
    if (progress >= 100) {
      const tid = setTimeout(() => setReady(true), 600);
      return () => clearTimeout(tid);
    }
  }, [progress]);

  const handleEnterClick = () => {
    // Create and play audio DIRECTLY in the click handler (real user gesture)
    const audio = new Audio('/animal_bgm.mp3');
    audio.loop = true;
    audio.volume = 1.0;
    audio.play().catch(e => console.warn('Audio blocked:', e));
    if (onStartAudio) onStartAudio(audio);
    // Enter immediately — App.jsx will unmount this component
    onEnter();
  };

  // SVG circle progress
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="loading-screen"
      key="loading-screen"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(16px)' }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background radial glows */}
      <div className="loader-bg-glow loader-bg-glow--1" />
      <div className="loader-bg-glow loader-bg-glow--2" />
      <div className="loader-bg-glow loader-bg-glow--3" />

      {/* Particle sparks */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="loader-spark" style={{ '--i': i }} />
      ))}

      <div className="loader-content" ref={nameRef}>
        {/* Initials ring */}
        <div className="loader-ring-wrap">
          <svg className="loader-ring-svg" width="130" height="130" viewBox="0 0 130 130">
            {/* Track */}
            <circle cx="65" cy="65" r="54" fill="none" stroke="rgba(224,27,36,0.12)" strokeWidth="3" />
            {/* Progress */}
            <circle
              cx="65" cy="65" r="54"
              fill="none"
              stroke="url(#redGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 0.2s ease' }}
            />
            <defs>
              <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4757" />
                <stop offset="100%" stopColor="#c0392b" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="loader-initials"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            MS
          </motion.div>
        </div>

        {/* Name typewriter */}
        <motion.div
          className="loader-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {typedName}
          <span className="loader-cursor-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="loader-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: typedTagline.length > 0 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {typedTagline}
        </motion.div>

        {/* Progress text */}
        <motion.div
          className="loader-progress-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="loader-progress-pct">{Math.floor(progress)}%</span>
          <span className="loader-progress-status">
            {progress < 30 ? 'Initializing...' : progress < 60 ? 'Loading assets...' : progress < 90 ? 'Almost ready...' : 'Launching!'}
          </span>
        </motion.div>

        {/* Bar */}
        <div className="loader-bar-track">
          <motion.div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div className="loader-bar-glow" style={{ left: `${progress}%` }} />
        </div>

        {/* Enter button */}
        <AnimatePresence>
          {ready && (
            <motion.button
              className="loader-enter-btn"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={handleEnterClick}
            >
              Enter Portfolio
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
