import React from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const CivicFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-line bg-paper-subtle text-ink-muted text-xs pt-12 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-line">
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                alt="Logo HPMT Asrama"
                className="w-9 h-9 object-contain rounded border border-line bg-white p-0.5"
                src={OFFICIAL_LOGOS.seal}
                width={36}
                height={36}
              />
              <div>
                <span className="font-serif text-base font-semibold text-ink block leading-none">
                  Asrama Mahasiswa HPMT Jeneponto
                </span>
                <span className="text-[11px] text-ink-subtle">Kota Makassar, Sulawesi Selatan</span>
              </div>
            </div>
            <p className="text-ink-muted leading-relaxed text-[11px] max-w-sm">
              Wadah berhimpun dan bernaung mahasiswa Kabupaten Jeneponto yang menempuh pendidikan di Kota Makassar.
              Berakar pada kebersamaan tulus, kemandirian pemuda, dan tanggung jawab kultural Butta Turatea.
            </p>
            <p className="font-serif italic text-forest text-xs pt-1">
              “Siri' na Pacce ri Butta Turatea — Martabat dan Kebersamaan di Tanah Rantau.”
            </p>
          </div>

          {/* Col 2: Alamat Rinci */}
          <div className="md:col-span-4 space-y-2 text-[11px]">
            <span className="font-semibold text-ink uppercase tracking-wider block text-xs mb-2">
              Alamat Wisma
            </span>
            <div className="space-y-3">
              <div>
                <strong className="text-ink font-serif block">Unit Asrama Putra (Aspura):</strong>
                <p className="text-ink-muted">
                  Jl. Anggrek I No. 15, Paropo, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90233
                </p>
                <a
                  href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-medium hover:underline text-[10px]"
                >
                  Buka Titik Resmi ASPURA di Google Maps ↗
                </a>
              </div>
              <div>
                <strong className="text-ink font-serif block">Unit Asrama Putri (Aspuri):</strong>
                <p className="text-ink-muted">
                  Jl. Minasa Upa No. 9 Blok B1, Karunrung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
                </p>
                <a
                  href="https://www.google.com/maps/place/Asrama+Putri+Hpmt+kab.+Jeneponto/@-5.185916,119.4510272,17z/data=!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.185916!4d119.4510272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-medium hover:underline text-[10px]"
                >
                  Buka Titik Resmi ASPURI di Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Arsip & Navigasi */}
          <div className="md:col-span-3 space-y-2 text-[11px]">
            <span className="font-semibold text-ink uppercase tracking-wider block text-xs mb-2">
              Indeks Informasi
            </span>
            <ul className="space-y-1.5">
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#">
                  Halaman Muka (Beranda)
                </a>
              </li>
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#dua-wisma">
                  Direktori Wisma Aspura &amp; Aspuri
                </a>
              </li>
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#kehidupan-fasilitas">
                  Tabel Fasilitas &amp; Swakelola
                </a>
              </li>
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#manifesto-filosofi">
                  Filosofi Siri' na Pacce
                </a>
              </li>
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#alur-pendaftaran">
                  Tanya Jawab &amp; Alur Warga
                </a>
              </li>
              <li>
                <a className="hover:text-forest underline underline-offset-2" href="#kontak-silaturahmi">
                  Kontak Pengurus WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="hover:text-forest underline underline-offset-2"
                  href="https://www.instagram.com/asrama.hpmt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram @asrama.hpmt ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-subtle gap-2">
          <p>
            © Asrama Mahasiswa HPMT Jeneponto di Makassar. Rawat Persaudaraan, Junjung Siri' na Pacce.
          </p>
          <div className="flex items-center gap-3">
            <span>Himpunan Pelajar Mahasiswa Turatea</span>
            <span className="text-line" aria-hidden="true">•</span>
            <span>Makassar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
