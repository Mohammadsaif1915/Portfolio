import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaDocker, FaDatabase,
  FaHtml5, FaCss3Alt, FaShieldAlt, FaCertificate, FaGraduationCap,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiCplusplus, SiFastapi } from 'react-icons/si';

const skills = {
  All: null, // filled below
  Frontend: [
    { name: 'HTML5', icon: <FaHtml5 color="#e34f26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
    { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
    { name: 'React.js', icon: <FaReact color="#61dafb" /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06b6d4" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
    { name: 'SQL/NoSQL', icon: <FaDatabase color="#f59e0b" /> },
    { name: 'Firebase', icon: <SiFirebase color="#ffca28" /> },
    { name: 'Python', icon: <FaPython color="#3776ab" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599c" /> },
  ],
  'Security & Tools': [
    { name: 'Cybersecurity', icon: <FaShieldAlt color="#00e5ff" /> },
    { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ed" /> },
  ],
};

const ALL_ITEMS = [...skills.Frontend, ...skills.Backend, ...skills['Security & Tools']];
skills.All = ALL_ITEMS;

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Security & Tools'];

const certifications = [
  { name: 'Python & Machine Learning', icon: <FaCertificate /> },
  { name: 'Full Stack Developer', icon: <FaGraduationCap /> },
];

const TechStackSection = () => {
  const [active, setActive] = useState('All');

  const items = useMemo(() => skills[active], [active]);

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">My Tech <span className="text-gradient">Stack</span></h2>
          <p className="section-subtitle">Technologies I reach for to build full-stack web applications and explore cybersecurity — hover to freeze one in place.</p>
        </motion.div>

        <div className="tech-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tech-tab${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tech-float-field">
          <AnimatePresence mode="popLayout">
            {items.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="tech-orb"
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                style={{
                  '--dur': `${4 + (i % 5)}s`,
                  '--delay': `${(i % 6) * 0.4}s`,
                }}
              >
                <div style={{ fontSize: '2.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
                  {tech.icon}
                </div>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="cert-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert) => (
            <div className="cert-chip" key={cert.name}>
              {cert.icon} {cert.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
