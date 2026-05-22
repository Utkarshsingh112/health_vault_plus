import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function WorkflowSteps() {
  return (
    <section className="workflow section" id="workflow" style={{ background: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          title="Three Simple Steps to Success"
          align="center"
        />
        
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '80px', gap: '60px', flexWrap: 'wrap' }}>
          
          {/* Timeline Container */}
          <div style={{ flex: '1 1 60%', position: 'relative', display: 'flex', justifyContent: 'space-between', minWidth: '600px' }}>
            {/* Horizontal Line */}
            <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '4px', background: '#E4E8F0', zIndex: 0 }}></div>

            {/* M1 */}
            <div style={{ position: 'relative', zIndex: 1, width: '30%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '4px solid #E4E8F0', color: 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '18px', margin: '0 auto 24px', backgroundColor: '#fff' }}>01</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Patient Link</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6', textAlign: 'center' }}>Easily look up patient insurance details and connect securely to the network.</p>
            </div>

            {/* M2 */}
            <div style={{ position: 'relative', zIndex: 1, width: '30%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '4px solid #E4E8F0', color: 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '18px', margin: '0 auto 24px', backgroundColor: '#fff' }}>02</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Secure Sharing</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6', textAlign: 'center' }}>Safely transfer medical files with insurance companies only after patient confirmation.</p>
            </div>

            {/* M3 */}
            <div style={{ position: 'relative', zIndex: 1, width: '30%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--accent)', border: '4px solid var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '18px', margin: '0 auto 24px', boxShadow: '0 0 0 6px rgba(46,124,246,0.1)' }}>03</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--accent)', marginBottom: '12px', textAlign: 'center', fontWeight: '600' }}>Instant Claims</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6', textAlign: 'center' }}>Send fully formatted claims straight to insurance providers for quick payout.</p>
            </div>
          </div>

          {/* Callout Box */}
          <div style={{ flex: '1 1 30%', background: '#F8FAFC', padding: '40px', borderRadius: '16px', border: '1px solid #E4E8F0', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)', minWidth: '300px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: '600', color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               Fully Connected
            </h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.8' }}>You don't need to learn any complex tech. We bridge the gap, connecting your hospital straight to the national claims network out-of-the-box.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
