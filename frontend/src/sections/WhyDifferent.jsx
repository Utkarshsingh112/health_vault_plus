import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="5" r="3" />
    <circle cx="19" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <line x1="7.12" y1="7.12" x2="9.88" y2="9.88" />
    <line x1="16.88" y1="7.12" x2="14.12" y2="9.88" />
    <line x1="7.12" y1="16.88" x2="9.88" y2="14.12" />
    <line x1="16.88" y1="16.88" x2="14.12" y2="14.12" />
  </svg>
);

const DIFFERENTIATORS = [
  {
    icon: <ShieldIcon />,
    title: '100% Private & Secure',
    description: 'Patient data never leaves your physical facility. Everything runs locally on your servers, meaning zero cloud dependency and absolute security.',
  },
  {
    icon: <NetworkIcon />,
    title: 'Works With Any System',
    description: 'Our software connects directly to the national health network and insurance systems without needing complicated technical setup.',
  },
];

export default function WhyDifferent() {
  return (
    <section className="problem section" id="why-different">
      <div className="container">
        <SectionHeader
          label="Why Us"
          title="Safe, Secure, and Simple to Use"
          subtext="Health Vault Plus is built to be powerful behind the scenes but incredibly easy for your team to use."
          align="center"
        />
        <div className="what-we-do__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {DIFFERENTIATORS.map((diff, i) => (
            <FeatureCard
              key={i}
              icon={diff.icon}
              title={diff.title}
              description={diff.description}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
