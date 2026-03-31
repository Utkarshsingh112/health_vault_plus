import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
      setStatus('error');
      setMessage('Unable to connect. Please try again later.');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner scroll-reveal">
          <SectionHeader
            label="Get Started"
            title=""
            align="center"
          />

          <h2 className="contact__headline">See it in action.</h2>

          <p className="contact__subtext">
            We'll walk you through exactly how Health Vault Plus works for your
            team. No commitment, no contracts — just a live walkthrough.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
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
            <p className="contact__success">{message}</p>
          )}
          {status === 'error' && (
            <p className="contact__error">{message}</p>
          )}

          <div className="contact__note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>We do not store any claim or patient data.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
