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
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { ref: galleryRef, visible: galleryVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-10 pb-16 sm:pb-24">
      {/* ── Disambiguation & Civic Kicker ── */}
      <div className={`reveal ${heroVisible ? 'visible' : ''} mb-4`}>
        <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-forest/8 border border-forest/15 text-xs text-forest">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
          </span>
          <span className="font-bold tracking-wide uppercase text-[11px]">
            BK Asrama PB HPMT Jeneponto (Makassar)
          </span>
          <span className="text-forest/40 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-forest/85 text-[11px]">
            Himpunan Pelajar Mahasiswa Turatea (Sulsel) — <em>Bukan HPMT Tabalong</em>
          </span>
        </div>
      </div>

      {/* ── Headline & Highlight Area ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-line items-start">
        {/* Left Column: Title & CTA */}
        <div className={`lg:col-span-7 xl:col-span-8 reveal delay-100 ${heroVisible ? 'visible' : ''}`}>
          <h1 className="font-serif text-[28px] sm:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.12] sm:leading-[1.08] tracking-tight font-bold text-ink">
            Rumah Bersama Mahasiswa Turatea di Perantauan Makassar.
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-ink/80 max-w-2xl leading-relaxed">
            Wadah berteduh, berhimpun, dan saling memikul nasib di tanah rantau. Bebas biaya sewa kamar bulanan sampai lulus kuliah, dikelola mandiri secara swadaya berlandaskan falsafah luhur <em className="font-serif italic font-semibold text-forest">Siri' na Pacce ri Butta Turatea</em>.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenRegistration}
              className="inline-flex items-center justify-center gap-2 min-h-[46px] sm:min-h-[48px] px-5 sm:px-6 py-3 bg-forest text-paper text-sm font-semibold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <span>Ajukan Sowan / Pendaftaran</span>
              <span aria-hidden="true" className="text-base font-bold">→</span>
            </button>
            <a
              href="#dua-wisma"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] sm:min-h-[48px] px-4 sm:px-5 py-3 border border-line bg-white text-ink text-sm font-medium rounded-lg hover:border-forest hover:text-forest active:scale-[0.98] transition-all duration-150 shadow-2xs w-full sm:w-auto"
            >
              <span>Lihat Wisma Aspura &amp; Aspuri</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="https://wa.me/6285240389682?text=Tabe'%20Pengurus%20Asrama%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20info%20penerimaan%20asrama."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-forest hover:underline"
            >
              <span>Tanya Langsung via WhatsApp</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* 4 Architectural Pillar Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-7 sm:mt-9 pt-6 sm:pt-7 border-t border-line">
            <div className="p-3.5 rounded-lg bg-white border border-line/80 hover:border-forest/40 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest block">2 Wisma Resmi</span>
              <span className="text-sm font-bold text-ink mt-0.5 block">Aspura &amp; Aspuri</span>
              <span className="text-[11px] text-ink-subtle mt-0.5 block">Panakkukang &amp; Minasa Upa</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-line/80 hover:border-forest/40 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest block">Bebas Sewa</span>
              <span className="text-sm font-bold text-ink mt-0.5 block">Sampai Lulus</span>
              <span className="text-[11px] text-ink-subtle mt-0.5 block">1x Biaya Fasilitas Awal</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-line/80 hover:border-forest/40 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest block">Kapasitas Kamar</span>
              <span className="text-sm font-bold text-ink mt-0.5 block">Nyaman &amp; Tertib</span>
              <span className="text-[11px] text-ink-subtle mt-0.5 block">Aspura 1, Aspuri maks 2</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-line/80 hover:border-forest/40 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest block">Falsafah Luhur</span>
              <span className="text-sm font-bold text-forest mt-0.5 block font-serif italic">Siri' na Pacce</span>
              <span className="text-[11px] text-ink-subtle mt-0.5 block">Solidaritas Rantau Turatea</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Archival Card */}
        <div className={`lg:col-span-5 xl:col-span-4 reveal delay-200 ${heroVisible ? 'visible' : ''}`}>
          <div className="bg-white border border-line rounded-xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest block">
                Arsip &amp; Entitas Resmi
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-paper-subtle rounded text-ink-muted font-mono font-medium">
                PB HPMT 1964
              </span>
            </div>

            <p className="text-sm text-ink/85 leading-[1.7]">
              Bagi anak-anak yang menempuh jalan studi ratusan kilometer dari pesisir Binamu, perbukitan Rumbia, Kelara, Bangkala, Batang, hingga Tarowang — Asrama HPMT bukan sekadar petak kamar. Di sinilah tempat menyeduh kopi bersama saat larut malam, belajar kelompok di gazebo pekarangan, dan saling menjaga kehormatan di tanah perantauan Makassar.
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
                <span className="text-ink-muted">Sistem Asrama:</span>
                <span className="font-semibold text-forest">Swakelola Komunal Nirlaba</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-muted">Afiliasi Induk:</span>
                <span className="font-semibold text-ink">PB HPMT Kab. Jeneponto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO GALLERY SECTION ── */}
      <div
        ref={galleryRef as React.RefObject<HTMLDivElement>}
        className={`pt-12 reveal-fade ${galleryVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-forest block mb-1">
              Dokumentasi Fisik Wisma
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Potret Asli Lingkungan &amp; Ruang Hidup Warga
            </h2>
          </div>
          <span className="text-xs text-ink-muted italic">
            Klik foto untuk memperbesar resolusi penuh ↗
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Lead Photo: Aspuri Gate */}
          <div className={`lg:col-span-7 reveal delay-100 ${galleryVisible ? 'visible' : ''}`}>
            <figure
              onClick={() => onSelectPhoto(gatePhoto)}
              className="h-full border border-line bg-white p-2.5 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-paper-muted relative">
                <img
                  alt="Gerbang resmi Aspuri HPMT Kabupaten Jeneponto di Makassar"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
              className="border border-line bg-white p-2.5 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-paper-muted relative">
                <img
                  alt="Suasana santai diskusi malam mahasiswi di gazebo pendopo asrama"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
                className="border border-line bg-white p-2 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-paper-muted relative">
                  <img
                    alt="Pekarangan dan fasad bangunan asrama"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
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
                className="border border-line bg-white p-2 rounded-xl group cursor-pointer hover:border-forest/50 hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-paper-muted relative">
                  <img
                    alt="Lorong teras samping dan parkir kendaraan"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
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
