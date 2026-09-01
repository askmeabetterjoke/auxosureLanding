import React from 'react';

export function HubIcon({ type, stroke, size = 28 }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (type) {
    case 'carriers':
      return (
        <svg {...props}>
          <path d="M2.5 9.5 12 4l9.5 5.5" />
          <path d="M5 10v9M12 10v9M19 10v9" />
          <path d="M3 19.5h18" />
        </svg>
      );
    case 'underwriting':
      return (
        <svg {...props}>
          <path d="M12 3 20 6v6c0 4.2-3.3 6.9-8 9-4.7-2.1-8-4.8-8-9V6z" />
          <path d="M8.6 11.6 11.2 14.2 15.7 9.6" />
        </svg>
      );
    case 'claims':
      return (
        <svg {...props}>
          <path d="M5.4 3.6h3.1l1.5 4-2.1 1.6c.9 2.6 3 4.7 5.6 5.6l1.6-2.1 4 1.5v3.1c0 1-.9 1.9-1.9 1.8C10.6 18.9 5.1 13.4 4 6.1c-.1-1.4.6-2.5 1.4-2.5z" />
          <path d="M14.5 8.5 20 3" />
          <path d="M15.5 3.2H20v4.5" />
        </svg>
      );
    case 'accounting':
      return (
        <svg {...props}>
          <path d="M6 19.5V13" />
          <path d="M12 19.5V6.5" />
          <path d="M18 19.5V10" />
          <path d="M3.5 21h17" />
        </svg>
      );
    case 'renewals':
      return (
        <svg {...props}>
          <path d="M20.4 12a8.4 8.4 0 1 1-2.6-6.1" />
          <path d="M20.6 4.2v4.4h-4.4" />
        </svg>
      );
    case 'certificates':
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="5.3" />
          <path d="M9.7 11.4 11.4 13 14.3 9.6" />
          <path d="M8.9 13.8 7.9 20.4 12 18.4 16.1 20.4 15.1 13.8" />
        </svg>
      );
    default:
      return null;
  }
}

export function ChannelIcon({ type, stroke, size = 20 }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'phone') {
    return (
      <svg {...props}>
        <path d="M5.4 3.6h3.1l1.5 4-2.1 1.6c.9 2.6 3 4.7 5.6 5.6l1.6-2.1 4 1.5v3.1c0 1-.9 1.9-1.9 1.8C10.6 18.9 5.1 13.4 4 6.1c-.1-1.4.6-2.5 1.4-2.5z" />
      </svg>
    );
  }

  if (type === 'email') {
    return (
      <svg {...props}>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="M3.6 6.6 12 13l8.4-6.4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M13.5 3H6.5v18h11V7z" />
      <path d="M13.5 3v4h4" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}
