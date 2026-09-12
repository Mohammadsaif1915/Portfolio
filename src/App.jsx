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
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !entered);
  }, [entered]);

  // Called by LoadingScreen's Enter button click — audio ref is passed in
  const handleStartAudio = (audio) => {
    audioRef.current = audio;
  };

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
          <a href="#home" className="navbar-logo">
            MS<span className="text-gradient">.</span>
          </a>
          <nav>
            <ul className="navbar-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#internships">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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
