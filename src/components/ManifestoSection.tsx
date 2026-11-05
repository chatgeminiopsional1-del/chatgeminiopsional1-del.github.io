import React, { useState } from 'react';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'siri' | 'pacce'>('siri');
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="manifesto-filosofi"
      ref={ref as React.RefObject<HTMLElement>}
      className={`border-y border-line bg-gradient-to-b from-forest to-forest-deep text-paper py-16 sm:py-24 reveal-fade ${visible ? 'visible' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 reveal ${visible ? 'visible' : ''}`}>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              Falsafah Luhur Turatea
            </span>
            <h2 className="font-serif text-[28px] sm:text-4xl lg:text-5xl italic font-bold text-white leading-tight">
              "Siri' na Pacce ri Butta Turatea"
            </h2>
            <div className="w-20 h-0.5 bg-[#38bdf8]/40 mx-auto mt-5" aria-hidden="true" />
          </div>

          {/* Body Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] sm:text-base text-paper/90 leading-[1.75] font-normal">
            <div className={`reveal delay-100 ${visible ? 'visible' : ''}`}>
              <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-[#38bdf8] first-letter:font-bold first-letter:leading-none">
                Di tanah rantau Makassar, persaudaraan anak Jeneponto diuji oleh realitas studi yang mandiri dan keras. Di asrama inilah konsep <strong className="text-white font-semibold not-italic">Siri'</strong> (harga diri, integritas moral, dan rasa malu berbuat nista) serta <strong className="text-white font-semibold not-italic">Pacce</strong> (solidaritas pedih saat saudara tertimpa kesulitan) hidup dalam laku keseharian nyata.
              </p>
            </div>
            <div className={`reveal delay-200 ${visible ? 'visible' : ''}`}>
              <p>
                Ketika kiriman beras terlambat dari kampung, sepiring nasi dibagi bertiga di beranda wisma. Ketika tugas akhir dan skripsi membentur jalan buntu, para senior dan kawan sekamar mendampingi tanpa sekat feodal. Asrama bukan tempat berbisnis kos-kosan; asrama adalah kawah candradimuka agar generasi muda Turatea pulang dengan kehormatan utuh dan ilmu yang mengabdi pada rakyat.
              </p>
            </div>
          </div>

          {/* Interactive Philosophical Pillar Toggle */}
          <div className={`mt-10 pt-8 border-t border-white/10 reveal delay-300 ${visible ? 'visible' : ''}`}>
            {/* Tab buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5">
              <button
                type="button"
                onClick={() => setActiveTab('siri')}
                className={`min-h-[48px] px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer text-center rounded-lg ${
                  activeTab === 'siri'
                    ? 'bg-[#38bdf8] text-[#071d37] shadow-md'
                    : 'bg-white/10 text-paper/80 hover:bg-white/15 active:scale-[0.98]'
                }`}
              >
                Pilar I: Siri' (Integritas &amp; Kehormatan Diri)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pacce')}
                className={`min-h-[48px] px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer text-center rounded-lg ${
                  activeTab === 'pacce'
                    ? 'bg-[#38bdf8] text-[#071d37] shadow-md'
                    : 'bg-white/10 text-paper/80 hover:bg-white/15 active:scale-[0.98]'
                }`}
              >
                Pilar II: Pacce (Solidaritas Kemanusiaan)
              </button>
            </div>

            {/* Tab content */}
            <div className="bg-forest-deep/80 p-6 sm:p-8 border border-white/15 rounded-xl text-[14px] sm:text-[15px] leading-[1.7] text-paper/90 shadow-sm transition-all duration-200">
              {activeTab === 'siri' ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    <strong className="text-[#38bdf8] font-serif text-lg sm:text-xl font-bold">
                      Siri' na Sipakatau — Disiplin Moral &amp; Tanggung Jawab Belajar
                    </strong>
                  </div>
                  <p className="text-paper/85 text-[14px] sm:text-sm leading-relaxed mt-2">
                    Menjaga martabat nama baik keluarga dan Butta Turatea selama menuntut ilmu di Makassar. Warga asrama pantang bermalas-malasan, menolak keras perbuatan tercela, saling memanusiakan (sipakatau, sipakalebbi, sipakainga), serta bertekad merampungkan perkuliahan demi membahagiakan orang tua di kampung halaman.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    <strong className="text-[#38bdf8] font-serif text-lg sm:text-xl font-bold">
                      Pacce ri Butta Kalabbirang — Ikatan Rasa Senasib Sepenanggungan
                    </strong>
                  </div>
                  <p className="text-paper/85 text-[14px] sm:text-sm leading-relaxed mt-2">
                    Kesulitan satu saudara adalah rasa pedih bersama. Ketika ada kawan asrama tertimpa musibah sakit, kehabisan bekal, atau kendala registrasi kampus, segenap penghuni dan pengurus asrama bergerak menjadi garda terdepan keluarga di rantau untuk membantu tanpa pamrih.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-paper/60 uppercase tracking-widest gap-2">
            <span>Kolektivitas Warga Asrama</span>
            <span>Gotong Royong • Egaliter • Tanpa Senioritas Menindas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
