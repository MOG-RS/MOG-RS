// src/components/Nav.jsx


import React from 'react';
import './NavBar.css';

const NavBar = ({ currentSection, setCurrentSection, mobileMenuOpen, setMobileMenuOpen, t }) => {
  const sections = [
    { id: 'home', icon: 'home' },
    { id: 'about', icon: 'info-circle' },
    { id: 'project', icon: 'project-diagram' },
    // { id: 'Network', icon: 'hospital' },
    { id: 'contact', icon: 'envelope' }
  ];

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="main-nav">
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            {sections.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={currentSection === item.id ? 'page' : undefined}
                >
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{t(`${item.id}`)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
