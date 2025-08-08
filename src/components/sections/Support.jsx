/*** 
 * src/components/sections/Support.jsx
 */
import React from 'react';

export default function Support({ t }) {
  return (
    <section className="section active">
      <h2 className="section-title serif">{t('support-title')}</h2>
      <div className="subsection-content">
        <p>{t('support-description')}</p>
      </div>
    </section>
  );
}