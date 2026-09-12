import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#internships' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer" style={{ position: 'relative', zIndex: 2 }}>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              MS<span className="text-gradient">.</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', maxWidth: '280px', lineHeight: 1.6 }}>
              Full Stack Developer & Computer Engineering Student based in Mumbai, India.
            </p>
          </div>

          <nav style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="footer-social">
            <a href="https://github.com/Mohammadsaif1915" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohammadsaif-imtiyaj-rakhangi-92a612327" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:mohammadsaif1915@gmail.com" className="footer-social-btn" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Mohammad Saif Rakhangi. All rights reserved.</p>
          <p className="footer-copy" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with <FaHeart size={12} color="#ef4444" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
