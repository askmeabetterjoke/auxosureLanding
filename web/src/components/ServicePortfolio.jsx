import React, { useState } from 'react';

const PILLARS = [
  {
    id: 'sales',
    label: 'Pillar 1 · Sales',
    title: 'Accelerate acquisition',
    body: 'Turn leads into policies faster with automated routing, instant response, and seamless quoting.',
    accent: 'sales',
    modules: [
      {
        id: 'voice-ai',
        name: 'Voice AI',
        line: 'Every call answered. Exceptions routed to a licensed human.',
        impact: '+ Bound premium',
      },
      {
        id: 'marketing',
        name: 'Marketing Automation',
        line: 'Follow-up fires before the lead goes cold.',
        impact: '+ Close rate',
      },
      {
        id: 'lead-routing',
        name: 'Producer Lead Routing',
        line: 'Right submission, right producer. No round-robin guesswork.',
        impact: '+ Win rate',
      },
      {
        id: 'quote-builder',
        name: 'Quote Builder',
        line: 'Carrier quote to client proposal. Gaps flagged.',
        impact: '+ Quote velocity',
      },
    ],
  },
  {
    id: 'operations',
    label: 'Pillar 2 · Operations',
    title: 'Streamline back-office',
    body: 'Reclaim hours by automating intake, catching errors early, and centralizing the data your team already needs.',
    accent: 'ops',
    modules: [
      {
        id: 'acord-intake',
        name: 'ACORD Intake',
        line: "Parse ACORDs. Pre-fill what you can, flag what you can't.",
        impact: '− Hours per file',
      },
      {
        id: 'policy-checker',
        name: 'Policy Checker',
        line: 'Issued policy vs binder. Catch drift early.',
        impact: '− E&O exposure',
      },
      {
        id: 'agency-dashboard',
        name: 'Agency & Producer Dashboard',
        line: 'Production, placement, and pipeline in one view.',
        impact: '− Report wrangling',
      },
    ],
  },
  {
    id: 'retention',
    label: 'Pillar 3 · Retention',
    title: 'Elevate service',
    body: 'Protect the book you already have with proactive renewals and clean first-notice claims handling.',
    accent: 'retain',
    modules: [
      {
        id: 'renewal-tool',
        name: 'Renewal Tool',
        line: 'At-risk renewals flagged. Outreach before they walk.',
        impact: '+ Retention',
      },
      {
        id: 'fnol',
        name: 'FNOL',
        line: 'First-notice intake. Clean file for adjusters.',
        impact: '− Claim cycle time',
      },
    ],
  },
];

const SERVICES = PILLARS.flatMap((pillar) =>
  pillar.modules.map(({ id, name }) => ({ id, name }))
);

function PillarIcon({ accent }) {
  if (accent === 'sales') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 14L8 4l3 5 2-3 2 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (accent === 'ops') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9 2.5v2M9 13.5v2M2.5 9h2M13.5 9h2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M4.2 13.8l1.4-1.4M12.4 5.6l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 9.5V5.2c0-.4.2-.7.5-.9L9 1.5l4.5 2.8c.3.2.5.5.5.9V9.5c0 3.2-2.2 5.5-5 6.5-2.8-1-5-3.3-5-6.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6.5 9l1.7 1.7L11.8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModuleRow({ module, accent, active, onEnter, onLeave }) {
  return (
    <button
      type="button"
      className={`engine-row engine-row--${accent} ${active ? 'engine-row--active' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <span className="engine-row-mark" aria-hidden="true" />
      <span className="engine-row-copy">
        <span className="engine-row-name">{module.name}</span>
        <span className="engine-row-line">{module.line}</span>
      </span>
      <span className="engine-row-chip">{module.impact}</span>
    </button>
  );
}

function PillarColumn({ pillar, activeId, setActiveId }) {
  return (
    <article className={`engine-pillar engine-pillar--${pillar.accent}`}>
      <header className="engine-pillar-head">
        <span className="engine-pillar-icon">
          <PillarIcon accent={pillar.accent} />
        </span>
        <span className="engine-pillar-label">{pillar.label}</span>
        <h3 className="engine-pillar-title">{pillar.title}</h3>
        <p className="engine-pillar-body">{pillar.body}</p>
      </header>
      <div className="engine-rows">
        {pillar.modules.map((module) => (
          <ModuleRow
            key={module.id}
            module={module}
            accent={pillar.accent}
            active={activeId === module.id}
            onEnter={() => setActiveId(module.id)}
            onLeave={() => setActiveId('')}
          />
        ))}
      </div>
    </article>
  );
}

const ServicePortfolio = ({ onRequestDemo }) => {
  const [activeId, setActiveId] = useState('');

  return (
    <section className="section engine-section" id="services">
      <div className="container">
        <div className="engine-intro">
          <h2 className="section-title">End-to-end agency automation</h2>
          <p className="section-desc">
            Nine modules built to scale your book and protect your margins.
            Hover a line. Watch the dollars move.
          </p>
        </div>

        <div className="engine-grid">
          {PILLARS.map((pillar) => (
            <PillarColumn
              key={pillar.id}
              pillar={pillar}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        <div className="engine-footer">
          <div className="engine-footer-copy">
            <span className="engine-footer-label">Net effect</span>
            <p>More bound premium in. Fewer ops hours out.</p>
          </div>
          <button type="button" className="btn btn-primary engine-footer-cta" onClick={onRequestDemo}>
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
export { SERVICES };
