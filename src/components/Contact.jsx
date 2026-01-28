import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  setStatus('success');
  setTimeout(() => {
    setFormData({ name: '', email: '', message: '' });
  }, 1000);
};

  const contactLinks = [
    {
      icon: '✉',
      text: 'sharma.je@northeastern.edu',
      href: 'mailto:sharma.je@northeastern.edu'
    },
    {
      icon: '⚡',
      text: 'github.com/Shadowwyyy',
      href: 'https://github.com/Shadowwyyy'
    },
    {
      icon: '◆',
      text: 'linkedin.com/in/jeet-sharma14',
      href: 'https://www.linkedin.com/in/jeet-sharma14/'
    }
  ];

  return (
    <motion.div
      className="section contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-header">
        <h2 className="section-title">CONTACT</h2>
        <div className="back-btn" onClick={onBack}>
          <span>← BACK</span>
        </div>
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="contact-text">
          <p className="contact-intro">LET'S BUILD SOMETHING TOGETHER</p>
          <p className="contact-subtitle">
            Open to full-time opportunities in backend development, full-stack engineering, and data systems
          </p>
        </div>

<motion.form
  className="contact-form"
  action="https://formsubmit.co/sharma.je@northeastern.edu"
  method="POST"
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  {/* Hidden FormSubmit configs */}
  <input type="hidden" name="_subject" value="New contact from Portfolio!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  
  <div className="form-group">
    <label htmlFor="name">NAME</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="Your name"
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">EMAIL</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      placeholder="your.email@example.com"
    />
  </div>

  <div className="form-group">
    <label htmlFor="message">MESSAGE</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      placeholder="Tell me about your project or opportunity..."
      rows="5"
    />
  </div>

  <motion.button
    type="submit"
    className="submit-btn"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span>SEND MESSAGE</span>
    <span className="arrow">→</span>
  </motion.button>

  {status === 'success' && (
    <motion.div
      className="form-message success"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      ✓ Message sent successfully!
    </motion.div>
  )}
</motion.form>

        <p className="links-label">OR REACH OUT DIRECTLY:</p>
        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-text">{link.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;