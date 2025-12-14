import React from 'react';
import './HomeInsights.css';
import logo2 from '../../asset/logo2.png'; 

export default function HomeInsights({ t, setCurrentSection }) {
    
    // Función de navegación de React (usa setCurrentSection)
    const handleNavigation = (id) => {
        setCurrentSection(id);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };
    
    return (
        <section className="insights-section-wrapper">
            <div className="insights-layout">
                
                {/* Columna Izquierda (70%): Quiénes Somos */}
                <div className="insights-column column-70">
                    <div className="insights-card who-we-are">
                        <h3 className="section-title insights-title serif">{t('insights-title')}</h3>
                            <p className="card-content">{t('insights-text1')}</p>
                            <p className="card-content">{t('insights-text2')}</p>
                    </div>
                </div>

                {/* Columna Derecha (30%): Enlaces Rápidos (Placeholder) */}
                <div className="insights-column column-30">
                     <div className="insights-card logo-insights">
                        <img src={logo2} alt="MOG-RS Logo" className="insights-logo" />
                            <div className="insights-buttons">
                                {/* Botón 1: Projects */}
                                <button
                                    type="button"
                                    className="ctb-button"
                                    onClick={() => handleNavigation('project')}
                                >
                                    {t('insights-projects-btn')}
                                </button>
                                
                                {/* Botón 2: Contact */}
                                <button
                                    type="button"
                                    className="ctb-button"
                                    onClick={() => handleNavigation('contact')}
                                >
                                    {t('insights-contact-btn')}
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}