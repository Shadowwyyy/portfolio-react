import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMouseShadow } from '../hooks/useMouseShadow';

function Contact({ onBack }) {
  const textShadow = useMouseShadow();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

const validateEmail = (email) => {
  // Check minimum length
  if (email.length < 6) {
    return 'Email address is too short';
  }
  
  // Check basic format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  
  // Block consecutive dots or invalid special chars
  if (email.includes('..') || /[!#$%&*+=?^`{|}~]/.test(email)) {
    return 'Email contains invalid characters';
  }
  
  // Block emails with numbers only in local part
  const localPart = email.split('@')[0];
  if (/^\d+$/.test(localPart)) {
    return 'Please use a valid email address';
  }
  
  // Block common disposable email domains
  const disposableDomains = [
    'tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
    'throwaway.email', 'yopmail.com', 'maildrop.cc', 'temp-mail.org',
    'getnada.com', 'trashmail.com', 'fakeinbox.com', 'sharklasers.com'
  ];
  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableDomains.includes(domain)) {
    return 'Please use a permanent email address';
  }
  
  return '';
};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // If validation passes, submit the form
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onBack();
        }, 1500);
      }, 1000);
    }).catch(() => {
      setStatus('error');
    });
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
        <h2 className="section-title" style={{ textShadow }}>CONTACT</h2>
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
          <input type="hidden" name="_subject" value="New contact from Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="form-group">
            <label htmlFor="name">
              NAME <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              EMAIL <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              MESSAGE <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows="5"
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
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
          
          {status === 'error' && (
            <motion.div
              className="form-message error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✗ Failed to send message. Please try again.
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