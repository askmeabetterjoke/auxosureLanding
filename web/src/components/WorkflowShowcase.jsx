import React from 'react';
import copy from '../copy.json';
import { CoiMock, FnolMock, IntakeQuoteMock, RenewalRadarMock } from './ProductMock';

const MOCKS = {
  fnol: FnolMock,
  coi: CoiMock,
  'renewal-radar': RenewalRadarMock,
  'intake-quote': IntakeQuoteMock,
};

function WorkCard({ card, inert = false }) {
  const Mock = MOCKS[card.id];
  const meta = card.meta || [];

  return (
    <article className="work-card work-card--swipe" aria-hidden={inert || undefined}>
      <div className="work-card-mock work-card-mock--tall">
        <Mock data={card.mock} title={card.mockTitle} />
      </div>
      <div className="work-card-foot">
        <div className="work-card-copy">
          <p className="work-card-label">{card.label}</p>
          <h3 className="work-card-headline">{card.title}</h3>
          <p className="work-card-body">{card.line}</p>
        </div>
        {meta.length > 0 ? (
          <div className="work-card-meta" aria-label={`${card.title} workflow`}>
            {meta.map((item, index) => (
              <div key={item.label} className="work-card-meta-item">
                <span className="work-card-meta-label">{item.label}</span>
                <span className="work-card-meta-value">{item.value}</span>
                {index < meta.length - 1 ? (
                  <span className="work-card-meta-rule" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

const WorkflowShowcase = () => {
  const { overline, headline, lede, cards } = copy.work;

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="work-intro">
          <p className="cap-kicker">{overline}</p>
          <h2 className="work-title">{headline}</h2>
          <p className="work-lede">{lede}</p>
        </div>

        <div className="work-scroll work-scroll--loop" aria-label="Platform capability examples">
          <div className="work-track">
            {cards.map((card) => (
              <WorkCard key={card.id} card={card} />
            ))}
            {cards.map((card) => (
              <WorkCard key={`dup-${card.id}`} card={card} inert />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
