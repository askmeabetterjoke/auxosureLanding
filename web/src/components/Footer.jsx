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
        </div>
        <div className="footer-actions">
          <a
            className="btn btn-primary"
            href={copy.header.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.header.ctaText}
          </a>
          <p className="footer-contact">
            You can reach out to us directly at{' '}
            <a href={`mailto:${copy.footer.email}`}>{copy.footer.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
