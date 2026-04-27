import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo_nav from '../assets/logo-nav.png';

const NAV_LINKS = [
  { label: 'What We Do', target: 'what-we-do' },
  { label: 'How It Works', target: 'how-it-works' },
  { label: "Who It's For", target: 'who-its-for' },
  { label: 'Contact', target: 'contact' },
];

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav__inner">
          {/* Logo */}
          <a href="#" className="nav__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={logo_nav} alt="Health Vault Plus Logo" className="nav__logo-image" />
            <span className="nav__logo-text">Health Vault Plus</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav__links">
            {NAV_LINKS.map((link) => (
              <span
                key={link.target}
                className={`nav__link ${activeSection === link.target ? 'active' : ''}`}
                onClick={() => scrollTo(link.target)}
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav__cta">
            <Button
              label="Request Demo"
              variant="primary-sm"
              onClick={() => scrollTo('contact')}
            />
          </div>

          {/* Mobile Hamburger */}
          <div className={`nav__hamburger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`nav__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <span
            key={link.target}
            className={`nav__link ${activeSection === link.target ? 'active' : ''}`}
            onClick={() => scrollTo(link.target)}
          >
            {link.label}
          </span>
        ))}
        <Button
          label="Request Demo"
          variant="primary"
          onClick={() => scrollTo('contact')}
        />
      </div>
    </>
  );
}
