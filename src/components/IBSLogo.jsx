import React from 'react';
import ibsLogoImg from '../assets/ibs-logo.png';

/**
 * IBSLogo - Official Corporate Brand Mark for IBS (Innovative Business Solutions)
 * Displays the official company logo featuring the global communication sphere with
 * "A" (English) & "अ" (Hindi) dialogue speech bubbles, orbiting velocity arc,
 * bold forward-leaning "IBS" lettermark, and "Innovative Business Solutions" title.
 *
 * @param {'light'|'dark'} variant - 'light' for Navbar, 'dark' for Footer
 * @param {'default'|'compact'|'large'} size - size scale
 */
export default function IBSLogo({ variant = 'light', size = 'default' }) {
  const isDark = variant === 'dark';

  const heights = {
    compact: 40,
    default: 50,
    large: 62
  };

  const height = heights[size] || 50;
  const imgHeight = isDark ? height - 6 : height;
  const imgWidth = Math.round(imgHeight * 3.003); // 1024 / 341 ≈ 3.003

  if (isDark) {
    return (
      <div
        className="ibs-brand-lockup ibs-dark-badge"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#ffffff',
          padding: '6px 14px',
          borderRadius: '10px',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35)',
          maxWidth: '100%',
          transition: 'all 0.25s ease'
        }}
      >
        <img
          src={ibsLogoImg}
          alt="IBS – Innovative Business Solutions Logo"
          width={imgWidth}
          height={imgHeight}
          style={{
            height: `${imgHeight}px`,
            width: 'auto',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className="ibs-brand-lockup"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        maxWidth: '100%'
      }}
    >
      <img
        src={ibsLogoImg}
        alt="IBS – Innovative Business Solutions Logo"
        width={imgWidth}
        height={imgHeight}
        style={{
          height: `${imgHeight}px`,
          width: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
