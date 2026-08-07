import React, { useEffect, useRef, useState } from 'react';
import ConfettiBurst from './ConfettiBurst';

const STAGES = [
  {
    id: 'week1',
    label: 'WEEK 1',
    title: 'Pick the workflow',
    body: 'We sit with your team, map the real handoffs, lock the first service.',
  },
  {
    id: 'week2',
    label: 'WEEK 2',
    title: 'Build against your rules',
    body: 'Auxo ingests your playbooks and forms; tone, escalation, and channel rules wired to your brand.',
  },
  {
    id: 'week3',
    label: 'WEEK 3',
    title: 'Go live',
    body: 'First service ships into a controlled lane; your people keep the exceptions.',
  },
];

function MilestoneFlag({ active, done }) {
  return (
    <span
      className={`delivery-flag ${active ? 'delivery-flag--active' : ''} ${done ? 'delivery-flag--done' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 28" width="18" height="22">
        <line x1="4" y1="2" x2="4" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 3 H20 L16 9 L20 15 H5 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

const DeliverySection = ({ onBookCall }) => {
  const [stage, setStage] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const pinRef = useRef(null);
  const prevStageRef = useRef(0);
  const progress = (stage / (STAGES.length - 1)) * 100;

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setStage(0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const t = scrolled / total;
      const next = prefersReduced
        ? Math.min(STAGES.length - 1, Math.floor(t * STAGES.length))
        : Math.min(STAGES.length - 1, Math.round(t * (STAGES.length - 1)));
      setStage(next);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (stage === STAGES.length - 1 && prevStageRef.current !== STAGES.length - 1) {
      setConfettiKey((key) => key + 1);
    }
    prevStageRef.current = stage;
  }, [stage]);

  return (
    <section className="section delivery-section" id="delivery">
      <div className="delivery-pin" ref={pinRef}>
        <div className="delivery-sticky">
          <div className="container delivery-container">
            <div className="pill-tag">
              <span className="pill-dot" />
              How it works
            </div>
            <h2 className="delivery-headline">What happens after you book.</h2>
            <p className="delivery-sub">
              Scroll to move through the weeks. One workflow chosen up front · three weeks to the
              first live service.
            </p>

            <div className="delivery-progress-meta" aria-live="polite">
              <span className="delivery-progress-label">{STAGES[stage].label}</span>
              <div
                className="delivery-progress-bar"
                style={{ '--delivery-progress': `${progress}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-label="Delivery journey progress"
              />
            </div>

            <div className="delivery-timeline">
              <ConfettiBurst trigger={confettiKey} />
              <div className="delivery-line">
                <div className="delivery-line-fill" style={{ width: `${progress}%` }} />
              </div>
              {STAGES.map((item, index) => (
                <div
                  key={item.id}
                  className={`delivery-node ${index === stage ? 'delivery-node--active' : ''} ${index < stage ? 'delivery-node--done' : ''} ${index === STAGES.length - 1 && stage === index ? 'delivery-node--live' : ''}`}
                >
                  <div className="delivery-node-head">
                    {index === STAGES.length - 1 ? (
                      <MilestoneFlag active={index === stage} done={index < stage} />
                    ) : (
                      <div className="delivery-dot" />
                    )}
                  </div>
                  <div className="delivery-node-label">{item.label}</div>
                  <h3 className="delivery-node-title">{item.title}</h3>
                  <p className="delivery-node-body">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="delivery-cta">
              <p>
                Let&apos;s ship with high velocity and remove one pain at a time, delivered in 3
                weeks.
              </p>
              <button type="button" className="btn btn-primary" onClick={() => onBookCall?.()}>
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
