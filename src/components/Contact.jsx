import { motion } from 'framer-motion';

function Contact({ onBack }) {
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
              transition={{ delay: 0.3 + index * 0.1 }}
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