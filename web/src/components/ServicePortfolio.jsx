import React from 'react';

const SERVICES = [
  {
    id: 'voice-ai',
    name: 'Voice AI',
    line: 'Answer calls. Route exceptions to a human.',
    revenueMode: 'generate',
    icons: [
      { icon: '☎', accent: '#C97B6C' },
      { icon: '◎', accent: '#2A2550' },
      { icon: '↗', accent: '#C97B6C' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Automation',
    line: 'Follow up on leads before they go cold.',
    revenueMode: 'generate',
    icons: [
      { icon: '✉', accent: '#2A2550' },
      { icon: '◎', accent: '#C97B6C' },
      { icon: '↗', accent: '#2A2550' },
    ],
  },
  {
    id: 'lead-routing',
    name: 'Producer Lead Routing',
    line: 'Right submission. Right producer. No round-robin guesswork.',
    revenueMode: 'generate',
    icons: [
      { icon: '◎', accent: '#C97B6C' },
      { icon: '⇄', accent: '#2A2550' },
    ],
  },
  {
    id: 'agency-dashboard',
    name: 'Agency & Producer Dashboard',
    line: 'AI-powered view of production, placement, and pipeline.',
    revenueMode: 'generate',
    viz: 'dashboard',
    icons: [
      { icon: '▦', accent: '#2A2550' },
      { icon: '✦', accent: '#C97B6C' },
      { icon: '📈', accent: '#2A2550' },
    ],
  },
  {
    id: 'acord-intake',
    name: 'ACORD Intake',
    line: 'Parse ACORDs. Pre-fill what you can.',
    revenueMode: 'generate',
    icons: [
      { icon: '▤', accent: '#2A2550' },
      { icon: '◎', accent: '#C97B6C' },
    ],
  },
  {
    id: 'quote-builder',
    name: 'Quote Builder',
    line: 'Carrier quote to client proposal. Gaps flagged.',
    revenueMode: 'generate',
    icons: [
      { icon: '⇄', accent: '#C97B6C' },
      { icon: '▤', accent: '#2A2550' },
      { icon: '✓', accent: '#C97B6C' },
    ],
  },
  {
    id: 'fnol',
    name: 'FNOL',
    line: 'First notice intake. Clean file for adjusters.',
    revenueMode: 'capture',
    icons: [
      { icon: '☎', accent: '#C97B6C' },
      { icon: '▤', accent: '#2A2550' },
    ],
  },
  {
    id: 'renewal-tool',
    name: 'Renewal Tool',
    line: 'Flag at-risk renewals. Outreach before they walk.',
    revenueMode: 'capture',
    icons: [
      { icon: '◎', accent: '#2A2550' },
      { icon: '↗', accent: '#C97B6C' },
    ],
  },
  {
    id: 'policy-checker',
    name: 'Policy Checker',
    line: 'Issued policy vs binder. Catch drift early.',
    revenueMode: 'capture',
    icons: [
      { icon: '⚖', accent: '#2A2550' },
      { icon: '✓', accent: '#C97B6C' },
    ],
  },
];

function DashboardViz() {
  return (
    <div className="svc-dash-viz" aria-hidden="true">
      <div className="svc-dash-header">
        <span className="svc-dash-ai">AI</span>
        <span>Agency · Producer</span>
      </div>
      <div className="svc-dash-bars">
        <span style={{ height: '42%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '55%' }} />
        <span style={{ height: '88%' }} />
        <span style={{ height: '72%' }} />
      </div>
      <div className="svc-dash-row">
        <span className="svc-dash-chip">GWP</span>
        <span className="svc-dash-chip">Win rate</span>
        <span className="svc-dash-chip">Pipeline</span>
      </div>
    </div>
  );
}

function ServiceTile({ service }) {
  return (
    <article className={`svc-tile svc-tile--${service.revenueMode}`}>
      <div className="svc-tile-well">
        {service.viz === 'dashboard' ? (
          <DashboardViz />
        ) : (
          <div className="svc-tile-icons">
            {service.icons.map((item, i) => (
              <span
                key={`${item.icon}-${i}`}
                className="svc-tile-icon"
                style={{ '--tile-accent': item.accent }}
              >
                {item.icon}
              </span>
            ))}
          </div>
        )}
        <span className="svc-tile-coin svc-tile-coin--1" aria-hidden="true">$</span>
        <span className="svc-tile-coin svc-tile-coin--2" aria-hidden="true">$</span>
        <span className="svc-tile-coin svc-tile-coin--3" aria-hidden="true">$</span>
        <span className="svc-tile-coin svc-tile-coin--4" aria-hidden="true">$</span>
      </div>
      <div className="svc-tile-body">
        <h3 className="svc-tile-title">{service.name}</h3>
        <p className="svc-tile-line">{service.line}</p>
      </div>
    </article>
  );
}

const ServicePortfolio = () => {
  const generate = SERVICES.filter((s) => s.revenueMode === 'generate');
  const capture = SERVICES.filter((s) => s.revenueMode === 'capture');

  return (
    <section className="section svc-section" id="services">
      <div className="container">
        <div className="svc-intro">
          <div className="pill-tag">
            <span className="pill-dot" />
            Service modules
          </div>
          <h2 className="section-title">What Auxo runs for you.</h2>
          <p className="section-desc">
            Hover a tile. Watch the dollars move.
          </p>
        </div>

        <div className="svc-lanes">
          <div className="svc-lane">
            <p className="svc-lane-label">Earn</p>
            <div className="svc-tile-grid svc-tile-grid--earn">
              {generate.map((service) => (
                <ServiceTile key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div className="svc-lane">
            <p className="svc-lane-label">Catch</p>
            <div className="svc-tile-grid svc-tile-grid--catch">
              {capture.map((service) => (
                <ServiceTile key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
export { SERVICES };
