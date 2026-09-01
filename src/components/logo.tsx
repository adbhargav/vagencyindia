import React, { useState, useEffect } from 'react';
import vLogo from '@/assets/v-logo.png';

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
        @keyframes va_bar {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes va_logo_in {
          0%   { opacity: 0; transform: scale(0.85) translateY(8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes va_glow {
          0%,100% { opacity: .35; transform: scale(0.95); }
          50%     { opacity: .7; transform: scale(1.08); }
        }
        .va-logo-in { animation: va_logo_in 0.35s cubic-bezier(.22,1,.36,1) forwards; }
        .va-glow { animation: va_glow 1.6s ease-in-out infinite; }
        .va-bar  { transform-origin: left center; animation: va_bar 0.9s cubic-bezier(.65,.05,.36,1) 0.15s forwards; }
      `}</style>

      <div className="flex flex-col items-center gap-6">
        {/* Real brand logo */}
        <div className="relative">
          {/* Soft brand glow behind the logo */}
          <div
            className="absolute inset-0 rounded-full blur-2xl va-glow pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(255,128,0,0.35) 0%, rgba(235,57,47,0.2) 50%, transparent 70%)',
            }}
          />
          <img
            src={vLogo}
            alt="V Agency"
            className="relative w-44 sm:w-52 h-auto object-contain va-logo-in"
          />
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
      </div>
    </div>
  );
};

export default Logo;
