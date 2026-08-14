import React from 'react';
import copy from '../copy.json';

const DashboardMock = () => {
  const rows = [
    { worklane: 'FNOL', volume: '7', exceptions: '0', owners: ['Auxo'] },
    { worklane: 'ACORD Intake', volume: '5', exceptions: '0', owners: ['Auxo'] },
    { worklane: 'Renewals', volume: '4', exceptions: '2', owners: ['Auxo', 'CSR'] },
    { worklane: 'Quotes', volume: '2', exceptions: '2', owners: ['Auxo', 'CSR'] },
  ];
  const closed = [
    { day: 'Mon', auxo: 12, csr: 4 },
    { day: 'Tue', auxo: 14, csr: 3 },
    { day: 'Wed', auxo: 13, csr: 5 },
    { day: 'Thu', auxo: 16, csr: 3 },
    { day: 'Fri', auxo: 18, csr: 2 },
  ];
  const maxClosed = Math.max(...closed.flatMap((col) => [col.auxo, col.csr]));
  const auxoClosed = closed.reduce((sum, col) => sum + col.auxo, 0);
  const csrClosed = closed.reduce((sum, col) => sum + col.csr, 0);

  return (
    <div className="dashboard-mock">
      {/* Header bar */}
      <div className="dashboard-mock-header">
        <div className="dashboard-mock-header-left">
          <span className="dashboard-mock-logo-pulse" aria-hidden="true">
            <svg
              className="dashboard-mock-logo"
              viewBox="0 0 52 40"
              width="22"
              height="18"
              fill="none"
            >
              <line
                x1="4"
                y1="32"
                x2="13"
                y2="16"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="dashboard-mock-skid"
                data-skid="1"
              />
              <line
                x1="17"
                y1="34"
                x2="29"
                y2="10"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="dashboard-mock-skid"
                data-skid="2"
              />
              <line
                x1="33"
                y1="36"
                x2="48"
                y2="4"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="dashboard-mock-skid"
                data-skid="3"
              />
            </svg>
            <span className="dashboard-mock-pulse-ring" />
          </span>
          <span className="dashboard-mock-title">Agency Pulse</span>
        </div>
        <span className="dashboard-mock-view">Producer view</span>
      </div>

      {/* Stat cards */}
      <div className="dashboard-mock-stats">
        <div className="dashboard-mock-stat">
          <span className="dashboard-mock-stat-label">Open files</span>
          <span className="dashboard-mock-stat-value">18</span>
        </div>
        <div className="dashboard-mock-stat">
          <span className="dashboard-mock-stat-label">Exceptions</span>
          <span className="dashboard-mock-stat-value dashboard-mock-stat-value--alert">
            4
          </span>
        </div>
        <div className="dashboard-mock-stat">
          <span className="dashboard-mock-stat-label">Bound premium MTD</span>
          <span className="dashboard-mock-stat-value">$1.24M</span>
        </div>
      </div>

      {/* Table */}
      <table className="dashboard-mock-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Open</th>
            <th>Exceptions</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.worklane}>
              <td>
                <span className="dashboard-mock-service">{row.worklane}</span>
              </td>
              <td>{row.volume}</td>
              <td>
                <span
                  className={`dashboard-mock-exceptions ${
                    row.exceptions !== '0'
                      ? 'dashboard-mock-exceptions--has'
                      : ''
                  }`}
                >
                  {row.exceptions}
                </span>
              </td>
              <td>
                <span className="dashboard-mock-owners">
                  {row.owners.map((owner) => (
                    <span
                      key={owner}
                      className={`dashboard-mock-owner dashboard-mock-owner--${
                        owner === 'Auxo' ? 'auxo' : 'human'
                      }`}
                    >
                      {owner}
                    </span>
                  ))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Productivity chart */}
      <div className="dashboard-mock-chart" aria-hidden="true">
        <div className="dashboard-mock-chart-head">
          <div className="dashboard-mock-chart-label">Files closed this week</div>
          <div className="dashboard-mock-chart-legend">
            <span className="dashboard-mock-legend dashboard-mock-legend--auxo">Auxo</span>
            <span className="dashboard-mock-legend dashboard-mock-legend--csr">CSR</span>
          </div>
        </div>
        <div className="dashboard-mock-bars">
          {closed.map((col) => (
            <div key={col.day} className="dashboard-mock-bar-col">
              <div className="dashboard-mock-bar-pair">
                <span
                  className="dashboard-mock-bar dashboard-mock-bar--auxo"
                  style={{ height: `${(col.auxo / maxClosed) * 100}%` }}
                />
                <span
                  className="dashboard-mock-bar dashboard-mock-bar--csr"
                  style={{ height: `${(col.csr / maxClosed) * 100}%` }}
                />
              </div>
              <span className="dashboard-mock-bar-day">{col.day}</span>
            </div>
          ))}
        </div>
        <p className="dashboard-mock-chart-note">
          {auxoClosed + csrClosed} closed this week. Auxo {auxoClosed}, CSR {csrClosed}. Hours per file down.
        </p>
      </div>
    </div>
  );
};

const AnalyticsSection = () => {
  const { overline, headline, lede, bullets } = copy.analytics;

  return (
    <section className="section analytics-section" id="analytics">
      <div className="container analytics-layout">
        <div className="analytics-copy">
          <p className="analytics-kicker">{overline}</p>
          <h2 className="analytics-title">{headline}</h2>
          <p className="analytics-lede">{lede}</p>
          <ul className="analytics-bullets">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="analytics-mock">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
