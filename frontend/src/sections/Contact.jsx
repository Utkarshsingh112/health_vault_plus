import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { API_URL } from '../config/api';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you! We\'ll be in touch soon.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      console.warn(`[Demo Mode] Backend at ${API_URL} unreachable. Simulating successful submission for: ${email}`);
      setTimeout(() => {
        setStatus('success');
        setMessage("Thank you! (Demo Mode: Request simulated successfully.)");
        setEmail('');
      }, 1000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container" style={{ maxWidth: '960px' }}>
        <SectionHeader
          label="Get Started"
          title="Connect With Our Team"
          align="center"
        />

        <div className="contact__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', marginTop: '48px', textAlign: 'left' }}>
          
          {/* Left Column — Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Direct Contact
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6' }}>
              Have questions about our local-first deployment, claims automation, or compatibility? Reach out to our team directly.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:healthvaultplus@gmail.com" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>
                  healthvaultplus@gmail.com
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+918529259414" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>
                  +91 8529259414
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  Bhamsha Techno Hub, Jaipur,<br />Rajasthan, India - 302004
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Column — Demo Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Ready to Make Claims Easier?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6' }}>
              Request a personalized walkthrough to see how Health Vault Plus can save your hospital time and money.
            </p>
            
            <form className="contact__form" onSubmit={handleSubmit} style={{ margin: '0', maxWidth: '100%' }}>
              <input
                type="email"
                className="contact__input"
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="demo-email-input"
              />
              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'loading'}
                id="demo-submit-btn"
              >
                {status === 'loading' ? 'Sending...' : 'Request Demo'}
              </button>
            </form>
            
            {status === 'success' && (
              <p className="contact__success" style={{ margin: '0' }}>{message}</p>
            )}
            {status === 'error' && (
              <p className="contact__error" style={{ margin: '0' }}>{message}</p>
            )}
            
            <div className="contact__note" style={{ justifyContent: 'flex-start', marginTop: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>We do not store any claim or patient data.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
