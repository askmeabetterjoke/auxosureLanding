import React from 'react';
import integrations from '../integrations.data.js';
import copy from '../copy.json';

function LogoTiles({ items, duplicate = false }) {
  return (
    <>
      {items.map((item) => (
        <div
          key={`${duplicate ? 'dup-' : ''}${item.name}`}
          className="marquee-item"
          title={item.name}
          aria-hidden={duplicate || undefined}
        >
          <span className="marquee-item-frame">
            <img
              src={item.logo}
              alt={duplicate ? '' : item.name}
              className="marquee-item-logo"
              style={{ transform: `scale(${item.scale || 1})` }}
              loading="lazy"
            />
          </span>
        </div>
      ))}
    </>
  );
}

const IntegrationMarquee = ({ embedded = false }) => {
  const withLogos = integrations.filter((item) => item.logo);

  const marquee = (
    <div className="marquee-wrapper" aria-label="Integration partners">
      <div className="marquee-track">
        <LogoTiles items={withLogos} />
        <LogoTiles items={withLogos} duplicate />
      </div>
    </div>
  );

  const footnote = (
    <p className="integrations-footnote">{copy.integrations.footerText}</p>
  );

  if (embedded) {
    return (
      <div className="core-logos">
        {marquee}
        {footnote}
      </div>
    );
  }

  return (
    <section className="section integrations-section" id="integrations">
      <div className="container integrations-intro">
        <h2 className="section-title">{copy.integrations.headline}</h2>
        <p className="section-desc">{copy.integrations.lede}</p>
      </div>
      {marquee}
      {footnote}
    </section>
  );
};

export default IntegrationMarquee;
