import React from 'react';
import integrations from '../integrations.json';

/**
 * Add integration logos:
 * 1. Place SVG or PNG files in web/public/integrations/ (e.g. applied-epic.svg)
 * 2. Set the "logo" field below to "/integrations/applied-epic.svg"
 * 3. Leave logo as null to show the partner name as text until an image is ready
 */
const IntegrationMarquee = () => {
  const items = [...integrations, ...integrations];

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
        <div className="marquee-track" aria-hidden="true">
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className="marquee-item">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="marquee-item-logo"
                  loading="lazy"
                />
              ) : (
                <span className="marquee-item-text">{item.name}</span>
              )}
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
