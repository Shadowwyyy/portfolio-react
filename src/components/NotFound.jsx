import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="bg-pattern"></div>
      <div className="diagonal-stripe stripe-1"></div>
      <div className="diagonal-stripe stripe-2"></div>
      <div className="diagonal-stripe stripe-3"></div>

      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="error-code"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          404
        </motion.h1>
        
        <div className="error-box">
          <p className="error-title">PAGE NOT FOUND</p>
        </div>

        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn-link">
          <motion.div
            className="home-btn"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>← BACK TO HOME</span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;