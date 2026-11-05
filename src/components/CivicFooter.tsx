import React from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const CivicFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-line bg-[#f2eee3] text-ink-muted text-xs pt-14 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-line">
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <img
                alt="Logo HPMT Asrama"
                className="w-10 h-10 object-contain rounded-md border border-line bg-white p-1"
                src={OFFICIAL_LOGOS.seal}
                width={40}
                height={40}
              />
              <div>
                <span className="font-serif text-base font-bold text-ink block leading-none">
                  BK Asrama HPMT Jeneponto
                </span>
                <span className="text-[11px] text-ink-subtle mt-0.5 block">Kota Makassar, Sulawesi Selatan</span>
              </div>
            </div>
            <p className="text-ink/80 leading-relaxed text-xs max-w-sm">
              Wadah berhimpun dan bernaung mahasiswa Kabupaten Jeneponto (Butta Turatea) yang menempuh pendidikan di Kota Makassar. Berakar pada kebersamaan tulus, kemandirian pemuda, dan tanggung jawab kultural.
            </p>
            <p className="font-serif italic text-forest text-xs pt-1">
              “Siri' na Pacce ri Butta Turatea — Menjaga Martabat dan Solidaritas di Tanah Perantauan.”
            </p>
            <div className="p-3 bg-white/70 border border-line rounded-lg text-[11px] text-ink/75 leading-relaxed">
              <strong className="text-forest font-semibold block mb-0.5">Pengurus Besar HPMT:</strong>
              Website resmi Badan Khusus Asrama PB HPMT (Himpunan Pelajar Mahasiswa Turatea) Kabupaten Jeneponto, Sulawesi Selatan di Kota Makassar.
            </div>
          </div>

          {/* Col 2: Alamat Rinci */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-bold text-ink uppercase tracking-wider block text-xs mb-2">
              Alamat Resmi Dua Wisma
            </span>
            <div className="space-y-4">
              <div className="p-3 bg-white/60 border border-line rounded-lg">
                <strong className="text-forest font-serif block text-[13px] mb-1">Unit Asrama Putra (Aspura):</strong>
                <p className="text-ink/80 leading-relaxed mb-1.5">
                  Jl. Anggrek I No. 15, Paropo, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90233
                </p>
                <a
                  href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-semibold hover:underline text-[11px] inline-flex items-center gap-1"
                >
                  <span>Buka Titik Resmi ASPURA di Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="p-3 bg-white/60 border border-line rounded-lg">
                <strong className="text-[#8f5727] font-serif block text-[13px] mb-1">Unit Asrama Putri (Aspuri):</strong>
                <p className="text-ink/80 leading-relaxed mb-1.5">
                  Jl. Minasa Upa No. 9 Blok B1, Karunrung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
                </p>
                <a
                  href="https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8f5727] font-semibold hover:underline text-[11px] inline-flex items-center gap-1"
                >
                  <span>Buka Titik Resmi ASPURI di Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Arsip & Navigasi */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold text-ink uppercase tracking-wider block text-xs mb-2">
              Indeks Halaman
            </span>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#">
                  Halaman Muka (Beranda)
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#dua-wisma">
                  Direktori Wisma Aspura &amp; Aspuri
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#kehidupan-fasilitas">
                  Daftar Fasilitas &amp; Iuran Warga
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#manifesto-filosofi">
                  Falsafah Luhur Siri' na Pacce
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#alur-pendaftaran">
                  Tanya Jawab Seputar Asrama
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors inline-block" href="#kontak-silaturahmi">
                  Kontak WhatsApp Pengurus
                </a>
              </li>
              <li className="pt-2 border-t border-line/60">
                <a
                  className="text-forest font-semibold hover:underline inline-flex items-center gap-1"
                  href="https://www.instagram.com/asrama.hpmt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Instagram @asrama.hpmt</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-subtle gap-3">
          <p>
            © {new Date().getFullYear()} BK Asrama PB HPMT Jeneponto di Makassar. Menjunjung Tinggi Siri' na Pacce.
          </p>
          <div className="flex items-center gap-3">
            <span>PB HPMT Jeneponto</span>
            <span className="text-line" aria-hidden="true">•</span>
            <span>Makassar, Sulawesi Selatan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
