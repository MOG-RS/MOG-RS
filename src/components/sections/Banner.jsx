// src/components/sections/Banner.jsx
import React from 'react';
import './Banner.css'; 
import companyLogo from '../../asset/company_logo.png'; 
//import institutePhoto from '../../asset/institute_photo.jpg';

export default function Banner({ t, setCurrentSection }) {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        
        {/* Lado Izquierdo: Logo, Texto y Botones */}
        <div className="hero-left">
          <img src={companyLogo} alt={t('company-name')} className="hero-logo" />
          
          <h1 className="hero-tagline">{t('hero-tagline')}</h1> 
          
          {/*<div className="hero-buttons">
            <button type="button"className="ctb-button" onClick={() => {setCurrentSection('about');}}>{t('btn-about')}</button>
            <button type="button"className="ctb-button" onClick={() => {setCurrentSection('educate');}}>{t('btn-educate')}</button>
            <button type="button"className="ctb-button" onClick={() => {setCurrentSection('contact');}}>{t('btn-contact')}</button>
          </div>*/}
        </div>

        {/* Lado Derecho: Imagen de la Empresa 
        <div className="hero-right">
          <img src={institutePhoto} alt={t('institute-photo-alt')} className="institute-image" />
        </div>*/}

      </div>
    </section>
  );
}