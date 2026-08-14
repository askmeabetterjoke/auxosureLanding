import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import copy from '../copy.json';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <AnimatedLogo size="small" darkTheme />
          <p className="footer-copy">
            © {new Date().getFullYear()} {copy.brand.company}. {copy.footer.copyright}
          </p>
          <a className="footer-email" href={`mailto:${copy.footer.email}`}>
            {copy.footer.email}
          </a>
        </div>
        <div className="footer-links">
          {copy.header.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="footer-cta"
            href={copy.header.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.header.ctaText}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
