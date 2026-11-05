import React, { useEffect, useState } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest transition-all duration-500 ${
        phase === 'exit' ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-hidden="true"
    >
      {/* Decorative grain overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />

      <div
        className={`flex flex-col items-center gap-5 transition-all duration-600 ${
          phase === 'enter' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Logo */}
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
            <img
              src={OFFICIAL_LOGOS.emblem}
              alt="Logo HPMT"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#baeed9]/40 animate-ping" />
        </div>

        {/* Text */}
        <div className="text-center px-6">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#baeed9] font-bold mb-2">
            BK Asrama • PB HPMT
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            BK Asrama HPMT
          </h1>
          <p className="text-[#baeed9]/70 text-xs sm:text-sm mt-2 italic font-serif">
            "Siri' na Pacce ri Butta Turatea"
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
          <div
            className={`h-full bg-[#baeed9] rounded-full transition-all duration-[1800ms] ease-out ${
              phase === 'hold' || phase === 'exit' ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>

      {/* Makassar · Sulawesi Selatan */}
      <p className="absolute bottom-8 text-[11px] text-white/30 uppercase tracking-widest font-medium">
        Kota Makassar · Sulawesi Selatan
      </p>
    </div>
  );
};
