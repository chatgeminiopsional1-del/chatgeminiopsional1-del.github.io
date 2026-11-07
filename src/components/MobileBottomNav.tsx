import React, { useEffect, useState } from 'react';

interface MobileBottomNavProps {
  onOpenRegistration: () => void;
}

const NAV_SECTIONS = [
  { id: 'warta', href: '#', label: 'Warta', icon: 'home' },
  { id: 'direktori', href: '#dua-wisma', label: 'Direktori', icon: 'book' },
  { id: 'fasilitas', href: '#kehidupan-fasilitas', label: 'Fasilitas', icon: 'list' },
  { id: 'kontak', href: '#kontak-silaturahmi', label: 'Kontak', icon: 'chat' },
] as const;

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  book: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  list: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenRegistration }) => {
  const [activeSection, setActiveSection] = useState('warta');

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = ['dua-wisma', 'kehidupan-fasilitas', 'manifesto-filosofi', 'alur-pendaftaran', 'kontak-silaturahmi'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset for sticky header

      if (scrollY < 200) {
        setActiveSection('warta');
        return;
      }

      let current = 'warta';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          if (id === 'dua-wisma') current = 'direktori';
          else if (id === 'kehidupan-fasilitas') current = 'fasilitas';
          else if (id === 'kontak-silaturahmi') current = 'kontak';
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navigasi Cepat Ponsel"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pb-safe bg-paper/96 backdrop-blur-md border-t border-line shadow-lg"
    >
      <div className="flex justify-around items-center h-[56px] max-w-lg mx-auto px-1">
        {NAV_SECTIONS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] transition-all relative ${
                isActive ? 'mobile-nav-active' : 'text-ink-subtle hover:text-forest'
              }`}
            >
              <span className={`transition-transform duration-150 ${isActive ? 'scale-110' : ''}`}>
                {icons[item.icon]}
              </span>
              <span className={`text-[9.5px] font-semibold tracking-wider uppercase mt-0.5 transition-colors ${
                isActive ? 'text-forest' : ''
              }`}>
                {item.label}
              </span>
            </a>
          );
        })}

        {/* Daftar Asrama — elevated center CTA */}
        <button
          type="button"
          onClick={onOpenRegistration}
          className="flex flex-col items-center justify-center min-w-[64px] min-h-[44px] px-3 py-1.5 bg-forest text-paper rounded-md hover:bg-forest-deep active:bg-forest-deep transition-all shadow-md cursor-pointer"
          aria-label="Daftar menjadi warga asrama"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[9.5px] font-bold tracking-wider uppercase mt-0.5">Daftar</span>
        </button>
      </div>
    </nav>
  );
};
