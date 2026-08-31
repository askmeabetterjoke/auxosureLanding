import React from 'react';
import { LOGO_ACCENT, SkidMarks, XGlyph } from './logoMarks';

const AnimatedLogo = ({ size = 'medium', darkTheme = true, compact = false, onClick }) => {
  const getScaleFactor = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '24px',
          svgXWidth: 20,
          svgXHeight: 28,
          svgSkidWidth: 28,
          svgSkidHeight: 22,
          gap: '4px',
          compactGap: '2px',
        };
      case 'large':
        return {
          fontSize: '56px',
          svgXWidth: 44,
          svgXHeight: 64,
          svgSkidWidth: 60,
          svgSkidHeight: 46,
          gap: '12px',
          compactGap: '6px',
        };
      case 'hero':
        return {
          fontSize: '90px',
          svgXWidth: 72,
          svgXHeight: 104,
          svgSkidWidth: 96,
          svgSkidHeight: 74,
          gap: '18px',
          compactGap: '10px',
        };
      case 'medium':
      default:
        return {
          fontSize: '32px',
          svgXWidth: 26,
          svgXHeight: 38,
          svgSkidWidth: 36,
          svgSkidHeight: 28,
          gap: '6px',
          compactGap: '3px',
        };
    }
  };

  const scale = getScaleFactor();
  const textColor = darkTheme ? '#FAF7F2' : '#262A44';
  const accentColor = LOGO_ACCENT;
  const themeClass = darkTheme ? 'animated-logo--dark' : 'animated-logo--light';
  const letterStyle = {
    fontSize: scale.fontSize,
    fontWeight: 700,
    letterSpacing: '-0.02em',
  };

  return (
    <div
      onClick={onClick}
      className={`animated-logo ${themeClass}`}
      style={{
        fontFamily: 'var(--font-display)',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? scale.compactGap : scale.gap,
        transition: 'gap 0.3s ease, opacity 0.3s ease',
      }}
      aria-label={compact ? 'Auxosure mark' : 'Auxosure'}
    >
      {compact ? (
        <>
          <div style={{ display: 'flex', alignItems: 'baseline', color: accentColor }}>
            <span style={letterStyle}>a</span>
            <XGlyph width={scale.svgXWidth} height={scale.svgXHeight} subtle />
          </div>
          <SkidMarks width={scale.svgSkidWidth} height={scale.svgSkidHeight} />
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ ...letterStyle, color: accentColor }}>a</span>
            <span style={{ ...letterStyle, color: accentColor }}>u</span>
            <XGlyph width={scale.svgXWidth} height={scale.svgXHeight} style={{ color: accentColor }} />
            <span style={{ ...letterStyle, color: textColor }}>osure</span>
          </div>
          <SkidMarks width={scale.svgSkidWidth} height={scale.svgSkidHeight} />
        </>
      )}
    </div>
  );
};

export default AnimatedLogo;
