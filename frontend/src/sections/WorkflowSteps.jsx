import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

// Inline simple step icons (numbers)
const StepIcon = ({ num }) => (
  <div style={{
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'var(--accent-light)',
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: 'var(--font-heading)'
  }}>
    {num}
  </div>
);

const STEPS = [
  {
    icon: <StepIcon num="1" />,
    title: 'Get Patient Info',
    description: 'Quickly find patient details and insurance policy information using their health ID.',
  },
  {
    icon: <StepIcon num="2" />,
    title: 'Read Scanned Files',
    description: 'Automatically read text from paper documents, lab reports, and doctor notes.',
  },
  {
    icon: <StepIcon num="3" />,
    title: 'Find Key Medical Details',
    description: 'Identify the main diseases, treatments, and medicines from the doctors written notes.',
  },
  {
    icon: <StepIcon num="4" />,
    title: 'Match With Medical Codes',
    description: 'Translate the found details into standard billing codes automatically.',
  },
  {
    icon: <StepIcon num="5" />,
    title: 'Check For Errors',
    description: 'Compare the codes against the insurance rules to catch mistakes before sending.',
  },
  {
    icon: <StepIcon num="6" />,
    title: 'Package the Claim',
    description: 'Bundle all the correct information into the exact format required by the government.',
  },
  {
    icon: <StepIcon num="7" />,
    title: 'Send to Insurance',
    description: 'Submit the clean, error-free claim directly to the insurance network with one click.',
  },
];

export default function WorkflowSteps() {
  return (
    <section className="problem section" id="workflow">
      <div className="container">
        <SectionHeader
          label="Workflow Steps"
          title="From Patient Record to Payment"
          subtext="A fully automated system that turns messy paperwork into clean, ready-to-pay claims."
          align="center"
        />
        <div className="what-we-do__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {STEPS.map((step, i) => (
            <FeatureCard
              key={i}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
