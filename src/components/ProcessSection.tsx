import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="process" aria-labelledby="process-title">
      <div className="container">
        <div className="process-head">
          <div>
            <span className="eyebrow">HOW IT WORKS</span>
            <h2 id="process-title">Let's get your entrance working again.</h2>
          </div>
          <p>
            Not sure what part is failing? Start with the symptoms. An on-site assessment can determine what repair is appropriate.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Describe the issue</h3>
            <p>
              Explain the problem with your storefront door, lock, closer, or frame—whether it is sticking, dragging, slamming, or won't lock.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Get it assessed</h3>
            <p>
              A technician evaluates the door and hardware condition on-site to identify the underlying mechanical cause.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Plan the repair</h3>
            <p>
              Discuss the recommended repair, replacement, or service to restore safe, reliable entrance operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
