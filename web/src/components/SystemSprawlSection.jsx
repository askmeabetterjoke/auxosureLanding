import React, { useEffect, useRef, useState } from 'react';
import copy from '../copy.json';
import { assetUrl } from '../lib/assetUrl';

const CANVAS_W = 1600;
const CANVAS_H = 920;

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

const FLOAT_CARDS = [
  { left: 648, top: 306, width: 228, delay: '0s' },
  { left: 940, top: 232, width: 236, delay: '0.8s' },
  { left: 1200, top: 322, width: 220, delay: '1.6s' },
  { left: 648, top: 446, width: 228, delay: '2.4s' },
  { left: 1200, top: 452, width: 220, delay: '3.2s' },
  { left: 1200, top: 582, width: 220, delay: '4s' },
];

const ANNOTATIONS = [
  { left: 648, top: 268, label: copy.sprawl.annotations[0] },
  { left: 1200, top: 284, label: copy.sprawl.annotations[1] },
  { left: 648, top: 566, label: copy.sprawl.annotations[2] },
  { left: 1200, top: 702, label: copy.sprawl.annotations[3] },
];

const NOTES = [
  { left: 1136, top: 398, rotate: -2, text: copy.sprawl.notes[0] },
  { left: 1136, top: 502, rotate: 1.5, text: copy.sprawl.notes[1] },
];

function pct(value, base) {
  return `${(value / base) * 100}%`;
}

function PainIcon({ children }) {
  return (
    <span className="sprawl-pain-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

function FloatCard({ label, icon, left, top, width, delay }) {
  return (
    <div
      className="sprawl-float-card"
      style={{
        left: pct(left, CANVAS_W),
        top: pct(top, CANVAS_H),
        width: pct(width, CANVAS_W),
        animationDelay: delay,
      }}
    >
      <div className="sprawl-float-card-head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
        <span>{label}</span>
      </div>
      <div className="sprawl-float-card-bar sprawl-float-card-bar--wide" />
      <div className="sprawl-float-card-bar sprawl-float-card-bar--narrow" />
    </div>
  );
}

function SprawlDiagram() {
  return (
    <div className="sprawl-diagram" aria-hidden="true">
      <img
        className="sprawl-desk-art"
        src={assetUrl('sprawl-desk.png')}
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          left: pct(600, CANVAS_W),
          top: pct(300, CANVAS_H),
          width: pct(940, CANVAS_W),
          height: pct(546, CANVAS_H),
        }}
      />

      <svg className="sprawl-threads" viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} preserveAspectRatio="none">
        <g className="sprawl-threads-group">
          <path d="M880,348 C932,382 964,412 1002,440" />
          <path d="M880,488 C924,500 954,514 994,528" />
          <path d="M1058,316 C1054,344 1052,360 1054,376" />
          <path d="M1280,364 C1238,392 1198,414 1158,436" />
          <path d="M1280,494 C1244,508 1208,522 1174,534" />
          <path d="M1280,624 C1238,618 1200,606 1166,590" />
          <path d="M900,296 C1000,258 1170,262 1278,306" />
          <path d="M896,520 C980,684 1230,700 1288,640" />
        </g>
      </svg>

      {ANNOTATIONS.map(({ left, top, label }) => (
        <span
          key={label}
          className="sprawl-annotation"
          style={{ left: pct(left, CANVAS_W), top: pct(top, CANVAS_H) }}
        >
          {label}
        </span>
      ))}

      {FLOAT_CARDS.map((card, index) => (
        <FloatCard
          key={copy.sprawl.cards[index].label}
          label={copy.sprawl.cards[index].label}
          icon={CARD_ICONS[index]}
          {...card}
        />
      ))}

      {NOTES.map(({ left, top, rotate, text }) => (
        <div
          key={text}
          className="sprawl-note"
          style={{
            left: pct(left, CANVAS_W),
            top: pct(top, CANVAS_H),
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

const SystemSprawlSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { overline, headline, lede, painPoints } = copy.sprawl;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const reveal = () => setVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      reveal();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section sprawl-section${visible ? ' sprawl-section--visible' : ''}`}
      id="problem"
      ref={sectionRef}
      aria-labelledby="sprawl-heading"
    >
      <div className="sprawl-stage">
        <div className="sprawl-copy">
          <p className="sprawl-kicker">{overline}</p>
          <h2 className="sprawl-title" id="sprawl-heading">
            {headline}
          </h2>
          <p className="sprawl-lede">{lede}</p>

          <ul className="sprawl-pains">
            {painPoints.map((point, index) => (
              <li key={point.title} className="sprawl-pain">
                <PainIcon>{PAIN_ICONS[index]}</PainIcon>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <SprawlDiagram />
      </div>
    </section>
  );
};

export default SystemSprawlSection;
