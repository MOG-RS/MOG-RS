import React from 'react';
import './Contact.css';

import juanPhoto from '../../asset/juan.jpeg'; 
import gabrielPhoto from '../../asset/gabriel.png';
import inmaculadaPhoto from '../../asset/inmaculada.png';
import lauraPhoto from '../../asset/laura.png';
import miniLogo from '../../asset/logo_peque.png'; 

// --- ESTRUCTURA DE DATOS DE CONTACTOS ---
const teamContacts = [
    {
        name: "Juan Granja López",
        title: "Network coordinator. Neurology. Neuroimmunology Unit, La Paz University Hospital.",
        email: "juan.granja.nrl@gmail.com",
        photo: juanPhoto,
    }, 
    {
        name: "Gabriel Torres Iglesias", 
        title: "Neurology. Neuroimmunology Unit, La Paz University Hospital. ",
        email: "gabriel.torres@salud.madrid.org",
        photo: gabrielPhoto,
    },
    {
        name: "Inmaculada Puertas Muñoz",
        title: "Neurology. Neuroimmunology Unit, La Paz University Hospital.",
        email: "inmaculada.puertas@salud.madrid.org",
        photo: inmaculadaPhoto,
    },
    {
        name: "Laura Otero Ortega",
        title: "Investigadora Miguel Servet. IdiPAZ Health Research Institute, La Paz University Hospital.",
        email: "oteroortega.l@gmail.com",
        photo: lauraPhoto,
    },
];
// ----------------------------------------

export default function Contact({ t }) {
    return (
        <section id="contact" className="section active contact-section">
            <h2 className="section-title serif">{t('contact-title')}</h2>
            
            {/* 1. Cuadrícula de Tarjetas de Contacto */}
            <div className="contact-grid">
                {teamContacts.map((person, index) => (
                    <div key={index} className="contact-card">
                        {/* Foto Redonda */}
                        <div className="photo-wrapper">
                            <img src={person.photo} alt={person.name} className="contact-photo" />
                        </div>
                        
                        {/* Información */}
                        <h3 className="person-name">{person.name}</h3>
                        <p className="person-title">{person.title}</p>
                        
                        {/* Correo (clicable) */}
                        <a href={`mailto:${person.email}`} className="person-email">
                            {person.email}
                        </a>
                        
                        {/* Logo Pequeño Debajo */}
                        <img src={miniLogo} alt="Logo" className="card-mini-logo" />
                    </div>
                ))}
            </div>

            {/* 2. Tarjeta de Contacto General  */}
            <div className="contact-info-box">
              <p className="contact-description">{t('contact-description')}</p>
              <p>
                  <strong>{t('contact-coordinator')}:</strong>{' '}
                  Juan Granja López{' '}
                  <a href="mailto:juan.granja@salud.madrid.org">juan.granja@salud.madrid.org</a>
              </p>

              <a
                type="button"
                className="ctb-button"
                onClick={() => { window.location.href = 'mailto:juan.granja.nrl@gmail.com'; }}
              >
                {t('contact-button-text')}
              </a>
            </div>

            {/* 3. Tarjeta de Invitación a Unirse */}
            <div className="contact-info-box">
                <h2 className="mognmo-title">{t('mognmo-title')}</h2>
                <p className="mognmo-text">{t('mognmo-text')}</p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfL8mRq2DrUn_1lpce8V4iYhk-OagD9sixxzKAToFMYCGtiGg/viewform?usp=header" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ctb-button"
                >
                    {t('join-network-button-text')}
                </a>
            </div>
            
        </section>
    );
}
  

