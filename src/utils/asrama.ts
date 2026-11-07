import type { FacilityItem } from '../data/dormitoryData.ts';

export interface RegistrationFormData {
  fullName: string;
  subdistrict: string;
  villageName?: string;
  campusName: string;
  studyProgram: string;
  batchYear: string;
  currentSemester?: string;
  dormitoryChoice: 'aspura' | 'aspuri';
  phone: string;
  parentName: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface DuesCalculatorOptions {
  includeWifi: boolean;
  includeKasWarga: boolean;
  additionalCustomDues?: number;
}

/**
 * Generate standard WhatsApp click-to-chat URL with properly encoded message
 */
export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generate formal and culturally polite Bugis-Makassar WhatsApp inquiry message for asrama coordinators
 */
export function formatRegistrationMessage(data: RegistrationFormData): string {
  const targetUnit = data.dormitoryChoice === 'aspura' ? 'Aspura (Putra)' : 'Aspuri (Putri)';
  const semesterInfo = data.currentSemester || 'Maksimal Semester 3';
  
  return (
    `Tabe' Kakanda Pengurus ${targetUnit} Asrama HPMT Jeneponto di Makassar,\n\n` +
    `Saya calon warga asrama bermaksud mengajukan permohonan hunian & silaturahmi:\n\n` +
    `• Nama Lengkap: ${data.fullName}\n` +
    `• Asal Daerah: Kec. ${data.subdistrict}${data.villageName ? `, Desa/Kel. ${data.villageName}` : ''}, Jeneponto\n` +
    `• Kampus di Makassar: ${data.campusName}\n` +
    `• Jurusan / Angkatan: ${data.studyProgram} (${data.batchYear})\n` +
    `• Semester Saat Ini: ${semesterInfo}\n` +
    `• No. HP / Kontak: ${data.phone}\n` +
    `• Nama Orang Tua: ${data.parentName}\n` +
    `• Pilihan Unit: ${targetUnit}\n` +
    `• Ketentuan Masuk: Bersedia membayar kontribusi fasilitas Rp1.500.000 (sekali bayar sampai lulus kuliah / bebas biaya sewa)\n` +
    (data.notes ? `• Catatan Khusus / Pertanyaan: ${data.notes}\n` : '') +
    `\nMohon petunjuk ketersediaan kamar, jadwal silaturahmi ke asrama, dan berkas yang perlu disiapkan. Tabe', terima kasih banyak.`
  );
}

/**
 * Calculate estimated monthly dues for shared living
 */
export function calculateEstimatedMonthlyDues(options: DuesCalculatorOptions): {
  total: number;
  breakdown: { label: string; amount: number }[];
} {
  const breakdown: { label: string; amount: number }[] = [];
  let total = 0;

  // Water & basic electricity are free / swakelola
  breakdown.push({ label: 'Air Bersih & Listrik Standar', amount: 0 });

  if (options.includeWifi) {
    const wifiCost = 40000;
    breakdown.push({ label: 'Wi-Fi Broadband 24 Jam', amount: wifiCost });
    total += wifiCost;
  }

  if (options.includeKasWarga) {
    const kasCost = 15000;
    breakdown.push({ label: 'Kas Kedaruratan & Sosial Warga', amount: kasCost });
    total += kasCost;
  }

  if (options.additionalCustomDues && options.additionalCustomDues > 0) {
    breakdown.push({ label: 'Iuran Kegiatan / Sukarela Tambahan', amount: options.additionalCustomDues });
    total += options.additionalCustomDues;
  }

  return { total, breakdown };
}

/**
 * Filter facilities by search query and category
 */
export function filterFacilities(
  facilities: FacilityItem[],
  query: string,
  categoryFilter: string = 'all'
): FacilityItem[] {
  const q = query.trim().toLowerCase();
  const cleanQ = q.replace(/[\s-]/g, '');

  return facilities.filter((item) => {
    const matchesCategory =
      categoryFilter === 'all' || item.category === categoryFilter;

    if (!matchesCategory) return false;
    if (!q) return true;

    const nameClean = item.name.toLowerCase().replace(/[\s-]/g, '');
    const descClean = item.description.toLowerCase();

    return (
      item.name.toLowerCase().includes(q) ||
      nameClean.includes(cleanQ) ||
      descClean.includes(q) ||
      item.costStatus.toLowerCase().includes(q)
    );
  });
}

/**
 * Validate prospective resident inquiry form
 */
export function validateRegistrationForm(data: RegistrationFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Nama lengkap minimal 3 karakter';
  }

  if (!data.subdistrict || data.subdistrict.trim().length === 0) {
    errors.subdistrict = 'Silakan pilih kecamatan asal di Jeneponto';
  }

  if (!data.campusName || data.campusName.trim().length < 2) {
    errors.campusName = 'Nama kampus perguruan tinggi di Makassar wajib diisi';
  }

  if (!data.studyProgram || data.studyProgram.trim().length < 2) {
    errors.studyProgram = 'Jurusan / Program studi wajib diisi';
  }

  if (!data.batchYear || !/^\d{4}$/.test(data.batchYear.trim())) {
    errors.batchYear = 'Tahun angkatan harus 4 digit angka (contoh: 2024)';
  }

  if (!data.phone || data.phone.trim().length < 9) {
    errors.phone = 'Nomor WhatsApp aktif minimal 9 digit';
  }

  if (!data.parentName || data.parentName.trim().length < 2) {
    errors.parentName = 'Nama orang tua / wali di Jeneponto wajib diisi';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Format IDR currency nicely
 */
export function formatIDR(amount: number): string {
  if (amount === 0) return 'Gratis / Swakelola';
  return `Rp${amount.toLocaleString('id-ID')}`;
}
