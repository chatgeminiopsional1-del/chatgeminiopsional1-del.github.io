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
    { label: 'Wisma', href: '#dua-wisma' },
    { label: 'Fasilitas & Iuran', href: '#kehidupan-fasilitas' },
    { label: 'Filosofi', href: '#manifesto-filosofi' },
    { label: 'Alur Masuk', href: '#alur-pendaftaran' },
    { label: 'Kontak', href: '#kontak-silaturahmi' },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-line transition-all duration-200 ${
        scrolled ? 'shadow-xs py-2.5' : 'py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Judul Simpel */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group"
            aria-label="Beranda BK Asrama HPMT"
          >
            <img
              alt="Logo HPMT"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-sm border border-line bg-white p-0.5 group-hover:border-forest transition-colors shrink-0"
              src={OFFICIAL_LOGOS.emblem}
              width={44}
              height={44}
            />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-forest font-bold block leading-none mb-0.5">
                PB HPMT • Jeneponto
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-forest leading-tight group-hover:text-forest-light transition-colors block">
                BK Asrama HPMT
              </span>
            </div>
          </a>

          {/* Navigasi Desktop Simpel */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-1 text-xs font-medium text-ink"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-sm text-ink/80 hover:text-forest hover:bg-paper-subtle transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-forest text-paper text-xs font-semibold rounded-sm hover:bg-forest-deep active:scale-98 transition-all cursor-pointer"
            >
              <span>Daftar / Sowan</span>
              <span aria-hidden="true" className="text-[10px]">→</span>
            </button>
          </nav>

          {/* Kontrol Mobile Simpel */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="px-3 py-1.5 text-xs font-semibold text-paper bg-forest hover:bg-forest-deep rounded-sm cursor-pointer"
            >
              Daftar
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border border-line rounded-sm text-ink hover:bg-paper-subtle cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
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

        {/* Dropdown Mobile Simpel */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu Ponsel"
            className="md:hidden pt-3 pb-2 mt-2 border-t border-line space-y-1 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2.5 py-2 text-ink hover:text-forest hover:bg-paper-subtle rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
