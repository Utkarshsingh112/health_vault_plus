import React from 'react';
import Badge from './Badge';

export default function AudienceCard({ variant = 'secondary', badge, icon, title, bullets, delay = 0 }) {
  const isPrimary = variant === 'primary';

  return (
    <div
      className={`audience-card audience-card--${variant} scroll-reveal`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {badge && (
        <div className="audience-card__badge">
          <Badge label={badge} variant={isPrimary ? 'white' : 'default'} />
        </div>
      )}
      <div className="audience-card__icon">
        {icon}
      </div>
      <h3 className="audience-card__title">{title}</h3>
      <ul className="audience-card__list">
        {bullets.map((text, i) => (
          <li key={i}>
            {isPrimary ? (
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <span className="dot" />
            )}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
