import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

// Inline SVG icons (feather-style)
const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LayoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const FEATURES = [
  {
    icon: <FileTextIcon />,
    title: 'Too Much Manual Typing',
    description: 'Staff spend hours copying patient data into complex insurance portals, leading to human errors and delays.',
  },
  {
    icon: <LayoutIcon />,
    title: 'Messy Medical Records',
    description: 'Hospitals have paperwork in many formats (PDFs, handwritten notes, images) that old systems cannot easily read.',
  },
  {
    icon: <AlertCircleIcon />,
    title: 'Rejected Claims & Lost Money',
    description: 'Missing codes and incomplete forms are the leading causes of claim rejections and payment delays.',
  },
  {
    icon: <ZapIcon />,
    title: 'Keeping Up With New Rules',
    description: 'Adapting to new government health rules requires a lot of expensive IT work for unprepared hospitals.',
  },
];


export default function WhatWeDo() {
  return (
    <section className="problem section" id="problem">
      <div className="container">
        <SectionHeader
          label="The Problem"
          title="Healthcare Claims Are Too Complicated"
          subtext="Even with computers, hospitals and insurance companies are slowed down by manual paperwork that costs them time and money."
          align="center"
        />
        <div className="what-we-do__grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
