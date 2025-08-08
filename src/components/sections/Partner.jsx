/*** 
 * src/components/sections/Partner.jsx
 */
import React from 'react';

export default function Partner({ t }) {
  return (
    <section className="section active">
      <h2 className="section-title serif">{t('partner-title')}</h2>
      <div className="subsection-content">
        <p>{t('partner-description')}</p>
      </div>
    </section>
  );
}