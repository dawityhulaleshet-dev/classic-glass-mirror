import React from 'react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="brand" href="https://glassindfwtx.com/">
              <span className="brand-symbol">
                <svg viewBox="0 0 24 24">
                  <path d="M4 3h16v18H4zM12 3v18M4 13h16" />
                </svg>
              </span>
              <span>
                <span className="brand-name">classic <span>glass</span></span>
                <span className="brand-sub">& mirror</span>
              </span>
            </a>
            <p className="footer-description">
              Commercial glass, door, and lock service for businesses in the Dallas–Fort Worth area.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#issues">Common door issues</a>
            <a href="https://glassindfwtx.com/commercial-services/" target="_blank" rel="noreferrer">
              All commercial services
            </a>
            <a href="#services">Door repair services</a>
            <a href="#guide">Door Problems Guide</a>
            <a href="https://glassindfwtx.com/reference-work/" target="_blank" rel="noreferrer">
              Reference work
            </a>
            <a href="#faqs">Frequently asked questions</a>
            <a href={PHONE_HREF}>Call {PHONE_NUMBER}</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Classic Glass & Mirror. Dallas–Fort Worth Commercial Door Repair.
          </span>
          <span>
            Original website:{' '}
            <a href="https://glassindfwtx.com/" target="_blank" rel="noreferrer">
              glassindfwtx.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
