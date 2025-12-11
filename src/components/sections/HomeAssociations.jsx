import React from 'react';
import './HomeAssociations.css';

// Importa los logos de las asociaciones. 
import logoAsoc1 from '../../asset/logo_asoc_1.jpg';
import logoAsoc2 from '../../asset/logo_asoc_2.png';
import logoAsoc3 from '../../asset/logo_asoc_3.png';

const associationsData = [
    { 
        logo: logoAsoc1, 
        name:  'Asociación española de NMO y MOGAD', 
        link: 'https://esnmosd.org/', 
        alt: 'Logo de Asociación 1'
    },
    { 
        logo: logoAsoc2, 
        name: 'The MOG Project',
        link: 'https://mogproject.org/', 
        alt: 'Logo de Asociación 2'
    },
    { 
        logo: logoAsoc3, 
        name: 'Siegel Rare Neuroimmune Association',
        link: 'https://wearesrna.org/', 
        alt: 'Logo de Asociación 3'
    },
];

export default function HomeAssociations({ t }) {
    
    return (
        <section className="associations-section-wrapper">
            <h2 className="section-title serif associations-main-title">{t('associations-title')}</h2>
            
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