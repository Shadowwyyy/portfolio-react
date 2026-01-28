import { motion } from 'framer-motion';

function About({ onBack }) {
  return (
    <motion.div
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-header">
        <h2 className="section-title">PROFILE</h2>
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
              Recent MS Software Engineering Systems graduate from Northeastern University (May 2025) with a passion for building innovative full-stack applications and music technology.
            </p>
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