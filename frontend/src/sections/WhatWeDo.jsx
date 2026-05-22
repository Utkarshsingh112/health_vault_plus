import React from 'react';
import SectionHeader from '../components/SectionHeader';

const PMJAYIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const NHCXIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export default function WhatWeDo() {
  return (
    <section className="what-we-do section" id="about-us" style={{ background: '#fdfaf4' }}>
      <div className="container">
        <SectionHeader
          title="Who We Are & What We Do"
          align="center"
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', marginTop: '64px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', background: 'var(--accent)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PMJAYIcon />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Support for All Insurance Plans
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.8' }}>
              Whether you are processing government health schemes (like PMJAY) or private corporate insurance, we handle the claims automatically. We eliminate the need to upload files manually to different portals, giving your team a single unified workflow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', background: 'var(--accent)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <NHCXIcon />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Direct Connection to Insurance Networks
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.8' }}>
              Instead of logging into multiple insurance portals and uploading documents manually, our platform connects you directly to the new national digital claims network. You can check eligibility, submit approvals, and send documents instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
