import React, { useMemo, useState } from 'react';

const RoiCalculator = () => {
  const [volume, setVolume] = useState(2500);
  const [teamSize, setTeamSize] = useState(12);

  const metrics = useMemo(() => {
    // Heuristic model for demo purposes
    const automationRate = 0.42;
    const hoursPerPolicyMonth = 0.35;
    const hoursSaved = Math.round(volume * hoursPerPolicyMonth * automationRate);
    const capacityPct = Math.round(18 + (volume / 500) * 2 + (teamSize / 4) * 1.5);
    const bottomLine = Math.round(hoursSaved * 65 * 12 / 1000); // $65/hr fully loaded, annual, in $k
    return { hoursSaved, capacityPct: Math.min(capacityPct, 85), bottomLine };
  }, [volume, teamSize]);

  return (
    <section className="section" id="roi">
      <div className="container">
        <div className="pill-tag">
          <span className="pill-dot" />
          ROI Calculator
        </div>
        <h2 className="section-title">Estimate your Auxo impact</h2>
        <p className="section-desc">
          Adjust brokerage volume and team size to see hours saved, capacity expansion, and
          estimated bottom-line growth.
        </p>

        <div className="roi-card">
          <div className="roi-sliders">
            <div className="roi-slider-group">
              <label htmlFor="roi-volume">
                Monthly policies / submissions
                <span style={{ color: 'var(--signal-coral)' }}>{volume.toLocaleString()}</span>
              </label>
              <input
                id="roi-volume"
                type="range"
                min={200}
                max={10000}
                step={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-valuemin={200}
                aria-valuemax={10000}
                aria-valuenow={volume}
              />
            </div>
            <div className="roi-slider-group">
              <label htmlFor="roi-team">
                Team size (ops + producers)
                <span style={{ color: 'var(--signal-coral)' }}>{teamSize}</span>
              </label>
              <input
                id="roi-team"
                type="range"
                min={2}
                max={80}
                step={1}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                aria-valuemin={2}
                aria-valuemax={80}
                aria-valuenow={teamSize}
              />
            </div>
          </div>

          <div className="roi-metrics">
            <div className="roi-metric">
              <div className="roi-metric-value">{metrics.hoursSaved.toLocaleString()}</div>
              <div className="roi-metric-label">Hours saved / month</div>
            </div>
            <div className="roi-metric">
              <div className="roi-metric-value">+{metrics.capacityPct}%</div>
              <div className="roi-metric-label">Capacity expansion</div>
            </div>
            <div className="roi-metric">
              <div className="roi-metric-value">${metrics.bottomLine}k</div>
              <div className="roi-metric-label">Est. annual bottom-line</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
