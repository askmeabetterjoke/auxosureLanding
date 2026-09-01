import React from 'react';
import copy from '../../copy.json';
import auxoMark from '../../assets/future-hub/auxo-mark-sm.png';
import licensedTeam from '../../assets/future-hub/licensed-team.png';
import { ChannelIcon, HubIcon } from './hubIcons';

const MobileFutureHubSection = () => {
  const { overline, headline, lede, nodes, channels, licensedTeam: teamCopy, futureLabel } = copy.futureHub;

  return (
    <section className="m-hub-section" id="future" aria-labelledby="m-hub-heading">
      <div className="m-hub-inner">
        <header className="m-hub-intro">
          <p className="m-hub-kicker">{overline}</p>
          <h2 className="m-hub-title" id="m-hub-heading">
            {headline}
          </h2>
          <p className="m-hub-lede">{lede}</p>
        </header>

        <div className="m-hub-duo">
          <div className="m-hub-person">
            <div className="m-hub-avatar m-hub-avatar--team">
              <img src={licensedTeam} alt="" loading="lazy" decoding="async" />
            </div>
            <span className="m-hub-person-label">{teamCopy.kicker}</span>
          </div>
          <div className="m-hub-person">
            <div className="m-hub-avatar m-hub-avatar--auxo">
              <img src={auxoMark} alt="" className="m-hub-auxo-mark" loading="lazy" decoding="async" />
            </div>
            <span className="m-hub-person-label">AI COWorker</span>
          </div>
        </div>

        <div className="m-hub-channels">
          {channels.map((channel) => (
            <div key={channel.type} className="m-hub-channel">
              <ChannelIcon type={channel.type} stroke={channel.stroke} />
            </div>
          ))}
        </div>

        <div className="m-hub-nodes">
          {nodes.map((node, index) => (
            <article
              key={node.title}
              className="m-hub-node"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div
                className="m-hub-node-icon"
                style={{ borderColor: node.borderColor }}
              >
                <HubIcon type={node.icon} stroke={node.stroke} size={24} />
              </div>
              <div className="m-hub-node-copy">
                <h3 className="m-hub-node-title">{node.title}</h3>
                <p className="m-hub-node-body">{node.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="m-hub-future">
          <span className="m-hub-future-rule" aria-hidden="true" />
          <span className="m-hub-future-label">{futureLabel}</span>
          <span className="m-hub-future-rule" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default MobileFutureHubSection;
