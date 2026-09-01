import React from 'react';
import { DELIVERY_ACCENTS } from '../../data/deliveryWeeks';

export function PhaseCard({ week }) {
  return (
    <article className="delivery-phase-card">
      <div className="delivery-phase-card-top">
        <span className="delivery-phase-card-num">{week.num}</span>
        <span className="delivery-phase-card-week">
          Week {week.n} · {week.range}
        </span>
      </div>
      <h3 className="delivery-phase-card-title">{week.phase}</h3>
      <p className="delivery-phase-card-body">{week.body}</p>
      <ul className="delivery-phase-card-points">
        {week.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function SplitPanel({ week }) {
  const splits = [
    { key: 'as', label: 'Auxosure delivery team', value: week.split[0], color: DELIVERY_ACCENTS.as },
    { key: 'ax', label: 'Auxo, learning and running', value: week.split[1], color: DELIVERY_ACCENTS.ax },
    { key: 'you', label: 'Your licensed team', value: week.split[2], color: DELIVERY_ACCENTS.you },
  ];

  return (
    <div className="delivery-split-panel">
      <div className="delivery-split-label">Who is on point</div>
      <div className="delivery-split-bar" aria-hidden="true">
        {splits.map((item, index) => (
          <span
            key={item.key}
            className="delivery-split-segment"
            style={{
              width: `${item.value}%`,
              background: item.color,
              animationDelay: `${index * 0.08}s`,
            }}
          />
        ))}
      </div>
      <ul className="delivery-split-legend">
        {splits.map((item) => (
          <li key={item.key}>
            <span className="delivery-split-swatch" style={{ background: item.color }} />
            <span className="delivery-split-name">{item.label}</span>
            <span className="delivery-split-value">{item.value}%</span>
          </li>
        ))}
      </ul>
      <div className="delivery-artifacts">
        <div className="delivery-artifacts-label">What you hold at the end of the week</div>
        <div className="delivery-artifact-list">
          {week.artifacts.map((artifact) => (
            <span key={artifact} className="delivery-artifact-pill">
              {artifact}
            </span>
          ))}
        </div>
      </div>
      <div className="delivery-milestone">
        <span className="delivery-milestone-mark" aria-hidden="true" />
        <span>{week.milestone}</span>
      </div>
    </div>
  );
}
