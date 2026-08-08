import React from 'react';

const DOCS = [
  { name: 'ACORD 125.pdf', type: 'pdf' },
  { name: 'Loss runs 2021-2025.pdf', type: 'pdf' },
  { name: 'SOV Harbor Logistics.xlsx', type: 'xls' },
  { name: 'Broker intake note', type: 'msg' },
];

const EXTRACTED = [
  { label: 'Named insured', value: 'Harbor Logistics Group' },
  { label: 'Lines', value: 'Cargo · Warehouse Liability' },
  { label: 'Effective', value: '2026-09-01' },
];

const CHECKS = [
  'ACORD 125 + 126 completed',
  'SOV reconciled · 4 locations',
  '5-yr loss runs attached',
];

function SoundWave() {
  const bars = 28;
  return (
    <div className="soundwave-container">
      <div className="soundwave-track">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className="soundwave-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${0.8 + Math.random() * 0.6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DocumentVisual() {
  return (
    <div className="cap-doc-visual">
      <div className="cap-doc-header">
        <span className="cap-doc-label">SUBMISSION PACKAGE</span>
        <span className="cap-doc-status">
          <span className="cap-doc-status-dot" />
          Ready to send
        </span>
      </div>
      <div className="cap-doc-body">
        <div className="cap-doc-col cap-doc-col--left">
          <span className="cap-doc-col-label">FORWARDED TO AUXO</span>
          <div className="cap-doc-list">
            {DOCS.map((doc) => (
              <div key={doc.name} className="cap-doc-item">
                <span className={`cap-doc-icon cap-doc-icon--${doc.type}`}>
                  {doc.type === 'pdf' && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="1" width="14" height="16" rx="2" fill="rgba(228,121,91,0.25)" />
                      <path d="M5 6h8M5 9h6M5 12h4" stroke="rgba(228,121,91,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                  {doc.type === 'xls' && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="1" width="14" height="16" rx="2" fill="rgba(61,155,95,0.25)" />
                      <path d="M5 5h8M5 8h8M5 11h8M5 14h5" stroke="rgba(61,155,95,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                  {doc.type === 'msg' && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="1" y="3" width="16" height="12" rx="2" fill="rgba(62,92,118,0.35)" />
                      <path d="M2 5l7 5 7-5" stroke="rgba(123,163,196,0.9)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="cap-doc-name">{doc.name}</span>
              </div>
            ))}
          </div>
          <div className="cap-doc-sender">
            <span className="cap-doc-sender-avatar">M</span>
            <span className="cap-doc-sender-email">marcus@northlinebrokerage.com</span>
          </div>
        </div>

        <div className="cap-doc-divider" />

        <div className="cap-doc-col cap-doc-col--right">
          <div className="cap-doc-col-label-wrap">
            <span className="cap-doc-col-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M5 8l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="cap-doc-col-label">FILLED BY AUXO</span>
          </div>

          <div className="cap-doc-fields">
            {EXTRACTED.map((field) => (
              <div key={field.label} className="cap-doc-field">
                <span className="cap-doc-field-label">{field.label}</span>
                <span className="cap-doc-field-value">{field.value}</span>
              </div>
            ))}
          </div>

          <div className="cap-doc-checks">
            {CHECKS.map((check) => (
              <div key={check} className="cap-doc-check">
                <span className="cap-doc-check-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="var(--accent)" />
                    <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="cap-doc-check-text">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CapabilitiesSection = () => {
  return (
    <section className="section cap-section" id="capabilities">
      <div className="container">
        <div className="cap-intro">
          <h2 className="cap-section-title">The Engine Powering the Modern Agency</h2>
          <p className="cap-section-desc">
            Automate your most time-consuming workflows across every channel, so your team can
            focus on building relationships and closing policies.
          </p>
        </div>

        <div className="cap-grid-half">
          <article className="cap-card">
            <div className="cap-card-inner cap-card-inner--tight">
              <DocumentVisual />
              <h3 className="cap-card-title">Zero-Touch Submission Packages.</h3>
              <p className="cap-card-desc">
                Stop wrestling with PDFs. Our AI instantly ingests ACORDs, dec pages, and loss
                runs, fills what it can, flags gaps, and raises approvals when a workflow calls
                for it.
              </p>
              <a className="cap-card-link" href="#services">
                See it in action
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>

          <article className="cap-card">
            <div className="cap-card-inner">
              <div className="voice-lang-pills">
                <span className="voice-lang-pill voice-lang-pill--active">English</span>
                <span className="voice-lang-pill">Español</span>
              </div>

              <div className="cap-voice-visual">
                <div className="cap-voice-avatars">
                  <div className="cap-avatar cap-avatar--team">
                    <svg viewBox="0 0 64 64" width="48" height="48">
                      <circle cx="32" cy="24" r="14" fill="rgba(250,247,242,0.35)" />
                      <path d="M12 56c0-11 9-20 20-20s20 9 20 20" fill="rgba(250,247,242,0.25)" />
                    </svg>
                    <span className="cap-avatar-label">Team's calls</span>
                  </div>
                  <div className="cap-voice-arrow">
                    <span>Training...</span>
                  </div>
                  <div className="cap-avatar cap-avatar--agent">
                    <div className="cap-avatar-ring">
                      <span className="cap-avatar-initial">A</span>
                    </div>
                    <span className="cap-avatar-label">Auxo agent</span>
                  </div>
                </div>
                <SoundWave />
              </div>
              <h3 className="cap-card-title">Your Top Agent, Cloned at Scale.</h3>
              <p className="cap-card-desc">
                Train our AI on your pitch, objection handling, and escalation playbooks. Every
                call sounds like it is coming from someone who has been on your team for years.
              </p>
              <a className="cap-card-link" href="#contact">
                Hear a sample
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
