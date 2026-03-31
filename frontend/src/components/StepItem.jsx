import React from 'react';

export default function StepItem({ number, icon, title, description, active = false, delay = 0 }) {
  return (
    <div
      className="step-item scroll-reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`step-item__number ${active ? 'active' : ''}`}>
        {number}
      </div>
      <div className="step-item__icon">
        {icon}
      </div>
      <h3 className="step-item__title">{title}</h3>
      <p className="step-item__desc">{description}</p>
    </div>
  );
}
