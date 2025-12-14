// Fichero: Educate.jsx

import React, { useState } from 'react';
import './Educate.css';

// Importa los logos de las asociaciones. 
import logoAsoc1 from '../../asset/logo_asoc_1.jpg';
import logoAsoc2 from '../../asset/logo_asoc_2.png';
import logoAsoc3 from '../../asset/logo_asoc_3.png';

// Definición de las pestañas que usarás
const TABS = [
    { id: 'description', labelKey: 'tab-description' },
    { id: 'symptoms', labelKey: 'tab-symptoms' },
    { id: 'diagnosis', labelKey: 'tab-diagnosis' },
    { id: 'treatments', labelKey: 'tab-treatments' },
    { id: 'prognosis', labelKey: 'tab-prognosis' },
    { id: 'conclusion', labelKey: 'tab-conclusion' },
];

// --- NUEVAS RUTAS DE DESCARGA ---
const PDF_DOWNLOADS = {
    // CLAVE: [MOGAD, NMOSD]
    en: {
        mogad: '/infografias/mogad_infographic.html', 
        nmosd: '/infografias/tenmo_infographic.html',
    },
    es: {
        mogad: '/infografias/mogad_infografia.html',
        nmosd: '/infografias/tenmo_infografia.html',
    },
};
// ------------------------------

const associationsData = [
    { 
        logo: logoAsoc1, 
        name:  'Asociación española de NMO y MOGAD', 
        link: 'https://esnmosd.org/nmo/', 
        alt: 'Logo de Asociación 1'
    },
    { 
        logo: logoAsoc2, 
        name: 'The MOG Project',
        link: 'https://mogproject.org/mogad-learning-center/disease-information/', 
        alt: 'Logo de Asociación 2'
    },
    { 
        logo: logoAsoc3, 
        name: 'Siegel Rare Neuroimmune Association',
        link: 'https://wearesrna.org/living-with-myelitis/disease-information/rare-neuroimmune-disorders/', 
        alt: 'Logo de Asociación 3'
    },
];

// Nuevo Componente para parsear y renderizar el contenido con formato
const FormattedContent = ({ content }) => {
    // 1. Dividir el contenido por saltos de línea ('\n')
    const lines = content.split('\n');
    let output = [];
    let currentListItems = [];

    // Lógica para agrupar líneas en párrafos o listas (<ul>)
    lines.forEach((line, index) => {
        const trimmedLine = line.trim();

        // **Aseguramos la detección del patrón "- " (guion y espacio)**
        if (trimmedLine.startsWith('- ')) {
            // 2. Es un elemento de lista. Recortamos los primeros 2 caracteres ("- ")
            currentListItems.push(trimmedLine.substring(2)); 
        } else {
            // 3. No es un elemento de lista

            // 3a. Si hay ítems de lista pendientes, cerrar la lista <ul>
            if (currentListItems.length > 0) {
                output.push(
                    <ul key={`ul-${index}`}>
                        {currentListItems.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
                currentListItems = []; // Reiniciar la lista
            }

            // 3b. Si la línea no está vacía, es un párrafo
            if (trimmedLine !== '') {
                output.push(
                    <p key={`p-${index}`} className="content-text">
                        {trimmedLine}
                    </p>
                );
            }
        }
    });

    // 4. Manejar cualquier lista que quede al final del texto
    if (currentListItems.length > 0) {
        output.push(
            <ul key="ul-end">
                {currentListItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );
    }

    return <>{output}</>;
};

export default function Educate({ t, currentLang }) {
    const [activeDisease, setActiveDisease] = useState('mogad'); // 'mogad' | 'nmosd'
    const [animating, setAnimating] = useState(false);

    // Función para obtener el contenido traducido basado en la pestaña/section activa
    const getTabContent = (diseasePrefix, tabId) => {
        return t(`${diseasePrefix}-${tabId}`);
    };

    return (
        <section id="educate" className="section active educate-section">
            <div className='introduction'>
                <h2 className="section-title serif">{t('educate-title')}</h2>
                <p className="educate-intro-text">{t('educate-intro')}</p>

                {/* 1. Selector de Enfermedad (MOGAD / NMOSD) */}
                <div className="disease-toggle" role="tablist" aria-label={t('educate-disease-toggle') || 'Disease Toggle'}>
                    <button
                        className={`button-ctb disease-toggle-button ${activeDisease === 'mogad' ? 'active' : ''}`}
                        onClick={() => {
                            if (activeDisease !== 'mogad') {
                                setAnimating(true);
                                setActiveDisease('mogad');
                                setTimeout(() => setAnimating(false), 420);
                            }
                        }}
                    >
                        {t('mogad-col-title') || 'MOGAD'}
                    </button>
                    <button
                        className={`disease-toggle-button ${activeDisease === 'nmosd' ? 'active' : ''}`}
                        onClick={() => {
                            if (activeDisease !== 'nmosd') {
                                setAnimating(true);
                                setActiveDisease('nmosd');
                                setTimeout(() => setAnimating(false), 420);
                            }
                        }}
                    >
                        {t('nmosd-col-title') || 'NMOSD'}
                    </button>
                </div>
            </div>

            {/* 2. Secciones apiladas: cada sección tiene fondo distinto y título + contenido */}
            <div className={`educate-sections ${animating ? 'animating' : ''}`}>
                {TABS.map((tab) => (
                    <section
                        key={tab.id}
                        id={`educate-${tab.id}`}
                        className={`edu-section section-${tab.id} disease-${activeDisease}`}
                    >
                        <div className="section-inner">
                           
                            {/*  Nuevo Contenedor Flexbox para Título y Botón */}
                            <div className="section-header-row"> 
                                <h3 className="section-title-edu ">{t(tab.labelKey)}</h3>
                                
                                {/* Botón de Descarga (Visible si la sección es 'description') */}
                                {tab.id === 'description' && (
                                    <a
                                        href={PDF_DOWNLOADS[currentLang][activeDisease]} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`download-pdf-button download-btn-${activeDisease}`}
                                    >
                                        <i className="fas fa-file-pdf" aria-hidden="true"></i> 
                                        {t('download-pdf-text') || 'Download PDF'}
                                    </a>
                                )}
                            </div>

                            <div className="section-content">
                                <FormattedContent content={getTabContent(activeDisease, tab.id)} />

                                {/* Tarjetas de tratamiento específicas por enfermedad */}
                                {tab.id === 'treatments' && (
                                    <div className="treatment-cards-grid">
                                        {activeDisease === 'mogad' ? (
                                            <>
                                                <div className="treatment-card">
                                                    <h4 className="treatment-card-title">{t('mogad-treatment-1-title')}</h4>
                                                    <p className="card-text">{t('mogad-treatment-1-desc')}</p>
                                                </div>
                                                <div className="treatment-card">
                                                    <h4 className="treatment-card-title">{t('mogad-treatment-2-title')}</h4>
                                                    <p className="card-text">{t('mogad-treatment-2-desc')}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="treatment-card">
                                                    <h4 className="treatment-card-title">{t('nmosd-treatment-1-title') }</h4>
                                                    <p className="card-text">{t('nmosd-treatment-1-desc')}</p>
                                                </div>
                                                <div className="treatment-card">
                                                    <h4 className="treatment-card-title">{t('nmosd-treatment-2-title')}</h4>
                                                    <p className="card-text">{t('nmosd-treatment-2-desc')}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <br></br>

            <p className="educate-conclusion-text">{t('educate-learn-more')}</p>
            <div className="associations-grid">
                
                {associationsData.map((asoc, index) => (
                    <a 
                        key={index}
                        href={asoc.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="association-card"
                        aria-label={`Visitar sitio web de ${asoc.name}`}
                    >
                        <div className="card-logo-container">
                            <img 
                                src={asoc.logo} 
                                alt={asoc.alt} 
                                className="association-logo"
                            />
                        </div>
                        <h4 className="association-name">{asoc.name}</h4>
                        <span className="cta-link">Visit Website →</span>
                    </a>
                ))}
                
            </div>
        </section>
    );
        
        
            
}