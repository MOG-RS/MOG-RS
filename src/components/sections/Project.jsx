/*** * src/components/sections/Project.jsx */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Project.css';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

// Importa las nuevas imágenes/logos
import Proy1_logo from '../../asset/MOGAD_risk_score.png';
import Proy1_foto from '../../asset/MogADev.png';  

import Proy2_logo from '../../asset/logo_persevere_MOG.jpg';
import Proy2_protocolo from '../../asset/protocolo_persevere_MOG.png'; 

import Proy3_logo from '../../asset/logo_AQP4_EV.jpg';
import Proy3_protocolo from '../../asset/protocolo_AQP4_EV.png'; 


export default function Project({ t }) {
  const [showAllLinks, setShowAllLinks] = useState(false);

  //Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Actualizar array de imágenes visibles en Lightbox
  const imagesForLightbox = [Proy2_protocolo, Proy3_protocolo]; 
  
  // Mapeo para saber qué índice inicial usar al hacer clic en cada imagen
  const getImageIndex = (src) => imagesForLightbox.findIndex(img => img === src);

  const evLinks = [
    {
      href: '/docs/ijms.pdf',
      text: 'In-Depth Characterization of L1CAM+ Extracellular Vesicles as Potential Biomarkers for Anti-CD20 Therapy Response in Relapsing–Remitting Multiple Sclerosis',
    },
    {
      href: 'https://www.neurology.org/doi/10.1212/NXI.0000000000200420',
      text: 'Extracellular Vesicle-Derived MicroRNAs as a Biomarker for Therapeutic Response in Multiple Sclerosis',
    },
    {
      href: 'https://pubmed.ncbi.nlm.nih.gov/37638059/',
      text: 'Dual role of peripheral B cells in multiple sclerosis: emerging remote players in demyelination and novel diagnostic biomarkers',
    },
    {
      href: 'https://pubmed.ncbi.nlm.nih.gov/34445717/',
      text: 'Potential Roles of Extracellular Vesicles as Biomarkers and a Novel Treatment Approach in Multiple Sclerosis',
    },
    {
      href: 'https://www.mdpi.com/1422-0067/25/19/10761',
      text: 'Differential Protein Expression in Extracellular Vesicles Defines Treatment Responders and Non-Responders in Multiple Sclerosis',
    },
    {
      href: 'https://pubmed.ncbi.nlm.nih.gov/37406976/',
      text: 'Brain and immune system-derived extracellular vesicles mediate regulation of complement system, extracellular matrix remodeling, brain repair and antigen tolerance in Multiple Sclerosis',
    },
  ];

  const displayedLinks = showAllLinks ? evLinks : evLinks.slice(0, 3);

  return (
    <section id="project" className="section active project-section">
      <div className="introduction_project">
        <h2 className="section-title serif">{t('project-title')}</h2>
      </div>

      {/* Primer Proyecto (MogA-Dev) */}
      <div className="project-subsection reverse-layout project-bg-white">
        <div className="project-image">
          <img src={Proy1_foto} alt="MOG-RS Illustration" />
        </div>
        <div className="project-text">
          <div className="project-title-group">
            <img src={Proy1_logo} alt="MogA Logo" className="project-logo" />
            <h3 className="subsection-title serif">{t('project-mogrs-title')}</h3>
          </div>
          <p>{t('project-mogrs-intro')}</p>
          
          <h4 className="project-subtitle serif">{t('project-main-objective')}</h4>
          <p>{t('project-mogrs-objective-text')}</p>

          <h4 className="project-subtitle serif">{t('project-study-design')}</h4>
           <p>{t('project-mogrs-design-text')}</p>

          <a 
            href={`mailto:juan.granja.nrl@gmail.com?subject=${encodeURIComponent(`${t('participar-subject-1')}`)}&body=${encodeURIComponent(`${t('participar-body-1')}`)}`}
            className="ctb-button"
          >
            Collaborate →
          </a>
          
        </div>
      </div>

      {/* Segundo Proyecto (EV Biomarkers) - Imagen fija */}
      <div className="project-subsection project-bg-gray" >
        <div className="project-image">
          <img 
            src={Proy2_protocolo} 
            alt="Extracellular Vesicle Protocol Outline" 
            style={{ cursor: 'pointer' }}
            onClick={() => { 
                setIsOpen(true); 
                setPhotoIndex(getImageIndex(Proy2_protocolo)); 
            }}
          />
          {/* <img src={Proy2_foto} alt="Extracellular Vesicle Illustration" /> */}
        </div>

        <div className="project-text">
          <div className="project-title-group">
            <img src={Proy2_logo} alt="EV Logo" className="project-logo" />
            <h3 className="subsection-title serif">{t('project-ev-title')}</h3>
          </div>
          <p className="project-intro">{t('project-ev-intro')}</p>
          
          <h4 className="project-subtitle serif">{t('project-main-objective')}</h4>
          <p>{t('project-ev-objective-text')}</p>

          <h4 className="project-subtitle serif">{t('project-study-design')}</h4>
          <div className="markdown-container">
            <ReactMarkdown breakLines>
                {t('project-ev-design-text_md', { defaultValue: t('project-ev-design-text_md') })}
            </ReactMarkdown>
          </div>

          <a 
            href={`mailto:juan.granja.nrl@gmail.com?subject=${encodeURIComponent(`${t('participar-subject-2')}`)}&body=${encodeURIComponent(`${t('participar-body-2')}`)}`}
            className="ctb-button"
          >
            Collaborate →
          </a>

        </div>
      </div>
      
      {/* Tercer Proyecto (NMOSD Diagnosis) - Imagen fija */}
      <div className="project-subsection reverse-layout project-bg-white">
        <div className="project-image">
          <img 
            src={Proy3_protocolo} 
            alt="NMOSD Illustration" 
            style={{ cursor: 'pointer' }}
            onClick={() => { 
                setIsOpen(true); 
                setPhotoIndex(getImageIndex(Proy3_protocolo)); 
            }}
          />
          {/* <img src={Proy3_foto} alt="NMOSD Illustration" /> */}
        </div>
        <div className="project-text">
          <div className="project-title-group">
            <img src={Proy3_logo} alt="NMOSD Logo" className="project-logo" />
            <h3 className="subsection-title serif">{t('project-nmosd-title')}</h3>
          </div>
          <div className="markdown-container">
            <ReactMarkdown breakLines>
                {t('project-nmosd-intro', { defaultValue: t('project-nmosd-intro') })}
            </ReactMarkdown>
          </div>
          <h4 className="project-subtitle serif">{t('project-main-objective')}</h4>
          <p>{t('project-nmosd-objective-text')}</p>

          <h4 className="project-subtitle serif">{t('project-study-design')}</h4>
          <div className="markdown-container">
            <ReactMarkdown breakLines>
                {t('project-nmosd-design-text', { defaultValue: t('project-nmosd-design-text') })}
            </ReactMarkdown>
          </div>

          <a 
            href={`mailto:juan.granja.nrl@gmail.com?subject=${encodeURIComponent(`${t('participar-subject-3')}`)}&body=${encodeURIComponent(`${t('participar-body-3')}`)}`}
            className="ctb-button"
          >
            {t('collaborate-button')} →
          </a>
        </div>
      </div>

      {/* Tarjeta de Enlaces Separada */}
      <div className="links" >
        <div className="project-links-card">
            <p><strong>{t('project-ev-link')}:</strong></p>

            <ul className="ev-links">
              {displayedLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {evLinks.length > 3 && (
              <button
                type="button"
                className="toggle-links-btn"
                onClick={() => setShowAllLinks(!showAllLinks)}
                aria-expanded={showAllLinks}
              >
                {showAllLinks ? 'Less' : 'More'}
              </button>
            )}
        </div>
      </div>

      <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={imagesForLightbox.map(src => ({ src }))}
      />

    </section>
  );
}