import React, { useState, useEffect } from 'react';
import './App.css';
import { translations } from './translations';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/sections/About';
import Educate from './components/sections/Educate';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Project from './components/sections/Project';


function App() {
  const [currentLang, setCurrentLang] = useState('en');
  // const [currentSection, setCurrentSection] = useState('about');
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  const t = (key) => {
    const langData = translations[currentLang];
    return langData && langData[key] ? langData[key] : key;
  };

  return (
    <div className="App">
      <div className="full-fixed-header">
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}/>
      </div>

    <main id="app-main-content" className="main-content">
        {currentSection === 'home' && <Home t={t} setCurrentSection={setCurrentSection} />}
        {currentSection === 'about' && <About t={t} />}
        {currentSection === 'project' && <Project t={t} />}
        {currentSection === 'educate' && <Educate t={t} currentLang={currentLang}/>}
        {currentSection === 'contact' && <Contact t={t} />}
    </main>

      <Footer t={t} />
    </div>
  );
}

export default App;

