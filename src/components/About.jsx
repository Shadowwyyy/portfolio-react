import { motion } from 'framer-motion';
import { useMouseShadow } from '../hooks/useMouseShadow';

function About({ onBack }) {
  const textShadow = useMouseShadow();

  return (
    <motion.div
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-header">
        <h2 className="section-title" style={{ textShadow }}>PROFILE</h2>
        <div className="back-btn" onClick={onBack}>
          <span>← BACK</span>
        </div>
      </div>

      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="profile-content">
          <div className="profile-text">
            <p className="intro-text">
              Recent MS Software Engineering Systems graduate from Northeastern University (May 2025) with a passion for building scalable backend systems and data-driven applications. Currently working as a Software Engineer at LegalPro+, where I design Python-based backend services, build API integrations with CRM and email platforms, and develop data pipelines that process structured data at scale. 
            </p>
            <p className="intro-text">
              Originally from Mumbai, India, I bring hands-on experience in building production-ready systems with Node.js, Python and SQL. I'm actively seeking full-time backend engineering or full-stack opportunities where I can contribute to building reliable, scalable systems that solve real problems.
            </p>
            
            <motion.a
              href="/Jeet_Sharma_Resume.pdf"
              download="Jeet_Sharma_Resume.pdf"
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span>DOWNLOAD RESUME</span>
              <span className="download-icon">↓</span>
            </motion.a>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">LOCATION</span>
                <span className="stat-value">Boston, MA</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">EDUCATION</span>
                <span className="stat-value">MS Software Engineering</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">ORIGIN</span>
                <span className="stat-value">Mumbai, India</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SPECIALIZATION</span>
                <span className="stat-value">Backend & Data Systems</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;