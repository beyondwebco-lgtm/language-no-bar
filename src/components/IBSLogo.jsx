import React from 'react';

/**
 * IBSLogo - Smart Corporate Brand Mark for IBS (Innovative Business Solutions)
 *
 * Design Concept: "The Dialogue & Solutions Synergy Mark"
 * - Represents the dual core of IBS: Professional Language Translation (cross-cultural dialogue)
 *   and Business Outsourcing (synergy, continuous flow, and operational excellence).
 * - The geometric monogram integrates:
 *     1. Left Upright Pillar: Represents "I" (Innovation, Integrity, Foundation) with a forward chamfer.
 *     2. Upper Continuous Arc: Forms the upper bowl of "B" and a forward speech bubble for language communication.
 *     3. S-Wave Lower Ribbon: Forms "S" (Solutions) and a reciprocal dialogue loop for outsourcing continuity.
 *     4. Dynamic Cyan Bridge: Connects both loops to signify seamless cross-lingual business transfer.
 *
 * @param {'light'|'dark'} variant - 'light' for Navbar, 'dark' for Footer
 * @param {'default'|'compact'|'large'} size - scaling tier
 * @param {boolean} showSubtitle - displays "Innovative Business Solutions"
 */
export default function IBSLogo({ variant = 'light', size = 'default', showSubtitle = true }) {
  const isDark = variant === 'dark';

  const config = {
    compact: {
      emblem: 34,
      titleSize: '1.2rem',
      subSize: '0.62rem',
      letterSpacing: '0.8px',
      gap: '10px'
    },
    default: {
      emblem: 42,
      titleSize: '1.48rem',
      subSize: '0.68rem',
      letterSpacing: '1px',
      gap: '12px'
    },
    large: {
      emblem: 52,
      titleSize: '1.8rem',
      subSize: '0.76rem',
      letterSpacing: '1.2px',
      gap: '14px'
    }
  }[size] || {
    emblem: 42,
    titleSize: '1.48rem',
    subSize: '0.68rem',
    letterSpacing: '1px',
    gap: '12px'
  };

  const primaryTextColor = isDark ? '#FFFFFF' : '#0B2545';
  const subtitleColor = isDark ? '#94A3B8' : '#475569';
  const glowOpacity = isDark ? '0.4' : '0.2';

  return (
    <div
      className="ibs-brand-lockup"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: config.gap,
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Smart Vector SVG Emblem */}
      <svg
        width={config.emblem}
        height={config.emblem}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          {/* Executive Navy Gradient */}
          <linearGradient id={`ibsNavy-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#38BDF8' : '#0B2545'} />
            <stop offset="100%" stopColor={isDark ? '#0284C7' : '#061729'} />
          </linearGradient>

          {/* Luminous Cyber Teal Gradient */}
          <linearGradient id={`ibsTeal-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>

          {/* Electric Cyan Accent Gradient (Bridge) */}
          <linearGradient id={`ibsCyan-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Subtle Backing Shield / Aura */}
          <filter id={`ibsShadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0D9488" floodOpacity={glowOpacity} />
          </filter>
        </defs>

        {/* Outer Rounded Geometric Shield Base */}
        <rect
          x="1.5"
          y="1.5"
          width="49"
          height="49"
          rx="13"
          fill={isDark ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF'}
          stroke={isDark ? 'rgba(20, 184, 166, 0.35)' : 'rgba(11, 37, 69, 0.12)'}
          strokeWidth="1.5"
        />

        {/* Ambient Subtle Accent Corner Dot */}
        <circle
          cx="40"
          cy="12"
          r="2.5"
          fill={`url(#ibsCyan-${variant})`}
          opacity={isDark ? '0.9' : '0.85'}
        />

        {/* ============================================================
            GEOMETRIC LETTERMARK: "I", "B", "S" SYNERGY
            ============================================================ */}

        {/* 1. Left Upright Pillar: "I" (Solid Integrity & Foundation) */}
        <path
          d="M 12 14.5 C 12 12.5 13.5 11 15.5 11 H 17 C 18.5 11 19.5 12 19.5 13.5 V 37.5 C 19.5 39.5 18 41 16 41 H 14.5 C 13 41 12 40 12 38.5 Z"
          fill={isDark ? '#FFFFFF' : `url(#ibsNavy-${variant})`}
        />

        {/* 2. Upper "B" Loop (Language Communication Dialogue Arc) */}
        <path
          d="M 22 13 C 22 11.5 23.5 10.5 25.5 10.5 H 32.5 C 37.2 10.5 41 14.3 41 19 C 41 23.2 37.8 26.8 33.5 27.2 H 23.5 C 22.5 27.2 22 26.5 22 25.5 Z"
          fill={`url(#ibsTeal-${variant})`}
          filter={`url(#ibsShadow-${variant})`}
        />

        {/* Negative Space Cutout for Upper "B" Loop (Crisp Precision Window) */}
        <path
          d="M 27 15.2 H 31.8 C 34.2 15.2 36.2 16.9 36.2 19 C 36.2 21.1 34.2 22.8 31.8 22.8 H 27 Z"
          fill={isDark ? '#061729' : '#FFFFFF'}
        />

        {/* 3. Lower "S" Ribbon & Returning Dialogue Loop (Outsourcing Continuity) */}
        <path
          d="M 33.5 26.2 C 34.8 26.2 35.8 27.2 35.8 28.5 C 35.8 29.8 34.8 30.8 33.5 30.8 H 26 C 23.2 30.8 21 33 21 35.8 C 21 38.6 23.2 40.8 26 40.8 H 36 C 37.5 40.8 38.8 41.8 38.8 42.8 C 38.8 43.8 37.5 44.5 36 44.5 H 25.5 C 20.8 44.5 17 40.7 17 36 C 17 31.5 20.4 27.8 24.8 27.3 H 33.5 Z"
          fill={`url(#ibsCyan-${variant})`}
        />

        {/* 4. The Smart Central Node: Intersecting Core connecting Translation & Outsourcing */}
        <circle
          cx="24.5"
          cy="26.7"
          r="3"
          fill={isDark ? '#FFFFFF' : '#0B2545'}
        />
        <circle
          cx="24.5"
          cy="26.7"
          r="1.5"
          fill="#14B8A6"
        />
      </svg>

      {/* Typography: IBS Lettermark + Subtitle */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.12 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {/* Main IBS Lettermark */}
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontSize: config.titleSize,
              fontWeight: 900,
              letterSpacing: config.letterSpacing,
              color: primaryTextColor,
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            IBS
          </span>

          {/* Accent Micro Badge: Highlights Dual Core */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '2px 7px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(20, 184, 166, 0.18)' : 'rgba(13, 148, 136, 0.1)',
              border: isDark ? '1px solid rgba(20, 184, 166, 0.4)' : '1px solid rgba(13, 148, 136, 0.25)',
              fontSize: '0.62rem',
              fontWeight: 800,
              color: isDark ? '#2DD4BF' : '#0D9488',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
          >
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#14B8A6'
              }}
            />
            Solutions
          </span>
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <span
            className="ibs-brand-subtitle"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontSize: config.subSize,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.9px',
              color: subtitleColor,
              marginTop: '3px',
              whiteSpace: 'nowrap'
            }}
          >
            Innovative Business Solutions
          </span>
        )}
      </div>
    </div>
  );
}
