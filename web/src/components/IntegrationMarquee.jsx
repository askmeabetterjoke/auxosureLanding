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

function MarqueeRow({ items, direction = 'left' }) {
  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track marquee-track--${direction}`}>
        <div className="marquee-set">
          <LogoTiles items={items} />
        </div>
        <div className="marquee-set" aria-hidden="true">
          <LogoTiles items={items} duplicate />
        </div>
      </div>
    </div>
  );
}

const IntegrationMarquee = ({ embedded = false }) => {
  const withLogos = integrations.filter((item) => item.logo);
  const reverseLogos = [...withLogos].reverse();

  const footnote = (
    <p className="integrations-footnote">{copy.integrations.footerText}</p>
  );

  if (embedded) {
    return (
      <div className="core-logos">
        <MarqueeRow items={withLogos} direction="left" />
        {footnote}
      </div>
    );
  }

  return (
    <section className="section integrations-section" id="integrations">
      <div className="container integrations-intro">
        <p className="integrations-kicker">{copy.integrations.overline}</p>
        <h2 className="section-title">{copy.integrations.headline}</h2>
        <p className="section-desc">{copy.integrations.lede}</p>
      </div>
      <div className="integrations-marquee" aria-label="Integration partners">
        <MarqueeRow items={withLogos} direction="left" />
        <MarqueeRow items={reverseLogos} direction="right" />
      </div>
      {footnote}
    </section>
  );
};

export default IntegrationMarquee;
