/*** 
 * src/components/sections/Contact.jsx
 */
import React from 'react';
import './Contact.css';

export default function Contact({ t }) {
  return (
    <section className="section active contact-section">
      <h2 className="section-title serif">{t('contact-title')}</h2>
      
      <div className="contact-content">
        <p className="contact-description">{t('contact-description')}</p>

        <div className="contact-info-box">
          {/* 第一部分：通用联系邮箱 */}
          <p>
            <strong>Contact Information:</strong>{' '}
            <a href="mailto:mog-rs@idipaz.es">mog-rs@idipaz.es</a>
          </p>

          {/* 第二部分：协调人姓名和邮箱 */}
          <p>
            <strong>MOG-RS Network Coordinator:</strong>{' '}
            Juan Granja López{' '}
            <a href="mailto:juan.granja@salud.madrid.org">juan.granja@salud.madrid.org</a>
          </p>

          {/* 按钮 */}
          <a href="mailto:mog-rs@idipaz.es" className="contact-button">
            📩 {t('contact-button-text') || 'Contact Us'}
          </a>
        </div>
      </div>
    </section>
  );
}

