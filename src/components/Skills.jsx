import { motion } from 'framer-motion';
import { useMouseShadow } from '../hooks/useMouseShadow';

function Skills({ onBack }) {
  const textShadow = useMouseShadow();

  const skillCategories = [
    {
      title: 'LANGUAGES',
      skills: ['JavaScript', 'Python', 'Java', 'SQL']
    },
    {
      title: 'FRONTEND',
      skills: ['React', 'Three.js', 'HTML/CSS', 'Web Audio API']
    },
    {
      title: 'BACKEND',
      skills: ['Node.js', 'REST APIs', 'GraphQL', 'FastAPI']
    },
    {
      title: 'TOOLS & CLOUD',
      skills: ['AWS', 'Docker', 'MongoDB', 'Git']
    }
  ];

  return (
    <motion.div
      className="section skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-header">
        <h2 className="section-title" style={{ textShadow }}>SKILLS</h2>
        <div className="back-btn" onClick={onBack}>
          <span>← BACK</span>
        </div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map(skill => (
                <motion.span
                  key={skill}
                  className="skill-item"
                  whileHover={{ x: 5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;