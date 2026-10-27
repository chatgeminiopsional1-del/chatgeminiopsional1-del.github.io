import React from 'react';
import { useScrollReveal } from '../utils/useScrollReveal.ts';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const ContactSection: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });
  return (
    <section className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 reveal ${visible ? "visible" : ""}`} id="kontak-silaturahmi" ref={ref as React.RefObject<HTMLElement>}>
      <div className="border border-line bg-white/90 rounded-2xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-px bg-forest" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-forest block">
                Pintu Selalu Terbuka
              </span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-3xl text-ink font-bold mb-3 leading-tight">
              Silaturahmi, Pendaftaran Kamar, &amp; Kunjungan Sanak Saudara
            </h2>
            <p className="text-[14px] sm:text-sm text-ink/85 leading-[1.65] max-w-xl mb-6">
              Apakah Anda mahasiswa baru asal Butta Turatea yang baru tiba di Makassar? Atau orang tua dan alumni yang
              ingin bertandang silaturahmi? Narahubung pengurus asrama siap menerima Anda dengan tangan terbuka.
            </p>

            {/* Structured Contact Units for Aspura & Aspuri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
              {/* ASPURA Card */}
              <div className="p-5 border border-line bg-paper/60 rounded-xl flex flex-col justify-between hover:border-forest/40 transition-all">
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-forest">
                      Unit 01 • ASPURA
                    </span>
                    <span className="text-[11px] text-ink-subtle">Panakkukang</span>
                  </div>
                  <strong className="text-[14px] sm:text-xs font-bold text-ink block">
                    Koordinator Asrama Putra
                  </strong>
                  <span className="text-[13px] sm:text-[11px] text-forest font-bold block mt-0.5 font-mono">
                    +62 852-4038-9682
                  </span>
                </div>
                <div className="space-y-2 pt-2.5 border-t border-line/60">
                  <a
                    className="flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 bg-forest text-paper text-xs sm:text-sm font-semibold rounded-lg hover:bg-forest-deep transition-colors shadow-xs"
                    href="https://wa.me/6285240389682?text=Tabe'%20Pengurus%20Aspura%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <span className="text-[11px]" aria-hidden="true">→</span>
                  </a>
                  <a
                    className="flex items-center justify-between w-full min-h-[40px] px-4 py-2 bg-white border border-line hover:border-forest text-ink hover:text-forest text-xs font-medium rounded-lg transition-colors"
                    href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Titik Lokasi Google Maps</span>
                    <span className="text-[10px]" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* ASPURI Card */}
              <div className="p-5 border border-line bg-paper/60 rounded-xl flex flex-col justify-between hover:border-forest/40 transition-all">
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-forest">
                      Unit 02 • ASPURI
                    </span>
                    <span className="text-[11px] text-ink-subtle">Minasa Upa</span>
                  </div>
                  <strong className="text-[14px] sm:text-xs font-bold text-ink block">
                    Koordinator Asrama Putri
                  </strong>
                  <span className="text-[13px] sm:text-[11px] text-forest font-bold block mt-0.5 font-mono">
                    +62 853-9714-2677
                  </span>
                </div>
                <div className="space-y-2 pt-2.5 border-t border-line/60">
                  <a
                    className="flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 bg-forest text-paper text-xs sm:text-sm font-semibold rounded-lg hover:bg-forest-deep transition-colors shadow-xs"
                    href="https://wa.me/6285397142677?text=Tabe'%20Pengurus%20Aspuri%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <span className="text-[11px]" aria-hidden="true">→</span>
                  </a>
                  <a
                    className="flex items-center justify-between w-full min-h-[40px] px-4 py-2 bg-white border border-line hover:border-forest text-ink hover:text-forest text-xs font-medium rounded-lg transition-colors"
                    href="https://www.google.com/maps/place/Asrama+Putri+Hpmt+kab.+Jeneponto/@-5.185916,119.4510272,17z/data=!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.185916!4d119.4510272"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Titik Lokasi Google Maps</span>
                    <span className="text-[10px]" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel note from Jeneponto */}
            <div className="mt-6 pt-4 border-t border-line text-xs sm:text-sm text-ink-muted">
              <span className="font-bold text-ink block mb-1">Akses Perjalanan dari Jeneponto:</span>
              <p className="text-[13.5px] sm:text-xs leading-relaxed text-ink/85">
                Dari Kab. Jeneponto (Binamu / Rumbia / Bangkala / Tarowang), naik angkutan penumpang umum jurusan Makassar. Turun di Terminal Mallengkerang atau persimpangan Alauddin / Pettarani, kemudian lanjutkan dengan ojek daring langsung ke titik wisma.
              </p>
            </div>
          </div>

          {/* Official Instagram Feed Pointer */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-start gap-3 mb-3">
              <img
                alt="Logo HPMT"
                className="w-10 h-10 object-contain rounded border border-line p-0.5 bg-white"
                src={OFFICIAL_LOGOS.seal}
                width={40}
                height={40}
              />
              <div>
                <span className="text-xs font-semibold text-ink block">Kanal Dokumentasi Visual</span>
                <a
                  className="font-mono text-xs text-forest hover:underline font-medium inline-flex items-center gap-1"
                  href="https://www.instagram.com/asrama.hpmt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>@asrama.hpmt</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed mb-4">
              Ikuti kabar kegiatan kultural, buka puasa bersama, kerja bakti lingkungan, serta dokumentasi arsip keseharian para perantau Jeneponto melalui akun Instagram resmi asrama.
            </p>
            <a
              className="inline-block text-xs font-semibold text-forest underline underline-offset-4 hover:text-forest-deep"
              href="https://www.instagram.com/asrama.hpmt/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Kunjungi profil Instagram Asrama HPMT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
