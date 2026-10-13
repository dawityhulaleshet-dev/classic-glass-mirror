import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface NavbarProps {
  onOpenDispatch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDispatch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Common Issues', href: '#issues' },
    { label: 'Repair Services', href: '#services' },
    { label: 'Door Problems Guide', href: '#guide' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Topline */}
      <div className="topline">
        <div className="container">
          <span className="top-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            <span>24/7 Emergency Door & Glass Service</span>
          </span>
          <a className="top-item" href={PHONE_HREF}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.6-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.6 1.9z" />
            </svg>
            <span>Call {PHONE_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header className="site-header">
        <div className="container nav-inner">
          <a
            className="brand"
            href="https://glassindfwtx.com/"
            aria-label="Classic Glass and Mirror home"
          >
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

          <nav className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} id="mainNav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onOpenDispatch}
            className="btn btn-navy nav-cta"
          >
            <Phone className="w-4 h-4" />
            <span>Get Help Now</span>
          </button>

          <button
            className="mobile-toggle"
            id="mobileToggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mainNav"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>
    </>
  );
};
