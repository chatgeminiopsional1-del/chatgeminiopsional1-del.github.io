import React from 'react';

export const GazetteTicker: React.FC = () => {
  return (
    <aside
      aria-label="Warta Resmi dan Status Penerimaan"
      className="w-full bg-forest text-paper text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-forest-deep"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Status with pulse dot */}
        <div className="flex items-center gap-2 truncate">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#baeed9] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#baeed9]" />
          </span>
          <span className="font-semibold text-[#baeed9] tracking-wider uppercase text-[10px] sm:text-[11px]">
            Warta Resmi:
          </span>
          <span className="text-paper/90 truncate">
            Penerimaan Warga Baru Asrama Mahasiswa HPMT Jeneponto di Makassar
          </span>
        </div>

        {/* Right: Quick shortcuts */}
        <div className="hidden md:flex items-center gap-4 text-paper/80 shrink-0 text-[11px]">
          <span className="text-paper/40">•</span>
          <span>Aspura (Panakkukang)</span>
          <span className="text-paper/40">/</span>
          <span>Aspuri (Minasaupa)</span>
          <span className="text-paper/40">•</span>
          <a
            href="https://www.instagram.com/asrama.hpmt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#baeed9] hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Instagram @asrama.hpmt</span>
            <span className="text-[9px]" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
