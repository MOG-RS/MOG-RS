import React from 'react';
import './Join.css';

export default function Join({ t }) {
  return (
    <section id="join" className="join-section">
      <h2 className="section-title serif">{t('join-title')}</h2>
      
      <div className="join-content">
        <div className="join-info-box">
          <p>{t('join-text')}</p>

          <a 
            href="mailto:juan.granja@salud.madrid.org"
            className="join-button"
          >
            {t('join-button')}
          </a>
        </div>
      </div>
    </section>
  );
}
