import React from 'react';
import integrations from '../integrations.data.js';

const IntegrationMarquee = () => {
  const withLogos = integrations.filter((item) => item.logo);
  const items = [...withLogos, ...withLogos];

  return (
    <section className="section integrations-section" id="integrations">
      <div className="container integrations-intro">
        <div className="pill-tag pill-tag--on-ink">
          <span className="pill-dot" />
          Integrations
        </div>
        <h2 className="section-title">Works with the systems you already run</h2>
        <p className="section-desc">
          Auxo connects to AMS, PAS, CRM, and telephony. Your workflows stay the same, they just run
          faster.
        </p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className="marquee-item" title={item.name}>
              <span className="marquee-item-frame">
                <img
                  src={item.logo}
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
      <p className="integrations-footnote">
        40+ live integrations across AMS, PAS, and telephony.
      </p>
    </section>
  );
};

export default IntegrationMarquee;
