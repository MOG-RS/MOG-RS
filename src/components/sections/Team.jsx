/*** 
 * src/components/sections/Team.jsx
 */
import React from 'react';

export default function Team({ t }) {
  return (
    <section className="section active">
      <h2 className="section-title serif">{t('team-title')}</h2>
      <p>{t('team-description')}</p>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-name">Dr. A</div>
          <div className="member-role">Principal Investigator</div>
          <div className="member-contact">email@example.com</div>
        </div>
        <div className="team-member">
          <div className="member-name">Dr. B</div>
          <div className="member-role">Co-Investigator</div>
          <div className="member-contact">email@example.com</div>
        </div>
        <div className="team-member">
          <div className="member-name">Dr. C</div>
          <div className="member-role">Clinical Coordinator</div>
          <div className="member-contact">email@example.com</div>
        </div>
        <div className="team-member">
          <div className="member-name">Dr. D</div>
          <div className="member-role">Data Scientist</div>
          <div className="member-contact">email@example.com</div>
        </div>
      </div>
    </section>
  );
}