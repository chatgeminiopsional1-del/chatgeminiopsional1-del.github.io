import React, { useState, useEffect } from 'react';
import { JENEPONTO_SUBDISTRICTS, DORMITORY_UNITS } from '../data/dormitoryData.ts';
import {
  RegistrationFormData,
  validateRegistrationForm,
  formatRegistrationMessage,
  generateWhatsAppUrl
} from '../utils/asrama.ts';

interface RegistrationFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUnit?: 'aspura' | 'aspuri';
}

export const RegistrationFlowModal: React.FC<RegistrationFlowModalProps> = ({
  isOpen,
  onClose,
  initialUnit = 'aspura'
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    subdistrict: 'Binamu',
    villageName: '',
    campusName: '',
    studyProgram: '',
    batchYear: new Date().getFullYear().toString(),
    currentSemester: 'Semester 1 (Mahasiswa Baru)',
    dormitoryChoice: initialUnit,
    phone: '',
    parentName: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'result'>('form');

  useEffect(() => {
    if (initialUnit) {
      setFormData((prev) => ({ ...prev, dormitoryChoice: initialUnit }));
    }
  }, [initialUnit]);

  if (!isOpen) return null;

  const targetUnit = DORMITORY_UNITS.find((u) => u.id === formData.dormitoryChoice)!;
  const formattedMessage = formatRegistrationMessage(formData);
  const whatsappUrl = generateWhatsAppUrl(targetUnit.whatsappNumber, formattedMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateRegistrationForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStep('result');
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-paper border border-line shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-line mb-5">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-forest block mb-1">
              BK Asrama HPMT • Panduan Warga Baru
            </span>
            <h2 id="modal-title" className="font-serif text-xl sm:text-2xl text-ink font-semibold">
              Formulir Sowan &amp; Minat Masuk Asrama
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-ink-subtle hover:text-ink border border-line bg-white rounded-xs focus:outline-none"
            aria-label="Tutup formulir pendaftaran"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 4-Step Process Breadcrumb */}
        <div className="mb-4 bg-paper-subtle p-3.5 border border-line text-xs">
          <span className="font-semibold text-ink block mb-2">4 Tahapan Alur Menjadi Warga Asrama:</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-ink-muted">
            <div className="p-2 border border-line bg-white">
              <strong className="text-forest block">1. Isi Formulir</strong>
              Data identitas asal Jeneponto &amp; kampus.
            </div>
            <div className="p-2 border border-line bg-white">
              <strong className="text-forest block">2. Sowan Wisma</strong>
              Datang bertamu &amp; melihat fisik asrama.
            </div>
            <div className="p-2 border border-line bg-white">
              <strong className="text-forest block">3. Verifikasi</strong>
              Pengecekan KTP/KK &amp; bukti mahasiswa.
            </div>
            <div className="p-2 border border-line bg-white">
              <strong className="text-forest block">4. Masuk Asrama</strong>
              Penetapan kamar &amp; komitmen tata tertib.
            </div>
          </div>
        </div>

        {/* Ketentuan Biaya & Batas Semester */}
        <div className="mb-5 p-3.5 border border-forest bg-forest/5 text-xs text-ink leading-relaxed">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5 pb-1.5 border-b border-forest/20">
            <span className="font-bold text-forest uppercase tracking-wider text-[11px]">
              Ketentuan Pokok Masuk Warga
            </span>
            <span className="font-semibold text-forest text-[11px]">
              Kontribusi Fasilitas: Rp1.500.000 (Sekali Sampai Lulus)
            </span>
          </div>
          <ul className="space-y-1 text-[11px] text-ink-muted">
            <li>
              • <strong>Biaya Masuk:</strong> Sebesar Rp1.500.000 dibayarkan saat resmi diterima masuk asrama. Tidak ada lagi biaya sewa kamar sampai lulus kuliah, dan dialokasikan untuk pemeliharaan fasilitas asrama.
            </li>
            <li>
              • <strong>Ketentuan Semester:</strong> Pendaftaran terbuka maksimal untuk semester 3. Mahasiswa di atas semester 3 wajib memenuhi ketentuan dan pertimbangan khusus pengurus.
            </li>
          </ul>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Unit Selection */}
            <div>
              <label className="font-semibold text-ink block mb-1.5">Pilih Unit Wisma Asrama *</label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-2 p-3 border rounded-xs cursor-pointer transition-colors ${
                    formData.dormitoryChoice === 'aspura'
                      ? 'border-forest bg-forest/5 font-semibold text-forest'
                      : 'border-line bg-white text-ink hover:bg-paper-subtle'
                  }`}
                >
                  <input
                    type="radio"
                    name="dormitoryChoice"
                    value="aspura"
                    checked={formData.dormitoryChoice === 'aspura'}
                    onChange={() => setFormData({ ...formData, dormitoryChoice: 'aspura' })}
                    className="accent-forest"
                  />
                  <span>Aspura (Putra) — Panakkukang</span>
                </label>

                <label
                  className={`flex items-center gap-2 p-3 border rounded-xs cursor-pointer transition-colors ${
                    formData.dormitoryChoice === 'aspuri'
                      ? 'border-forest bg-forest/5 font-semibold text-forest'
                      : 'border-line bg-white text-ink hover:bg-paper-subtle'
                  }`}
                >
                  <input
                    type="radio"
                    name="dormitoryChoice"
                    value="aspuri"
                    checked={formData.dormitoryChoice === 'aspuri'}
                    onChange={() => setFormData({ ...formData, dormitoryChoice: 'aspuri' })}
                    className="accent-forest"
                  />
                  <span>Aspuri (Putri) — Minasa Upa</span>
                </label>
              </div>
            </div>

            {/* Nama & No HP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="fullName" className="font-semibold text-ink block mb-1">
                  Nama Lengkap Mahasiswa *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Contoh: Muh. Ilham Pratama"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
                {errors.fullName && <p className="text-red-700 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="font-semibold text-ink block mb-1">
                  No. WhatsApp Aktif *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Contoh: 0852xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
                {errors.phone && <p className="text-red-700 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Asal Kecamatan & Desa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="subdistrict" className="font-semibold text-ink block mb-1">
                  Kecamatan Asal di Jeneponto *
                </label>
                <select
                  id="subdistrict"
                  value={formData.subdistrict}
                  onChange={(e) => setFormData({ ...formData, subdistrict: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                >
                  {JENEPONTO_SUBDISTRICTS.map((sub) => (
                    <option key={sub} value={sub}>
                      Kec. {sub}
                    </option>
                  ))}
                </select>
                {errors.subdistrict && <p className="text-red-700 text-[10px] mt-1">{errors.subdistrict}</p>}
              </div>

              <div>
                <label htmlFor="villageName" className="font-semibold text-ink block mb-1">
                  Desa / Kelurahan Asal (Opsional)
                </label>
                <input
                  id="villageName"
                  type="text"
                  placeholder="Contoh: Empoang / Tompobulu"
                  value={formData.villageName}
                  onChange={(e) => setFormData({ ...formData, villageName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
              </div>
            </div>

            {/* Kampus & Jurusan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="campusName" className="font-semibold text-ink block mb-1">
                  Perguruan Tinggi di Makassar *
                </label>
                <input
                  id="campusName"
                  type="text"
                  required
                  placeholder="Contoh: UNHAS / UNM / UIN"
                  value={formData.campusName}
                  onChange={(e) => setFormData({ ...formData, campusName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
                {errors.campusName && <p className="text-red-700 text-[10px] mt-1">{errors.campusName}</p>}
              </div>

              <div>
                <label htmlFor="studyProgram" className="font-semibold text-ink block mb-1">
                  Program Studi / Jurusan *
                </label>
                <input
                  id="studyProgram"
                  type="text"
                  required
                  placeholder="Contoh: Ilmu Hukum"
                  value={formData.studyProgram}
                  onChange={(e) => setFormData({ ...formData, studyProgram: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
                {errors.studyProgram && <p className="text-red-700 text-[10px] mt-1">{errors.studyProgram}</p>}
              </div>
            </div>

            {/* Semester & Angkatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="currentSemester" className="font-semibold text-ink block mb-1">
                  Semester Saat Ini (Maks. Semester 3) *
                </label>
                <select
                  id="currentSemester"
                  value={formData.currentSemester}
                  onChange={(e) => setFormData({ ...formData, currentSemester: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                >
                  <option value="Semester 1 (Mahasiswa Baru)">Semester 1 (Mahasiswa Baru)</option>
                  <option value="Semester 2">Semester 2</option>
                  <option value="Semester 3 (Batas Maksimal Reguler)">Semester 3 (Batas Maksimal Reguler)</option>
                  <option value="Di atas Semester 3 (Ketentuan Khusus)">Di atas Semester 3 (Ketentuan Khusus)</option>
                </select>
                {formData.currentSemester?.includes('Di atas Semester 3') && (
                  <p className="text-amber-900 text-[10px] mt-1.5 p-2 bg-amber-50 border border-amber-300">
                    Pendaftar di atas semester 3 wajib menyertakan keterangan alasan atau rekomendasi organisasi pada catatan di bawah untuk pertimbangan khusus pengurus.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="batchYear" className="font-semibold text-ink block mb-1">
                  Tahun Angkatan *
                </label>
                <input
                  id="batchYear"
                  type="text"
                  maxLength={4}
                  required
                  placeholder="2024"
                  value={formData.batchYear}
                  onChange={(e) => setFormData({ ...formData, batchYear: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
                />
                {errors.batchYear && <p className="text-red-700 text-[10px] mt-1">{errors.batchYear}</p>}
              </div>
            </div>

            {/* Nama Orang Tua */}
            <div>
              <label htmlFor="parentName" className="font-semibold text-ink block mb-1">
                Nama Orang Tua / Wali di Jeneponto *
              </label>
              <input
                id="parentName"
                type="text"
                required
                placeholder="Nama ayah / ibu / wali"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
              />
              {errors.parentName && <p className="text-red-700 text-[10px] mt-1">{errors.parentName}</p>}
            </div>

            {/* Catatan / Pertanyaan */}
            <div>
              <label htmlFor="notes" className="font-semibold text-ink block mb-1">
                Catatan Tambahan / Pertanyaan Khusus (Opsional)
              </label>
              <textarea
                id="notes"
                rows={2}
                placeholder="Rencana jadwal tiba di Makassar, barang bawaan, dll..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-line focus:border-forest focus:outline-none"
              />
            </div>

            <div className="pt-3 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 border-t border-line">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-4 py-2.5 border border-line bg-white hover:bg-paper-subtle text-ink font-medium"
              >
                Batal
              </button>
              <button
                type="submit"
                className="min-h-[44px] px-5 py-2.5 bg-forest text-paper hover:bg-forest-deep font-semibold"
              >
                Lanjutkan &amp; Siapkan Pesan WhatsApp →
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-xs">
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xs">
              <span className="font-semibold block mb-0.5">Format Pesan Silaturahmi Telah Siap</span>
              Pesan di bawah dirancang sesuai adab dan kesantunan tradisi perantau Turatea kepada pengurus {targetUnit.shortName}.
            </div>

            {/* Preview Box */}
            <div className="p-4 bg-white border border-line rounded-xs font-mono text-[11px] whitespace-pre-wrap text-ink-muted leading-relaxed max-h-56 overflow-y-auto">
              {formattedMessage}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 bg-forest text-paper hover:bg-forest-deep text-center font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span>Kirim Langsung ke WhatsApp Pengurus ({targetUnit.coordinatorPhone})</span>
                <span aria-hidden="true">↗</span>
              </a>

              <button
                type="button"
                onClick={handleCopyText}
                className="w-full sm:w-auto py-3 px-4 border border-line bg-white hover:bg-paper-subtle font-medium text-ink"
              >
                {copied ? 'Berhasil Disalin' : 'Salin Pesan'}
              </button>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full sm:w-auto py-3 px-3 text-ink-subtle hover:text-ink text-center underline"
              >
                Edit Data
              </button>
            </div>

            <p className="text-[11px] text-ink-subtle pt-2">
              Pengurus asrama akan membalas pesan Anda mengenai jadwal penerimaan sowan langsung di wisma {targetUnit.locationArea}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
