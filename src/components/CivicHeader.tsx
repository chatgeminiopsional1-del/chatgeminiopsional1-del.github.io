import React, { useState, useEffect } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface CivicHeaderProps {
  onOpenRegistration: (unit?: 'aspura' | 'aspuri') => void;
}

export const CivicHeader: React.FC<CivicHeaderProps> = ({ onOpenRegistration }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Wisma Aspura & Aspuri', href: '#dua-wisma' },
    { label: 'Fasilitas & Iuran', href: '#kehidupan-fasilitas' },
    { label: 'Siri\' na Pacce', href: '#manifesto-filosofi' },
    { label: 'Tanya Jawab', href: '#alur-pendaftaran' },
    { label: 'Kontak Pengurus', href: '#kontak-silaturahmi' },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-40 bg-[#f7f4ed]/95 backdrop-blur-md border-b border-line transition-all duration-200 ${
        scrolled ? 'shadow-xs py-2' : 'py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Civic Title — Single Line on Mobile */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/20 rounded-md min-w-0"
            aria-label="Beranda BK Asrama HPMT Jeneponto di Makassar"
          >
            <div className="relative shrink-0">
              <img
                alt="Logo HPMT Jeneponto"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-md border border-line bg-white p-0.5 sm:p-1 shadow-2xs group-hover:border-forest transition-all"
                src={OFFICIAL_LOGOS.emblem}
                width={44}
                height={44}
              />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-forest font-bold block leading-none truncate">
                PB HPMT • Jeneponto
              </span>
              <span className="font-serif text-[16px] sm:text-xl font-bold text-ink group-hover:text-forest transition-colors block leading-tight mt-0.5 whitespace-nowrap">
                BK Asrama HPMT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-ink"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-md text-ink/85 hover:text-forest hover:bg-paper-subtle transition-all duration-150"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-forest text-paper text-xs font-semibold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all duration-150 shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Ajukan Sowan</span>
              <span aria-hidden="true" className="text-xs">→</span>
            </button>
          </nav>

          {/* Mobile Right Controls — Clean & Compact, Never Wraps */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="px-3 py-1.5 text-xs font-bold text-paper bg-forest hover:bg-forest-deep active:scale-[0.97] rounded-lg transition-all cursor-pointer shadow-xs whitespace-nowrap"
            >
              Daftar / Sowan
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center border border-line bg-white/90 rounded-lg text-ink hover:bg-paper-subtle active:scale-[0.95] cursor-pointer transition-colors shrink-0"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6.5h16M4 12h16M4 17.5h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu Navigasi Ponsel"
            className="lg:hidden pt-3 pb-3 mt-2 border-t border-line space-y-1 text-sm font-medium animate-in fade-in duration-150"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-ink/90 hover:text-forest hover:bg-paper-subtle rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 mt-2 border-t border-line/70">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full py-2.5 px-4 bg-forest text-paper text-xs font-bold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Ajukan Sowan / Pendaftaran Warga Baru</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
