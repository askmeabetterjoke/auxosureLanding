import React from 'react';

export const LOGO_ACCENT = '#E4795B';

export function XGlyph({
  width,
  height,
  subtle = false,
  className = '',
  style,
  onMouseEnter,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 104"
      className={`logo-x-glyph${subtle ? ' logo-x-glyph--subtle' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      onMouseEnter={onMouseEnter}
      aria-hidden="true"
    >
      <line x1="13" y1="42" x2="56" y2="94" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
      <line x1="10" y1="94" x2="48" y2="30" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
      <polygon points="60,8 57,35 39,23" fill="currentColor" />
    </svg>
  );
}

export function SkidMarks({ width, height, className = 'logo-skid-marks' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 40"
      className={className}
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      <line x1="4" y1="32" x2="13" y2="16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="17" y1="34" x2="29" y2="10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="33" y1="36" x2="48" y2="4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
