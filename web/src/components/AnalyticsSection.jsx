import React from 'react';
import copy from '../copy.json';
import { SkidMarks } from './logoMarks';

function DashboardMock() {
  const mock = copy.analytics.mock;
  const maxClosed = Math.max(...mock.closed.flatMap((col) => [col.auxo, col.csr]));

  return (
    <div className="dashboard-mock">
      <div className="dashboard-mock-header">
        <div className="dashboard-mock-header-left">
          <div className="dashboard-mock-mark" aria-hidden="true">
            <SkidMarks width={24} height={18} />
          </div>
          <span className="dashboard-mock-title">{mock.title}</span>
          <span className="dashboard-mock-live">
            <span className="dashboard-mock-live-dot" />
            Live
          </span>
        </div>
        <div className="dashboard-mock-views" role="tablist" aria-label="Dashboard view">
          <span className="dashboard-mock-view dashboard-mock-view--active" role="tab" aria-selected="true">
            Producer view
          </span>
          <span className="dashboard-mock-view" role="tab" aria-selected="false">
            Ops view
          </span>
        </div>
      </div>

      <div className="dashboard-mock-stats">
        <div className="dashboard-mock-stat">
          <span className="dashboard-mock-stat-label">Open files</span>
          <div className="dashboard-mock-stat-main">
            <span className="dashboard-mock-stat-value">{mock.openFiles}</span>
            <div className="dashboard-mock-sparkline" aria-hidden="true">
              {mock.sparkline.map((height, i) => (
                <span
                  key={i}
                  className={`dashboard-mock-spark ${i === mock.sparkline.length - 1 ? 'dashboard-mock-spark--active' : ''}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="dashboard-mock-progress">
            <span className="dashboard-mock-progress-fill dashboard-mock-progress-fill--slate" style={{ width: `${mock.openFilesBar}%` }} />
          </div>
          <span className="dashboard-mock-stat-foot">{mock.openFilesDetail}</span>
        </div>

        <div className="dashboard-mock-stat dashboard-mock-stat--alert">
          <span className="dashboard-mock-stat-label dashboard-mock-stat-label--alert">Exceptions</span>
          <div className="dashboard-mock-stat-main">
            <span className="dashboard-mock-stat-value dashboard-mock-stat-value--alert">{mock.exceptions}</span>
            <span className="dashboard-mock-stat-sub">of 18 files</span>
          </div>
          <div className="dashboard-mock-progress">
            <span className="dashboard-mock-progress-fill dashboard-mock-progress-fill--alert" style={{ width: `${mock.exceptionsBar}%` }} />
          </div>
          <span className="dashboard-mock-stat-foot">{mock.exceptionsDetail}</span>
        </div>

        <div className="dashboard-mock-stat">
          <span className="dashboard-mock-stat-label">Bound premium MTD</span>
          <div className="dashboard-mock-stat-main">
            <span className="dashboard-mock-stat-value">{mock.boundPremium}</span>
            <span className="dashboard-mock-stat-delta">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 19V6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M6 12l6-6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {mock.boundPremiumDelta}
            </span>
          </div>
          <div className="dashboard-mock-progress">
            <span className="dashboard-mock-progress-fill dashboard-mock-progress-fill--positive" style={{ width: `${mock.boundPremiumBar}%` }} />
          </div>
          <span className="dashboard-mock-stat-foot">{mock.boundPremiumDetail}</span>
        </div>
      </div>

      <div className="dashboard-mock-body">
        <div className="dashboard-mock-table-head">
          <span>Service</span>
          <span>Open</span>
          <span>Exceptions</span>
          <span>Owner</span>
        </div>

        {mock.rows.map((row, index) => (
          <div
            key={row.worklane}
            className={`dashboard-mock-row${row.highlight ? ' dashboard-mock-row--highlight' : ''}`}
            style={{ animationDelay: `${0.05 + index * 0.07}s` }}
          >
            <div className="dashboard-mock-service-cell">
              <span className="dashboard-mock-service">{row.worklane}</span>
              <div className="dashboard-mock-service-bars" aria-hidden="true">
                {row.bars.map((bar, i) => (
                  <span
                    key={i}
                    className={`dashboard-mock-service-bar dashboard-mock-service-bar--${bar.tone}`}
                    style={{ width: `${bar.width}px` }}
                  />
                ))}
              </div>
            </div>
            <span className="dashboard-mock-cell-mono">{row.volume}</span>
            <span
              className={`dashboard-mock-cell-mono${row.exceptions !== '0' ? ' dashboard-mock-cell-mono--alert' : ''}`}
            >
              {row.exceptions}
            </span>
            <div className="dashboard-mock-owners">
              {row.owner.map((owner) => (
                <span
                  key={owner}
                  className={`dashboard-mock-owner dashboard-mock-owner--${owner === 'Auxo' ? 'auxo' : 'human'}`}
                >
                  {owner}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="dashboard-mock-chart">
          <div className="dashboard-mock-chart-head">
            <span className="dashboard-mock-chart-label">Files closed this week</span>
            <span className="dashboard-mock-legend dashboard-mock-legend--auxo">Auxo</span>
            <span className="dashboard-mock-legend dashboard-mock-legend--csr">CSR</span>
          </div>
          <div className="dashboard-mock-bars" aria-hidden="true">
            {mock.closed.map((col, index) => (
              <div key={col.day} className="dashboard-mock-bar-col">
                <div className="dashboard-mock-bar-pair">
                  <span
                    className="dashboard-mock-bar dashboard-mock-bar--auxo"
                    style={{
                      height: `${(col.auxo / maxClosed) * 100}%`,
                      animationDelay: `${0.05 + index * 0.04}s`,
                    }}
                  >
                    <span className="dashboard-mock-bar-value">{col.auxo}</span>
                  </span>
                  <span
                    className="dashboard-mock-bar dashboard-mock-bar--csr"
                    style={{
                      height: `${(col.csr / maxClosed) * 100}%`,
                      animationDelay: `${0.1 + index * 0.04}s`,
                    }}
                  />
                </div>
                <span className="dashboard-mock-bar-day">{col.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const AnalyticsSection = () => {
  const { overline, headline, lede, stats, footer } = copy.analytics;

  return (
    <section className="section analytics-section" id="analytics">
      <div className="container analytics-layout">
        <div className="analytics-copy">
          <div className="pill-tag pill-tag--on-ink">{overline}</div>
          <h2 className="analytics-title">{headline}</h2>
          <p className="analytics-lede">{lede}</p>

          <div className="analytics-stat-rows">
            {stats.map((stat) => (
              <div key={stat.title} className="analytics-stat-row">
                <span
                  className={`analytics-stat-value${stat.accent ? ' analytics-stat-value--accent' : ''}`}
                >
                  {stat.value}
                </span>
                <div className="analytics-stat-copy">
                  <div className="analytics-stat-title">{stat.title}</div>
                  <div
                    className={`analytics-stat-detail${stat.positive ? ' analytics-stat-detail--positive' : ''}`}
                  >
                    {stat.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="analytics-footer">
            <span className="analytics-live-dot" aria-hidden="true" />
            <span className="analytics-updated">{footer.updated}</span>
            <a className="analytics-footer-cta" href={footer.ctaHref}>
              {footer.cta}
            </a>
          </div>
        </div>

        <div className="analytics-mock">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
