/*** 
 * src/components/sections/About.jsx
 */

// import React from 'react';
// import './About.css'; // 确保你有对应的样式文件

// export default function About({ t }) {
//   return (
//     <section className="section active about-section">
//       <h2 className="section-title serif">{t('about-title')}</h2>

//       {/* Summary Section */}
//       <div className="about-block">
//         <h3 className="block-title">{t('about-summary-title')}</h3>
//         <p className="block-highlight">{t('about-project-title')}</p>
//         <p className="block-text">{t('about-summary-text')}</p>
//       </div>

//       {/* Objectives Section */}
//       <div className="about-block">
//         <h3 className="block-title">{t('about-objectives-title')}</h3>
//         <p className="block-text">{t('about-objectives-text')}</p>
//       </div>

//       {/* Background Section */}
//       <div className="about-block">
//         <h3 className="block-title">{t('about-background-title')}</h3>
//         <p className="block-text">{t('about-background-text')}</p>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import './About.css'; // 确保你有对应的样式文件

export default function About({ t }) {
  return (
    <section className="section active about-section">
      <h2 className="section-title serif">{t('about-title')}</h2>

      {/* Background Section */}
      <div className="about-block">
        <h3 className="block-title">
          {t('about-background-title')}
        </h3>
        <p className="block-text">{t('about-background-text')}</p>
      </div>

      {/* Objectives Section */}
      <div className="about-block">
        <h3 className="block-title">
          {t('about-objectives-title')}
        </h3>
        <p className="block-text">{t('about-objectives-text')}</p>
      </div>
    </section>
  );
}

