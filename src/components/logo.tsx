import React, { useState, useEffect } from 'react';

interface LogoProps {
  onLoadComplete?: () => void;
  loadingDuration?: number;
}

/**
 * Premium, fast, animated motion-graphic loader.
 * - Total ~1.1s runtime (fast, non-blocking premium feel)
 * - Uses gradient stroke draw + brand-consistent orange/red palette
 */
const Logo: React.FC<LogoProps> = ({
  onLoadComplete,
  loadingDuration = 1100,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete?.();
      }, 400);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration, onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-white z-[9999] transition-all duration-500 ease-out ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <style>{`
        @keyframes va_draw {
          0%   { stroke-dashoffset: 400; opacity: 0; }
          40%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes va_fill_in {
          0%   { fill-opacity: 0; }
          70%  { fill-opacity: 0; }
          100% { fill-opacity: 1; }
        }
        @keyframes va_bar {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes va_pulse {
          0%,100% { transform: scale(0.9); opacity:.6; }
          50%     { transform: scale(1.1); opacity:1; }
        }
        .va-draw { stroke-dasharray: 400; animation: va_draw 0.9s cubic-bezier(.65,.05,.36,1) forwards; }
        .va-fill { fill-opacity: 0; animation: va_fill_in 1s ease-out forwards; }
        .va-bar  { transform-origin: left center; animation: va_bar 0.9s cubic-bezier(.65,.05,.36,1) 0.15s forwards; }
        .va-pulse { animation: va_pulse 0.9s ease-in-out infinite; }
      `}</style>

      <div className="flex flex-col items-center gap-6">
        {/* SVG Motion Graphic V */}
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <defs>
              <linearGradient id="vGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFB84D" />
                <stop offset="50%" stopColor="#FF8000" />
                <stop offset="100%" stopColor="#EB392F" />
              </linearGradient>
            </defs>
            {/* Outlined V (draw animation) */}
            <path
              d="M20 22 L60 96 L100 22"
              stroke="url(#vGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="va-draw"
            />
            {/* Filled V (fades in after draw) */}
            <path
              d="M20 22 L60 96 L100 22"
              stroke="url(#vGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="va-fill"
            />
            {/* Accent pulsing dot */}
            <circle cx="60" cy="105" r="4" fill="#EB392F" className="va-pulse" />
          </svg>
        </div>

        {/* Progress bar */}
        <div className="w-40 h-[3px] bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full va-bar rounded-full"
            style={{
              background: 'linear-gradient(90deg,#FFB84D,#FF8000,#EB392F)',
            }}
          />
        </div>

        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">
          V AGENCY
        </span>
      </div>
    </div>
  );
};

export default Logo;
