import { useScrollReveal } from '../utils/useScrollReveal.ts';
import React, { useState, useMemo } from 'react';
import { FACILITIES_DATA } from '../data/dormitoryData.ts';
import { filterFacilities } from '../utils/asrama.ts';

export const FacilitiesLedger: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.05 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFacilities = useMemo(() => {
    return filterFacilities(FACILITIES_DATA, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  return (
    <section className={`border-t border-line bg-paper-subtle py-16 sm:py-24 reveal ${visible ? "visible" : ""}`} id="kehidupan-fasilitas" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-1">
              Transparansi Sarana Hidup
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ink font-bold leading-tight">
              Kebutuhan Pokok &amp; Iuran Swakelola Warga
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 bg-white border border-forest/20 rounded-xl shadow-xs text-sm text-ink/85 leading-relaxed">
              <strong className="text-forest font-bold text-base block mb-2">
                Ketentuan Masuk &amp; Status Biaya Wisma:
              </strong>
              <p className="mb-3 text-[14px]">
                Prinsip tinggal di Asrama HPMT adalah nirlaba dan berasaskan kekeluargaan. Syarat masuk adalah kontribusi perawatan fasilitas sebesar <strong className="text-ink font-bold">Rp1.500.000</strong> yang dibayarkan satu kali saat resmi diterima, dan warga tidak dipungut biaya sewa kamar bulanan sampai lulus kuliah. Seluruh dana tersebut dialokasikan penuh untuk pemeliharaan dan pengadaan fasilitas fisik asrama bersama.
              </p>
              <div className="pt-2.5 border-t border-forest/15 text-xs text-forest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Ketentuan Semester: Terbuka maksimal untuk mahasiswa semester 3 (pendaftar di atas semester 3 wajib melalui musyawarah dan ketentuan khusus pengurus).</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`min-h-[40px] px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-forest text-paper shadow-xs'
                  : 'bg-white border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Semua ({FACILITIES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('pokok')}
              className={`min-h-[40px] px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === 'pokok'
                  ? 'bg-forest text-paper shadow-xs'
                  : 'bg-white border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Kebutuhan Pokok
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('iuran')}
              className={`min-h-[40px] px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === 'iuran'
                  ? 'bg-forest text-paper shadow-xs'
                  : 'bg-white border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Iuran Kolektif
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('komunal')}
              className={`min-h-[40px] px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === 'komunal'
                  ? 'bg-forest text-paper shadow-xs'
                  : 'bg-white border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Fasilitas Komunal
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fasilitas (wifi, air, dapur)..."
              className="w-full px-3.5 py-2 text-xs bg-white border border-line rounded-lg focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none placeholder:text-ink-subtle transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink p-1 cursor-pointer"
                aria-label="Bersihkan pencarian"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile List View */}
        <div className="sm:hidden border border-line divide-y divide-line bg-white rounded-xl shadow-xs overflow-hidden text-xs">
          {filteredFacilities.length === 0 ? (
            <div className="py-8 text-center text-ink-muted px-4 text-sm">
              Tidak ditemukan fasilitas dengan kata kunci "{searchQuery}".
            </div>
          ) : (
            filteredFacilities.map((item) => (
              <div key={item.id} className="p-4 flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-bold text-ink-subtle shrink-0">{item.no}.</span>
                  <h3 className="font-bold text-forest text-[15px] leading-snug">{item.name}</h3>
                </div>

                <div>
                  <span
                    className={`inline-block font-mono text-[11px] font-bold px-2.5 py-0.5 rounded border border-line ${
                      item.category === 'iuran' ? 'bg-paper text-ink' : 'bg-forest/5 text-forest'
                    }`}
                  >
                    {item.costStatus}
                  </span>
                </div>

                <p className="text-[13px] text-ink/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Desktop Ledger Table */}
        <div className="hidden sm:block border border-line bg-white rounded-xl overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-line bg-paper-muted text-[11px] uppercase tracking-wider text-ink font-semibold">
                <th className="py-3.5 px-4 w-12 text-center">No.</th>
                <th className="py-3.5 px-4 w-1/4">Fasilitas / Sarana</th>
                <th className="py-3.5 px-4 w-44">Status Biaya</th>
                <th className="py-3.5 px-4">Keterangan &amp; Tata Kelola Warga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line font-normal text-ink">
              {filteredFacilities.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-ink-muted">
                    Tidak ditemukan fasilitas dengan kata kunci "{searchQuery}".
                  </td>
                </tr>
              ) : (
                filteredFacilities.map((item) => (
                  <tr key={item.id} className="hover:bg-paper-subtle/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono text-ink-subtle">
                      {item.no}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-forest text-[13px]">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={
                          item.category === 'iuran'
                            ? 'font-mono font-semibold text-ink px-2 py-0.5 rounded bg-paper border border-line text-[11px]'
                            : 'font-semibold text-forest text-[12px]'
                        }
                      >
                        {item.costStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-ink/80 text-[13px] leading-relaxed">
                      {item.description}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-ink-subtle gap-2">
          <span>* Pemeliharaan darurat atau penggantian komponen dilakukan melalui musyawarah kas kolektif warga.</span>
          <span>Catatan Tata Tertib Warga Tahun Sidang 2024/2025</span>
        </div>
      </div>
    </section>
  );
};
