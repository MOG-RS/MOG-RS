import React, { useState } from 'react';
import './App.css';
import { translations } from './translations';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import About from './components/sections/About';
import Join from './components/sections/Join';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Project from './components/sections/Project';


function App() {
  const [currentLang, setCurrentLang] = useState('en');
  // const [currentSection, setCurrentSection] = useState('about');
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (key) => {
    const langData = translations[currentLang];
    return langData && langData[key] ? langData[key] : key;
  };

  return (
    <div className="App">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <NavBar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        t={t}
      />

    <main className="main-content">
        {currentSection === 'home' && <Home t={t} />}
        {currentSection === 'about' && <About t={t} />}
        {currentSection === 'project' && <Project t={t} />}
        {currentSection === 'join' && <Join t={t} />}
        {currentSection === 'contact' && <Contact t={t} />}
    </main>

      <Footer t={t} />
    </div>
  );
}

export default App;

