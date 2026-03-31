import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Left — Logo */}
        <div className="footer__logo">
          {/* Placeholder for user's logo — replace with your own */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L25.66 8.5V21.5L14 28L2.34 21.5V8.5L14 2Z" fill="#FFFFFF" opacity="0.9"/>
            <path d="M14 8L10 14H13V20L18 14H15V8Z" fill="#1B3F7A"/>
          </svg>
          <span className="footer__logo-text">Health Vault Plus</span>
        </div>

        {/* Right — Copyright & Privacy */}
        <div className="footer__right">
          <p className="footer__copyright">
            © 2026 Health Vault Plus. All rights reserved.
          </p>
          <p className="footer__privacy">
            We do not store any claim or patient data.
          </p>
        </div>
      </div>
    </footer>
  );
}
