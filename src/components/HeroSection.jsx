import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCode, FaDownload } from 'react-icons/fa';

const TERMINAL_TEXT = 'mohammadsaif@portfolio:~$';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(TERMINAL_TEXT.slice(0, i));
      if (i >= TERMINAL_TEXT.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -14, y: x * 16 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-inner">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="dot-live" />
              Open to Internships &amp; Freelance Work
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="glitch-text" data-text="Mohammad Saif Imtiyaj">Mohammad Saif Imtiyaj</span>
              <br />
              <span className="text-gradient glitch-text" data-text="Rakhangi">Rakhangi</span>
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Full Stack Developer &amp; Computer Engineering Student
            </motion.p>

            <motion.p
              className="hero-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build modern, scalable, and secure web applications — turning ideas into
              practical digital solutions across the full stack, with FastAPI, the MERN stack,
              and a growing focus on cybersecurity.
            </motion.p>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <FaMapMarkerAlt size={12} />
              <span>Mumbai, India</span>
            </motion.div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#projects" className="btn-primary">
                <FaCode size={14} /> View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <div>
                <div className="hero-stat-value">4+</div>
                <div className="hero-stat-label">Projects Shipped</div>
              </div>
              <div>
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">Internships</div>
              </div>
              <div>
                <div className="hero-stat-value">10+</div>
                <div className="hero-stat-label">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo — Dramatic framing */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div
              ref={containerRef}
              className="hero-image-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              {/* Glow orbs */}
              <div className="hero-image-glow hero-image-glow--red" />
              <div className="hero-image-glow hero-image-glow--dark" />

              <div className="hero-image-frame">
                <img
                  src="/Portfolio self image.png"
                  alt="Mohammad Saif Imtiyaj Rakhangi"
                  className="hero-image"
                />
                {/* Red scan overlay */}
                <div className="hero-image-scan" />
                {/* Vignette */}
                <div className="hero-image-vignette" />
              </div>

              {/* Floating info chip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="hero-float-chip"
              >
                <div className="hero-float-chip-dot" />
                <span>Available for Work</span>
              </motion.div>

              {/* Side tag */}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="hero-side-tag"
              >
                &lt;Developer /&gt;
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
