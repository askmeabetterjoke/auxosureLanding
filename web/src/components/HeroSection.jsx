import React, { useEffect, useRef, useState } from 'react';
import dayHero from '../assets/hero/day.jpeg';
import nightHero from '../assets/hero/night.jpeg';

const DAY = {
  brianna: {
    name: 'Brianna',
    role: 'Producer',
    tasks: [
      'Negotiate $2M cyber limits with Underwriter',
      'Present 2026 Renewal Strategy to Apex Logistics CFO',
      'Close $80k General Liability policy for Vertex Mfg',
    ],
  },
  auxo: {
    name: 'Auxo',
    role: 'AI COWorker',
    tasks: [
      'Call Sarah Jenkins for missing ACORD 125 schedule',
      'Compile 3-year Loss Ratio Report for Travelers renewal',
      'Issue COI to additional insured for Apex Logistics',
      'Prepare proposal and quote for Henry Corp',
    ],
  },
};

const NIGHT = {
  auxo: {
    name: 'Auxo',
    role: 'AI COWorker',
    tasks: [
      'Prepare marketing campaign for new policy product',
      'Generate bordereau Report',
      'Call Elena Rostova for updated jewelry appraisal schedule',
    ],
  },
};

const PRODUCER_TASK_MS = 2000;
const AI_TASK_MS = 1000;

function useTaskCycle(taskCount, intervalMs, enabled) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setIndex(0);
      return undefined;
    }

    setIndex(0);
    if (taskCount <= 1) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? intervalMs * 2.5 : intervalMs;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taskCount);
    }, delay);

    return () => clearInterval(id);
  }, [taskCount, intervalMs, enabled]);

  return index;
}

function AuxoMark() {
  return (
    <svg
      className="workflow-stack-mark"
      viewBox="0 0 52 40"
      width="16"
      height="12"
      aria-hidden="true"
    >
      <line x1="4" y1="32" x2="13" y2="16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="17" y1="34" x2="29" y2="10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="33" y1="36" x2="48" y2="4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function WorkflowStack({ person, accent, activeIndex, variant = 'human' }) {
  const isAuxo = person.name === 'Auxo';

  return (
    <div className={`workflow-stack workflow-stack--${variant}`} style={{ '--wf-accent': accent }}>
      <div className="workflow-stack-label">
        <span className="workflow-stack-avatar" aria-hidden="true">
          {isAuxo ? <AuxoMark /> : person.name.charAt(0)}
        </span>
        <span className="workflow-stack-title">
          {person.name}, {person.role}
        </span>
      </div>
      <ul className="workflow-stack-list">
        {person.tasks.map((task, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          return (
            <li
              key={task}
              className={`workflow-card ${isActive ? 'workflow-card--active' : ''} ${isDone ? 'workflow-card--done' : ''}`}
            >
              <span className="workflow-card-text">{task}</span>
              <span
                className={`workflow-card-status ${isDone ? 'workflow-card-status--done' : ''} ${isActive ? 'workflow-card-status--active' : ''}`}
                aria-hidden="true"
              >
                {isDone ? '✓' : ''}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const HeroSection = ({ onRequestDemo }) => {
  const [phase, setPhase] = useState('day');
  const pinRef = useRef(null);

  const isNight = phase === 'night';
  const night = isNight ? 1 : 0;

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return undefined;

    const update = () => {
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setPhase('day');
        return;
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      setPhase(progress < 0.5 ? 'day' : 'night');
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const dayActiveBrianna = useTaskCycle(
    DAY.brianna.tasks.length,
    PRODUCER_TASK_MS,
    !isNight
  );
  const dayActiveAuxo = useTaskCycle(DAY.auxo.tasks.length, AI_TASK_MS, !isNight);
  const nightActiveAuxo = useTaskCycle(NIGHT.auxo.tasks.length, AI_TASK_MS, isNight);

  return (
    <section className="hero-pin" ref={pinRef} aria-label="Meet Auxo day and night">
      <div
        className={`hero-sticky ${isNight ? 'hero-sticky--night' : 'hero-sticky--day'}`}
        style={{
          '--night': night,
          '--day': 1 - night,
        }}
      >
        <div
          className="hero-photo hero-photo--day"
          style={{ backgroundImage: `url("${dayHero}")` }}
          aria-hidden="true"
        />
        <div
          className="hero-photo hero-photo--night"
          style={{ backgroundImage: `url("${nightHero}")` }}
          aria-hidden="true"
        />
        <div className="hero-photo-scrim" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-copy">
            <div className="pill-tag hero-pill">
              <span className="pill-dot" />
              Meet Auxo
            </div>
            <h1>Meet Auxo, your confident voice in insurance operations.</h1>
            <p className="hero-sub">
              Our AI-powered voice automation and work orchestration platform automates document
              submissions, customer communications, portal filings, and analytics to compress
              turnaround times from days to minutes.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onRequestDemo}>
                Book a call
              </button>
              <a className="btn btn-hero-ghost" href="#services">
                See the service portfolio
              </a>
            </div>
          </div>

          <div className="hero-overlays" aria-live="polite">
            <div
              className={`hero-overlay hero-overlay--brianna ${isNight ? 'hero-overlay--hidden' : ''}`}
            >
              <WorkflowStack
                person={DAY.brianna}
                accent="#E8C36A"
                activeIndex={dayActiveBrianna}
                variant="human"
              />
            </div>
            <div
              className={`hero-overlay hero-overlay--auxo-day ${isNight ? 'hero-overlay--hidden' : ''}`}
            >
              <WorkflowStack
                person={DAY.auxo}
                accent="#E4795B"
                activeIndex={dayActiveAuxo}
                variant="auxo"
              />
            </div>
            <div
              className={`hero-overlay hero-overlay--auxo-night ${!isNight ? 'hero-overlay--hidden' : ''}`}
            >
              <WorkflowStack
                person={NIGHT.auxo}
                accent="#E4795B"
                activeIndex={nightActiveAuxo}
                variant="auxo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
