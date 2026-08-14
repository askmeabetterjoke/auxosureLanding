import React from 'react';
import copy from '../copy.json';
import {
  FnolMock,
  CoiMock,
  IntakeQuoteMock,
  InboxMock,
  DocumentVisual,
} from './ProductMock';

/* Inline mini mocks for the capabilities cards */
function IntegrationsMock() {
  const logos = [
    'Applied Epic',
    'Vertafore',
    'Guidewire',
    'Duck Creek',
    'HawkSoft',
    'EZLynx',
    'NowCerts',
    'AgencyMatrix',
  ];
  return (
    <div className="cap-mock-logos">
      <div className="cap-mock-logos-grid">
        {logos.map((name) => (
          <div key={name} className="cap-mock-logo-cell">
            <span className="cap-mock-logo-text">{name}</span>
          </div>
        ))}
      </div>
      <p className="cap-mock-logos-foot">
        40+ live integrations across AMS, PAS, and telephony.
      </p>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="cap-mock-voice">
      <div className="cap-mock-voice-header">
        <span className="cap-mock-voice-badge">
          <span className="cap-mock-voice-live" />
          Live call
        </span>
        <span className="cap-mock-voice-time">2:23</span>
      </div>
      <div className="cap-mock-voice-wave">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="cap-mock-voice-bar"
            style={{
              height: `${12 + Math.sin(i * 0.8) * 10 + Math.random() * 14}px`,
            }}
          />
        ))}
      </div>
      <div className="cap-mock-voice-thread">
        <div className="cap-mock-voice-msg cap-mock-voice-msg--caller">
          <strong>Jane Doe</strong>
          <p>Yes, my policy number is PM 673-233-574</p>
        </div>
        <div className="cap-mock-voice-msg cap-mock-voice-msg--auxo">
          <strong>Auxo</strong>
          <p>
            I have reviewed your policy and noticed an upcoming renewal. I have
            sent you an email with the details.
          </p>
        </div>
      </div>
    </div>
  );
}

function IntakeMock() {
  return (
    <div className="cap-mock-intake">
      <DocumentVisual
        label="Submission package"
        status="Quote package in producer review"
        docs={[
          { name: 'ACORD 125.pdf', type: 'pdf' },
          { name: 'Loss runs 2021-2025.pdf', type: 'pdf' },
          { name: 'SOV Harbor Logistics.xlsx', type: 'xls' },
        ]}
        sender="marcus@northlinebrokerage.com"
        fields={[
          { label: 'Named insured', value: 'Harbor Logistics Group' },
          { label: 'Lines', value: 'Cargo · Warehouse Liability' },
          { label: 'Effective', value: '2026-09-01' },
        ]}
        checks={[
          'ACORD 125 + 126 completed',
          'SOV reconciled, 4 locations',
          '5-yr loss runs attached',
        ]}
      />
    </div>
  );
}

function FnolMiniMock() {
  return (
    <div className="cap-mock-fnol">
      <div className="cap-mock-fnol-header">
        <strong>Harbor Logistics</strong>
        <span className="cap-mock-fnol-badge">FNOL</span>
      </div>
      <div className="cap-mock-fnol-body">
        <p className="cap-mock-fnol-line">
          <span className="cap-mock-fnol-label">Caller</span>
          Marcus, Northline
        </p>
        <p className="cap-mock-fnol-line">
          <span className="cap-mock-fnol-label">Loss</span>
          Warehouse water, dock 3
        </p>
        <p className="cap-mock-fnol-line">
          <span className="cap-mock-fnol-label">Claim</span>
          AX-44182
        </p>
        <p className="cap-mock-fnol-line">
          <span className="cap-mock-fnol-label">Status</span>
          Clean file for adjuster
        </p>
      </div>
      <p className="cap-mock-fnol-transcript">
        Auxo: I have the water at dock 3, last night, no injuries. Claim
        AX-44182 is open. The file is ready for the adjuster.
      </p>
    </div>
  );
}

function CoiMiniMock() {
  return (
    <div className="cap-mock-coi">
      <div className="cap-mock-coi-header">
        <strong>Apex Logistics</strong>
        <span className="cap-mock-coi-badge">COI</span>
      </div>
      <div className="cap-mock-coi-body">
        <p className="cap-mock-coi-line">
          <span className="cap-mock-coi-label">Request</span>
          Additional insured, job site 14
        </p>
        <p className="cap-mock-coi-line">
          <span className="cap-mock-coi-label">Form</span>
          Certificate of liability
        </p>
        <p className="cap-mock-coi-line">
          <span className="cap-mock-coi-label">Policy</span>
          GL vs binder check
        </p>
        <p className="cap-mock-coi-line">
          <span className="cap-mock-coi-label">Status</span>
          <span className="cap-mock-coi-status">COI issued, emailed to GC</span>
        </p>
      </div>
      <div className="cap-mock-coi-hold">
        <span className="cap-mock-coi-hold-label">Hold</span>
        Endorsement wording, ask producer
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: 'integrations',
    title: 'Systems you already run',
    description:
      'Auxo reads and writes in the AMS, PAS, CRM, and telephony you already run, so the file does not live in a second database.',
    mock: <IntegrationsMock />,
  },
  {
    id: 'omnichannel',
    title: 'Omni-channel communication',
    description:
      'Inbound and outbound on phone, SMS, and email, in the tone your agency already uses. Every call answered. Exceptions routed to a licensed human.',
    mock: <VoiceMock />,
  },
  {
    id: 'intake',
    title: 'Submission intake and quote turnaround',
    description:
      'ACORDs, loss runs, and dec pages read into structured fields. Gaps flagged. Carrier quotes to client proposal without the manual rebuild.',
    mock: <IntakeMock />,
  },
  {
    id: 'fnol',
    title: 'First notice, clean file',
    description:
      'Intake on the call. Structured file for the desk. Claim opened, documents attached, and adjuster notified while the caller is still on the line.',
    mock: <FnolMiniMock />,
  },
  {
    id: 'coi',
    title: 'Certificates and endorsements',
    description:
      'COIs and midterm changes without a scavenger hunt. Read the endorsement, check the book SOP, issue the certificate, file to the AMS.',
    mock: <CoiMiniMock />,
  },
];

const CapabilitiesSection = ({ onRequestDemo }) => {
  const { overline, headline, lede, cta } = copy.capabilities;

  return (
    <section className="section cap-section" id="capabilities">
      <div className="container">
        {/* Header row */}
        <div className="cap-header-row">
          <div className="cap-header-copy">
            <p className="cap-kicker">{overline}</p>
            <h2 className="cap-title">{headline}</h2>
            <p className="cap-lede">{lede}</p>
          </div>
          <button
            type="button"
            className="btn btn-primary cap-header-cta"
            onClick={onRequestDemo}
          >
            {cta}
          </button>
        </div>

        {/* Horizontal card grid */}
        <div className="cap-scroll">
          <div className="cap-cards">
            {CARDS.map((card) => (
              <article key={card.id} className="cap-card">
                <h3 className="cap-card-title">{card.title}</h3>
                <div className="cap-card-mock">{card.mock}</div>
                <p className="cap-card-desc">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
