import React, { useEffect, useRef, useState } from 'react';

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

export function CheckCircleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke="#3D9B5F" strokeWidth="1.6" />
      <path
        d="M8.6 12.2l2.4 2.4 4.4-4.8"
        stroke="#3D9B5F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckMarkIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 12.8l4.4 4.4 10.6-11"
        stroke="#3D9B5F"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5V6l7-3z"
        stroke="#3E5C76"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 12l2 2 3.6-3.8"
        stroke="#3E5C76"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function highlightPhrase(text, phrase) {
  if (!text || !phrase || !text.includes(phrase)) {
    return text;
  }

  const [before, after] = text.split(phrase);
  return (
    <>
      {before}
      <strong>{phrase}</strong>
      {after}
    </>
  );
}

const RENEWAL_FLAG_ACCENT = {
  'Producer review': 'coral',
  'At risk': 'gold',
  'Outreach queued': 'blue',
};

function MockSectionHead({ label, accent = false, trailing = null }) {
  return (
    <div className={`lane-mock-section-head${accent ? ' lane-mock-section-head--accent' : ''}`}>
      <span className="lane-mock-section-label">{label}</span>
      <span className="lane-mock-section-rule" aria-hidden="true" />
      {trailing ? <span className="lane-mock-section-trail">{trailing}</span> : null}
    </div>
  );
}

export function LaneMetaStrip({ items = [], tones = ['blue', 'green', 'coral'] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="lane-mock-meta" aria-label="Workflow summary">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`lane-mock-meta-cell lane-mock-meta-cell--${tones[index] || 'blue'}${
            index < items.length - 1 ? ' lane-mock-meta-cell--split' : ''
          }`}
        >
          <span className="lane-mock-meta-label">{item.label}</span>
          <span className="lane-mock-meta-value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function CapabilityMockFrame({ variant, title, caption, children }) {
  if (variant === 'capability') {
    return children;
  }

  return (
    <ProductMock title={title} caption={caption}>
      {children}
    </ProductMock>
  );
}

const DOC_TYPE_LABEL = {
  pdf: 'PDF',
  xls: 'XLS',
  eml: 'EML',
};

function normalizeDocs(docs = []) {
  return docs.map((doc) =>
    typeof doc === 'string'
      ? {
          name: doc,
          type: doc.toLowerCase().includes('xls') ? 'xls' : 'pdf',
        }
      : doc
  );
}

export function SubmissionPackageMock({
  docs,
  namedInsured,
  lines,
  effective,
  boundPremium,
  boundPremiumDelta,
  checks = [],
  checkTime,
  statusBar,
  refId,
  readCount,
  status,
  meta,
  metaTones,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [panDistance, setPanDistance] = useState(0);
  const normalizedDocs = normalizeDocs(docs);
  const fields = [
    { label: 'Named insured', value: namedInsured },
    { label: 'Lines', value: lines },
    { label: 'Effective', value: effective },
    boundPremium ? { label: 'Bound premium', value: boundPremium, delta: boundPremiumDelta } : null,
  ].filter(Boolean);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      setPanDistance(Math.max(0, track.scrollHeight - viewport.clientHeight));
    };

    measure();
    window.addEventListener('resize', measure);

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measure)
      : null;
    if (observer && viewportRef.current) {
      observer.observe(viewportRef.current);
      if (trackRef.current) observer.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('resize', measure);
      observer?.disconnect();
    };
  }, [normalizedDocs.length, fields.length, checks.length]);

  return (
    <div className="lane-mock lane-mock--submission">
      <div className="lane-mock-viewport" ref={viewportRef}>
        <div
          ref={trackRef}
          className={`lane-mock-scroll-track${panDistance > 0 ? ' lane-mock-scroll-track--pan' : ''}`}
          style={{ '--submission-pan': `-${panDistance}px` }}
        >
          <div className="lane-mock-bar">
            <span className="lane-mock-live-dot" aria-hidden="true" />
            <span className="lane-mock-bar-title">{statusBar || status}</span>
            {refId ? <span className="lane-mock-bar-id">{refId}</span> : null}
          </div>

          <div className="lane-mock-panel">
            <MockSectionHead label="Forwarded to Auxo" trailing={readCount} />
            <div className="lane-mock-docs">
              {normalizedDocs.map((doc, index) => (
                <div
                  key={doc.name}
                  className="lane-mock-doc"
                  style={{ animationDelay: `${0.05 + index * 0.07}s` }}
                >
                  <span className={`lane-mock-doc-type lane-mock-doc-type--${doc.type}`}>
                    {DOC_TYPE_LABEL[doc.type] || 'PDF'}
                  </span>
                  <span className="lane-mock-doc-name">{doc.name}</span>
                  <CheckCircleIcon />
                </div>
              ))}
            </div>
          </div>

          <div className="lane-mock-panel lane-mock-panel--filled">
            <MockSectionHead label="Filled by Auxo" accent />
            <div className="lane-mock-fields">
              {fields.map((field) => (
                <div key={field.label} className="lane-mock-field">
                  <span className="lane-mock-field-label">{field.label}</span>
                  <span className="lane-mock-field-value">
                    {field.value}
                    {field.delta ? (
                      <span className="lane-mock-field-delta">{field.delta}</span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
            {checks[0] ? (
              <div className="lane-mock-check-row">
                <CheckCircleIcon />
                <span className="lane-mock-check-text">{checks[0]}</span>
                {checkTime ? <span className="lane-mock-check-time">{checkTime}</span> : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <LaneMetaStrip items={meta} tones={metaTones} />
    </div>
  );
}

const FNOL_WAVE_HEIGHTS = [
  24, 44, 70, 36, 88, 52, 30, 64, 78, 40, 92, 48, 68, 34, 82, 56, 72, 38, 86, 46,
  60, 28, 74, 42, 66, 32, 80, 50, 58, 26, 54, 36, 62, 30, 48, 22,
];

const FNOL_WAVE_CORAL = new Set([2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 21, 23, 25, 27, 29]);

export function FnolMock({
  data = {},
  title = 'FNOL intake',
  variant,
  meta,
  metaTones,
}) {
  const pills = data.pills || [];
  const fields = [
    { label: 'Account', value: data.account },
    { label: 'Caller', value: data.caller },
    { label: 'Loss', value: data.loss },
    { label: 'Claim', value: data.claim },
  ].filter((field) => field.value);

  return (
    <CapabilityMockFrame variant={variant} title={title} caption="Retention">
      <div className="lane-mock lane-mock--fnol">
        <div className="lane-mock-call">
          <div className="lane-mock-call-head">
            <span className="lane-mock-live-dot" aria-hidden="true" />
            <span className="lane-mock-call-title">Live call · Auxo answering</span>
            {data.callTime ? <span className="lane-mock-call-time">{data.callTime}</span> : null}
          </div>

          <div className="lane-mock-wave" aria-hidden="true">
            {FNOL_WAVE_HEIGHTS.map((height, index) => (
              <span
                key={index}
                className={`lane-mock-wave-bar${FNOL_WAVE_CORAL.has(index) ? ' lane-mock-wave-bar--coral' : ''}`}
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 0.06}s`,
                }}
              />
            ))}
            <span className="lane-mock-wave-playhead" />
          </div>

          {pills.length > 0 ? (
            <div className="lane-mock-pills">
              {pills.map((pill, index) => (
                <span
                  key={pill}
                  className={`lane-mock-pill${index === 0 ? ' lane-mock-pill--accent' : ''}`}
                >
                  {pill}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {data.transcript ? (
          <div className="lane-mock-panel">
            <p className="lane-mock-transcript">
              <strong>Auxo:</strong> {data.transcript}
            </p>
          </div>
        ) : null}

        {fields.length > 0 ? (
          <div className="lane-mock-panel lane-mock-panel--compact">
            <MockSectionHead label="Captured off the call" accent />
            <div className="lane-mock-grid">
              {fields.map((field) => (
                <div key={field.label} className="lane-mock-grid-cell">
                  <span className="lane-mock-grid-label">{field.label}</span>
                  <span className="lane-mock-grid-value">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {data.status ? (
          <div className="lane-mock-handoff">
            <CheckCircleIcon />
            <p className="lane-mock-handoff-copy">
              <strong>{data.status === 'Clean file for adjuster' ? 'Clean file for the adjuster' : data.status}</strong>
              {data.handoffDetail ? ` — ${data.handoffDetail}` : null}
            </p>
            {data.handoffTime ? <span className="lane-mock-handoff-time">{data.handoffTime}</span> : null}
          </div>
        ) : null}
        <LaneMetaStrip items={meta} tones={metaTones} />
      </div>
    </CapabilityMockFrame>
  );
}

export function CoiMock({
  data = {},
  title = 'Policy checker',
  variant,
  meta,
  metaTones,
}) {
  const sopChecks = data.sopChecks || [];
  const endorsementText = data.endorsementText || data.extracted || '';

  return (
    <CapabilityMockFrame variant={variant} title={title} caption="Ops">
      <div className="lane-mock lane-mock--policy-checker">
        <div className="lane-mock-pc-head">
          <span className="lane-mock-live-dot" aria-hidden="true" />
          <span className="lane-mock-pc-status">{data.statusBar || 'Certificate issued'}</span>
          {data.stepMeta ? <span className="lane-mock-pc-meta">{data.stepMeta}</span> : null}
        </div>

        <div className="lane-mock-pc-account">
          <div className="lane-mock-pc-account-block">
            <span className="lane-mock-pc-label">Account</span>
            <span className="lane-mock-pc-value">{data.account}</span>
          </div>
          <span className="lane-mock-pc-divider" aria-hidden="true" />
          <div className="lane-mock-pc-account-block">
            <span className="lane-mock-pc-label">Request</span>
            <span className="lane-mock-pc-value">{data.request}</span>
          </div>
        </div>

        <div className="lane-mock-pc-scroll">
          <div className="lane-mock-pc-rail" aria-hidden="true">
            <span className="lane-mock-pc-rail-track" />
            <span className="lane-mock-pc-rail-fill" />
          </div>

          <ol className="lane-mock-pc-steps" aria-label="Certificate workflow">
            <li className="lane-mock-pc-step" style={{ animationDelay: '0.05s' }}>
              <span className="lane-mock-pc-step-num lane-mock-pc-step-num--blue">01</span>
              <div className="lane-mock-pc-step-body">
                <span className="lane-mock-pc-step-title">Read the policy PDF</span>
                <div className="lane-mock-pc-pdf">
                  <span className="lane-mock-pc-pdf-scan" aria-hidden="true" />
                  <span className="lane-mock-pc-pdf-type">PDF</span>
                  <span className="lane-mock-pc-pdf-name">{data.source || data.policy}</span>
                  {data.sourcePages ? (
                    <span className="lane-mock-pc-pdf-pages">{data.sourcePages}</span>
                  ) : null}
                </div>
              </div>
            </li>

            <li className="lane-mock-pc-step" style={{ animationDelay: '0.16s' }}>
              <span className="lane-mock-pc-step-num lane-mock-pc-step-num--blue">02</span>
              <div className="lane-mock-pc-step-body">
                <span className="lane-mock-pc-step-title">Extract the endorsement</span>
                <div className="lane-mock-pc-extract">
                  {data.endorsementPage ? (
                    <span className="lane-mock-pc-extract-page">{data.endorsementPage}</span>
                  ) : null}
                  <p className="lane-mock-pc-extract-text">
                    {highlightPhrase(endorsementText, data.endorsementHighlight)}
                  </p>
                </div>
              </div>
            </li>

            <li className="lane-mock-pc-step" style={{ animationDelay: '0.27s' }}>
              <span className="lane-mock-pc-step-num lane-mock-pc-step-num--green">03</span>
              <div className="lane-mock-pc-step-body">
                <span className="lane-mock-pc-step-title">Check the book&apos;s SOP</span>
                <div className="lane-mock-pc-checks">
                  {sopChecks.map((check) => (
                    <div key={check} className="lane-mock-pc-check">
                      <CheckMarkIcon />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li className="lane-mock-pc-step" style={{ animationDelay: '0.38s' }}>
              <span className="lane-mock-pc-step-num lane-mock-pc-step-num--coral">04</span>
              <div className="lane-mock-pc-step-body">
                <span className="lane-mock-pc-step-title">Issue the certificate</span>
                <div className="lane-mock-pc-issue">
                  <div className="lane-mock-pc-issue-head">
                    {data.certificateId ? (
                      <span className="lane-mock-pc-issue-id">{data.certificateId}</span>
                    ) : null}
                    {data.emailedAt ? (
                      <span className="lane-mock-pc-issue-time">{data.emailedAt}</span>
                    ) : null}
                  </div>
                  <p className="lane-mock-pc-issue-summary">
                    {data.certificateSummary || data.status}
                  </p>
                </div>
              </div>
            </li>
          </ol>

          {data.auditNote ? (
            <div className="lane-mock-pc-audit">
              <ShieldCheckIcon />
              <p>{data.auditNote}</p>
            </div>
          ) : null}
        </div>
        <LaneMetaStrip items={meta} tones={metaTones} />
      </div>
    </CapabilityMockFrame>
  );
}

export function RenewalRadarMock({
  data = {},
  title = 'Renewal radar',
  variant,
  meta,
  metaTones,
}) {
  const rows = data.rows || [];
  const markers = data.markers || [];
  const pills = data.pills || [];

  return (
    <CapabilityMockFrame variant={variant} title={title} caption={data.window || 'Retention'}>
      <div className="lane-mock lane-mock--renewal-radar">
        <div className="lane-mock-rr-head">
          <div className="lane-mock-rr-head-bar">
            <span className="lane-mock-live-dot" aria-hidden="true" />
            <span className="lane-mock-rr-window">{data.window || '90-day book window'}</span>
            {data.sweptAt ? <span className="lane-mock-rr-swept">{data.sweptAt}</span> : null}
          </div>

          <div className="lane-mock-rr-timeline" aria-hidden="true">
            <span className="lane-mock-rr-track" />
            <span className="lane-mock-rr-tick" style={{ left: '0%' }} />
            <span className="lane-mock-rr-tick" style={{ left: '33.3%' }} />
            <span className="lane-mock-rr-tick" style={{ left: '66.6%' }} />
            <span className="lane-mock-rr-tick lane-mock-rr-tick--expiry" style={{ left: '100%' }} />

            {markers.map((marker) => (
              <div
                key={marker.label}
                className={`lane-mock-rr-marker lane-mock-rr-marker--${marker.tone || 'blue'}`}
                style={{ left: `${marker.position}%` }}
              >
                <span className="lane-mock-rr-marker-label">{marker.label}</span>
                <span className="lane-mock-rr-marker-stem" />
                <span
                  className={`lane-mock-rr-marker-dot${
                    marker.pulse ? ' lane-mock-rr-marker-dot--pulse' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="lane-mock-rr-scale">
            <span>90 days out</span>
            <span>60</span>
            <span>30</span>
            <span className="lane-mock-rr-scale-expiry">Expiry</span>
          </div>

          {pills.length > 0 ? (
            <div className="lane-mock-rr-pills">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className={`lane-mock-rr-pill lane-mock-rr-pill--${pill.tone || 'neutral'}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lane-mock-rr-scroll">
          <MockSectionHead label="Worked by Auxo overnight" />

          <ul className="lane-mock-rr-list">
            {rows.map((row, index) => {
              const accent = row.accent || RENEWAL_FLAG_ACCENT[row.flag] || 'blue';
              return (
                <li
                  key={row.account}
                  className={`lane-mock-rr-row lane-mock-rr-row--${accent}`}
                  style={{ animationDelay: `${0.05 + index * 0.09}s` }}
                >
                  <div className="lane-mock-rr-row-head">
                    <span className="lane-mock-rr-account">{row.account}</span>
                    <span className="lane-mock-rr-line">{row.line}</span>
                    <span className="lane-mock-rr-expires">{row.expires}</span>
                  </div>
                  {row.progress ? (
                    <div className="lane-mock-rr-progress" aria-hidden="true">
                      <span
                        className={`lane-mock-rr-progress-fill lane-mock-rr-progress-fill--${accent}`}
                        style={{ width: `${row.progress}%`, animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ) : null}
                  <div className="lane-mock-rr-row-foot">
                    <span className={`lane-mock-rr-flag lane-mock-rr-flag--${accent}`}>
                      {row.flag}
                    </span>
                    {row.note ? <span className="lane-mock-rr-note">{row.note}</span> : null}
                  </div>
                </li>
              );
            })}
          </ul>

          {data.queueNote ? (
            <div className="lane-mock-rr-queue">
              <CheckMarkIcon />
              <p>
                {data.queueNoteStrong ? (
                  <>
                    <strong>{data.queueNoteStrong}</strong>
                    {data.queueNoteRest ? ` — ${data.queueNoteRest}` : null}
                  </>
                ) : (
                  data.queueNote
                )}
              </p>
            </div>
          ) : null}
        </div>
        <LaneMetaStrip items={meta} tones={metaTones} />
      </div>
    </CapabilityMockFrame>
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

export function IntakeQuoteMock({
  data = {},
  title = 'Submission package',
  variant,
  meta,
  metaTones,
}) {
  return (
    <CapabilityMockFrame variant={variant} title={title} caption="Sales">
      <SubmissionPackageMock {...data} meta={meta} metaTones={metaTones} />
    </CapabilityMockFrame>
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
