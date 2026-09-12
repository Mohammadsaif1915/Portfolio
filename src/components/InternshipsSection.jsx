import React from 'react';
import { motion } from 'framer-motion';

const internships = [
  {
    role: 'Web Developer',
    company: 'CodSoft',
    period: 'May 2026 – Aug 2026 · 4 mos',
    description: 'Working on real-world web development tasks as part of a structured internship program, applying full-stack fundamentals to practical assignments.',
    tags: ['Web Development', 'JavaScript', 'Full Stack'],
  },
  {
    role: 'MERN Stack Developer',
    company: 'CyberShield',
    period: 'Nov 2025 – Apr 2026 · 6 mos',
    description: 'Developed a cybersecurity awareness platform using the MERN stack, then published a research paper based on the project concept.',
    bullets: [
      'Interactive learning courses',
      'Quiz and progress tracking',
      'Phishing simulator',
      '2D educational awareness game',
      'User dashboard and analytics',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cybersecurity'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Alfa Diesel Services',
    period: 'Jun 2025 – Aug 2025 · 3 mos',
    description: 'Built and maintained full-stack features for a business services platform based in Navi Mumbai, working across both frontend and backend.',
    tags: ['Full Stack', 'React', 'Node.js'],
  },
  {
    role: 'Python & Machine Learning',
    company: 'Udemy',
    period: 'Aug 2025 – Jul 2026 · 1 yr',
    description: 'Self-directed, year-long study of Python and machine learning fundamentals — building the data and ML foundation behind current projects.',
    tags: ['Python', 'Machine Learning'],
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Work Experience</span>
          <h2 className="section-title">My <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">Hands-on experience across internships, freelance work, and self-directed learning.</p>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {internships.map((item, index) => (
            <motion.div
              key={item.company}
              className="internship-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div className="internship-header">
                <div>
                  <h3 className="internship-role">{item.role}</h3>
                  <div className="internship-company">{item.company}</div>
                </div>
                <span className="internship-period mono">{item.period}</span>
              </div>
              <p className="internship-desc">{item.description}</p>
              {item.bullets && (
                <ul className="internship-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="internship-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
