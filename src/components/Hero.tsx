import React from 'react';
import { Phone, ArrowRight, Clock, Shield, MapPin, Check } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface HeroProps {
  onExploreIssues: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreIssues }) => {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          {/* Left Content */}
          <div className="hero-copy">
            <span className="eyebrow">Commercial door & lock specialists · DFW</span>
            <h1 id="hero-title">
              Your business depends on a <em>door that works.</em>
            </h1>
            <p>
              Sticking doors, worn pivots, broken closers, and faulty locks can put your entrance out of action. Get dependable commercial door repair help across Dallas–Fort Worth.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={PHONE_HREF}>
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <button
                type="button"
                className="btn btn-line"
                onClick={onExploreIssues}
              >
                <span>Explore Common Issues</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="hero-proofs">
              <span className="hero-proof">
                <span className="proof-icon">
                  <Clock className="w-4 h-4" />
                </span>
                <span>24-hour service</span>
              </span>
              <span className="hero-proof">
                <span className="proof-icon">
                  <Shield className="w-4 h-4" />
                </span>
                <span>10+ years in glazing</span>
              </span>
              <span className="hero-proof">
                <span className="proof-icon">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>DFW service area</span>
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="service-status" aria-label="24 hour service">
              <span className="status-icon">
                <Check className="w-5 h-5" />
              </span>
              <span>
                <span className="status-main">24/7 Service</span>
                <span className="status-sub">When your entrance needs attention</span>
              </span>
            </div>
            <figure className="hero-photo" style={{ margin: 0 }}>
              <img
                src="https://glassindfwtx.com/wp-content/uploads/2024/10/0135e0d4-d475-4e40-b2ba-1674fab4211e.jpeg"
                alt="Commercial glass storefront entrance completed by Classic Glass & Mirror"
                fetchPriority="high"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <figcaption>
                <small>Storefront entrance services</small>
                Commercial glass doors, hardware & entrances
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Dark Navy Service Strip (Section 4) */}
      <div className="hero-bottom" aria-label="Repair specialties">
        <div className="container">
          <strong>What we work on</strong>
          <span>Storefront doors</span>
          <span className="divider" />
          <span>Mortise locks</span>
          <span className="divider" />
          <span>Door pivots</span>
          <span className="divider" />
          <span>Closers & alignment</span>
        </div>
      </div>
    </>
  );
};
