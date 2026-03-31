import React from 'react';
import Button from '../components/Button';
import Badge from '../components/Badge';

/* 
  Headline Options (as per spec):
  Option A: "Faster Claims. Clearer Decisions."
  Option B: "From Document to Decision — In Seconds."
  Option C: "Claim Processing, Finally Structured."
  
  Default render: Option A
*/

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Left Column */}
          <div className="hero__left">
            <div className="hero__eyebrow hero-anim-1">
              <span className="hero__eyebrow-dot" />
              <span>For TPAs &amp; Insurance Teams</span>
            </div>

            <h1 className="hero__headline hero-anim-2">
              Faster <span className="accent">Claims</span>.<br />
              Clearer Decisions.
            </h1>

            <p className="hero__subtext hero-anim-3">
              Health Vault Plus helps TPAs and insurers process medical claims
              with speed and structure. Submit a claim, get a detailed output.
              No chaos, no manual guesswork.
            </p>

            <div className="hero__cta-row hero-anim-4">
              <Button
                label="Request Demo"
                variant="primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              />
              <Button
                label="See How It Works"
                variant="ghost"
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              />
            </div>
          </div>

          {/* Right Column — Mockup Card */}
          <div className="hero__right">
            <div className="mockup-card hero-anim-card">
              {/* Header */}
              <div className="mockup-card__header">
                <span className="mockup-card__claim-id">Claim #CLM-0042</span>
                <Badge label="Under Review" variant="default" />
              </div>

              <div className="mockup-card__divider" />

              {/* Checklist Rows */}
              <div className="mockup-card__row">
                <svg className="mockup-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="mockup-card__row-label">Lab Report</span>
                <Badge label="Received" variant="success" />
              </div>

              <div className="mockup-card__row">
                <svg className="mockup-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="mockup-card__row-label">Prescription</span>
                <Badge label="Received" variant="success" />
              </div>

              <div className="mockup-card__row">
                <svg className="mockup-card__row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="mockup-card__row-label">Discharge Summary</span>
                <Badge label="Pending" variant="warning" />
              </div>

              <div className="mockup-card__divider" />

              {/* Footer */}
              <div className="mockup-card__footer">
                <span className="mockup-card__footer-text">Processing Documents</span>
                <span className="dot-loader">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
