import React from 'react';

/**
 * IBSLogo - Premium Corporate Brand Mark for IBS (Innovative Business Solutions)
 * Designed with Navy Blue (#0B2545 / #0A2540), Teal (#0D9488 / #14B8A6), and Crisp White.
 *
 * @param {'light'|'dark'} variant - 'light' for light backgrounds (Navbar), 'dark' for dark backgrounds (Footer)
 * @param {'default'|'compact'|'large'} size - size scale of the logo
 * @param {boolean} showSubtitle - whether to display "Innovative Business Solutions" text
 */
export default function IBSLogo({ variant = 'light', size = 'default', showSubtitle = true }) {
  const isDark = variant === 'dark';

  // Sizing definitions
  const dimensions = {
    compact: { emblem: 32, titleSize: '1.15rem', subSize: '0.62rem', letterSpacing: '0.5px' },
    default: { emblem: 40, titleSize: '1.42rem', subSize: '0.68rem', letterSpacing: '0.6px' },
    large: { emblem: 50, titleSize: '1.75rem', subSize: '0.75rem', letterSpacing: '0.8px' }
  }[size] || { emblem: 40, titleSize: '1.42rem', subSize: '0.68rem', letterSpacing: '0.6px' };

  const textColor = isDark ? '#FFFFFF' : '#0B2545';
  const subtitleColor = isDark ? '#94A3B8' : '#475569';
  const tealAccent = isDark ? '#14B8A6' : '#0D9488';

  return (
    <div
      className="ibs-brand-lockup"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'compact' ? '10px' : '12px',
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Precision Geometric SVG Monogram */}
      <svg
        width={dimensions.emblem}
        height={dimensions.emblem}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`ibsNavyGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B2545" />
            <stop offset="100%" stopColor="#061729" />
          </linearGradient>
          <linearGradient id={`ibsTealGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id={`ibsGlow-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D9488" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Outer Shield / Rounded Square Base */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="11"
          fill={isDark ? 'rgba(255,255,255,0.06)' : 'url(#' + `ibsNavyGrad-${variant}` + ')'}
          stroke={isDark ? 'rgba(20, 184, 166, 0.45)' : 'rgba(11, 37, 69, 0.15)'}
          strokeWidth="1.5"
        />

        {/* Dynamic Connected Node Path: Bridging Languages & Business Solutions */}
        {/* Left vertical element: "I" */}
        <rect
          x="11"
          y="13"
          width="4"
          height="22"
          rx="2"
          fill={isDark ? '#FFFFFF' : '#FFFFFF'}
        />

        {/* Center-Right Interlocking Element: "B" & "S" */}
        {/* Top Arc (B Upper) */}
        <path
          d="M17 14 H28 C31.3137 14 34 16.6863 34 20 C34 23.3137 31.3137 26 28 26 H17"
          stroke={tealAccent}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom Arc (S Lower Reverse) */}
        <path
          d="M31 26 H20 C16.6863 26 14 28.6863 14 32 C14 35.3137 16.6863 38 20 38 H33"
          stroke={isDark ? '#38BDF8' : '#38BDF8'}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Connectivity Accent Dot */}
        <circle cx="34" cy="38" r="2.8" fill={tealAccent} />
      </svg>

      {/* Typography: Lettermark + Subtitle */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '3px'
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontSize: dimensions.titleSize,
              fontWeight: 900,
              letterSpacing: dimensions.letterSpacing,
              color: textColor
            }}
          >
            IBS
          </span>
          <span
            style={{
              display: 'inline-block',
              width: size === 'compact' ? '5px' : '6px',
              height: size === 'compact' ? '5px' : '6px',
              borderRadius: '50%',
              backgroundColor: tealAccent
            }}
          />
        </div>

        {showSubtitle && (
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontSize: dimensions.subSize,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.85px',
              color: subtitleColor,
              marginTop: '2px',
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

