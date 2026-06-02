import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function WorkflowSteps() {
  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        <SectionHeader
          title="Three Simple Steps to Success"
          align="center"
        />
        
        <div className="workflow__container">
          
          {/* Timeline Container */}
          <div className="workflow__timeline">
            {/* Connecting Line */}
            <div className="workflow__line"></div>

            {/* M1 */}
            <div className="workflow__step">
              <div className="workflow__step-circle">01</div>
              <div className="workflow__step-content">
                <h4 className="workflow__step-title">Patient Link</h4>
                <p className="workflow__step-desc">Easily look up patient insurance details and connect securely to the network.</p>
              </div>
            </div>

            {/* M2 */}
            <div className="workflow__step">
              <div className="workflow__step-circle">02</div>
              <div className="workflow__step-content">
                <h4 className="workflow__step-title">Secure Sharing</h4>
                <p className="workflow__step-desc">Safely transfer medical files with insurance companies only after patient confirmation.</p>
              </div>
            </div>

            {/* M3 */}
            <div className="workflow__step workflow__step--active">
              <div className="workflow__step-circle">03</div>
              <div className="workflow__step-content">
                <h4 className="workflow__step-title">Instant Claims</h4>
                <p className="workflow__step-desc">Send fully formatted claims straight to insurance providers for quick payout.</p>
              </div>
            </div>
          </div>

          {/* Callout Box */}
          <div className="workflow__callout">
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
