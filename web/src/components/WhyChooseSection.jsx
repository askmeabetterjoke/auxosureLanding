import React from 'react';
import copy from '../copy.json';
import { AskHumanMock, DocumentVisual, HandoffDiagram, InboxMock } from './ProductMock';

const WhyChooseSection = () => {
  const { overline, headline, lede, cards } = copy.why;
  const byId = Object.fromEntries(cards.map((card) => [card.id, card]));

  return (
    <section className="section why-section" id="why">
      <div className="container">
        <div className="why-intro">
          <p className="cap-kicker">{overline}</p>
          <h2 className="why-title">{headline}</h2>
          <p className="why-lede">{lede}</p>
        </div>
        <div className="why-bento">
          <article className="why-card why-card--inbox">
            <h3>{byId.inbox.title}</h3>
            <p>{byId.inbox.body}</p>
            <InboxMock threads={byId.inbox.threads} />
          </article>
          <article className="why-card why-card--docs">
            <h3>{byId.documents.title}</h3>
            <p>{byId.documents.body}</p>
            <DocumentVisual status={byId.documents.status} />
          </article>
          <article className="why-card why-card--handoffs">
            <h3>{byId.handoffs.title}</h3>
            <p>{byId.handoffs.body}</p>
            <HandoffDiagram steps={byId.handoffs.steps} />
          </article>
          <article className="why-card why-card--ask">
            <h3>{byId['asks-human'].title}</h3>
            <p>{byId['asks-human'].body}</p>
            <AskHumanMock
              prompt={byId['asks-human'].prompt}
              actions={byId['asks-human'].actions}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
