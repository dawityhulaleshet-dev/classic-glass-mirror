import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="section about-section" id="our-work" aria-labelledby="about-title">
      <div className="container about-grid">
        {/* Visual with overlapping photo */}
        <div className="about-visual">
          <div className="about-photo">
            <img
              src="https://glassindfwtx.com/wp-content/uploads/2024/10/1530d75d-dac6-43ab-b861-72da4cebd3df.jpeg"
              alt="Classic Glass & Mirror technician working on a commercial storefront entrance"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="about-small-photo">
            <img
              src="https://glassindfwtx.com/wp-content/uploads/2024/10/image-1.jpg?w=1024"
              alt="Commercial door pivot hardware and parts"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="about-copy">
          <span className="eyebrow">Experience you can see</span>
          <h2 id="about-title">Real work. Real storefront solutions.</h2>
          <p>
            Classic Glass & Mirror brings over a decade of experience in commercial and residential glazing. From damaged door pivots to complete glass entrances, the work calls for careful assessment and the right hardware.
          </p>

          <ul className="checklist">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Practical knowledge of storefront door systems</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Real repair and installation project examples</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>24-hour emergency service contact</span>
            </li>
          </ul>

          <a
            className="link"
            href="https://glassindfwtx.com/reference-work/"
            target="_blank"
            rel="noreferrer"
          >
            <span>View actual project work</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
