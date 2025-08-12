/*** 
 * src/components/sections/Project.jsx 
 */

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ 新的 Lightbox 库（兼容 React 18/19）
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

import './Project.css';
import MogADev from '../../asset/MogADev.png';
import EEcell from '../../asset/EEcell.jpeg';
import extracellunarVersicle from '../../asset/extracellunarVersicle.jpeg';

export default function Project({ t }) {
  const [showAllLinks, setShowAllLinks] = useState(false);

  // 控制大图预览
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [EEcell, extracellunarVersicle];

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 轮播补2项修复出框
    adaptiveHeight: true,        // 防止高度撑破容器
    centerMode: false,           // 禁止中心模式（容易引入左右内边距）
    variableWidth: false,
  };

  return (
    <section className="section active">
      <h2 className="section-title serif">{t('project-title')}</h2>

      {/* MOG-RS Risk Score Section */}
      <div className="project-section reverse-layout">
        <div className="project-image">
          <img src={MogADev} alt="MOG-RS Illustration" />
        </div>
        <div className="project-text">
          <h3 className="subsection-title serif">{t('project-mogrs-title')}</h3>
          <p>{t('project-mogrs-text')}</p>
        </div>
      </div>

      {/* EV Biomarker Study Section */}
      <div className="project-section">
        <div className="project-image carousel">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  onClick={() => { setIsOpen(true); setPhotoIndex(idx); }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </Slider>

          {/* ✅ 新库用法：open/close/index + slides */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={images.map(src => ({ src }))}
          />
        </div>

        <div className="project-text">
          <h3 className="subsection-title serif">{t('project-ev-title')}</h3>
          <p>{t('project-ev-text')}</p>
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
    </section>
  );
}
