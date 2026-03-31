import React from 'react';
import SectionHeader from '../components/SectionHeader';
import AudienceCard from '../components/AudienceCard';

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9.01" y2="6" />
    <line x1="15" y1="6" x2="15.01" y2="6" />
    <line x1="9" y1="10" x2="9.01" y2="10" />
    <line x1="15" y1="10" x2="15.01" y2="10" />
    <line x1="9" y1="14" x2="9.01" y2="14" />
    <line x1="15" y1="14" x2="15.01" y2="14" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const CARDS = [
  {
    variant: 'primary',
    badge: 'Primary Audience',
    icon: <UsersIcon />,
    title: 'Third Party Administrators',
    bullets: [
      'Process high claim volumes without expanding your team',
      'Eliminate manual document reading and data entry',
      "Surface problem claims before they reach your reviewer's desk",
      'Faster turnaround from submission to decision',
    ],
  },
  {
    variant: 'secondary',
    icon: <BuildingIcon />,
    title: 'Insurance Companies',
    bullets: [
      'Get consistent, structured claim data from every TPA',
      'Reduce payout errors caused by incomplete documentation',
      'Scale claim volume without scaling your ops team',
    ],
  },
  {
    variant: 'secondary',
    icon: <ActivityIcon />,
    title: 'Hospitals & Diagnostic Labs',
    bullets: [
      'Faster claim clearance means faster payments to you',
      'Reduce back-and-forth with TPAs over document formats',
      'Your reports, submitted and processed without friction',
    ],
  },
];

export default function WhoItsFor() {
  return (
    <section className="who-its-for section" id="who-its-for">
      <div className="container">
        <SectionHeader
          label="Who It's For"
          title="Built for the teams who process claims daily."
          align="center"
        />
        <div className="who-its-for__grid">
          {CARDS.map((card, i) => (
            <AudienceCard
              key={i}
              variant={card.variant}
              badge={card.badge}
              icon={card.icon}
              title={card.title}
              bullets={card.bullets}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
