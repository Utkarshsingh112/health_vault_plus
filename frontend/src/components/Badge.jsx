import React from 'react';

const variantMap = {
  default: 'badge badge-default',
  success: 'badge badge-success',
  warning: 'badge badge-warning',
  muted: 'badge badge-muted',
  white: 'badge badge-white',
};

export default function Badge({ label, variant = 'default' }) {
  return (
    <span className={variantMap[variant] || variantMap.default}>
      {label}
    </span>
  );
}
