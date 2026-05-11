import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import PlatformFeatures from './sections/PlatformFeatures';
import WorkflowSteps from './sections/WorkflowSteps';
import WhyDifferent from './sections/WhyDifferent';
import WhoItsFor from './sections/WhoItsFor';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import HelpWidget from './components/Helpwidget';
import useScrollReveal from './hooks/useScrollReveal';
import useActiveSection from './hooks/useActiveSection';

export default function App() {
  const activeSection = useActiveSection();
  useScrollReveal();

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <WhatWeDo />
        <PlatformFeatures />
        <WorkflowSteps />
        <WhyDifferent />
        <WhoItsFor />
        <Contact />
      </main>
      <Footer />
      <HelpWidget />
    </>
  );
}
