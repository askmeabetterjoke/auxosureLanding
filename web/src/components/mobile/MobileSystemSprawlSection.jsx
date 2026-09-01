import React from 'react';
import copy from '../../copy.json';
import { assetUrl } from '../../lib/assetUrl';

const PAIN_ICONS = [
  <path key="doc" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />,
  <g key="rekey">
    <path d="M20 11a8 8 0 0 0-13.6-4.6" />
    <path d="M4 13a8 8 0 0 0 13.6 4.6" />
    <path d="M6.2 3.2v3.4h3.4M17.8 20.8v-3.4h-3.4" />
  </g>,
  <g key="cal">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
    <path d="M12 13v3.4l2.4 1.2" />
  </g>,
  <g key="desk">
    <path d="M7 3.5h10M7 20.5h10" />
    <path d="M8 3.5v3.1c0 2.3 4 3.4 4 5.4s-4 3.1-4 5.4v3.1M16 3.5v3.1c0 2.3-4 3.4-4 5.4s4 3.1 4 5.4v3.1" />
  </g>,
];

const CARD_ICONS = [
  <g key="email">
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3.8 7l8.2 6 8.2-6" />
  </g>,
  <g key="sub">
    <rect x="4" y="4" width="16" height="16" rx="3.5" />
    <path d="M12 8v6M9.2 11.4l2.8 2.8 2.8-2.8" />
  </g>,
  <g key="acord">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M9 13h6M9 16.5h4" />
  </g>,
  <g key="follow">
    <rect x="4" y="4" width="16" height="16" rx="3.5" />
    <path d="M8.5 12.3l2.5 2.5 4.5-5" />
  </g>,
  <g key="coi">
    <path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5V6l7-3z" />
    <path d="M9.3 12l2 2 3.6-3.8" />
  </g>,
  <g key="renew">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </g>,
];

function PainIcon({ children }) {
  return (
    <span className="m-sprawl-pain-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

const MobileSystemSprawlSection = () => {
  const { overline, headline, lede, painPoints, cards, notes, annotations } = copy.sprawl;

  return (
    <section className="m-sprawl-section" id="problem" aria-labelledby="m-sprawl-heading">
      <div className="m-sprawl-inner">
        <p className="m-sprawl-kicker">{overline}</p>
        <h2 className="m-sprawl-title" id="m-sprawl-heading">
          {headline}
        </h2>
        <p className="m-sprawl-lede">{lede}</p>

        <div className="m-sprawl-scene">
          <img
            className="m-sprawl-desk"
            src={assetUrl('sprawl-desk.jpg')}
            alt=""
            loading="lazy"
            decoding="async"
          />
          {notes.map((text, index) => (
            <div
              key={text}
              className={`m-sprawl-note m-sprawl-note--${index + 1}`}
            >
              {text}
            </div>
          ))}
        </div>

        <div className="m-sprawl-annotations">
          {annotations.map((label) => (
            <span key={label} className="m-sprawl-annotation">
              {label}
            </span>
          ))}
        </div>

        <div className="m-sprawl-cards">
          {cards.map((card, index) => (
            <div key={card.label} className="m-sprawl-card">
              <div className="m-sprawl-card-head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {CARD_ICONS[index]}
                </svg>
                <span>{card.label}</span>
              </div>
              <div className="m-sprawl-card-bar m-sprawl-card-bar--wide" />
              <div className="m-sprawl-card-bar m-sprawl-card-bar--narrow" />
            </div>
          ))}
        </div>

        <ul className="m-sprawl-pains">
          {painPoints.map((point, index) => (
            <li key={point.title} className="m-sprawl-pain">
              <PainIcon>{PAIN_ICONS[index]}</PainIcon>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MobileSystemSprawlSection;
