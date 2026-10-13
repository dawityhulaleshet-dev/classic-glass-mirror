import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Phone, Wrench } from 'lucide-react';
import { TECHNICAL_GUIDES, TechnicalGuide } from '../data/technicalGuides.ts';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface KnowledgeCenterProps {
  onOpenDispatch: () => void;
  onSelectGuideAction: (guide: TechnicalGuide) => void;
}

export const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({
  onOpenDispatch,
  onSelectGuideAction,
}) => {
  // Store set of open guide IDs so users can expand multiple or collapse
  const [openGuides, setOpenGuides] = useState<Record<string, boolean>>({
    'guide-mortise-locks': true, // First one open by default for immediate preview
  });

  const toggleGuide = (id: string) => {
    setOpenGuides((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="guide" className="section knowledge-section" aria-labelledby="knowledge-title">
      <div className="container">
        {/* Section Head */}
        <div className="section-head">
          <span className="eyebrow">COMMERCIAL DOOR KNOWLEDGE CENTER</span>
          <h2 id="knowledge-title">Understanding Commercial Door Problems</h2>
          <p>
            Learn what causes common commercial storefront door problems, how different hardware components work, and when professional repair may be necessary.
          </p>
        </div>

        {/* 6 Expandable Technical Guide Cards Grid */}
        <div className="knowledge-grid">
          {TECHNICAL_GUIDES.map((guide) => {
            const isOpen = !!openGuides[guide.id];
            return (
              <article key={guide.id} id={guide.id} className="guide-card">
                {/* Header (Always Visible & Accessible) */}
                <div
                  className="guide-header"
                  onClick={() => toggleGuide(guide.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleGuide(guide.id);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`content-${guide.id}`}
                >
                  <div>
                    <span className="guide-tag">{guide.tag}</span>
                    <h3>{guide.title}</h3>
                  </div>
                  <div
                    className={`guide-toggle-icon ${isOpen ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* Collapsible Content */}
                {isOpen && (
                  <div id={`content-${guide.id}`} className="guide-content">
                    {guide.h3Title && <h4>{guide.h3Title}</h4>}
                    <p>{guide.content.overview}</p>

                    {/* Original Repair Photograph */}
                    <div className="guide-photo-box">
                      <img
                        src={guide.image}
                        alt={guide.alt}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Technical Sections */}
                    {guide.content.sections.map((sec, idx) => (
                      <div key={idx}>
                        <h4>{sec.heading}</h4>
                        {sec.text && <p>{sec.text}</p>}
                        {sec.bullets && (
                          <ul>
                            {sec.bullets.map((b, bIdx) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Action Bar */}
                    <div className="guide-action-bar">
                      <span className="text-xs text-slate-500 font-medium">
                        Need an assessment for this issue?
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectGuideAction(guide)}
                        className="btn btn-primary"
                        style={{ minHeight: '38px', padding: '8px 16px', fontSize: '12px' }}
                      >
                        <span>{guide.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Prominent Blue Call-to-Action Banner */}
        <div className="guide-cta-banner">
          <div>
            <h3>Not sure what's causing your door problem?</h3>
            <p>
              Our experienced North Texas technicians can evaluate your entrance hardware on-site and identify the appropriate repair.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              type="button"
              onClick={onOpenDispatch}
              className="btn btn-white"
            >
              <span>Talk to a Door Repair Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href={PHONE_HREF} className="btn btn-line" style={{ color: '#fff', borderColor: '#ffffff80' }}>
              <Phone className="w-4 h-4" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
