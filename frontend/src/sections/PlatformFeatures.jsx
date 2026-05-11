import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

// Inline SVG icons (feather-style)
const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const BookOpenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const FEATURES = [
  {
    icon: <GridIcon />,
    title: 'Smart Claim Dashboard',
    description: 'An easy-to-use screen where your team can review and approve claims with helpful computer suggestions.',
  },
  {
    icon: <BookOpenIcon />,
    title: 'Automatic Medical Coding',
    description: 'Our system automatically translates your doctors notes into the correct standard medical codes.',
  },
  {
    icon: <CodeIcon />,
    title: 'Ready for Government Networks',
    description: 'Turns messy medical forms into the exact computer format required by national health exchanges.',
  },
  {
    icon: <ActivityIcon />,
    title: 'Smart Text Reading',
    description: 'Reads complicated discharge summaries and finds the right diseases and treatments like a human would.',
  },
];

export default function PlatformFeatures() {
  return (
    <section className="problem section" id="platform">
      <div className="container">
        <SectionHeader
          label="Platform Features"
          title="Made for Real Hospital Work"
          subtext="We replace manual typing with a smart system that gets every claim ready for quick approval."
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
