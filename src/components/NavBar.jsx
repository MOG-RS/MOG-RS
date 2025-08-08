// src/components/Nav.jsx

// import React from 'react';
// import './NavBar.css';

// const NavBar = ({ currentSection, setCurrentSection, mobileMenuOpen, setMobileMenuOpen, t }) => {
//   const sections = [
//     { id: 'about', icon: 'flask' },
//     { id: 'biomarker', icon: 'dna' },
//     { id: 'network', icon: 'hospital' },
//     { id: 'team', icon: 'users' },
//     { id: 'partner', icon: 'handshake' },
//     { id: 'support', icon: 'heart' },
//     { id: 'contact', icon: 'envelope' }
//   ];

//   return (
//     <nav className="nav-container">
//       <div className="nav-content">
//         <div className="main-nav">
//           <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             <i className="fas fa-bars"></i>
//           </button>
//           <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
//             {sections.map((item) => (
//               <li className="nav-item" key={item.id}>
//                 <a
//                   href="#"
//                   className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
//                   onClick={() => {
//                     setCurrentSection(item.id);
//                     setMobileMenuOpen(false);
//                   }}
//                 >
//                   <i className={`fas fa-${item.icon}`}></i>
//                   {/* <span>{t(`nav-${item.id}`)}</span> */}
//                   <span>{t(item.id)}</span>

//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

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
                <a
                  href="#"
                  className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{t(`${item.id}`)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
