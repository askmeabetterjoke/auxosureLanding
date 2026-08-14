import React, { useId, useState } from 'react';
import copy from '../copy.json';

const ACCENT_BY_ID = {
  'front-office': 'front',
  'producer-support': 'producer',
  'policy-service': 'policy',
  'book-management': 'book',
};

const PILLARS = copy.services.pillars.map((pillar) => ({
  ...pillar,
  accent: ACCENT_BY_ID[pillar.id] || 'front',
}));

const SERVICES = PILLARS.flatMap((pillar) =>
  pillar.modules.map(({ id, name }) => ({ id, name }))
);

const ServicePortfolio = () => {
  const baseId = useId();
  const [activePillarId, setActivePillarId] = useState(PILLARS[0]?.id || '');
  const [paused, setPaused] = useState(false);
  const { pill, headline, description, footerLabel, footerLine, cta } = copy.services;
  const active = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  const advance = () => {
    setActivePillarId((current) => {
      const index = PILLARS.findIndex((pillar) => pillar.id === current);
      const next = index < 0 ? 0 : (index + 1) % PILLARS.length;
      return PILLARS[next].id;
    });
  };

  if (!active) return null;

  return (
    <section className="section portfolio-section" id="services">
      <div className="container portfolio-layout">
        <header className="portfolio-intro">
          <p className="cap-kicker">{pill}</p>
          <h2 className="portfolio-title">{headline}</h2>
          {description ? <p className="portfolio-lede">{description}</p> : null}
        </header>

        <div
          className={`portfolio-cycle ${paused ? 'portfolio-cycle--paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="portfolio-tabs"
            role="tablist"
            aria-label="Service pillars"
          >
            {PILLARS.map((pillar) => {
              const selected = pillar.id === active.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${pillar.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  className={`portfolio-tab portfolio-tab--${pillar.accent} ${
                    selected ? 'portfolio-tab--active' : ''
                  }`}
                  onClick={() => setActivePillarId(pillar.id)}
                >
                  <span className="portfolio-tab-num">{pillar.number}</span>
                  <span className="portfolio-tab-label">{pillar.label}</span>
                  <span
                    className="portfolio-tab-fill"
                    aria-hidden="true"
                    onAnimationEnd={(event) => {
                      if (event.animationName !== 'portfolio-tab-fill') return;
                      if (!selected) return;
                      advance();
                    }}
                  />
                </button>
              );
            })}
          </div>

          <div
            className={`portfolio-panel portfolio-panel--${active.accent}`}
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active.id}`}
            key={active.id}
          >
            <div className="portfolio-panel-copy">
              <p className="portfolio-panel-kicker">
                Pillar {active.number} · {active.label}
              </p>
              <h3 className="portfolio-panel-title">{active.title}</h3>
              <p className="portfolio-panel-body">{active.body}</p>
            </div>

            <ul className="portfolio-features">
              {active.modules.map((module, index) => (
                <li key={module.id} className="portfolio-feature">
                  <span className="portfolio-feature-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="portfolio-feature-copy">
                    <h4>{module.name}</h4>
                    <p>{module.line}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="portfolio-foot">
          <div className="portfolio-foot-copy">
            <span className="portfolio-foot-label">{footerLabel}</span>
            <p>{footerLine}</p>
          </div>
          <a
            className="btn btn-primary"
            href={copy.header.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
export { PILLARS, SERVICES };
