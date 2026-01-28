import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
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
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;