import React from 'react';

const EARN = [
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
    id: 'renewal-tool',
    name: 'Renewal Tool',
    line: 'At-risk renewals flagged. Outreach before they walk.',
    impact: '+ Retention',
  },
  {
    id: 'quote-builder',
    name: 'Quote Builder',
    line: 'Carrier quote to client proposal. Gaps flagged.',
    impact: '+ Quote velocity',
  },
];

const SAVE = [
  {
    id: 'acord-intake',
    name: 'ACORD Intake',
    line: "Parse ACORDs. Pre-fill what you can, flag what you can't.",
    impact: '− Hours per file',
  },
  {
    id: 'fnol',
    name: 'FNOL',
    line: 'First-notice intake. Clean file for adjusters.',
    impact: '− Claim cycle time',
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
];

const SERVICES = [...EARN, ...SAVE].map(({ id, name }) => ({ id, name }));

function LedgerRow({ index, module, column }) {
  return (
    <div className={`ledger-row ledger-row--${column}`}>
      <span className="ledger-index">{String(index).padStart(2, '0')}</span>
      <div className="ledger-copy">
        <h3 className="ledger-name">{module.name}</h3>
        <p className="ledger-line">{module.line}</p>
      </div>
      <span className="ledger-chip">{module.impact}</span>
    </div>
  );
}

function LedgerCard({ column, title, count, modules }) {
  return (
    <article className={`ledger-card ledger-card--${column}`}>
      <header className="ledger-card-head">
        <h3 className="ledger-card-label">{title}</h3>
        <span className="ledger-card-count">{count}</span>
      </header>
      <div className="ledger-rows">
        {modules.map((module, i) => (
          <LedgerRow key={module.id} index={i + 1} module={module} column={column} />
        ))}
      </div>
    </article>
  );
}

const ServicePortfolio = ({ onRequestDemo }) => {
  return (
    <section className="section svc-section" id="services">
      <div className="container">
        <div className="svc-intro">
          <div className="pill-tag pill-tag--on-ink">
            <span className="pill-dot" />
            Service modules
          </div>
          <h2 className="section-title">What Auxo runs for you.</h2>
          <p className="section-desc">
            Nine modules, one ledger. Hover a line — watch the dollars move.
          </p>
        </div>

        <div className="ledger-grid">
          <LedgerCard
            column="earn"
            title="Earn — Grow the book"
            count="05"
            modules={EARN}
          />
          <LedgerCard
            column="save"
            title="Save — Protect the margin"
            count="04"
            modules={SAVE}
          />
        </div>

        <div className="ledger-footer">
          <div className="ledger-footer-copy">
            <span className="ledger-footer-label">Net effect</span>
            <p>More bound premium in. Fewer ops hours out.</p>
          </div>
          <button type="button" className="btn btn-primary ledger-footer-cta" onClick={onRequestDemo}>
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
export { SERVICES };
