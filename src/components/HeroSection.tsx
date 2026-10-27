import React, { useEffect, useState } from 'react';
import { ARCHIVAL_PHOTOS, ArchivalPhoto } from '../data/dormitoryData.ts';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

interface HeroSectionProps {
  onSelectPhoto: (photo: ArchivalPhoto) => void;
  onOpenRegistration: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto, onOpenRegistration }) => {
  const gatePhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gate') || ARCHIVAL_PHOTOS[0];
  const gazeboPhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gazebo') || ARCHIVAL_PHOTOS[1];
  const yardPhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'yard') || ARCHIVAL_PHOTOS[2];
  const sidePhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'side') || ARCHIVAL_PHOTOS[3];

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const { ref: galleryRef, visible: galleryVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-10 pb-14 sm:pb-20">
      {/* ── Headline & Highlight Area ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-line items-start">
        {/* Left Column: Title & CTA */}
        <div className={`lg:col-span-7 xl:col-span-8 reveal ${heroVisible ? 'visible' : ''}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-forest/8 text-forest border border-forest/15 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
            </span>
            <span>Penerimaan Warga Baru • Terbuka untuk Mahasiswa Jeneponto</span>
          </div>

          <h1 className="font-serif text-[32px] sm:text-5xl lg:text-[52px] xl:text-[60px] leading-[1.12] tracking-tight font-bold text-ink">
            Rumah Bersama Mahasiswa Turatea di Perantauan Makassar.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ink/80 max-w-2xl leading-relaxed">
            Wadah berteduh, berhimpun, dan saling memikul nasib di tanah rantau. Bebas biaya sewa kamar sampai lulus kuliah, dikelola swadaya berlandaskan semangat luhur <em className="font-serif italic font-semibold text-forest">Siri' na Pacce</em>.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenRegistration}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 bg-forest text-paper text-sm font-semibold rounded-lg hover:bg-forest-deep active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Ajukan Sowan / Pendaftaran</span>
              <span aria-hidden="true" className="text-base">→</span>
            </button>
            <a
              href="#dua-wisma"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 border border-line bg-white/90 text-ink text-sm font-medium rounded-lg hover:border-forest hover:text-forest active:bg-paper-subtle transition-all shadow-2xs hover:shadow-xs"
            >
              <span>Lihat Wisma &amp; Kamar</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-line/80">
            <div className="p-3 rounded-lg bg-white/60 border border-line/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">2 Wisma</span>
              <span className="text-xs text-ink/80 mt-0.5 block font-medium">Aspura &amp; Aspuri</span>
            </div>
            <div className="p-3 rounded-lg bg-white/60 border border-line/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">Bebas Sewa</span>
              <span className="text-xs text-ink/80 mt-0.5 block font-medium">1x Kontribusi Awal</span>
            </div>
            <div className="p-3 rounded-lg bg-white/60 border border-line/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">Kapasitas</span>
              <span className="text-xs text-ink/80 mt-0.5 block font-medium">Aspura 1 Org/Kamar</span>
            </div>
            <div className="p-3 rounded-lg bg-white/60 border border-line/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest block">Nilai Luhur</span>
              <span className="text-xs text-ink/80 mt-0.5 block font-medium">Siri' na Pacce</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Card */}
        <div
          className={`lg:col-span-5 xl:col-span-4 reveal delay-200 ${heroVisible ? 'visible' : ''}`}
        >
          <div className="bg-white/80 backdrop-blur-xs border border-line rounded-2xl p-6 sm:p-7 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest block mb-2">
              Sekilas Kehidupan Asrama
            </span>
            <p className="text-sm sm:text-[15px] text-ink/85 leading-[1.7]">
              Bagi anak-anak yang menempuh jalan studi ratusan kilometer dari pesisir Binamu, perbukitan Rumbia, Bangkala, hingga Tarowang — Asrama HPMT bukan sekadar petak kamar. Di sinilah tempat menyeduh kopi bersama saat larut malam, belajar kelompok di gazebo, dan saling menjaga di rantau.
            </p>

            <div className="mt-5 pt-4 border-t border-line space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Unit 01 (Putra):</span>
                <span className="font-semibold text-ink">Panakkukang, Makassar</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Unit 02 (Putri):</span>
                <span className="font-semibold text-ink">Minasa Upa, Makassar</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Pengelolaan:</span>
                <span className="font-semibold text-forest">Swakelola Mahasiswa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO GALLERY ── */}
      <div
        ref={galleryRef as React.RefObject<HTMLDivElement>}
        className={`pt-10 reveal-fade ${galleryVisible ? 'visible' : ''}`}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-forest block">
              Galeri Dokumentasi Wisma
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink mt-0.5">
              Potret Fisik &amp; Keseharian Ruang Warga
            </h2>
          </div>
          <span className="text-xs text-ink-muted hidden sm:inline italic">
            Klik foto untuk resolusi penuh ↗
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Lead Photo: Aspuri Gate */}
          <div className={`lg:col-span-7 reveal delay-100 ${galleryVisible ? 'visible' : ''}`}>
            <figure
              onClick={() => onSelectPhoto(gatePhoto)}
              className="h-full border border-line bg-white p-2.5 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-paper-muted relative">
                <img
                  alt="Gerbang resmi Aspuri HPMT Kabupaten Jeneponto di Makassar"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  src={gatePhoto.url}
                  loading="eager"
                />
                <div className="absolute top-3 left-3 bg-forest/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Foto Resmi Wisma
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-ink text-xs px-2.5 py-1 rounded-md border border-line font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Perbesar ↗
                </div>
              </div>
              <figcaption className="pt-3 px-1 pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-ink-muted">
                <span className="font-semibold text-ink group-hover:text-forest transition-colors">
                  {gatePhoto.title}
                </span>
                <span className="text-ink-subtle">{gatePhoto.location}</span>
              </figcaption>
            </figure>
          </div>

          {/* Secondary Photos */}
          <div className={`lg:col-span-5 flex flex-col gap-5 reveal delay-200 ${galleryVisible ? 'visible' : ''}`}>
            {/* Gazebo */}
            <figure
              onClick={() => onSelectPhoto(gazeboPhoto)}
              className="border border-line bg-white p-2.5 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-paper-muted relative">
                <img
                  alt="Suasana santai diskusi malam mahasiswi di gazebo pendopo asrama"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  src={gazeboPhoto.url}
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-white/90 text-ink text-xs px-2 py-0.5 rounded-md border border-line font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Perbesar ↗
                </div>
              </div>
              <figcaption className="pt-2.5 px-1 pb-0.5 text-xs text-ink-muted leading-tight">
                <span className="font-semibold text-ink block mb-0.5 group-hover:text-forest transition-colors">
                  {gazeboPhoto.title}
                </span>
                {gazeboPhoto.caption}
              </figcaption>
            </figure>

            {/* Split row: Yard & Side */}
            <div className="grid grid-cols-2 gap-4">
              <figure
                onClick={() => onSelectPhoto(yardPhoto)}
                className="border border-line bg-white p-2 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-paper-muted relative">
                  <img
                    alt="Pekarangan dan fasad bangunan asrama"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    src={yardPhoto.url}
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-2 px-0.5 text-[11px] text-ink-subtle leading-tight group-hover:text-ink transition-colors font-medium">
                  {yardPhoto.title}
                </figcaption>
              </figure>

              <figure
                onClick={() => onSelectPhoto(sidePhoto)}
                className="border border-line bg-white p-2 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-paper-muted relative">
                  <img
                    alt="Lorong teras samping dan parkir kendaraan"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    src={sidePhoto.url}
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-2 px-0.5 text-[11px] text-ink-subtle leading-tight group-hover:text-ink transition-colors font-medium">
                  {sidePhoto.title}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
