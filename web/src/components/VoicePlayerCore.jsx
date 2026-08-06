import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SCENARIOS } from '../scenarios';

const BAR_COUNT = 32;

const VoicePlayerCore = ({ scenarioKey = 'renewal', showScenarioTabs = true }) => {
  const [activeKey, setActiveKey] = useState(scenarioKey);
  const [playing, setPlaying] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [barHeights, setBarHeights] = useState(() => Array(BAR_COUNT).fill(8));
  const rafRef = useRef(null);
  const lineTimerRef = useRef(null);
  const transcriptRef = useRef(null);

  const scenario = SCENARIOS[activeKey];

  const stopAnimation = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (lineTimerRef.current) clearInterval(lineTimerRef.current);
    lineTimerRef.current = null;
  }, []);

  const animateBars = useCallback(() => {
    const tick = () => {
      setBarHeights(Array.from({ length: BAR_COUNT }, () => 6 + Math.random() * 40));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    setActiveKey(scenarioKey);
  }, [scenarioKey]);

  useEffect(() => {
    setPlaying(false);
    setVisibleLines(0);
    setBarHeights(Array(BAR_COUNT).fill(8));
    stopAnimation();
  }, [activeKey, stopAnimation]);

  useEffect(() => {
    if (!playing) {
      stopAnimation();
      setBarHeights(Array(BAR_COUNT).fill(8));
      return;
    }

    animateBars();
    setVisibleLines(1);
    lineTimerRef.current = setInterval(() => {
      setVisibleLines((n) => {
        if (n >= scenario.lines.length) {
          setPlaying(false);
          return n;
        }
        return n + 1;
      });
    }, 2200);

    return stopAnimation;
  }, [playing, scenario.lines.length, animateBars, stopAnimation]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
    } else {
      if (visibleLines >= scenario.lines.length) setVisibleLines(0);
      setPlaying(true);
    }
  };

  return (
    <div className="voice-player">
      <div className="voice-player-header">
        <div className="caller-badge">
          <span className="live-dot" />
          {playing ? 'Live' : 'Ready'} · {scenario.caller}
        </div>
      </div>

      {showScenarioTabs && (
        <div className="scenario-tabs" role="tablist">
          {Object.values(SCENARIOS).map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeKey === s.id}
              className={`scenario-tab ${activeKey === s.id ? 'active' : ''}`}
              onClick={() => setActiveKey(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="waveform" aria-hidden="true">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="wave-bar"
            style={{
              height: `${h}px`,
              opacity: playing ? 0.5 + (h / 50) * 0.5 : 0.35,
            }}
          />
        ))}
      </div>

      <div className="transcript" ref={transcriptRef} aria-live="polite">
        {scenario.lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`transcript-line ${line.role}`}>
            <div className="transcript-role">{line.role === 'auxo' ? 'Auxo' : scenario.caller}</div>
            {line.text}
          </div>
        ))}
        {visibleLines === 0 && (
          <div className="transcript-line auxo" style={{ opacity: 0.5 }}>
            <div className="transcript-role">Auxo</div>
            Press play to hear a simulated call…
          </div>
        )}
      </div>

      <div className="voice-controls">
        <button
          className="play-btn"
          onClick={togglePlay}
          aria-label={playing ? 'Pause simulation' : 'Play simulation'}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          {playing ? 'Simulating call…' : 'Press play to simulate'}
        </span>
      </div>
    </div>
  );
};

export default VoicePlayerCore;
