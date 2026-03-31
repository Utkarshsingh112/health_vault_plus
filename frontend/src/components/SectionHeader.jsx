import React from 'react';

export default function SectionHeader({ label, title, subtext, align = 'center' }) {
  return (
    <div className={`section-header ${align} scroll-reveal`}>
      {label && (
        <div className="section-header__label">
          <span>{label}</span>
        </div>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtext && <p className="section-header__subtext">{subtext}</p>}
    </div>
  );
}
