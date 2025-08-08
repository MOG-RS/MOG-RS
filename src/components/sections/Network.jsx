/*** 
 * src/components/sections/Network.jsx
 */
import React from 'react';

export default function Network({ t }) {
  return (
    <section className="section active">
      <h2 className="section-title serif">{t('network-title')}</h2>
      <div className="network-map">
        <p className="network-text">{t('network-description')}</p>
      </div>
    </section>
  );
}