import React from 'react';

export function ProductMock({ title, caption, theme = 'light', children }) {
  return (
    <div className={`pmock pmock--${theme}`}>
      <div className="pmock-chrome">
        <span className="pmock-title">{title}</span>
        {caption ? <span className="pmock-caption">{caption}</span> : null}
      </div>
      <div className="pmock-body">{children}</div>
    </div>
  );
}

export function SoundWave() {
  const bars = 22;
  return (
    <div className="soundwave-container">
      <div className="soundwave-track">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className="soundwave-bar"
            style={{
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${0.8 + (i % 5) * 0.12}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function DocumentVisual({
  label = 'Submission package',
  status = 'Ready to send',
  docs = [
    { name: 'ACORD 125.pdf', type: 'pdf' },
    { name: 'Loss runs 2021-2025.pdf', type: 'pdf' },
    { name: 'SOV Harbor Logistics.xlsx', type: 'xls' },
  ],
  sender = 'marcus@northlinebrokerage.com',
  fields = [
    { label: 'Named insured', value: 'Harbor Logistics Group' },
    { label: 'Lines', value: 'Cargo · Warehouse Liability' },
    { label: 'Effective', value: '2026-09-01' },
  ],
  checks = ['ACORD 125 + 126 completed', 'SOV reconciled, 4 locations', '5-yr loss runs attached'],
}) {
  return (
    <div className="cap-doc-visual">
      <div className="cap-doc-header">
        <span className="cap-doc-label">{label}</span>
        <span className="cap-doc-status">
          <span className="cap-doc-status-dot" />
          {status}
        </span>
      </div>
      <div className="cap-doc-body">
        <div className="cap-doc-col cap-doc-col--left">
          <span className="cap-doc-col-label">FORWARDED TO AUXO</span>
          <div className="cap-doc-list">
            {docs.map((doc) => (
              <div key={doc.name} className="cap-doc-item">
                <span className={`cap-doc-icon cap-doc-icon--${doc.type}`}>
                  {doc.type === 'xls' ? 'XLS' : 'PDF'}
                </span>
                <span className="cap-doc-name">{doc.name}</span>
              </div>
            ))}
          </div>
          <div className="cap-doc-sender">
            <span className="cap-doc-sender-avatar">{sender.charAt(0).toUpperCase()}</span>
            <span className="cap-doc-sender-email">{sender}</span>
          </div>
        </div>
        <div className="cap-doc-divider" />
        <div className="cap-doc-col cap-doc-col--right">
          <span className="cap-doc-col-label">FILLED BY AUXO</span>
          <div className="cap-doc-fields">
            {fields.map((field) => (
              <div key={field.label} className="cap-doc-field">
                <span className="cap-doc-field-label">{field.label}</span>
                <span className="cap-doc-field-value">{field.value}</span>
              </div>
            ))}
          </div>
          <div className="cap-doc-checks">
            {checks.map((check) => (
              <div key={check} className="cap-doc-check">
                <span className="cap-doc-check-icon" aria-hidden="true">
                  ✓
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

export function FnolMock({ data = {}, title = 'FNOL' }) {
  return (
    <ProductMock title={title} caption="Retention">
      <div className="fnol-mock">
        <SoundWave />
        {data.transcript ? <p className="fnol-line">Auxo: {data.transcript}</p> : null}
        <dl className="pmock-dl">
          <div>
            <dt>Account</dt>
            <dd>{data.account}</dd>
          </div>
          <div>
            <dt>Caller</dt>
            <dd>{data.caller}</dd>
          </div>
          <div>
            <dt>Loss</dt>
            <dd>{data.loss}</dd>
          </div>
          <div>
            <dt>Claim</dt>
            <dd>{data.claim}</dd>
          </div>
        </dl>
        <p className="pmock-status">{data.status}</p>
      </div>
    </ProductMock>
  );
}

export function CoiMock({ data = {}, title = 'Policy Checker' }) {
  const steps = data.steps || [
    'Read policy PDF',
    'Extract endorsement',
    'Check book SOP',
    'Issue certificate',
  ];

  return (
    <ProductMock title={title} caption="Ops">
      <ol className="coi-flow" aria-label="Certificate worklane">
        {steps.map((step, i) => (
          <li key={step} className={i < steps.length - 1 ? 'coi-flow-step' : 'coi-flow-step coi-flow-step--done'}>
            <span className="coi-flow-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="coi-flow-label">{step}</span>
          </li>
        ))}
      </ol>
      <dl className="pmock-dl pmock-dl--pad">
        <div>
          <dt>Account</dt>
          <dd>{data.account}</dd>
        </div>
        <div>
          <dt>Request</dt>
          <dd>{data.request}</dd>
        </div>
        <div>
          <dt>Source PDF</dt>
          <dd>{data.source || data.policy}</dd>
        </div>
        <div>
          <dt>Extracted</dt>
          <dd>{data.extracted || data.form}</dd>
        </div>
        <div>
          <dt>SOP check</dt>
          <dd>{data.sop || 'Book limits and holder wording'}</dd>
        </div>
        <div>
          <dt>Certificate</dt>
          <dd>{data.form || 'ACORD 25'}</dd>
        </div>
      </dl>
      <p className="pmock-status">{data.status}</p>
      {data.hold ? <p className="pmock-hold">{data.hold}</p> : null}
    </ProductMock>
  );
}

export function RenewalRadarMock({ data = {}, title = 'Renewal radar' }) {
  const rows = data.rows || [];

  return (
    <ProductMock title={title} caption={data.window || 'Retention'}>
      <div className="radar-mock">
        <p className="radar-status">{data.status}</p>
        <ul className="radar-list">
          {rows.map((row) => (
            <li key={row.account} className="radar-row">
              <div className="radar-row-main">
                <span className="radar-account">{row.account}</span>
                <span className="radar-line">{row.line}</span>
              </div>
              <div className="radar-row-meta">
                <span className="radar-expires">{row.expires}</span>
                <span
                  className={`radar-flag ${
                    row.flag === 'At risk' ? 'radar-flag--risk' : ''
                  } ${row.flag === 'Producer review' ? 'radar-flag--review' : ''}`}
                >
                  {row.flag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ProductMock>
  );
}

export function ModuleIndexMock({ data = {}, title = 'Module index' }) {
  return (
    <ProductMock title={title} caption="Nine worklanes">
      <div className="mod-index">
        {(data.groups || []).map((group) => (
          <div key={group.pillar} className="mod-index-group">
            <p className="mod-index-pillar">{group.pillar}</p>
            <ul>
              {group.modules.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {data.status ? <p className="pmock-hold">{data.status}</p> : null}
    </ProductMock>
  );
}

export function IntakeQuoteMock({ data = {}, title = 'Intake to quote' }) {
  const docs = (data.docs || []).map((name) => ({
    name,
    type: name.toLowerCase().includes('xls') ? 'xls' : 'pdf',
  }));
  return (
    <ProductMock title={title} caption="Sales">
      <div className="intake-split">
        <DocumentVisual
          docs={docs.length ? docs : undefined}
          sender={data.from}
          fields={[
            { label: 'Named insured', value: data.namedInsured },
            { label: 'Lines', value: data.lines },
            { label: 'Effective', value: data.effective },
          ]}
          checks={data.checks}
          status={data.status}
        />
      </div>
    </ProductMock>
  );
}

export function InboxMock({ threads = [] }) {
  return (
    <div className="inbox-mock">
      {threads.map((text) => {
        const unread = text.startsWith('CSR');
        const who = text.split(' · ')[0];
        return (
          <div key={text} className={`inbox-row ${unread ? 'inbox-row--unread' : ''}`}>
            <span className="inbox-who">{who}</span>
            <span className="inbox-text">{text.replace(/^[^·]+ · /, '')}</span>
          </div>
        );
      })}
    </div>
  );
}

export function HandoffDiagram({ steps = ['Auxo drafts', 'Human approves', 'System writes back'] }) {
  return (
    <ol className="handoff-steps">
      {steps.map((step, i) => (
        <li key={step}>
          <span>{String(i + 1).padStart(2, '0')}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

export function AskHumanMock({
  prompt = 'Missing ACORD 125 schedule. Ask producer?',
  actions = ['Approve', 'Edit'],
}) {
  return (
    <div className="ask-mock">
      <p className="ask-prompt">{prompt}</p>
      <div className="ask-actions">
        {actions.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function HomeMock({ data = {} }) {
  return (
    <ProductMock title={data.title || 'Agency home'} caption="Today">
      <ul className="home-list">
        <li>
          <span>Open worklanes</span>
          <strong>{data.openWorklanes}</strong>
        </li>
        <li>
          <span>Exceptions</span>
          <strong>{data.exceptions}</strong>
        </li>
        <li>
          <span>Next renewal</span>
          <strong>{data.nextRenewal}</strong>
        </li>
      </ul>
    </ProductMock>
  );
}

export function DashboardMock({ data = {} }) {
  return (
    <ProductMock title="Producer view" caption="Pipeline">
      <div className="dash-mini">
        <div className="dash-mini-metric">
          <span>{data.boundPremium || 'Bound premium MTD'}</span>
          <strong>$1.24M</strong>
        </div>
        <div className="dash-mini-metric">
          <span>{data.hoursPerFile || 'Hours per file'}</span>
          <strong>down</strong>
        </div>
        <div className="dash-mini-bars" aria-hidden="true">
          <i style={{ height: '42%' }} />
          <i style={{ height: '58%' }} />
          <i style={{ height: '51%' }} />
          <i style={{ height: '72%' }} />
          <i style={{ height: '64%' }} />
        </div>
      </div>
    </ProductMock>
  );
}
