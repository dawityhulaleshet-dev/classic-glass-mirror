import React from 'react';
import { DETAILED_FAQS } from '../data/technicalGuides.ts';

export const FAQSection: React.FC = () => {
  return (
    <section className="section faq" id="faqs" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">HELPFUL ANSWERS</span>
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <p>
            Here are practical answers to common questions about commercial storefront door, closer, and lock repairs in Dallas–Fort Worth.
          </p>
        </div>

        <div className="faq-items">
          {DETAILED_FAQS.map((faq, idx) => (
            <details key={idx} open={idx === 0}>
              <summary>
                <span>{faq.q}</span>
                <svg viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
