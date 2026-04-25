import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Left — Logo */}
        <div className="footer__logo">
          <img src={logo} alt="Health Vault Plus Logo" style={{ height: '28px', width: 'auto' }} />
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
