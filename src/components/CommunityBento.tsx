import React from 'react';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

export const CommunityBento: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="kehidupan-asrama"
      ref={ref as React.RefObject<HTMLElement>}
      className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20 border-t border-line/80 reveal ${
        visible ? 'visible' : ''
      }`}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-line gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/8 border border-forest/15 text-xs text-forest font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
            <span>Dinamika &amp; Kultur Warga</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-ink font-bold tracking-tight">
            Kehidupan, Kaderisasi, &amp; Persaudaraan di Rantau
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-ink-muted max-w-md leading-relaxed">
          Asrama bukan sekadar petak kamar tidur. Di sinilah ruang belajar sosial, pembentukan karakter kepemimpinan, dan ikatan kekeluargaan sesama mahasiswa asal Butta Turatea.
        </p>
      </div>

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Bento 1: Latihan Kepemimpinan Tingkat 1 (LK-1) — Large Feature Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl border border-line/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-forest/40 transition-all duration-200 group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-forest text-paper">
                Kaderisasi Resmi
              </span>
              <span className="text-[11px] font-mono text-ink-subtle">
                Tahunan • Angkatan Baru
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-forest transition-colors mb-2">
              Latihan Kepemimpinan Tingkat 1 (LK-1)
            </h3>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              Kawah candradimuka bagi setiap penghuni baru asrama. Membekali mahasiswa dengan wawasan kepemimpinan, dialektika pemikiran, adab bermasyarakat, dan peneguhan prinsip <em className="font-serif italic font-semibold text-forest">Siri' na Pacce</em>.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-subtle">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Materi Kritis &amp; Retorika
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Solidaritas Angkatan
            </span>
            <span className="font-semibold text-forest">Sertifikasi Kader HPMT</span>
          </div>
        </div>

        {/* Bento 2: Musyawarah Asrama & Rapat Kerja */}
        <div className="bg-white rounded-2xl border border-line/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-forest/40 transition-all duration-200 group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-paper-subtle text-forest border border-forest/15">
                Demokrasi Warga
              </span>
              <span className="text-xs font-mono text-ink-subtle">Muswa</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-ink group-hover:text-forest transition-colors mb-2">
              Musyawarah Asrama &amp; Raker
            </h3>
            <p className="text-xs text-ink/80 leading-relaxed">
              Setiap kebijakan tata tertib, jadwal piket kebersihan, dan evaluasi pengurus diputuskan bersama secara mufakat tanpa sekat feodalisme.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-line/60 text-[11px] font-semibold text-forest">
            Gotong Royong &amp; Akuntabilitas Terbuka →
          </div>
        </div>

        {/* Bento 3: Nilai Spiritual & Tradisi */}
        <div className="bg-forest text-paper rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/15 text-[#baeed9]">
                Tradisi &amp; Ukhuwah
              </span>
              <span className="text-[11px] text-paper/70 font-mono">12 Rabiul Awal</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
              Maulid Nabi &amp; Silaturahmi
            </h3>
            <p className="text-xs text-paper/85 leading-relaxed">
              Menghidupkan nilai-nilai keagamaan dan kebersamaan perantau. Dari peringatan Maulid Nabi, buka puasa bersama, hingga silaturahmi halal bihalal warga dan alumni.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-[#baeed9] font-medium">
            Memupuk Adab &amp; Nilai Moralitas
          </div>
        </div>

        {/* Bento 4: Belajar Bersama & Kebersamaan Sehari-hari */}
        <div className="md:col-span-2 lg:col-span-2 bg-paper-subtle rounded-2xl border border-line/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-forest/40 transition-all duration-200">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white text-ink border border-line">
                Suasana Komunal
              </span>
              <span className="text-xs text-ink-subtle">Teras &amp; Gazebo</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
              Belajar Santai, Diskusi Skripsi, &amp; Seduh Kopi Bersama
            </h3>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              Di saat mahasiswa perantau lain merasa kesepian di kamar indekos komersial, di Asrama HPMT selalu ada kawan sekampung untuk diajak berdiskusi tugas kuliah, berbagi lauk makanan, dan saling menyemangati hingga wisuda.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-line/70">
            <div className="bg-white p-2.5 rounded-lg border border-line/60 text-center">
              <span className="text-base sm:text-lg font-bold text-forest block">11</span>
              <span className="text-[10px] text-ink-subtle uppercase">Kecamatan Asal</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-line/60 text-center">
              <span className="text-base sm:text-lg font-bold text-forest block">24 Jam</span>
              <span className="text-[10px] text-ink-subtle uppercase">Wi-Fi Studi</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-line/60 text-center">
              <span className="text-base sm:text-lg font-bold text-forest block">0 Rp</span>
              <span className="text-[10px] text-ink-subtle uppercase">Sewa Bulanan</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-line/60 text-center">
              <span className="text-base sm:text-lg font-bold text-forest block">100%</span>
              <span className="text-[10px] text-ink-subtle uppercase">Keluarga Rantau</span>
            </div>
          </div>
        </div>

        {/* Bento 5: Kanal Instagram Resmi (@asramahpmt) */}
        <div className="md:col-span-1 lg:col-span-2 bg-white rounded-2xl border border-line/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-forest/40 transition-all duration-200">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-forest/10 text-forest">
                Dokumentasi Terkini
              </span>
              <span className="text-xs font-mono text-ink-subtle">Instagram</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-1.5">
              Ikuti Kabar &amp; Agenda Resmi @asramahpmt
            </h3>
            <p className="text-xs text-ink/80 leading-relaxed mb-4">
              Ketahui agenda pelantikan, informasi open recruitment, dan dokumentasi kegiatan warga langsung dari akun resmi pengurus asrama.
            </p>
          </div>

          <a
            href="https://www.instagram.com/asramahpmt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-paper hover:bg-forest hover:text-paper text-ink text-xs font-semibold border border-line transition-all duration-150 group/ig cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest group-hover/ig:text-paper" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Buka Instagram @asramahpmt</span>
            </span>
            <span aria-hidden="true" className="font-bold">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
