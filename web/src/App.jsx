import React, { useState, useCallback } from 'react';
import OvalHeaderNav from './components/OvalHeaderNav';
import HeroSection from './components/HeroSection';
import BentoGrid from './components/BentoGrid';
import InteractiveVoicePlayground from './components/InteractiveVoicePlayground';
import IntegrationMarquee from './components/IntegrationMarquee';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="app-wrapper">
      <OvalHeaderNav onRequestDemo={openDemo} />
      <main>
        <HeroSection onRequestDemo={openDemo} />
        <BentoGrid />
        <InteractiveVoicePlayground />
        <IntegrationMarquee />
      </main>
      <Footer onRequestDemo={openDemo} />
      <DemoModal isOpen={demoOpen} onClose={closeDemo} />
    </div>
  );
}

export default App;
