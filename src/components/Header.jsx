// src/components/Header.jsx
import React from 'react';

const Header = ({ currentLang, setCurrentLang }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div>
            <h1 className="logo serif">MOG-RS Network</h1>
            <p className="subtitle">MOGAD European Risk Stratification Network</p>
          </div>
        </div>
        <div className="language-selector">
          {['en', 'es', 'fr', 'de', 'it'].map((lang) => (
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