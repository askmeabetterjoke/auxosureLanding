import React from 'react';

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
  const coralColor = '#E4795B';

  const XGlyph = ({ subtle = false }) => (
    <svg
      width={scale.svgXWidth}
      height={scale.svgXHeight}
      viewBox="0 0 72 104"
      className={`logo-x-glyph${subtle ? ' logo-x-glyph--subtle' : ''}`}
      aria-hidden="true"
    >
      <line x1="13" y1="42" x2="56" y2="94" stroke={coralColor} strokeWidth="16" strokeLinecap="round" />
      <line x1="10" y1="94" x2="48" y2="30" stroke={coralColor} strokeWidth="16" strokeLinecap="round" />
      <polygon points="60,8 57,35 39,23" fill={coralColor} />
    </svg>
  );

  const SkidMarks = () => (
    <svg
      width={scale.svgSkidWidth}
      height={scale.svgSkidHeight}
      viewBox="0 0 52 40"
      className="logo-skid-marks"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      <line
        x1="4" y1="32" x2="13" y2="16"
        stroke={coralColor} strokeWidth="6" strokeLinecap="round"
        style={{ animation: 'skid-s1 1.6s linear infinite' }}
      />
      <line
        x1="17" y1="34" x2="29" y2="10"
        stroke={coralColor} strokeWidth="6" strokeLinecap="round"
        style={{ animation: 'skid-s2 1.6s linear infinite' }}
      />
      <line
        x1="33" y1="36" x2="48" y2="4"
        stroke={coralColor} strokeWidth="6" strokeLinecap="round"
        style={{ animation: 'skid-s3 1.6s linear infinite' }}
      />
    </svg>
  );

  return (
    <div
      onClick={onClick}
      className="animated-logo"
      style={{
        fontFamily: "'Schibsted Grotesk', sans-serif",
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
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ fontSize: scale.fontSize, fontWeight: 700, color: coralColor, letterSpacing: '-0.02em' }}>
              a
            </span>
            <XGlyph subtle />
          </div>
          <SkidMarks />
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ fontSize: scale.fontSize, fontWeight: 700, color: coralColor, letterSpacing: '-0.02em' }}>
              a
            </span>
            <span style={{ fontSize: scale.fontSize, fontWeight: 700, color: textColor, letterSpacing: '-0.02em' }}>
              u
            </span>
            <XGlyph />
            <span style={{ fontSize: scale.fontSize, fontWeight: 700, color: textColor, letterSpacing: '-0.02em' }}>
              osure
            </span>
          </div>
          <SkidMarks />
        </>
      )}
    </div>
  );
};

export default AnimatedLogo;
