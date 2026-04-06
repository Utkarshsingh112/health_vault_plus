import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import HowItWorks from './sections/HowItWorks';
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
        <HowItWorks />
        <WhoItsFor />
        <Contact />
      </main>
      <Footer />
      <HelpWidget />
    </>
  );
}
