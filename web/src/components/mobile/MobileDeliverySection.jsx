import React, { useState } from 'react';
import copy from '../../copy.json';
import { PhaseCard, SplitPanel } from '../delivery/DeliveryPanels';
import { DELIVERY_ACCENTS, DELIVERY_WEEKS } from '../../data/deliveryWeeks';

const STATS = [
  { value: '21', label: 'Days to live' },
  { value: '1', label: 'Service first' },
  { value: '0', label: 'Systems replaced' },
];

function ownerStyles(role) {
  const color = DELIVERY_ACCENTS[role] || DELIVERY_ACCENTS.as;
  return {
    color,
    background: `${color}18`,
    borderColor: `${color}40`,
  };
}

const MobileDeliverySection = () => {
  const { eyebrow, headline, description, cta, ctaHref, calendarTitle } = copy.delivery;
  const [activeWeek, setActiveWeek] = useState(2);
  const week = DELIVERY_WEEKS.find((item) => item.n === activeWeek) || DELIVERY_WEEKS[0];

  return (
    <section className="m-delivery-section" id="delivery">
      <div className="m-delivery-inner">
        <header className="m-delivery-intro">
          <p className="m-delivery-eyebrow">{eyebrow}</p>
          <h2 className="m-delivery-title">{headline}</h2>
          <p className="m-delivery-lede">{description}</p>
        </header>

        <div className="m-delivery-stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="m-delivery-stat">
              <div className="m-delivery-stat-value">{stat.value}</div>
              <div className="m-delivery-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <a className="btn btn-primary m-delivery-cta" href={ctaHref} target="_blank" rel="noopener noreferrer">
          {cta}
        </a>

        <div className="m-delivery-board">
          <div className="m-delivery-board-head">
            <div className="m-delivery-board-title">{calendarTitle}</div>
            <div className="m-delivery-week-tabs" role="tablist" aria-label="Delivery weeks">
              {DELIVERY_WEEKS.map((item) => {
                const isActive = item.n === activeWeek;
                return (
                  <button
                    key={item.n}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`m-delivery-week-tab${isActive ? ' m-delivery-week-tab--active' : ''}`}
                    style={
                      isActive
                        ? { background: item.accent, borderColor: item.accent }
                        : undefined
                    }
                    onClick={() => setActiveWeek(item.n)}
                  >
                    <span className="m-delivery-week-tab-week">Week {item.n}</span>
                    <span className="m-delivery-week-tab-phase">{item.phase}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="m-delivery-days">
            {week.days.map((day, index) => {
              const dayNo = (week.n - 1) * 7 + index + 1;
              const ownerStyle = ownerStyles(day.ownerRole);
              return (
                <div
                  key={`${week.n}-${day.label}`}
                  className={`m-delivery-day${day.milestone ? ' m-delivery-day--milestone' : ''}`}
                >
                  <div className="m-delivery-day-num">Day {dayNo}</div>
                  <div className="m-delivery-day-body">
                    <div className="m-delivery-day-label">{day.label}</div>
                    <div className="m-delivery-day-meta">
                      <span
                        className="m-delivery-day-owner"
                        style={ownerStyle}
                      >
                        {day.owner}
                      </span>
                      {day.milestone ? (
                        <span className="m-delivery-day-milestone">
                          <span className="m-delivery-day-milestone-mark" style={{ background: week.accent }} />
                          Milestone
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="m-delivery-detail">
            <PhaseCard week={week} />
            <SplitPanel week={week} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDeliverySection;
