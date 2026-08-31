import React from 'react';
import copy from '../copy.json';
import auxoMark from '../assets/future-hub/auxo-mark-sm.png';
import licensedTeam from '../assets/future-hub/licensed-team.png';

const CANVAS_W = 1600;
const CANVAS_H = 1340;

function pct(value, base) {
  return `${(value / base) * 100}%`;
}

function HubIcon({ type, stroke }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (type) {
    case 'carriers':
      return (
        <svg {...props}>
          <path d="M2.5 9.5 12 4l9.5 5.5" />
          <path d="M5 10v9M12 10v9M19 10v9" />
          <path d="M3 19.5h18" />
        </svg>
      );
    case 'underwriting':
      return (
        <svg {...props}>
          <path d="M12 3 20 6v6c0 4.2-3.3 6.9-8 9-4.7-2.1-8-4.8-8-9V6z" />
          <path d="M8.6 11.6 11.2 14.2 15.7 9.6" />
        </svg>
      );
    case 'claims':
      return (
        <svg {...props}>
          <path d="M5.4 3.6h3.1l1.5 4-2.1 1.6c.9 2.6 3 4.7 5.6 5.6l1.6-2.1 4 1.5v3.1c0 1-.9 1.9-1.9 1.8C10.6 18.9 5.1 13.4 4 6.1c-.1-1.4.6-2.5 1.4-2.5z" />
          <path d="M14.5 8.5 20 3" />
          <path d="M15.5 3.2H20v4.5" />
        </svg>
      );
    case 'accounting':
      return (
        <svg {...props}>
          <path d="M6 19.5V13" />
          <path d="M12 19.5V6.5" />
          <path d="M18 19.5V10" />
          <path d="M3.5 21h17" />
        </svg>
      );
    case 'renewals':
      return (
        <svg {...props}>
          <path d="M20.4 12a8.4 8.4 0 1 1-2.6-6.1" />
          <path d="M20.6 4.2v4.4h-4.4" />
        </svg>
      );
    case 'certificates':
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="5.3" />
          <path d="M9.7 11.4 11.4 13 14.3 9.6" />
          <path d="M8.9 13.8 7.9 20.4 12 18.4 16.1 20.4 15.1 13.8" />
        </svg>
      );
    default:
      return null;
  }
}

function ChannelIcon({ type, stroke }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'phone') {
    return (
      <svg {...props}>
        <path d="M5.4 3.6h3.1l1.5 4-2.1 1.6c.9 2.6 3 4.7 5.6 5.6l1.6-2.1 4 1.5v3.1c0 1-.9 1.9-1.9 1.8C10.6 18.9 5.1 13.4 4 6.1c-.1-1.4.6-2.5 1.4-2.5z" />
      </svg>
    );
  }

  if (type === 'email') {
    return (
      <svg {...props}>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="M3.6 6.6 12 13l8.4-6.4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M13.5 3H6.5v18h11V7z" />
      <path d="M13.5 3v4h4" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function HubNode({ node }) {
  const textStyle = {
    left: pct(node.textLeft, CANVAS_W),
    top: pct(node.textTop, CANVAS_H),
    width: pct(node.textWidth, CANVAS_W),
    animationDelay: node.delay,
    textAlign: node.align,
  };

  return (
    <>
      <div
        className="future-hub-node-icon"
        style={{
          left: pct(node.iconLeft, CANVAS_W),
          top: pct(node.iconTop, CANVAS_H),
          borderColor: node.borderColor,
          animationDelay: node.delay,
        }}
      >
        <HubIcon type={node.icon} stroke={node.stroke} />
      </div>
      <div className="future-hub-node-copy" style={textStyle}>
        <div className="future-hub-node-title">{node.title}</div>
        <p className="future-hub-node-body">{node.body}</p>
      </div>
    </>
  );
}

function FutureHubDiagram() {
  const { nodes, channels, licensedTeam: teamCopy } = copy.futureHub;

  return (
    <div className="future-hub-canvas" aria-hidden="true">
      <svg className="future-hub-lines" viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} preserveAspectRatio="none">
        <circle cx="800" cy="730" r="320" className="future-hub-ring future-hub-ring--outer" />
        <circle cx="800" cy="730" r="236" className="future-hub-ring future-hub-ring--inner" />

        <path id="fh-ur" d="M929.4,639.4 L1027.7,570.5" className="future-hub-path future-hub-path--slate" />
        <path id="fh-mr" d="M958,730 L1078,730" className="future-hub-path future-hub-path--ops" />
        <path id="fh-lr" d="M929.4,820.6 L1027.7,889.5" className="future-hub-path future-hub-path--accent" />
        <path id="fh-ul" d="M670.6,639.4 L572.3,570.5" className="future-hub-path future-hub-path--slate" />
        <path id="fh-ml" d="M642,730 L522,730" className="future-hub-path future-hub-path--retain" />
        <path id="fh-ll" d="M670.6,820.6 L572.3,889.5" className="future-hub-path future-hub-path--ops" />

        <g className="future-hub-travel-dots">
          {[
            { href: '#fh-ur', fill: '#9BB6CD', begin: '0s' },
            { href: '#fh-mr', fill: '#7BA3C4', begin: '0.5s' },
            { href: '#fh-lr', fill: '#E4795B', begin: '1s' },
            { href: '#fh-ul', fill: '#9BB6CD', begin: '1.5s' },
            { href: '#fh-ml', fill: '#5FA87A', begin: '2s' },
            { href: '#fh-ll', fill: '#7BA3C4', begin: '2.5s' },
          ].map((dot) => (
            <circle key={dot.href} r="3.5" fill={dot.fill} className="future-hub-travel-dot">
              <animateMotion dur="3.4s" begin={dot.begin} repeatCount="indefinite" calcMode="linear">
                <mpath href={dot.href} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="3.4s"
                begin={dot.begin}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g className="future-hub-spine">
          <path d="M800,884 L800,926" />
          <path d="M800,986 L800,1028" />
        </g>
      </svg>

      <div
        className="future-hub-core"
        style={{
          left: pct(650, CANVAS_W),
          top: pct(580, CANVAS_H),
          width: pct(300, CANVAS_W),
          height: pct(300, CANVAS_H),
        }}
      >
        <div className="future-hub-core-glow" />
        <div className="future-hub-core-disc">
          <div className="future-hub-core-mark">
            <img src={auxoMark} alt="" className="future-hub-core-logo" />
          </div>
          <div className="future-hub-core-label">AI COWorker</div>
        </div>
      </div>

      {nodes.map((node) => (
        <HubNode key={node.title} node={node} />
      ))}

      <div
        className="future-hub-channels"
        style={{
          left: pct(696, CANVAS_W),
          top: pct(931, CANVAS_H),
          width: pct(208, CANVAS_W),
        }}
      >
        {channels.map((channel) => (
          <div key={channel.type} className="future-hub-channel">
            <ChannelIcon type={channel.type} stroke={channel.stroke} />
          </div>
        ))}
      </div>

      <div
        className="future-hub-team-ring"
        style={{
          left: pct(740, CANVAS_W),
          top: pct(1030, CANVAS_H),
          width: pct(120, CANVAS_W),
          height: pct(120, CANVAS_H),
        }}
      />
      <img
        className="future-hub-team-photo"
        src={licensedTeam}
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          left: pct(748, CANVAS_W),
          top: pct(1038, CANVAS_H),
          width: pct(104, CANVAS_W),
          height: pct(104, CANVAS_W),
        }}
      />
      <div
        className="future-hub-team-kicker"
        style={{
          left: pct(600, CANVAS_W),
          top: pct(1168, CANVAS_H),
          width: pct(400, CANVAS_W),
        }}
      >
        {teamCopy.kicker}
      </div>
      <p
        className="future-hub-team-line"
        style={{
          left: pct(600, CANVAS_W),
          top: pct(1196, CANVAS_H),
          width: pct(400, CANVAS_W),
        }}
      >
        {teamCopy.line}
      </p>

      <div className="future-hub-future-rule future-hub-future-rule--left" />
      <div className="future-hub-future-rule future-hub-future-rule--right" />
      <div className="future-hub-future-label">{copy.futureHub.futureLabel}</div>
    </div>
  );
}

const FutureHubSection = () => {
  const { overline, headline, lede } = copy.futureHub;

  return (
    <section className="section future-hub-section" id="future" aria-labelledby="future-hub-heading">
      <div className="container future-hub-shell">
        <header className="future-hub-intro">
          <p className="future-hub-kicker">{overline}</p>
          <h2 className="future-hub-title" id="future-hub-heading">
            {headline}
          </h2>
          <p className="future-hub-lede">{lede}</p>
        </header>

        <div className="future-hub-stage">
          <div className="future-hub-viewport">
            <FutureHubDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureHubSection;
