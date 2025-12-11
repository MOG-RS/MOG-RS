import React from 'react';
import './HomeColumns.css';

export default function HomeColumns({ t, setCurrentSection }) {
    
    const handleNavigation = (id) => {
        setCurrentSection(id);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };
    
    return (
        <section className="column-section-wrapper">
            {/* Título de la sección de comparación */}
            <h2 className="section-title column-compare-title serif">{t('home-compare-title')}</h2>
            
            <div className="two-column-layout">
                
                {/* Columna 1: MOGAD */}
                <div className="column-card mogad-column">
                    <h3 className="column-title">{t('col-mogad-title')}</h3>
                    <p className="column-text">{t('col-mogad-text')}</p>
                    
                    <button
                        type="button"
                        className="ctb-button"
                        onClick={() => handleNavigation('educate')}
                    >
                        {t('col-button-text')}
                    </button>
                </div>

                {/* La línea divisoria se crea en CSS */}
                <div className="column-divider"></div>
                
                {/* Columna 2: NMOSD */}
                <div className="column-card nmosd-column">
                    <h3 className="column-title">{t('col-nmosd-title')}</h3>
                    <p className="column-text">{t('col-nmosd-text')}</p>
                    
                    <button
                        type="button"
                        className="ctb-button"
                        onClick={() => handleNavigation('educate')}
                    >
                        {t('col-button-text')}
                    </button>
                </div>
            </div>
        </section>
    );
}