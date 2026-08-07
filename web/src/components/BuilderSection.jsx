import React, { useEffect, useState } from 'react';

const STEPS = [
  {
    id: 'auxo',
    title: 'Design with Auxo',
    description:
      'Ingest your agency policies, ACORD documents, and past customer interactions to auto-draft Auxo’s knowledge base.',
  },
  {
    id: 'brand',
    title: 'Customize to Your Brand',
    description:
      'Set custom tone guardrails, upload brand assets, and define personalized greetings that match your agency’s voice.',
  },
  {
    id: 'policies',
    title: 'Manage Response Policies',
    description:
      'Define exact rules for when Auxo auto-answers, requests missing documents, or hands off to a licensed broker.',
  },
];

const STEP_INTERVAL_MS = 5500;

function AuxoPanel() {
  return (
    <>
      <div className="builder-bubble builder-bubble--user">
        Set up an agent for commercial renewal intake
      </div>
      <div className="builder-status-list">
        <div className="builder-status">
          <span className="builder-status-verb">Read</span> Renewal playbook.pdf
        </div>
        <div className="builder-status">
          <span className="builder-status-verb">Read</span> ACORD 125 samples
        </div>
        <div className="builder-status">
          <span className="builder-status-verb">Reviewed</span> Past renewal tickets
        </div>
      </div>
      <div className="builder-choice-card">
        <p className="builder-choice-q">Which channels should this agent handle?</p>
        <ul className="builder-choice-list">
          <li>1 &nbsp; Voice calls</li>
          <li>2 &nbsp; Email &amp; SMS</li>
          <li className="builder-choice--active">3 &nbsp; All channels</li>
        </ul>
        <div className="builder-choice-actions">
          <button type="button" className="builder-btn-ghost">Skip</button>
          <button type="button" className="builder-btn-solid">Continue</button>
        </div>
      </div>
    </>
  );
}

function BrandPanel() {
  return (
    <>
      <div className="builder-bubble builder-bubble--user">
        Match Auxo to our agency brand
      </div>
      <div className="builder-status-list">
        <div className="builder-status">
          <span className="builder-status-verb">Loaded</span> Brand guidelines
        </div>
        <div className="builder-status">
          <span className="builder-status-verb">Applied</span> Caller ID display name
        </div>
      </div>
      <div className="builder-brand-card">
        <div className="builder-brand-row">
          <span className="builder-brand-label">Tone</span>
          <span className="builder-brand-value">Warm · Professional</span>
        </div>
        <div className="builder-brand-row">
          <span className="builder-brand-label">Colors</span>
          <span className="builder-brand-swatches">
            <span style={{ background: '#2A2550' }} />
            <span style={{ background: '#FF6B57' }} />
            <span style={{ background: '#F1EFFA' }} />
          </span>
        </div>
        <div className="builder-brand-row">
          <span className="builder-brand-label">Greeting</span>
          <span className="builder-brand-value">“Thanks for calling Apex Insurance…”</span>
        </div>
        <div className="builder-choice-actions" style={{ marginTop: 16 }}>
          <button type="button" className="builder-btn-solid">Save brand</button>
        </div>
      </div>
    </>
  );
}

function PoliciesPanel() {
  return (
    <>
      <div className="builder-bubble builder-bubble--user">
        Set rules for live broker handoff
      </div>
      <div className="builder-status-list">
        <div className="builder-status">
          <span className="builder-status-verb">Read</span> Escalation policy.pdf
        </div>
        <div className="builder-status">
          <span className="builder-status-verb">Reviewed</span> Transferred tickets
        </div>
      </div>
      <div className="builder-policy-card">
        <div className="builder-policy-row">
          <span>FNOL intake &amp; claim number</span>
          <span className="builder-badge builder-badge--active">Active</span>
        </div>
        <div className="builder-policy-row">
          <span>Escalation to licensed broker</span>
          <span className="builder-badge builder-badge--active">Active</span>
        </div>
        <div className="builder-policy-row">
          <span>Missing document collection</span>
          <span className="builder-badge builder-badge--active">Active</span>
        </div>
        <div className="builder-policy-row">
          <span>Tone &amp; language guardrails</span>
          <span className="builder-badge">Draft</span>
        </div>
        <div className="builder-testcase">
          <div className="builder-testcase-label">Test case</div>
          <p>Coverage dispute detected on commercial renewal call.</p>
          <div className="builder-testcase-pass">
            <span className="builder-check">✓</span>
            Passed · follows Escalation to licensed broker
          </div>
        </div>
        <div className="builder-choice-actions" style={{ marginTop: 14 }}>
          <button type="button" className="builder-btn-solid">Save rules</button>
        </div>
      </div>
    </>
  );
}

const PANELS = [AuxoPanel, BrandPanel, PoliciesPanel];

const BuilderSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [windowMinimized, setWindowMinimized] = useState(false);
  const [windowClosed, setWindowClosed] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const Panel = PANELS[active];

  const replay = () => {
    setActive(0);
    setPaused(false);
    setWindowMinimized(false);
    setWindowClosed(false);
  };

  const restoreWindow = () => {
    setWindowClosed(false);
    setWindowMinimized(false);
  };

  return (
    <section className="builder-section section" id="build">
      <div className="container builder-layout">
        <div className="builder-copy">
          <div className="builder-eyebrow">
            <span className="pill-dot" />
            Build
          </div>
          <h2 className="builder-headline">
            Build your first multimodal agent in less than five minutes
          </h2>
          <p className="builder-sub">
            Design Auxo your way. It automatically ingests your agency’s policies, knowledge, and
            operations to build an agent that works like a veteran member of your team—across Voice,
            Email, Messaging, and Documents.
          </p>

          <ul className="builder-steps" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {STEPS.map((step, i) => (
              <li key={step.id}>
                <button
                  type="button"
                  className={`builder-step ${i === active ? 'builder-step--active' : ''}`}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  aria-current={i === active ? 'step' : undefined}
                >
                  <span className="builder-step-title">{step.title}</span>
                  {i === active && (
                    <span className="builder-step-desc">{step.description}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="builder-stage">
          <div className="builder-glow" aria-hidden="true" />
          {windowClosed ? (
            <button type="button" className="builder-window-restore" onClick={restoreWindow}>
              Restore Auxo builder
            </button>
          ) : (
            <div
              className={`builder-window ${windowMinimized ? 'builder-window--minimized' : ''}`}
              key={STEPS[active].id}
            >
              <div className="builder-window-bar">
                <span className="builder-window-title">Auxo · Agency agent</span>
                <div className="builder-window-actions">
                  <button
                    type="button"
                    className="builder-window-btn builder-window-btn--minimize"
                    onClick={() => setWindowMinimized((v) => !v)}
                    aria-label={windowMinimized ? 'Restore window' : 'Minimize window'}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    className="builder-window-btn builder-window-btn--close"
                    onClick={() => {
                      setWindowClosed(true);
                      setWindowMinimized(false);
                    }}
                    aria-label="Close window"
                  >
                    ×
                  </button>
                </div>
              </div>
              {!windowMinimized && (
                <>
                  <div className="builder-window-body">
                    <Panel />
                  </div>
                  <div className="builder-window-footer">
                    <input
                      type="text"
                      className="builder-followup"
                      placeholder="Ask a follow-up…"
                      readOnly
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                    <button type="button" className="builder-send" aria-hidden="true" tabIndex={-1}>
                      ↑
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <button type="button" className="builder-replay" onClick={replay}>
            <span aria-hidden="true">↻</span> Replay
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuilderSection;
