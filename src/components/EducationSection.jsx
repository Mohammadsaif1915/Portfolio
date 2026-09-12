import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FaSchool, FaFlask, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaSchool />,
    year: 'Jun 2020 – Mar 2022',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Late Eknath Rane English Medium High School, Lanja, Ratnagiri',
    description: 'Completed schooling and first got hooked on computers — the starting point of everything that followed.',
    side: 'left',
    color: '#e01b24',
  },
  {
    icon: <FaFlask />,
    year: 'Aug 2022 – Mar 2024',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rizvi College of Arts, Science and Commerce, Bandra, Mumbai',
    description: 'Built a foundation in the sciences while exploring programming on the side.',
    side: 'right',
    color: '#ff4757',
  },
  {
    icon: <FaGraduationCap />,
    year: 'Aug 2024 – May 2026',
    degree: 'Diploma in Computer Engineering',
    institution: "Anjuman-I-Islam's Abdul Razzak Kalsekar Polytechnic, Panvel, Navi Mumbai",
    description: 'Focused study in Computer Engineering — where full-stack development and cybersecurity became a real direction, not just a hobby.',
    side: 'left',
    color: '#e01b24',
  },
  {
    icon: <FaUniversity />,
    year: 'Aug 2026 – May 2029',
    degree: 'Bachelor of Technology, Computer Engineering',
    institution: 'Lokmanya Tilak College of Engineering, KoparKhairne, Navi Mumbai',
    description: 'Currently advancing into a B.Tech, deepening software engineering fundamentals while continuing to ship real-world projects.',
    side: 'right',
    color: '#ff4757',
    current: true,
  },
];

const RoadNode = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = item.side === 'left';

  return (
    <motion.div
      ref={ref}
      className={`road-node road-node--${item.side}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Connector line from center to card */}
      <div className="road-connector" />

      {/* Center pin */}
      <div className={`road-pin${inView ? ' road-pin--active' : ''}`} style={{ '--pin-color': item.color }}>
        <span className="road-pin-ring" />
        <span className="road-pin-icon">{item.icon}</span>
      </div>

      {/* Card */}
      <motion.div
        className={`road-card${item.current ? ' road-card--current' : ''}`}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        style={{ '--card-accent': item.color }}
      >
        {item.current && (
          <div className="road-card-badge">
            <span className="road-live-dot" />
            Current
          </div>
        )}
        <span className="road-year">{item.year}</span>
        <h3 className="road-degree">{item.degree}</h3>
        <p className="road-institution">{item.institution}</p>
        <p className="road-desc">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

const EducationSection = () => {
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 0.8', 'end 0.3'],
  });
  const pathProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Animated dot position along the SVG path (0→100% of height)
  const dotY = useTransform(pathProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Academic Journey</span>
          <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
          <p className="section-subtitle">The road from high school to a full-stack, security-minded engineer — plotted as a route, not a resume line.</p>
        </motion.div>

        <div className="road-map" ref={wrapRef}>
          {/* Central curved SVG road */}
          <svg
            className="road-svg"
            viewBox="0 0 200 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Road dashes (grey track) */}
            <path
              d="M100,0 C100,0 40,120 100,220 C160,320 160,420 100,520 C40,620 40,720 100,820 C130,870 100,900 100,900"
              fill="none"
              stroke="rgba(224,27,36,0.12)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Road center dashes */}
            <path
              d="M100,0 C100,0 40,120 100,220 C160,320 160,420 100,520 C40,620 40,720 100,820 C130,870 100,900 100,900"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              strokeDasharray="16 10"
              strokeLinecap="round"
            />
            {/* Animated red fill line */}
            <motion.path
              d="M100,0 C100,0 40,120 100,220 C160,320 160,420 100,520 C40,620 40,720 100,820 C130,870 100,900 100,900"
              fill="none"
              stroke="url(#roadGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
            />
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff4757" />
                <stop offset="50%" stopColor="#e01b24" />
                <stop offset="100%" stopColor="#c0392b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated traveling dot */}
          <motion.div
            className="road-travel-dot"
            style={{ top: dotY }}
          >
            <div className="road-travel-dot-inner" />
          </motion.div>

          {/* Nodes */}
          <div className="road-nodes">
            {educationData.map((item, index) => (
              <RoadNode item={item} index={index} key={item.degree} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
