import React, { useState } from 'react';
import { DORMITORY_UNITS } from '../data/dormitoryData.ts';
import { generateWhatsAppUrl } from '../utils/asrama.ts';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

interface WismaDirectoryProps {
  onSelectUnitForRegistration: (unit: 'aspura' | 'aspuri') => void;
}

export const WismaDirectory: React.FC<WismaDirectoryProps> = ({ onSelectUnitForRegistration }) => {
  const [activeMapUnit, setActiveMapUnit] = useState<'aspura' | 'aspuri' | null>(null);
  const { ref: headerRef, visible: headerVisible } = useScrollReveal({ threshold: 0.05 });

  const aspura = DORMITORY_UNITS.find((u) => u.id === 'aspura')!;
  const aspuri = DORMITORY_UNITS.find((u) => u.id === 'aspuri')!;

  const aspuraWaText = "Tabe' Pengurus Aspura HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putra.";
  const aspuriWaText = "Tabe' Pengurus Aspuri HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putri.";

  return (
    <section
      className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 reveal ${
        headerVisible ? 'visible' : ''
      }`}
      id="dua-wisma"
      ref={headerRef as React.RefObject<HTMLElement>}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-line gap-4 mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-1">
            Dua Unit Domisili Mahasiswa
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-ink font-bold">
            Buku Direktori Wisma Asrama
          </h2>
        </div>
        <p className="text-sm text-ink/80 max-w-lg leading-relaxed">
          Pengelolaan asrama dibagi menjadi dua lokasi independen untuk menjaga ketertiban, kenyamanan, dan privasi warga putra maupun putri.
        </p>
      </div>

      {/* Two Modern Cards Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* ── ASPURA CARD ── */}
        <div className="bg-white/90 border border-line rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-line pb-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-forest/10 text-forest uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-forest" />
                {aspura.code} • Wisma Putra
              </span>
              <span className="text-xs text-ink-subtle font-medium">{aspura.locationArea}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-bold mb-2.5">
              {aspura.name}
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed mb-5">
              {aspura.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {aspura.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-xs px-3 py-1 rounded-md bg-paper border border-line text-ink-muted font-medium"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Metadata Table */}
            <dl className="text-xs divide-y divide-line/70 border-t border-b border-line mb-6">
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Alamat Lengkap</dt>
                <dd className="text-xs text-ink font-medium sm:text-right max-w-sm leading-snug">
                  {aspura.fullAddress}
                </dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Titik Google Maps</dt>
                <dd className="text-xs font-semibold text-forest sm:text-right">
                  <a
                    href={aspura.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink inline-flex items-center gap-1"
                  >
                    <span>Aspura hpmt kab jeneponto ↗</span>
                  </a>
                </dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Titik Patokan</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspura.landmark}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Keamanan &amp; Jam Malam</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspura.curfewAndSecurity}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Kapasitas Kamar</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspura.roomCapacity}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-forest">Narahubung</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspura.coordinatorTitle}</dd>
              </div>
            </dl>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3">
            <a
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-emerald-800/10 hover:bg-emerald-800/20 text-emerald-900 border border-emerald-800/20 text-xs sm:text-sm font-semibold transition-all"
              href={generateWhatsAppUrl(aspura.whatsappNumber, aspuraWaText)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Hubungi Pengurus Aspura via WhatsApp</span>
              <span className="font-mono text-xs">{aspura.coordinatorPhone} →</span>
            </a>

            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                onClick={() => onSelectUnitForRegistration('aspura')}
                className="flex-1 min-h-[46px] py-2.5 px-4 text-center text-xs sm:text-sm font-bold bg-forest text-paper hover:bg-forest-deep rounded-lg transition-all shadow-xs cursor-pointer"
              >
                Isi Formulir Minat Aspura →
              </button>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                <button
                  type="button"
                  onClick={() => setActiveMapUnit(activeMapUnit === 'aspura' ? null : 'aspura')}
                  className="min-h-[46px] px-3.5 py-2 text-center text-xs border border-line bg-white hover:border-forest text-ink hover:text-forest rounded-lg transition-colors cursor-pointer"
                >
                  {activeMapUnit === 'aspura' ? 'Tutup Peta' : 'Lihat Peta'}
                </button>
                <a
                  href={aspura.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] flex items-center justify-center px-3.5 py-2 text-center text-xs border border-forest/30 bg-forest/5 hover:bg-forest hover:text-paper text-forest font-semibold rounded-lg transition-colors"
                >
                  Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── ASPURI CARD ── */}
        <div className="bg-white/90 border border-line rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-line pb-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#8f5727]/10 text-[#8f5727] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#8f5727]" />
                {aspuri.code} • Wisma Putri
              </span>
              <span className="text-xs text-ink-subtle font-medium">{aspuri.locationArea}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-bold mb-2.5">
              {aspuri.name}
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed mb-5">
              {aspuri.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {aspuri.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-xs px-3 py-1 rounded-md bg-paper border border-line text-ink-muted font-medium"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Metadata Table */}
            <dl className="text-xs divide-y divide-line/70 border-t border-b border-line mb-6">
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Alamat Lengkap</dt>
                <dd className="text-xs text-ink font-medium sm:text-right max-w-sm leading-snug">
                  {aspuri.fullAddress}
                </dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Titik Google Maps</dt>
                <dd className="text-xs font-semibold text-[#8f5727] sm:text-right">
                  <a
                    href={aspuri.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink inline-flex items-center gap-1"
                  >
                    <span>ASPURI HPMT Jeneponto ↗</span>
                  </a>
                </dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Titik Patokan</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspuri.landmark}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Keamanan &amp; Jam Malam</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspuri.curfewAndSecurity}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Kapasitas Kamar</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspuri.roomCapacity}</dd>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-xs uppercase font-bold tracking-wider text-[#8f5727]">Narahubung</dt>
                <dd className="text-xs text-ink font-medium sm:text-right">{aspuri.coordinatorTitle}</dd>
              </div>
            </dl>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3">
            <a
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-emerald-800/10 hover:bg-emerald-800/20 text-emerald-900 border border-emerald-800/20 text-xs sm:text-sm font-semibold transition-all"
              href={generateWhatsAppUrl(aspuri.whatsappNumber, aspuriWaText)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Hubungi Pengurus Aspuri via WhatsApp</span>
              <span className="font-mono text-xs">{aspuri.coordinatorPhone} →</span>
            </a>

            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                onClick={() => onSelectUnitForRegistration('aspuri')}
                className="flex-1 min-h-[46px] py-2.5 px-4 text-center text-xs sm:text-sm font-bold bg-forest text-paper hover:bg-forest-deep rounded-lg transition-all shadow-xs cursor-pointer"
              >
                Isi Formulir Minat Aspuri →
              </button>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                <button
                  type="button"
                  onClick={() => setActiveMapUnit(activeMapUnit === 'aspuri' ? null : 'aspuri')}
                  className="min-h-[46px] px-3.5 py-2 text-center text-xs border border-line bg-white hover:border-forest text-ink hover:text-forest rounded-lg transition-colors cursor-pointer"
                >
                  {activeMapUnit === 'aspuri' ? 'Tutup Peta' : 'Lihat Peta'}
                </button>
                <a
                  href={aspuri.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] flex items-center justify-center px-3.5 py-2 text-center text-xs border border-forest/30 bg-forest/5 hover:bg-forest hover:text-paper text-forest font-semibold rounded-lg transition-colors"
                >
                  Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Interactive Map */}
      {activeMapUnit && (
        <div className="mt-8 border border-line bg-white p-5 rounded-2xl shadow-xs animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-line gap-2 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest block">
                Peta Lokasi Resmi
              </span>
              <h4 className="font-serif text-lg font-semibold text-ink">
                {activeMapUnit === 'aspuri'
                  ? 'ASPURI HPMT Jeneponto — Minasa Upa, Rappocini'
                  : 'ASPURA HPMT Jeneponto — Jl. Anggrek I No. 15, Panakkukang'}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={activeMapUnit === 'aspuri' ? aspuri.googleMapsUrl : aspura.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-forest text-paper text-xs font-semibold rounded-lg hover:bg-forest-deep transition-colors inline-flex items-center gap-1.5"
              >
                <span>Buka di Google Maps Langsung</span>
                <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveMapUnit(null)}
                className="px-3 py-2 border border-line bg-paper text-xs rounded-lg hover:bg-paper-muted cursor-pointer font-medium"
              >
                Tutup
              </button>
            </div>
          </div>

          <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-paper-muted border border-line rounded-xl overflow-hidden relative">
            <iframe
              title={`Peta Lokasi ${activeMapUnit === 'aspuri' ? 'ASPURI' : 'ASPURA'} HPMT Jeneponto`}
              src={activeMapUnit === 'aspuri' ? aspuri.embedMapUrl : aspura.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </section>
  );
};
