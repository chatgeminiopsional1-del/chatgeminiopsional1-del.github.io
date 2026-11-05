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
      setScrolled(window.scrollY > 12);
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
        scrolled ? 'shadow-xs py-2' : 'py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Civic Title */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/20 rounded-md"
            aria-label="Beranda BK Asrama HPMT Jeneponto di Makassar"
          >
            <div className="relative shrink-0">
              <img
                alt="Logo HPMT Jeneponto"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-md border border-line bg-white p-1 shadow-2xs group-hover:border-forest group-hover:scale-102 transition-all duration-200"
                src={OFFICIAL_LOGOS.emblem}
                width={44}
                height={44}
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] tracking-widest uppercase text-forest font-bold block leading-none">
                  PB HPMT • Jeneponto
                </span>
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded-sm bg-forest/8 text-forest font-semibold uppercase tracking-wider">
                  Sulawesi Selatan
                </span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-ink group-hover:text-forest transition-colors block leading-tight mt-0.5">
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
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-forest text-paper text-xs font-semibold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all duration-150 shadow-xs cursor-pointer"
            >
              <span>Ajukan Sowan</span>
              <span aria-hidden="true" className="text-xs">→</span>
            </button>
          </nav>

          {/* Tablet & Mobile Quick Action */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="px-3.5 py-2 text-xs font-bold text-paper bg-forest hover:bg-forest-deep active:scale-[0.98] rounded-md transition-all cursor-pointer shadow-xs"
            >
              Ajukan Sowan
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-line rounded-md text-ink hover:bg-paper-subtle active:scale-[0.96] cursor-pointer transition-colors"
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

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu Ponsel"
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
          </nav>
        )}
      </div>
    </header>
  );
};
