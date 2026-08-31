import React from 'react';
import copy from '../copy.json';
import { CoiMock, FnolMock, IntakeQuoteMock, RenewalRadarMock } from './ProductMock';

const MOCKS = {
  fnol: FnolMock,
  coi: CoiMock,
  'renewal-radar': RenewalRadarMock,
  'intake-quote': IntakeQuoteMock,
};

const META_TONES = {
  fnol: ['blue', 'green', 'coral'],
  coi: ['blue', 'green', 'coral'],
  'renewal-radar': ['blue', 'gold', 'coral'],
  'intake-quote': ['blue', 'gold', 'coral'],
};

function WorkCard({ card, inert = false }) {
  const Mock = MOCKS[card.id];

  return (
    <article className="work-card work-card--swipe work-card--capability" aria-hidden={inert || undefined}>
      <div className="work-card-shell">
        <header className="work-card-intro">
          <div className="work-card-kicker">
            <span className="work-card-label">{card.label}</span>
            <span className="work-card-kicker-rule" aria-hidden="true" />
            <span className="work-card-kicker-trail">{card.mockTitle}</span>
          </div>
          <h3 className="work-card-headline">{card.title}</h3>
          <p className="work-card-body">{card.line}</p>
        </header>

        <div className="work-card-panel">
          <Mock
            data={card.mock}
            title={card.mockTitle}
            meta={card.meta}
            metaTones={META_TONES[card.id]}
            variant="capability"
          />
        </div>
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
