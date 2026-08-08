import React, { useState, useCallback } from 'react';
import OvalHeaderNav from './components/OvalHeaderNav';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ServicePortfolio from './components/ServicePortfolio';
import ContactSection from './components/ContactSection';
import IntegrationMarquee from './components/IntegrationMarquee';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [modal, setModal] = useState({ open: false, mode: 'demo', serviceId: '' });

  const openDemo = useCallback(() => {
    setModal({ open: true, mode: 'call', serviceId: '' });
  }, []);

  const openCall = useCallback((service) => {
    setModal({
      open: true,
      mode: 'call',
      serviceId: service?.id || '',
    });
  }, []);

  const closeModal = useCallback(() => {
    setModal((m) => ({ ...m, open: false }));
  }, []);

  return (
    <div className="app-wrapper">
      <OvalHeaderNav onRequestDemo={openDemo} />
      <main>
        <HeroSection onRequestDemo={openDemo} />
        <CapabilitiesSection />
        <ServicePortfolio onRequestDemo={openDemo} />
        <HowItWorksSection />
        <ContactSection />
        <IntegrationMarquee />
      </main>
      <Footer onRequestDemo={openDemo} />
      <DemoModal
        isOpen={modal.open}
        onClose={closeModal}
        mode={modal.mode}
        initialServiceId={modal.serviceId}
      />
    </div>
  );
}

export default App;
