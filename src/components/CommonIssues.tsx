import React from 'react';
import { ArrowRight, AlertTriangle, Phone } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface CommonIssuesProps {
  onNavigateToGuide: (guideId: string) => void;
}

export const CommonIssues: React.FC<CommonIssuesProps> = ({ onNavigateToGuide }) => {
  return (
    <section className="section" id="issues" aria-labelledby="issues-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">COMMON ISSUES</span>
          <h2 id="issues-title">Something wrong with your storefront door?</h2>
          <p>
            Commercial doors experience daily wear, heavy traffic, and exposure to the elements. Recognizing the signs early can help prevent more costly repairs.
          </p>
        </div>

        <div className="problem-grid">
          {/* Card 1 */}
          <article className="problem-card">
            <div className="problem-photo">
              <img
                src="https://glassindfwtx.com/wp-content/uploads/2024/10/img_2852.jpg?w=768"
                alt="Worn commercial door pivot and hinge hardware"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="problem-number">01 / PIVOTS</span>
            </div>
            <div className="problem-body">
              <h3>Door dragging or sagging?</h3>
              <p>
                An uneven gap, scraping at the threshold, or difficulty closing can indicate worn pivots, frame misalignment, or other hardware problems.
              </p>
              <button
                type="button"
                onClick={() => onNavigateToGuide('guide-sagging-gaps')}
                className="link"
              >
                <span>Explore Door Alignment</span>
                <ArrowRight />
              </button>
            </div>
          </article>

          {/* Card 2 */}
          <article className="problem-card">
            <div className="problem-photo">
              <img
                src="https://glassindfwtx.com/wp-content/uploads/2024/10/img_2378.jpg?w=768"
                alt="Commercial storefront mortise cylinder lock"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="problem-number">02 / LOCKS</span>
            </div>
            <div className="problem-body">
              <h3>Lock sticking or spinning?</h3>
              <p>
                Worn cylinders, damaged internal components, and misaligned hardware can prevent commercial mortise locks from operating properly.
              </p>
              <button
                type="button"
                onClick={() => onNavigateToGuide('guide-mortise-locks')}
                className="link"
              >
                <span>Explore Lock Problems</span>
                <ArrowRight />
              </button>
            </div>
          </article>

          {/* Card 3 */}
          <article className="problem-card">
            <div className="problem-photo">
              <img
                src="https://glassindfwtx.com/wp-content/uploads/2024/10/img_3746.jpg?w=768"
                alt="Damaged commercial door closer hardware"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="problem-number">03 / CLOSERS</span>
            </div>
            <div className="problem-body">
              <h3>Door slamming or not closing?</h3>
              <p>
                Faulty door closers, incorrect adjustments, worn pivots, or wind-related damage can affect safe, controlled door operation.
              </p>
              <button
                type="button"
                onClick={() => onNavigateToGuide('guide-wind-damage')}
                className="link"
              >
                <span>Explore Door Closers</span>
                <ArrowRight />
              </button>
            </div>
          </article>
        </div>

        {/* Subtle Blue Emergency Assistance Banner */}
        <aside className="quickhelp">
          <div className="quickhelp-text">
            <span className="symbol">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <span>
              <strong>Is your entrance unsafe or unable to lock?</strong>
              <small>For urgent commercial door or lock problems, call our 24-hour service number.</small>
            </span>
          </div>
          <a className="btn btn-navy" href={PHONE_HREF}>
            <Phone className="w-4 h-4" />
            <span>Call Emergency Service</span>
          </a>
        </aside>
      </div>
    </section>
  );
};
