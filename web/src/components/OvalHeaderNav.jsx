import React, { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';
import copy from '../copy.json';

const NAV_LINKS = copy.header.nav;

const OvalHeaderNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const probe = Math.round(window.innerHeight * 0.38);
      let current = '';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - probe <= 0) {
          current = link.href;
        }
      }

      const doc = document.documentElement;
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 48;
      if (atBottom && NAV_LINKS.length) {
        current = NAV_LINKS[NAV_LINKS.length - 1].href;
      }

      setActiveHref(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <div className="oval-nav-wrapper">
      <nav className={`oval-nav ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveHref('');
          }}
        >
          <AnimatedLogo size="small" darkTheme />
        </a>

        <ul className="oval-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeHref === link.href ? 'is-active' : undefined}
                aria-current={activeHref === link.href ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-primary btn-sm oval-nav-cta"
          href={copy.header.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.header.ctaText}
        </a>

        <button
          className="oval-nav-burger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {mobileOpen && (
        <div className="oval-nav-mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? 'is-active' : undefined}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            style={{ marginTop: 8 }}
            href={copy.header.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            {copy.header.ctaText}
          </a>
        </div>
      )}
    </div>
  );
};

export default OvalHeaderNav;
