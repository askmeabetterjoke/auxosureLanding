import React from 'react';

function ResponsiveSection({ desktop, mobile }) {
  return (
    <>
      <div className="layout-desktop-only">{desktop}</div>
      <div className="layout-mobile-only">{mobile}</div>
    </>
  );
}

export default ResponsiveSection;
