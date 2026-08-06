import React, { useEffect, useState } from 'react';

const TASKS = ['ACORD intake', 'Loss Runs', 'Quoting Triage'];

const BentoGrid = () => {
  const [choice, setChoice] = useState(null);
  const [taskStep, setTaskStep] = useState(0);
  const [capacityT, setCapacityT] = useState(0.65);

  useEffect(() => {
    const id = setInterval(() => {
      setTaskStep((s) => (s + 1) % (TASKS.length + 1));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Capacity curve: clients grow exponentially, overhead stays flat
  const clientsPath = (() => {
    const pts = [];
    for (let i = 0; i <= 20; i++) {
      const x = (i / 20) * 280 + 10;
      const growth = Math.pow(i / 20, 1.8) * 100;
      const y = 130 - growth;
      pts.push(`${x},${y}`);
    }
    return pts.join(' ');
  })();

  const overheadPath = (() => {
    const pts = [];
    for (let i = 0; i <= 20; i++) {
      const x = (i / 20) * 280 + 10;
      const y = 100 - (i / 20) * 8;
      pts.push(`${x},${y}`);
    }
    return pts.join(' ');
  })();

  const markerX = 10 + capacityT * 280;
  const markerClientsY = 130 - Math.pow(capacityT, 1.8) * 100;
  const markerOverheadY = 100 - capacityT * 8;

  return (
    <section className="section" id="why-auxosure">
      <div className="container">
        <div className="pill-tag">
          <span className="pill-dot" />
          Why Auxosure
        </div>
        <h2 className="section-title" id="bento">
          Built for brokerage & underwriting growth
        </h2>
        <p className="section-desc">
          Four outcomes that compound: higher LTV, unified channels, automated ops, and room for more clients.
        </p>

        <div className="bento-grid">
          {/* Card 1 — LTV */}
          <div className="bento-card full">
            <span className="bento-tag green">Lifetime Value</span>
            <h3>Increase the lifetime value of your policyholders.</h3>
            <p>
              Auxo proactively reaches out on renewals, pre-fills applications, and keeps relationships warm —
              so retention becomes a system, not a scramble.
            </p>
            <div className="conversation-bubble">
              <p>
                &ldquo;Hi Nicholas! Your commercial policy is up for renewal. I&apos;ve pre-filled the
                application with your current details. Ready to proceed?&rdquo;
              </p>
              <div className="bubble-choices">
                {['Yes, proceed', 'Review changes', 'Call me later'].map((label) => (
                  <button
                    key={label}
                    className={`bubble-choice ${choice === label ? 'selected' : ''}`}
                    onClick={() => setChoice(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {choice && (
                <p style={{ marginTop: 12, marginBottom: 0, fontSize: 13, color: 'var(--bento-green-accent)' }}>
                  Auxo: Got it — &ldquo;{choice}&rdquo; logged. Next steps queued.
                </p>
              )}
            </div>
          </div>

          {/* Card 2 — Channels */}
          <div className="bento-card blue">
            <span className="bento-tag blue">Channels</span>
            <h3>Unify your communication channels.</h3>
            <p>One Auxo hub across Voice, SMS, Email, and WhatsApp.</p>
            <div className="channel-hub" aria-hidden="true">
              <div className="hub-center">Auxo</div>
              <div className="hub-node">Voice</div>
              <div className="hub-node">SMS</div>
              <div className="hub-node">Email</div>
              <div className="hub-node">WhatsApp</div>
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                viewBox="0 0 200 160"
              >
                <line x1="100" y1="80" x2="100" y2="24" stroke="rgba(66,165,245,0.35)" strokeWidth="1.5" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="80" x2="168" y2="80" stroke="rgba(66,165,245,0.35)" strokeWidth="1.5" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.8s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="80" x2="100" y2="136" stroke="rgba(66,165,245,0.35)" strokeWidth="1.5" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="100" y1="80" x2="32" y2="80" stroke="rgba(66,165,245,0.35)" strokeWidth="1.5" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.6s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>
          </div>

          {/* Card 3 — Operations */}
          <div className="bento-card purple">
            <span className="bento-tag purple">Operations</span>
            <h3>Automate routine operational tasks.</h3>
            <p>Manual queues flow into automated checkmark pipelines.</p>
            <div className="task-pipeline">
              {TASKS.map((task, i) => (
                <div key={task} className={`task-item ${i < taskStep ? 'done' : ''}`}>
                  <span className="task-check">{i < taskStep ? '✓' : ''}</span>
                  {task}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 — Bandwidth */}
          <div className="bento-card orange">
            <span className="bento-tag orange">Bandwidth</span>
            <h3>Increase bandwidth for more clients.</h3>
            <p>Client capacity grows while operational overhead stays flat.</p>
            <div className="capacity-chart">
              <svg viewBox="0 0 300 140" role="img" aria-label="Client capacity vs operational overhead chart">
                <polyline
                  fill="none"
                  stroke="var(--bento-orange-accent)"
                  strokeWidth="2.5"
                  points={clientsPath}
                />
                <polyline
                  fill="none"
                  stroke="rgba(241,239,250,0.35)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  points={overheadPath}
                />
                <circle cx={markerX} cy={markerClientsY} r="5" fill="var(--bento-orange-accent)" />
                <circle cx={markerX} cy={markerOverheadY} r="4" fill="rgba(241,239,250,0.6)" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={capacityT}
                onChange={(e) => setCapacityT(Number(e.target.value))}
                aria-label="Scrub capacity over time"
                style={{ width: '100%', marginTop: 4 }}
              />
              <div className="capacity-legend">
                <span>
                  <span className="legend-dot" style={{ background: 'var(--bento-orange-accent)' }} />
                  Client capacity
                </span>
                <span>
                  <span className="legend-dot" style={{ background: 'rgba(241,239,250,0.5)' }} />
                  Op. overhead
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
