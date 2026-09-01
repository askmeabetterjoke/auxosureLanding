import React from 'react';
import OvalHeaderNav from './components/OvalHeaderNav';
import HeroSection from './components/HeroSection';
import SystemSprawlSection from './components/SystemSprawlSection';
import FutureHubSection from './components/FutureHubSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicePortfolio from './components/ServicePortfolio';
import WorkflowShowcase from './components/WorkflowShowcase';
import AnalyticsSection from './components/AnalyticsSection';
import IntegrationMarquee from './components/IntegrationMarquee';
import Footer from './components/Footer';
import ResponsiveSection from './components/ResponsiveSection';
import MobileSystemSprawlSection from './components/mobile/MobileSystemSprawlSection';
import MobileFutureHubSection from './components/mobile/MobileFutureHubSection';
import MobileDeliverySection from './components/mobile/MobileDeliverySection';

function App() {
  return (
    <div className="app-wrapper">
      <OvalHeaderNav />
      <main>
        <HeroSection />
        <ResponsiveSection
          desktop={<SystemSprawlSection />}
          mobile={<MobileSystemSprawlSection />}
        />
        <ResponsiveSection
          desktop={<FutureHubSection />}
          mobile={<MobileFutureHubSection />}
        />
        <ServicePortfolio />
        <WorkflowShowcase />
        <AnalyticsSection />
        <ResponsiveSection
          desktop={<HowItWorksSection />}
          mobile={<MobileDeliverySection />}
        />
        <IntegrationMarquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
