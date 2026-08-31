import React, { useEffect, useRef, useState } from 'react';
import dayHero from '../assets/hero/day.jpeg';
import nightHero from '../assets/hero/night.jpeg';
import copy from '../copy.json';
import { SkidMarks } from './logoMarks';

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
      'Connecting with Brian on FNOL',
      'Prepare marketing campaign for new policy product',
      'Generate bordereau Report',
    ],
  },
};

const PRODUCER_TASK_MS = 2000;
const AI_TASK_MS = 1500;

function useTaskCycle(taskCount, intervalMs, enabled) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setIndex(0);
      return undefined;
    }

    setIndex(0);
    if (taskCount <= 0) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReduced ? intervalMs * 2.5 : intervalMs;

    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        return next > taskCount ? 0 : next;
      });
    }, delay);

    return () => clearInterval(id);
  }, [taskCount, intervalMs, enabled]);

  return index;
}

function AuxoMark() {
  return <SkidMarks width={18} height={14} className="workflow-stack-mark" />;
}

function WorkflowStack({ person, accent, activeIndex, variant = 'human' }) {
  const isAuxo = person.name === 'Auxo';
  const taskCount = person.tasks.length;
  const allDone = activeIndex >= taskCount;

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
          const isActive = !allDone && i === activeIndex;
          const isDone = i < activeIndex || allDone;
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

function HeroUnlockWord() {
  return (
    <span className="hero-unlock-word" tabIndex={0}>
      <span className="hero-unlock-word-text">Unlock</span>
      <svg
        className="hero-unlock-word-lock"
        viewBox="0 0 56 64"
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          className="hero-unlock-body"
          x="14"
          y="28"
          width="28"
          height="22"
          rx="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="hero-unlock-shackle"
          d="M20 28 V18 C20 12.5 24.5 8 28 8 C31.5 8 36 12.5 36 18 V28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="hero-unlock-keyhole" cx="28" cy="37" r="2.5" fill="currentColor" />
        <g className="hero-unlock-key">
          <circle cx="41" cy="22" r="5" stroke="currentColor" strokeWidth="2.5" />
          <path
            d="M36 22 H28 V37"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
}

const HeroSection = () => {
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
    <section className="hero-pin" ref={pinRef} aria-label="Auxosure hero">
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
            <h1 className="hero-tagline">
              <HeroUnlockWord /> {copy.hero.taglineRest}
            </h1>
            <p className="hero-subline">{copy.hero.subline}</p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={copy.header.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.hero.primaryCta}
              </a>
              <a className="btn btn-hero-ghost" href={copy.hero.secondaryHref}>
                {copy.hero.secondaryCta}
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
