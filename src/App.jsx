import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('hero');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentView === 'hero' && (
          <Hero key="hero" onNavigate={handleNavigate} />
        )}
        {currentView === 'about' && (
          <About key="about" onBack={handleBack} />
        )}
        {currentView === 'projects' && (
          <Projects key="projects" onBack={handleBack} />
        )}
        {currentView === 'skills' && (
          <Skills key="skills" onBack={handleBack} />
        )}
        {currentView === 'contact' && (
          <Contact key="contact" onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;