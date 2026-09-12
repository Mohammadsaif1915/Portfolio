import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mohammadsaif-imtiyaj-rakhangi-92a612327';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mohammadsaif1915@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Let's build something <span className="text-gradient">great</span> together.</h3>
            <p className="contact-info-text">
              I'm currently open to internships, freelance projects, and collaborative opportunities. Whether it's a full-stack web app or a cybersecurity project, let's talk!
            </p>

            <div className="contact-links">
              <a href="https://github.com/Mohammadsaif1915" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon"><FaGithub /></div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">@Mohammadsaif1915</div>
                </div>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-link-icon"><FaLinkedin /></div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">Mohammad Saif Rakhangi</div>
                </div>
              </a>
              <a href="mailto:mohammadsaif1915@gmail.com" className="contact-link-item">
                <div className="contact-link-icon"><FaEnvelope /></div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">mohammadsaif1915@gmail.com</div>
                </div>
              </a>
              <a href="tel:+919307290119" className="contact-link-item">
                <div className="contact-link-icon"><FaPhone /></div>
                <div>
                  <div className="contact-link-label">Phone</div>
                  <div className="contact-link-value">+91 93072 90119</div>
                </div>
              </a>
              <div className="contact-link-item" style={{ cursor: 'default' }}>
                <div className="contact-link-icon"><FaMapMarkerAlt /></div>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                <FaEnvelope size={15} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
