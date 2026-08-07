import React, { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const NAV_LINKS = [
  { href: '#build', label: 'Build' },
  { href: '#services', label: 'Services' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#integrations', label: 'Integrations' },
];

const OvalHeaderNav = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
          }}
        >
          <AnimatedLogo size="small" darkTheme />
        </a>

        <ul className="oval-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
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
            <a key={link.href} href={link.href} onClick={handleNavClick}>
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
