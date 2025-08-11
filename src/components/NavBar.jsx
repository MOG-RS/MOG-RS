import React, { useEffect, useRef } from 'react';
import './NavBar.css';

const NavBar = ({ currentSection, setCurrentSection, mobileMenuOpen, setMobileMenuOpen, t }) => {
  const menuRef = useRef(null);

  const sections = [
    { id: 'home',    icon: 'home' },
    { id: 'about',   icon: 'info-circle' },
    { id: 'project', icon: 'project-diagram' },
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
    <nav className={`nav-container ${mobileMenuOpen ? 'is-open' : ''}`} role="navigation" aria-label="Main">
      <div className="nav-content">
        {/* 右上角：手机端汉堡按钮 */}
        <button
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-controls="navMenu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>

        {/* 居中菜单（桌面可见 / 手机在抽屉里） */}
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
  );
};

export default NavBar;
