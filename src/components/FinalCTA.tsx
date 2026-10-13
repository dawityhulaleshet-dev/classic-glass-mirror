import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface FinalCTAProps {
  onOpenDispatch: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDispatch }) => {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-copy">
            <h2 id="final-title">Don't let a broken door hold you back.</h2>
            <p>
              Whether your storefront door is dragging, your lock has stopped working, or your door closer is damaged, contact Classic Glass & Mirror to discuss your commercial entrance repair needs.
            </p>
          </div>
          <div className="cta-actions">
            <a href={PHONE_HREF} className="btn btn-white">
              <Phone className="w-4 h-4 text-[#0873b9]" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <button
              type="button"
              onClick={onOpenDispatch}
              className="btn btn-line"
              style={{ color: '#fff', borderColor: '#83b0cb' }}
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
