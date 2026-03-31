import React from 'react';
import SectionHeader from '../components/SectionHeader';
import StepItem from '../components/StepItem';

const UploadCloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <polyline points="16 16 12 12 8 16" />
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const FileCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 15l2 2 4-4" />
  </svg>
);

const ConnectorArrow = () => (
  <div className="how-it-works__connector">
    <svg viewBox="0 0 40 20" fill="none">
      <line x1="0" y1="10" x2="32" y2="10" stroke="#E4E8F0" strokeWidth="2" />
      <polygon points="32,5 40,10 32,15" fill="#2E7CF6" />
    </svg>
  </div>
);

const STEPS = [
  {
    number: 1,
    icon: <UploadCloudIcon />,
    title: 'Submit the Claim',
    description: 'Upload all documents related to the claim — lab reports, prescriptions, bills, discharge summaries — in any file format.',
    active: true,
  },
  {
    number: 2,
    icon: <CpuIcon />,
    title: 'We Process It',
    description: 'Our system reads every document, extracts the relevant medical and financial data, and structures it into a clean format.',
    active: false,
  },
  {
    number: 3,
    icon: <FileCheckIcon />,
    title: 'Get a Detailed Output',
    description: 'Your reviewer receives a full structured report — everything extracted, organized, and flagged — ready to act on immediately.',
    active: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <SectionHeader
          label="How It Works"
          title="Three steps. That's it."
          align="center"
        />
        <div className="how-it-works__grid">
          {STEPS.map((step, i) => (
            <React.Fragment key={i}>
              <StepItem
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                active={step.active}
                delay={i * 120}
              />
              {i < STEPS.length - 1 && <ConnectorArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
