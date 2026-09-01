import React, { useState } from 'react';
import copy from '../copy.json';
import { DELIVERY_ACCENTS, DELIVERY_WEEKS, WEEKDAY_LABELS } from '../data/deliveryWeeks';
import { PhaseCard, SplitPanel } from './delivery/DeliveryPanels';

const HowItWorksSection = () => {
  const { eyebrow, headline, description, cta, ctaHref, calendarTitle } = copy.delivery;
  const [activeWeek, setActiveWeek] = useState(2);
  const week = DELIVERY_WEEKS.find((item) => item.n === activeWeek) || DELIVERY_WEEKS[0];

  return (
    <section className="section delivery-section" id="delivery">
      <div className="container delivery-shell">
        <div className="delivery-intro">
          <div className="delivery-intro-copy">
            <p className="delivery-eyebrow">{eyebrow}</p>
            <h2 className="delivery-title">{headline}</h2>
            <p className="delivery-lede">{description}</p>
          </div>
          <div className="delivery-intro-side">
            <a className="btn btn-primary delivery-intro-cta" href={ctaHref} target="_blank" rel="noopener noreferrer">
              {cta}
            </a>
          </div>
        </div>

        <div className="delivery-board">
          <div className="delivery-board-head">
            <div className="delivery-board-title">{calendarTitle}</div>
            <div className="delivery-week-tabs" role="tablist" aria-label="Delivery weeks">
              {DELIVERY_WEEKS.map((item) => {
                const isActive = item.n === activeWeek;
                return (
                  <button
                    key={item.n}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`delivery-week-tab${isActive ? ' delivery-week-tab--active' : ''}`}
                    style={
                      isActive
                        ? { background: item.accent, borderColor: item.accent }
                        : undefined
                    }
                    onClick={() => setActiveWeek(item.n)}
                  >
                    <span className="delivery-week-tab-week">Week {item.n}</span>
                    <span className="delivery-week-tab-phase">{item.phase}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="delivery-calendar-wrap">
            <div className="delivery-calendar-head" aria-hidden="true">
              <span />
              {WEEKDAY_LABELS.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <div className="delivery-calendar-rows">
              {DELIVERY_WEEKS.map((item) => {
                const isActive = item.n === activeWeek;
                return (
                  <button
                    key={item.n}
                    type="button"
                    className={`delivery-calendar-row${isActive ? ' delivery-calendar-row--active' : ''}`}
                    style={{ opacity: isActive ? 1 : 0.42 }}
                    onClick={() => setActiveWeek(item.n)}
                  >
                    <div
                      className="delivery-calendar-row-label"
                      style={{ borderLeftColor: isActive ? item.accent : 'rgba(38, 42, 68, 0.16)' }}
                    >
                      <span className="delivery-calendar-week">Week {item.n}</span>
                      <span className="delivery-calendar-phase">{item.phase}</span>
                    </div>
                    {item.days.map((day, index) => {
                      const dayNo = (item.n - 1) * 7 + index + 1;
                      const ownerColor = DELIVERY_ACCENTS[day.ownerRole] || DELIVERY_ACCENTS.as;
                      return (
                        <div
                          key={`${item.n}-${day.label}`}
                          className={`delivery-day-cell${day.milestone ? ' delivery-day-cell--milestone' : ''}`}
                          style={
                            day.milestone
                              ? {
                                  background: 'rgba(228, 121, 91, 0.06)',
                                  borderColor: 'rgba(228, 121, 91, 0.35)',
                                }
                              : undefined
                          }
                        >
                          <div className="delivery-day-cell-top">
                            <span className="delivery-day-number">Day {dayNo}</span>
                            <span className="delivery-day-owner" style={{ color: ownerColor }}>
                              {day.owner}
                            </span>
                          </div>
                          <div className={`delivery-day-label${day.milestone ? ' delivery-day-label--milestone' : ''}`}>
                            {day.label}
                          </div>
                          {day.milestone ? (
                            <div className="delivery-day-milestone">
                              <span className="delivery-day-milestone-mark" style={{ background: item.accent }} />
                              Milestone
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="delivery-board-foot">
            <div className="delivery-board-detail">
              <PhaseCard week={week} />
            </div>
            <div className="delivery-board-split">
              <SplitPanel week={week} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
