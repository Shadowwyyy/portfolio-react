import { motion } from 'framer-motion';
import { useMouseShadow } from '../hooks/useMouseShadow';

function Projects({ onBack }) {
  const textShadow = useMouseShadow();

  const projects = [
    {
      title: '3D AUDIO VISUALIZER',
      tag: 'FEATURED',
      description: 'Real-time audio-reactive 3D visualizer using Three.js and Web Audio API. Transforms music into immersive visual experiences with dynamic geometry and shader effects.',
      tech: ['Three.js', 'Web Audio API', 'JavaScript', 'GLSL'],
      link: 'https://github.com/Shadowwyyy/Audio-visualizer-3d'
    },
    {
      title: 'FIGROUP',
      tag: 'SaaS',
      description: 'Full-stack SaaS finance platform for group expense management and financial planning. Built with modern web technologies and scalable architecture.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/Shadowwyyy/Figroup'
    },
    {
      title: 'FINSYNC',
      tag: 'FINTECH',
      description: 'Financial management system with automated transaction tracking, budget analysis, and data visualization. Designed for personal and small business use.',
      tech: ['JavaScript', 'REST API', 'SQL', 'Chart.js'],
      link: 'https://github.com/Shadowwyyy/FinSync'
    },
    {
      title: 'KEYBOARD SCRAPER',
      tag: 'AUTOMATION',
      description: 'Python-based web scraping tool for mechanical keyboard enthusiasts. Aggregates pricing data, availability, and specifications across multiple retailers.',
      tech: ['Python', 'BeautifulSoup', 'Selenium', 'Data Mining'],
      link: 'https://github.com/Shadowwyyy/Keyboard-Scraper'
    },
    {
      title: 'PORTFOLIO WEBSITE',
      tag: 'REACT',
      description: 'Personal portfolio built with React and Framer Motion featuring Persona 5-inspired design. Includes interactive mouse-tracking effects, smooth animations, and integrated contact form.',
      tech: ['React', 'Framer Motion', 'JavaScript', 'CSS3'],
      link: 'https://github.com/Shadowwyyy/portfolio-react'
}
  ];

  return (
    <motion.div
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-header">
        <h2 className="section-title" style={{ textShadow }}>PROJECTS</h2>
        <div className="back-btn" onClick={onBack}>
          <span>← BACK</span>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tag">{project.tag}</div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <span>VIEW PROJECT</span>
              <span className="arrow">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;