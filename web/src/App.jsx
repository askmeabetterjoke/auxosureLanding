import React from 'react';
import OvalHeaderNav from './components/OvalHeaderNav';
import HeroSection from './components/HeroSection';
import SystemSprawlSection from './components/SystemSprawlSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicePortfolio from './components/ServicePortfolio';
import WorkflowShowcase from './components/WorkflowShowcase';
import AnalyticsSection from './components/AnalyticsSection';
import IntegrationMarquee from './components/IntegrationMarquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <OvalHeaderNav />
      <main>
        <HeroSection />
        <SystemSprawlSection />
        <ServicePortfolio />
        <WorkflowShowcase />
        <AnalyticsSection />
        <HowItWorksSection />
        <IntegrationMarquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
