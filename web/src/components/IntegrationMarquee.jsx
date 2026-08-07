import React from 'react';
import integrations from '../integrations.json';
import { assetUrl } from '../lib/assetUrl';

const IntegrationMarquee = () => {
  // Only show partners that have a logo asset; text-only entries skip the scroller
  const withLogos = integrations.filter((item) => item.logo);
  const items = [...withLogos, ...withLogos];

  return (
    <section className="section" id="integrations" style={{ paddingTop: 48 }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="pill-tag">
          <span className="pill-dot" />
          Integrations
        </div>
        <h2 className="section-title">Works with the systems you already run</h2>
        <p className="section-desc" style={{ margin: '0 auto 0' }}>
          Auxo connects to AMS, PAS, CRM, and telephony — your workflows stay the same, they just run faster.
        </p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className="marquee-item" title={item.name}>
              <span className="marquee-item-frame">
                <img
                  src={assetUrl(item.logo)}
                  alt={item.name}
                  className="marquee-item-logo"
                  style={{ transform: `scale(${item.scale || 1})` }}
                  loading="lazy"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
          fontSize: 13,
          color: 'var(--text-muted)',
        }}
      >
        40+ live integrations across AMS, PAS, and telephony.
      </p>
    </section>
  );
};

export default IntegrationMarquee;
