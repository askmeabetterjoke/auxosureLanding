import React, { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const NAV_LINKS = [
  { href: '#capabilities', label: 'Capabilities', id: 'capabilities' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#delivery', label: 'Delivery', id: 'delivery' },
  { href: '#integrations', label: 'Integrations', id: 'integrations' },
];

const OvalHeaderNav = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offset = 120;
      let current = '';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = link.href;
        }
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

        <button className="btn btn-primary btn-sm oval-nav-cta" onClick={onRequestDemo}>
          Book a call
        </button>

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
          <button
            className="btn btn-primary"
            style={{ marginTop: 8 }}
            onClick={() => {
              setMobileOpen(false);
              onRequestDemo();
            }}
          >
            Book a call
          </button>
        </div>
      )}
    </div>
  );
};

export default OvalHeaderNav;
