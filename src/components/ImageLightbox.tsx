import React, { useEffect, useState } from 'react';
import { ARCHIVAL_PHOTOS, ArchivalPhoto } from '../data/dormitoryData.ts';

interface ImageLightboxProps {
  photo: ArchivalPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: ArchivalPhoto) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ photo, onClose, onSelectPhoto }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (photo) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      setMounted(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [photo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = ARCHIVAL_PHOTOS.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + ARCHIVAL_PHOTOS.length) % ARCHIVAL_PHOTOS.length;
    onSelectPhoto(ARCHIVAL_PHOTOS[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % ARCHIVAL_PHOTOS.length;
    onSelectPhoto(ARCHIVAL_PHOTOS[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Dokumentasi Wisma"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/85 backdrop-blur-md transition-opacity duration-200 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative max-w-4xl w-full bg-paper border border-line rounded-2xl shadow-2xl p-4 sm:p-6 transition-transform duration-200 ${
          mounted ? 'scale-100' : 'scale-95'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-line mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="text-[11px] uppercase font-bold tracking-widest text-forest">
              Arsip Visual Wisma ({currentIndex + 1} / {ARCHIVAL_PHOTOS.length})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 min-h-[38px] px-3 text-ink-muted hover:text-ink text-xs font-semibold border border-line bg-white hover:bg-paper-subtle active:scale-[0.97] rounded-lg transition-all cursor-pointer"
            aria-label="Tutup penampil gambar"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Tutup (Esc)</span>
          </button>
        </div>

        {/* Image Frame with Navigation Arrows */}
        <div className="relative min-h-[260px] max-h-[65vh] flex items-center justify-center bg-black/5 rounded-xl overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none"
          />

          {/* Navigation arrow buttons (44x44 tap target for mobile touch) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 hover:bg-white text-ink border border-line rounded-full shadow-md active:scale-[0.95] transition-all cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 hover:bg-white text-ink border border-line rounded-full shadow-md active:scale-[0.95] transition-all cursor-pointer"
            aria-label="Foto berikutnya"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="pt-3.5 border-t border-line mt-3.5 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h4 className="font-serif font-bold text-ink text-base sm:text-lg">
              {photo.title}
            </h4>
            <span className="text-[11px] text-ink-subtle font-medium">{photo.location}</span>
          </div>
          <p className="text-ink-muted text-xs leading-relaxed max-w-2xl">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
};
