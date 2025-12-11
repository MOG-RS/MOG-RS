/*** 
 * src/components/sections/About.jsx
 */

import React from 'react';
import './About.css'; 


export default function About({ t }) {
  return (
    <section id="about" className="section active about-section">
      {/* Titulo Principal de la Seccion */}
      <h2 className="section-title serif">{t('about-title')}</h2>

      {/* Contenedor de las tres tarjetas */}
      <div className="about-cards">
        
        {/* Tarjeta 1: Misión */}
        <div className="info-card">
          <h3 className="about-card-title serif">{t('about-mission-title')}</h3>
          <p className="card-text">{t('about-mission-text')}</p>
        </div>

        {/* Tarjeta 2: Quiénes Somos */}
        <div className="info-card">
          <h3 className="about-card-title serif">{t('about-who-title')}</h3>
          <p className="card-text">{t('about-who-text')}</p>
        </div>

        {/* Tarjeta 3: Qué Hacemos */}
        <div className="info-card">
          <h3 className="about-card-title serif">{t('about-what-title')}</h3>
          <p className="card-text">{t('about-what-text')}</p>
        </div>
        
      </div>
    </section>
  );
}

