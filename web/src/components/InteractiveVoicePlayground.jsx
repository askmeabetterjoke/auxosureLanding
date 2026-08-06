import React, { useState } from 'react';
import VoicePlayerCore from './VoicePlayerCore';
import { SCENARIOS } from '../scenarios';

const InteractiveVoicePlayground = () => {
  const [activeKey, setActiveKey] = useState('renewal');

  return (
    <section className="section" id="voice-demo">
      <div className="container">
        <div className="pill-tag">
          <span className="pill-dot" />
          Voice Demo
        </div>
        <h2 className="section-title">Try Auxo on a simulated insurance call</h2>
        <p className="section-desc">
          Pick a scenario and watch Auxo handle intake, renewals, or quoting triage — with live
          waveform and transcript playback.
        </p>

        <div className="voice-playground">
          <div className="vp-layout">
            <div className="vp-scenarios" role="tablist" aria-label="Call scenarios">
              {Object.values(SCENARIOS).map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={activeKey === s.id}
                  className={`vp-scenario-btn ${activeKey === s.id ? 'active' : ''}`}
                  onClick={() => setActiveKey(s.id)}
                >
                  <strong>{s.label}</strong>
                  <span>Caller: {s.caller}</span>
                </button>
              ))}
            </div>
            <div className="vp-main">
              <VoicePlayerCore
                key={activeKey}
                scenarioKey={activeKey}
                showScenarioTabs={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVoicePlayground;
