import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    number: '01',
    title: 'CyberShield',
    description: 'A cybersecurity awareness platform aimed at protecting civilians from digital threats. Features security tools, educational content, and threat detection capabilities.',
    repo: 'https://github.com/Mohammadsaif1915/CyberShield---Cyber-Safety-for-Civilians',
    demo: null,
    tags: ['Cybersecurity', 'JavaScript', 'Web Dev'],
  },
  {
    number: '02',
    title: 'TRUEMARK-AI',
    description: 'An AI-powered monitoring and surveillance intelligence system built with TypeScript. Provides smart insights and advanced real-time analysis capabilities.',
    repo: 'https://github.com/Mohammadsaif1915/TRUEMARK-AI',
    tags: ['AI/ML', 'TypeScript', 'React'],
  },
  {
    number: '03',
    title: 'DSE College Predictor',
    description: 'A web tool that helps students predict their Direct Second Year Engineering (DSE) college admissions based on historical cutoff data and percentile score.',
    repo: 'https://github.com/Mohammadsaif1915/DSE-College-Predictor',
    demo: 'https://dse-college-predictor-cvoa.vercel.app/',
    tags: ['JavaScript', 'React', 'Education'],
  },
  {
    number: '04',
    title: 'EID Special Online Bazaar',
    description: 'A fully functional e-commerce platform built for special holiday shopping. Includes product listings, cart functionality, and a seamless shopping experience.',
    repo: 'https://github.com/Mohammadsaif1915/EID-Special-Online-Bazaar',
    demo: 'https://eid-special-online-bazaar-theta.vercel.app',
    tags: ['E-commerce', 'JavaScript', 'Full Stack'],
  },
  {
    number: '05',
    title: 'MD CYBER HUB',
    description: 'A user-friendly digital services platform designed to simplify access to essential government and online services, including PAN Card, Aadhaar, Passport, Gazette, certificates, and online form assistance.',
    repo: 'https://github.com/Mohammadsaif1915/MD-CYBER-HUB',
    demo: 'https://md-cyber-hub.vercel.app',
    tags: ['Digital Services', 'Government Services', 'JavaScript', 'Web Development'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Real-world applications I've built, ranging from cybersecurity tools to AI systems and e-commerce platforms.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="project-number">{project.number}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub size={15} /> View Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt size={13} /> Live Demo
                  </a>
                )}
              </div>
              {project.note && <p className="project-note">// {project.note}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://github.com/Mohammadsaif1915"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
