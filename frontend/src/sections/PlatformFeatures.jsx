import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

export default function PlatformFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const TABS = [
    {
      label: 'Clinical Coding Engine',
      title: 'Translates doctor notes into standard codes',
      description: 'Converts doctors\' hand-written or typed notes into standard medical codes to make sure insurance billing is correct and has zero mistakes.',
      badge: 'Clinical Intelligence',
      preview: (
        <div style={{ animation: 'heroFadeUp 0.3s ease-out both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em' }}>Doctor Note Translation</span>
            <span style={{ fontSize: '11px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', border: '1px solid rgba(22, 163, 74, 0.15)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>Automatic Matching</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', padding: '12px 14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(15, 28, 46, 0.02)' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: '500' }}>Doctor's Notes</p>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 10px', lineHeight: '1.4' }}>"Patient diagnosed with Type 2 Diabetes..."</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>Medical billing Code</span>
                <span style={{ background: 'rgba(46, 124, 246, 0.08)', color: 'var(--accent)', border: '1px solid rgba(46, 124, 246, 0.12)', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600', fontSize: '11px' }}>ICD-10 // E11.9</span>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', padding: '12px 14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(15, 28, 46, 0.02)' }}>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: '500' }}>Doctor's Notes</p>
              <p style={{ fontSize: '13px', color: 'var(--text-body)', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 10px', lineHeight: '1.4' }}>"Metformin 500mg daily prescribed..."</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>Medicine Code</span>
                <span style={{ background: 'rgba(46, 124, 246, 0.08)', color: 'var(--accent)', border: '1px solid rgba(46, 124, 246, 0.12)', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600', fontSize: '11px' }}>RxNorm // 860975</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'Smart Document Scanner',
      title: 'Extracts details from discharge sheets and lab reports',
      description: 'Scans case papers, discharge summaries, and lab report files automatically to find billing items and doctor signatures without manual typing.',
      badge: 'Document Scanner',
      preview: (
        <div style={{ animation: 'heroFadeUp 0.3s ease-out both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em' }}>Smart Document Scanner</span>
            <span style={{ fontSize: '11px', background: 'rgba(46, 124, 246, 0.08)', color: 'var(--accent)', border: '1px solid rgba(46, 124, 246, 0.15)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>Scan Complete</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 4px 12px rgba(15, 28, 46, 0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-body)', fontSize: '13px', fontWeight: '500' }}>Admission Date</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '13px' }}>2026-05-18</span>
                <span style={{ fontSize: '10px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>Found ✓</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-body)', fontSize: '13px', fontWeight: '500' }}>Discharge Date</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '13px' }}>2026-05-20</span>
                <span style={{ fontSize: '10px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>Found ✓</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-body)', fontSize: '13px', fontWeight: '500' }}>Treatment / Procedure</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '13px' }}>Laparoscopic Appendectomy</span>
                <span style={{ fontSize: '10px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>Found ✓</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'Automated Pipelines',
      title: 'Error checks & instant network submission',
      description: 'Checks your bills against insurance rules automatically, and sends them directly to insurance networks like NHCX and ABDM with one click.',
      badge: 'Interoperability',
      preview: (
        <div style={{ animation: 'heroFadeUp 0.3s ease-out both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em' }}>NHCX Claims Gateway</span>
            <span style={{ fontSize: '11px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', border: '1px solid rgba(22, 163, 74, 0.15)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>Ready to Submit</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700' }}>✓</span>
              <span>Checked for billing errors (None found ✓)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700' }}>✓</span>
              <span>Patient & doctor digital signatures verified ✓</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-body)' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700' }}>✓</span>
              <span>Double-check against insurance rules passed ✓</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--accent)',
              fontWeight: '600',
              marginTop: '8px',
              background: 'rgba(46, 124, 246, 0.06)',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px dashed rgba(46, 124, 246, 0.2)',
              fontSize: '12px'
            }}>
              <span>⚡ Submitted to NHCX Portal (Under ABDM)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'Local Infrastructure',
      title: 'Runs inside your secure hospital servers',
      description: 'Patient records never leave your building. The software runs completely on your local computer servers to ensure 100% privacy and security.',
      badge: '100% Security',
      preview: (
        <div style={{ animation: 'heroFadeUp 0.3s ease-out both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em' }}>Hospital Local Server</span>
            <span style={{ fontSize: '11px', background: 'rgba(22, 163, 74, 0.08)', color: 'var(--success)', border: '1px solid rgba(22, 163, 74, 0.15)', padding: '3px 8px', borderRadius: '6px', fontWeight: '600' }}>Status: Secure</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '12px', boxShadow: '0 4px 12px rgba(15, 28, 46, 0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Hospital Server Mode:</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Private & Local</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Patient Data Status:</span>
              <span style={{ color: 'var(--success)', fontWeight: '600' }}>Encrypted & Safe</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Data Sent to Internet:</span>
              <span style={{ color: '#EF4444', fontWeight: '600', background: 'rgba(239, 68, 68, 0.06)', padding: '2px 8px', borderRadius: '4px' }}>0 KB (Blocked)</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section" id="platform" style={{ background: '#FCFDFE' }}>
      <div className="container">
        <SectionHeader
          label="Platform Capabilities"
          title="Designed for Modern Hospital Claims"
          subtext="Move from manual, inconsistent, and error-prone billing workflows to clean, validation-ready data pipelines."
          align="center"
        />

        <div className="platform__grid">
          {/* Left Column - Tabs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TABS.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: isActive ? '#FFFFFF' : 'transparent',
                    border: isActive ? '1px solid rgba(46, 124, 246, 0.15)' : '1px solid transparent',
                    borderRadius: '16px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 10px 30px -10px rgba(15, 28, 46, 0.06)' : 'none'
                  }}
                  className={isActive ? '' : 'feature-card-hover'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '11px',
                      background: isActive ? 'rgba(46, 124, 246, 0.1)' : 'rgba(15, 28, 46, 0.05)',
                      color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>{tab.badge}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-body)',
                    margin: '0 0 6px'
                  }}>{tab.label}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5',
                    margin: '0'
                  }}>{isActive ? tab.description : tab.title}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column - Premium Dashboard Simulator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between' }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 40px -15px rgba(27, 63, 122, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              flex: 1,
              position: 'relative'
            }}>
              {/* Soft decorative background shape matching Litmus7 style */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(46, 124, 246, 0.08) 0%, rgba(46, 124, 246, 0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
              }} />

              {/* Dashboard Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px dashed var(--border)',
                background: '#F8FAFC',
                zIndex: 1
              }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.4)' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(251, 191, 36, 0.4)' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.4)' }} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontWeight: '600',
                  letterSpacing: '0.05em'
                }}>DEMO_SIMULATOR // {TABS[activeTab].badge.toUpperCase()}</span>
                <div style={{ width: '30px' }} />
              </div>

              {/* Dashboard Body */}
              <div style={{
                padding: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFDFD 100%)',
                zIndex: 1
              }}>
                {TABS[activeTab].preview}
              </div>

              {/* Dashboard Status Bar */}
              <div style={{
                padding: '12px 20px',
                borderTop: '1px dashed var(--border)',
                background: '#F8FAFC',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                zIndex: 1
              }}>
                <span>STATUS: DEMO SIMULATION</span>
                <span>v1.2.0-PROD</span>
              </div>
            </div>

            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              textAlign: 'right',
              margin: '0 8px 0 0',
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic'
            }}>
              * Note: No live AI or backend is connected yet. This is a simulated frontend demonstration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
