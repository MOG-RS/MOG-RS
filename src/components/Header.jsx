// src/components/Header.jsx
import React, { useRef, useEffect } from 'react';

const Header = ({ currentLang, setCurrentLang, t, currentSection, setCurrentSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const menuRef = useRef(null);
  const sections = [
    { id: 'home',    icon: 'home' },
    { id: 'about',   icon: 'info-circle' },
    { id: 'project', icon: 'project-diagram' },
    { id: 'educate',    icon: 'book' }, 
    { id: 'contact', icon: 'envelope' },
  ];

  useEffect(() => {
    const outside = (e) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    const esc = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('mousedown', outside);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', outside);
      document.removeEventListener('keydown', esc);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);
  
  const go = (id) => {
    setCurrentSection?.(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div>
            <h1 className="logo serif">MogNmo Network</h1>
            <p className="subtitle">{t('header-subtitle')}</p>
          </div>
        </div>

        <nav className={`nav-container ${mobileMenuOpen ? 'is-open' : ''}`} role="navigation" aria-label="Main">
          <div className="nav-content">
            <button
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              aria-controls="navMenu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars" aria-hidden="true"></i>
            </button> 
            <div id="navMenu" ref={menuRef} className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <ul className="menu-list">
                {sections.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <button
                      type="button"
                      className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                      onClick={() => go(item.id)}
                      aria-current={currentSection === item.id ? 'page' : undefined}
                    >
                      <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                      <span>{t(item.id)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
          
        <div className="language-selector">
          {['en', 'es'].map((lang) => ( 
            <button
              key={lang}
              className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
              onClick={() => setCurrentLang(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div> 
      </div>
    </header>
  );
};

export default Header;

// import React from 'react';

// const Header = ({ currentLang, setCurrentLang, t }) => {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="header-left">
//           <div>
//             <h1 className="logo serif">MOG-RS</h1>
//             <p className="subtitle">{t('subtitle-text')}</p>
//           </div>
//         </div>
//         <div className="language-selector">
//           {['en', 'es', 'fr', 'de', 'it'].map((lang) => (
//             <button
//               key={lang}
//               className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
//               onClick={() => setCurrentLang(lang)}
//             >
//               {lang.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;