import React from 'react';

const variants = {
  primary: 'btn btn-primary',
  'primary-sm': 'btn btn-primary-sm',
  ghost: 'btn btn-ghost',
  outline: 'btn btn-outline',
};

export default function Button({ label, variant = 'primary', href, onClick, type, disabled, children }) {
  const className = variants[variant] || variants.primary;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children || label}
        {variant === 'ghost' && <span className="arrow">→</span>}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children || label}
      {variant === 'ghost' && <span className="arrow">→</span>}
    </button>
  );
}
