import React from 'react';
import './HomeFight.css';

export default function HomeFight({ t, setCurrentSection }) {
    
    // Función de navegación de React (usa setCurrentSection)
    const handleNavigation = (id) => {
        setCurrentSection(id);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };
    
    return (
        <section className="fight-section-wrapper">
            <div className="fight-section">
                <h3 className="section-title fight-title serif">{t('fight-title')}</h3>
                <div className="card-content">
                    <p>{t('fight-text')}</p>
                </div>
                <div className="fight-button">
                    {/* Botón: Help */}
                    <button
                        type="button"
                        className="ctb-button"
                        onClick={() => handleNavigation('contact')}
                    >
                        {t('fight-help-btn')}
                    </button>
                </div>
            </div>
        </section>
    );
}