import React from 'react';
import copy from '../copy.json';

const HowItWorksSection = () => {
  const { eyebrow, headline, description, phases, cta } = copy.delivery;

  return (
    <section className="section model-section" id="delivery">
      <div className="container">
        <div className="model-intro">
          <div className="model-intro-copy">
            <p className="model-eyebrow">{eyebrow}</p>
            <h2 className="model-title">{headline}</h2>
            <p className="model-lede">{description}</p>
          </div>
          <a className="btn btn-primary model-intro-cta" href={`mailto:${copy.footer.email}`}>
            {cta}
          </a>
        </div>

        <div className="model-grid">
          {phases.map((phase) => (
            <article key={phase.id} className="model-phase">
              <div className="model-phase-top">
                <div className="model-phase-mark" aria-hidden="true">
                  <span>{phase.phase}</span>
                </div>
                <span className="model-phase-week">{phase.week}</span>
              </div>
              <h3 className="model-phase-title">{phase.title}</h3>
              <p className="model-phase-body">{phase.body}</p>
              <ul className="model-phase-points">
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
