import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import VideoBackground from './components/VideoBackground';
import LoadingScreen from './components/LoadingScreen';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import EducationSection from './components/EducationSection';
import InternshipsSection from './components/InternshipsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [entered, setEntered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !entered);
  }, [entered]);

  // Called by LoadingScreen's Enter button click — audio ref is passed in
  const handleStartAudio = (audio) => {
    audioRef.current = audio;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && (
          <LoadingScreen
            key="loader"
            onEnter={() => setEntered(true)}
            onStartAudio={handleStartAudio}
          />
        )}
      </AnimatePresence>

      <VideoBackground />
      <div className="grain-overlay" />
      <MusicPlayer audioRef={audioRef} show={entered} />

      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            MS<span className="text-gradient">.</span>
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar-menu${isMenuOpen ? ' open' : ''}`}>
            <ul className="navbar-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#education" onClick={closeMenu}>Education</a></li>
              <li><a href="#internships" onClick={closeMenu}>Experience</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <TechStackSection />
        <EducationSection />
        <InternshipsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
