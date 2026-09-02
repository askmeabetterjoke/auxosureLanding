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
  { left: 1284, top: 322, width: 236, delay: '1.6s' },
  { left: 648, top: 446, width: 228, delay: '2.4s' },
  { left: 1284, top: 452, width: 220, delay: '3.2s' },
  { left: 1284, top: 582, width: 220, delay: '4s' },
];

const ANNOTATIONS = [
  { left: 908, top: 200, label: copy.sprawl.annotations[0], anchor: 'center' },
  { left: 1284, top: 284, label: copy.sprawl.annotations[1], anchor: 'start' },
  { left: 648, top: 566, label: copy.sprawl.annotations[2], anchor: 'start' },
  { left: 1284, top: 702, label: copy.sprawl.annotations[3], anchor: 'start' },
];

const NOTES = [
  { left: 1136, top: 398, rotate: -2, text: copy.sprawl.notes[0] },
  { left: 1136, top: 502, rotate: 1.5, text: copy.sprawl.notes[1] },
];

const THREAD_PATHS = [
  'M908,230 C894,252 884,278 876,306',
  'M1436,296 C1462,300 1476,308 1478,318',
  'M762,578 C790,588 806,600 812,614',
  'M1400,714 C1370,724 1348,734 1336,744',
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

function SprawlScene() {
  return (
    <div className="sprawl-scene" aria-hidden="true">
      <img
        className="sprawl-desk-art"
        src={assetUrl('sprawl-desk.png')}
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          left: pct(620, CANVAS_W),
          top: pct(300, CANVAS_H),
          width: pct(980, CANVAS_W),
          height: pct(546, CANVAS_H),
        }}
      />

      <svg className="sprawl-threads" viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} preserveAspectRatio="none">
        <defs>
          <marker
            id="sprawl-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M0 1 L9 5 L0 9 Z" fill="#E4795B" />
          </marker>
        </defs>
        <g className="sprawl-threads-group" markerEnd="url(#sprawl-arrow)">
          {THREAD_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>

      {ANNOTATIONS.map(({ left, top, label, anchor }) => (
        <span
          key={label}
          className="sprawl-annotation"
          style={{
            left: pct(left, CANVAS_W),
            top: pct(top, CANVAS_H),
            transform: anchor === 'center' ? 'translateX(-50%)' : undefined,
          }}
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
        <div className="sprawl-canvas">
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

          <SprawlScene />
        </div>
      </div>
    </section>
  );
};

export default SystemSprawlSection;
