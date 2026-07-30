'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="loader-wrapper"
      style={{
        opacity: loading ? 1 : 0,
        visibility: loading ? 'visible' : 'hidden',
        pointerEvents: loading ? 'all' : 'none',
      }}
    >
      <div className="loader-content">
        <div className="loader-logo">CLIPZEN STUDIO</div>
        <div className="loader-spinner"></div>
        <div style={{ marginTop: '18px', fontSize: '12px', letterSpacing: '2px' }}>
          SALES MACHINE READY
        </div>
      </div>
    </div>
  );
}
