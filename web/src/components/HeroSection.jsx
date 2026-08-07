import React, { useEffect, useRef, useState } from 'react';
import { assetUrl } from '../lib/assetUrl';

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

const TASK_INTERVAL_MS = 1000;
const NIGHT_TASK_INTERVAL_MS = 1000;

function useTaskCycle(taskCount, intervalMs, enabled) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || taskCount <= 1) {
      setIndex(0);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? intervalMs * 2.5 : intervalMs;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % taskCount);
    }, delay);

    return () => clearInterval(id);
  }, [taskCount, intervalMs, enabled]);

  // Reset to first task when re-enabled
  useEffect(() => {
    if (enabled) setIndex(0);
  }, [enabled]);

  return index;
}

function WorkflowStack({ person, accent, activeIndex, variant = 'human' }) {
  return (
    <div className={`workflow-stack workflow-stack--${variant}`} style={{ '--wf-accent': accent }}>
      <div className="workflow-stack-label">
        <span className="workflow-stack-avatar" aria-hidden="true">
          {person.name === 'Auxo' ? '✦' : person.name.charAt(0)}
        </span>
        <span className="workflow-stack-title">
          {person.name}, {person.role}
        </span>
      </div>
      <ul className="workflow-stack-list">
        {person.tasks.map((task, i) => {
          const isActive = i === activeIndex;
          const depth = Math.abs(i - activeIndex);
          return (
            <li
              key={task}
              className={`workflow-card ${isActive ? 'workflow-card--active' : ''}`}
              style={{
                opacity: isActive ? 1 : Math.max(0.35, 0.72 - depth * 0.18),
                transform: `scale(${isActive ? 1 : 0.98 - depth * 0.01})`,
              }}
            >
              <span className="workflow-card-text">{task}</span>
              <span className="workflow-card-icon" aria-hidden="true" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const HeroSection = ({ onRequestDemo }) => {
  const pinRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = pinRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const night = Math.min(1, Math.max(0, (progress - 0.32) / 0.36));
  const isNight = night > 0.55;

  const dayActiveBrianna = useTaskCycle(
    DAY.brianna.tasks.length,
    TASK_INTERVAL_MS,
    !isNight
  );
  const dayActiveAuxo = useTaskCycle(
    DAY.auxo.tasks.length,
    TASK_INTERVAL_MS,
    !isNight
  );
  const nightActiveAuxo = useTaskCycle(
    NIGHT.auxo.tasks.length,
    NIGHT_TASK_INTERVAL_MS,
    isNight
  );

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
          style={{ backgroundImage: `url(${assetUrl('hero/day.jpeg')})` }}
          aria-hidden="true"
        />
        <div
          className="hero-photo hero-photo--night"
          style={{ backgroundImage: `url(${assetUrl('hero/night.jpeg')})` }}
          aria-hidden="true"
        />
        <div className="hero-photo-scrim" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-copy">
            <div className="pill-tag hero-pill">
              <span className="pill-dot" />
              Meet Auxo
            </div>
            <h1>Meet Auxo: Your confident voice for agency growth and operations.</h1>
            <p className="hero-sub">
              Empowering insurance teams with voice solutions and operational automation that
              scale with your business.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onRequestDemo}>
                Book a call
              </button>
              <a className="btn btn-hero-ghost" href="#services">
                See the service portfolio
              </a>
            </div>
            <div className="hero-scroll-hint" aria-hidden="true">
              <span className={`hint-chip ${!isNight ? 'hint-chip--on' : ''}`}>Day</span>
              <span className="hint-track">
                <span className="hint-thumb" style={{ left: `${night * 100}%` }} />
              </span>
              <span className={`hint-chip ${isNight ? 'hint-chip--on' : ''}`}>Night</span>
            </div>
          </div>

          <div className="hero-overlays" aria-live="polite">
            {/* Day: Brianna (center-right, like Sofia) */}
            <div
              className="hero-overlay hero-overlay--brianna"
              style={{
                opacity: Math.max(0, 1 - night * 1.35),
                transform: `translateY(${night * 20}px)`,
                pointerEvents: night > 0.75 ? 'none' : 'auto',
              }}
            >
              <WorkflowStack
                person={DAY.brianna}
                accent="#E8C36A"
                activeIndex={dayActiveBrianna}
                variant="human"
              />
            </div>

            {/* Day: Auxo (upper-right) */}
            <div
              className="hero-overlay hero-overlay--auxo-day"
              style={{
                opacity: Math.max(0, 1 - night * 1.4),
                transform: `translateY(${night * -10}px)`,
                pointerEvents: night > 0.7 ? 'none' : 'auto',
              }}
            >
              <WorkflowStack
                person={DAY.auxo}
                accent="#FF6B57"
                activeIndex={dayActiveAuxo}
                variant="auxo"
              />
            </div>

            {/* Night: Auxo only */}
            <div
              className="hero-overlay hero-overlay--auxo-night"
              style={{
                opacity: Math.min(1, Math.max(0, (night - 0.3) / 0.45)),
                transform: `translateY(${(1 - night) * 24}px)`,
                pointerEvents: night < 0.45 ? 'none' : 'auto',
              }}
            >
              <WorkflowStack
                person={NIGHT.auxo}
                accent="#FF6B57"
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
