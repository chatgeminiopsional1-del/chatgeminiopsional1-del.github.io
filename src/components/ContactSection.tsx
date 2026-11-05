import React from 'react';
import { useScrollReveal } from '../utils/useScrollReveal.ts';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const ContactSection: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });
  return (
    <section className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 reveal ${visible ? "visible" : ""}`} id="kontak-silaturahmi" ref={ref as React.RefObject<HTMLElement>}>
      <div className="border border-line bg-white rounded-xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-px bg-forest" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-forest block">
                Pintu Silaturahmi Terbuka
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-ink font-bold mb-3 leading-tight">
              Kontak Pengurus, Sowan, &amp; Kunjungan Sanak Saudara
            </h2>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed max-w-xl mb-6">
              Apakah Anda calon mahasiswa asal Butta Turatea yang baru tiba di Makassar? Atau orang tua dan alumni yang ingin bertandang silaturahmi ke wisma? Pengurus asrama senantiasa menerima kedatangan Anda dengan tangan terbuka.
            </p>

            {/* Structured Contact Units for Aspura & Aspuri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* ASPURA Card */}
              <div className="p-5 border border-line bg-paper/60 rounded-xl flex flex-col justify-between hover:border-forest/40 transition-all duration-150">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-forest">
                      Unit 01 • ASPURA
                    </span>
                    <span className="text-xs text-ink-subtle">Panakkukang</span>
                  </div>
                  <strong className="text-sm font-bold text-ink block">
                    Koordinator Asrama Putra
                  </strong>
                  <span className="text-sm text-forest font-bold block mt-1 font-mono">
                    +62 852-4038-9682
                  </span>
                </div>
                <div className="space-y-2 pt-3 border-t border-line/60">
                  <a
                    className="flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 bg-forest text-paper text-xs sm:text-sm font-semibold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all shadow-xs"
                    href="https://wa.me/6285240389682?text=Tabe'%20Pengurus%20Aspura%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="flex items-center justify-between w-full min-h-[40px] px-4 py-2 bg-white border border-line hover:border-forest text-ink hover:text-forest text-xs font-medium rounded-lg transition-colors"
                    href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Titik Lokasi Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* ASPURI Card */}
              <div className="p-5 border border-line bg-paper/60 rounded-xl flex flex-col justify-between hover:border-forest/40 transition-all duration-150">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8f5727]">
                      Unit 02 • ASPURI
                    </span>
                    <span className="text-xs text-ink-subtle">Minasa Upa</span>
                  </div>
                  <strong className="text-sm font-bold text-ink block">
                    Koordinator Asrama Putri
                  </strong>
                  <span className="text-sm text-[#8f5727] font-bold block mt-1 font-mono">
                    +62 853-9714-2677
                  </span>
                </div>
                <div className="space-y-2 pt-3 border-t border-line/60">
                  <a
                    className="flex items-center justify-between w-full min-h-[44px] px-4 py-2.5 bg-forest text-paper text-xs sm:text-sm font-semibold rounded-lg hover:bg-forest-deep active:scale-[0.98] transition-all shadow-xs"
                    href="https://wa.me/6285397142677?text=Tabe'%20Pengurus%20Aspuri%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="flex items-center justify-between w-full min-h-[40px] px-4 py-2 bg-white border border-line hover:border-forest text-ink hover:text-forest text-xs font-medium rounded-lg transition-colors"
                    href="https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Titik Lokasi Google Maps</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel note from Jeneponto */}
            <div className="mt-8 pt-5 border-t border-line text-xs sm:text-sm text-ink-muted">
              <span className="font-bold text-ink block mb-1">Panduan Rute Perjalanan dari Jeneponto:</span>
              <p className="leading-relaxed text-ink/85">
                Dari wilayah Kab. Jeneponto (Binamu / Kelara / Rumbia / Bangkala / Tarowang), tumpangi armada angkutan umum ke Makassar. Turun di Terminal Mallengkerang atau persimpangan Alauddin / Pettarani, kemudian lanjutkan dengan transportasi daring langsung menuju alamat wisma yang dituju.
              </p>
            </div>
          </div>

          {/* Official Instagram & Organizational Affiliation */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-8">
            <div className="p-5 rounded-xl bg-paper/50 border border-line mb-6">
              <div className="flex items-start gap-3 mb-3">
                <img
                  alt="Logo HPMT"
                  className="w-11 h-11 object-contain rounded-md border border-line p-1 bg-white"
                  src={OFFICIAL_LOGOS.seal}
                  width={44}
                  height={44}
                />
                <div>
                  <span className="text-xs font-bold text-ink block">Kanal Dokumentasi Visual</span>
                  <a
                    className="font-mono text-xs text-forest hover:underline font-semibold inline-flex items-center gap-1 mt-0.5"
                    href="https://www.instagram.com/asrama.hpmt/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>@asrama.hpmt</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <p className="text-xs text-ink/80 leading-relaxed mb-4">
                Ikuti liputan kegiatan kultural, buka puasa bersama, silaturahmi warga, serta dokumentasi arsip keseharian para perantau Jeneponto melalui akun Instagram resmi asrama.
              </p>
              <a
                href="https://www.instagram.com/asrama.hpmt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white border border-line rounded-lg text-xs font-semibold text-ink hover:text-forest hover:border-forest transition-colors shadow-2xs"
              >
                <span>Buka Instagram @asrama.hpmt</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="p-5 rounded-xl bg-forest/5 border border-forest/15">
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest block mb-1">
                Keterangan Keabsahan Organisasi
              </span>
              <p className="text-xs text-ink/80 leading-relaxed">
                BK Asrama HPMT berada di bawah naungan <strong>Pengurus Besar Himpunan Pelajar Mahasiswa Turatea (PB HPMT Jeneponto)</strong> yang didirikan sejak 1964 sebagai wadah resmi kaum muda Butta Turatea di perantauan Makassar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
