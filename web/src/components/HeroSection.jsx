import React, { useEffect, useRef, useState } from 'react';
import dayHero from '../assets/hero/day.jpeg';
import nightHero from '../assets/hero/night.jpeg';
import copy from '../copy.json';
import AnimatedLogo from './AnimatedLogo';

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
            <div className="hero-wordmark">
              <AnimatedLogo size="hero" darkTheme />
            </div>
            <h1 className="hero-tagline">{copy.hero.tagline}</h1>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
