import React from 'react';
import copy from '../copy.json';
import IntegrationMarquee from './IntegrationMarquee';
import { DashboardMock, HomeMock } from './ProductMock';

const CorePlatformSection = () => {
  const { overline, headline, lede, cards } = copy.corePlatform;
  const byId = Object.fromEntries(cards.map((card) => [card.id, card]));

  return (
    <section className="section core-section" id="integrations">
      <div className="container">
        <div className="core-intro">
          <p className="cap-kicker">{overline}</p>
          <h2 className="core-title">{headline}</h2>
          <p className="core-lede">{lede}</p>
        </div>
        <IntegrationMarquee embedded />
        <div className="core-grid">
          <article className="core-card">
            <h3>{byId.home.title}</h3>
            <p>{byId.home.body}</p>
            <HomeMock data={byId.home.mock} />
          </article>
          <article className="core-card core-card--wide">
            <h3>{byId.dashboard.title}</h3>
            <p>{byId.dashboard.body}</p>
            <DashboardMock data={byId.dashboard.mock} />
          </article>
          <article className="core-card core-card--quote">
            <h3>{byId.proof.title}</h3>
            <blockquote>{byId.proof.quote}</blockquote>
            <cite>{byId.proof.attribution}</cite>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CorePlatformSection;
