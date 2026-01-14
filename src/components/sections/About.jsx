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
          <p className="about-text">{t('about-mission-text')}</p>
        </div>

        {/* Tarjeta 2: Quiénes Somos */}
        <div className="info-card">
          <h3 className="about-card-title serif">{t('about-who-title')}</h3>
          <p className="about-text">{t('about-who-text')}</p>
        </div>

        {/* Tarjeta 3: Qué Hacemos */}
        <div className="info-card">
          <h3 className="about-card-title serif">{t('about-what-title')}</h3>
          <p className="about-text">{t('about-what-text')}</p>
        </div>
        
      </div>

      {/* 4. Mapa de la Red */}
      <div className="map-container-wrapper">
        <h3 className="subsection-title" style={{textAlign: 'center', marginBottom: '1.5rem'}}>
          {t('location-map-title') || 'Nuestra Red'}
        </h3>
        <div className="google-map-container">
          <iframe 
            src="https://www.google.com/maps/d/u/2/embed?mid=1nbX9FqkdBWaN_wDmg4t9cidPu4ZdMZk&ehbc=2E312F" 
            width="100%" 
            height="480" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map Network"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

