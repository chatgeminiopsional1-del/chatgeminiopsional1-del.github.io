# Asrama Mahasiswa HPMT Jeneponto di Makassar

> **"Siri' na Pacce ri Butta Turatea"** — Ruang hidup, berteduh, dan silaturahmi mahasiswa Kabupaten Jeneponto yang menempuh pendidikan di Kota Makassar, Sulawesi Selatan.

Website resmi direktori dan panduan warga **Asrama Mahasiswa HPMT (Himpunan Pelajar Mahasiswa Turatea) Jeneponto**, mencakup unit **Asrama Putra (Aspura)** di Panakkukang dan **Asrama Putri (Aspuri)** di Minasaupa.

---

## Fitur Utama Website

1. **Buku Direktori Dua Wisma Independen**:
   - **Unit 01 - Aspura**: Jl. Anggrek I No. 15, Paropo, Panakkukang ([Titik Resmi Google Maps: Aspura hpmt kab jeneponto](https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c)).
   - **Unit 02 - Aspuri**: Jl. Minasa Upa No. 9 Blok B1, Karunrung, Kec. Rappocini ([Titik Resmi Google Maps: ASPURI HPMT Jeneponto](https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq)).
   - Dilengkapi petunjuk alamat, nomor kontak pengurus, dan peta lokasi interaktif.

2. **Transparansi Fasilitas & Iuran Swakelola Warga**:
   - Biaya masuk Rp1.500.000 dibayarkan satu kali saat resmi diterima menjadi warga asrama dan bebas biaya sewa kamar sampai lulus kuliah (seluruh dana digunakan untuk perawatan & pengadaan fasilitas fisik asrama bersama).
   - Tabel buku besar kebutuhan pokok (Air sumur bor gratis, listrik standar, Wi-Fi broadband 24 jam Rp40.000/bln, Aspura 1 orang 1 kamar, Aspuri maksimal 2 orang per kamar).
   - Pencarian cepat & filter kategori fasilitas (Kebutuhan Pokok, Iuran Kolektif, Sarana Komunal).

3. **Formulir Sowan & Pendaftaran Mahasiswa Baru**:
   - Ketentuan pendaftaran: Terbuka maksimal untuk mahasiswa semester 3 (pendaftar di atas semester 3 wajib mengikuti ketentuan dan pertimbangan khusus pengurus).
   - Panduan 4 tahap alur masuk asrama (Isi data identitas asal kecamatan Jeneponto & semester, Sowan bertamu, Verifikasi berkas, Penempatan kamar).
   - Otomatis membuat format pesan WhatsApp sopan dan santun beradab ("Tabe' Kakanda Pengurus...") siap kirim langsung ke nomor pengurus.

4. **Koleksi Arsip Visual & Lightbox Foto Fisik**:
   - Dokumentasi asli gerbang wisma, pendopo/gazebo diskusi malam, halaman pekarangan, dan teras asrama tanpa rekayasa.
   - Penampil foto resolusi penuh (Lightbox) dengan navigasi keyboard panah.

5. **Manifesto Kultural Nilai Luhur**:
   - Penghayatan filosofi *Siri'* (harga diri, martabat, integritas belajar) dan *Pacce* (solidaritas rasa pedih saat saudara tertimpa kesulitan) di tanah perantauan.

6. **Desain Editorial & Responsif**:
   - Palet warna civic Turatea (paper, forest green, terracotta clay, ink).
   - Tipografi Fraunces & Plus Jakarta Sans.
   - Desain responsif di komputer desktop, tablet, maupun layar ponsel (HP).

---

## Panduan Menjalankan Proyek (Local Development)

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
- npm atau pnpm / bun

### 2. Kloning Repositori dari GitHub
```bash
git clone https://github.com/USERNAME_ANDA/asrama-hpmt-jeneponto.git
cd asrama-hpmt-jeneponto
```

### 3. Pasang Dependensi
```bash
npm install
```

### 4. Jalankan Dev Server
```bash
npm run dev
```
Buka peramban (browser) di alamat `http://localhost:3000` (atau port yang tertera di terminal).

### 5. Menjalankan Unit Test (Logic Validation)
Proyek ini dilengkapi pengujian unit bawaan Node.js:
```bash
node --test src/utils/asrama.test.ts
```

### 6. Build untuk Produksi
```bash
npm run build
```
Hasil build produksi akan tersedia di direktori `dist/` yang siap di-deploy ke Vercel, Netlify, Cloudflare Pages, atau GitHub Pages.

---

## Struktur Berkas (File Structure)

```
.
├── index.html                   # HTML entry point dengan Google Fonts & OpenGraph meta tags
├── metadata.json                # Metadata aplikasi
├── package.json                 # Konfigurasi dependensi dan scripts
├── README.md                    # Dokumentasi lengkap proyek untuk GitHub
├── src/
│   ├── App.tsx                  # Komponen induk aplikasi
│   ├── main.tsx                 # React DOM root entry point
│   ├── index.css                # Konfigurasi Tailwind CSS v4 & theme variables
│   ├── data/
│   │   └── dormitoryData.ts     # Data terstruktur wisma, fasilitas, foto, kecamatan Jeneponto, FAQ
│   ├── utils/
│   │   ├── asrama.ts            # Helper murni (WhatsApp URL, pesan sopan, filter)
│   │   └── asrama.test.ts       # Unit test logic asrama
│   └── components/
│       ├── GazetteTicker.tsx    # Warta resmi & status penerimaan warga
│       ├── CivicHeader.tsx      # Header & navigasi responsif
│       ├── HeroSection.tsx      # Essay pembuka & galeri foto kearsipan
│       ├── ManifestoSection.tsx # Filosofi kultural Siri' na Pacce
│       ├── WismaDirectory.tsx   # Direktori lengkap Aspura & Aspuri
│       ├── FacilitiesLedger.tsx # Tabel fasilitas & iuran swakelola
│       ├── RegistrationFlowModal.tsx # Modal alur pendaftaran & generator WhatsApp
│       ├── ImageLightbox.tsx    # Modal penampil foto resolusi penuh
│       ├── FaqSection.tsx       # Tanya jawab (FAQ) warga baru & orang tua
│       ├── ContactSection.tsx   # Narahubung WhatsApp & Instagram resmi
│       └── CivicFooter.tsx      # Footer resmi HPMT Jeneponto
└── vite.config.ts               # Konfigurasi build Vite & Tailwind
```

---

## Panduan Upload & Menjalankan di GitHub Pages

Repositori ini telah dikonfigurasi secara otomatis agar siap berjalan di **GitHub Pages** (menggunakan *relative base path* `./` dan workflow otomatis `.github/workflows/deploy.yml`).

### Langkah-langkah:

1. **Buat Repositori di GitHub**:
   - Buka [github.com/new](https://github.com/new) dan buat repositori publik baru (misalnya bernama `asrama-hpmt-jeneponto`).

2. **Inisialisasi & Push Kode dari Komputer Anda**:
   ```bash
   git init
   git add .
   git commit -m "feat: website resmi Asrama Mahasiswa HPMT Jeneponto siap deploy"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/asrama-hpmt-jeneponto.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages (1 Langkah Sederhana)**:
   - Buka repositori Anda di GitHub.
   - Klik tab **Settings** (Pengaturan) > menu **Pages** di bilah kiri.
   - Di bagian **Build and deployment** > **Source**, pilih:
     👉 **GitHub Actions**
   - GitHub akan langsung menjalankan workflow `.github/workflows/deploy.yml` secara otomatis.
   - Dalam 1-2 menit, website resmi Asrama HPMT sudah online dan dapat diakses di URL:
     `https://USERNAME_ANDA.github.io/asrama-hpmt-jeneponto/`

---

## Identitas & Narahubung Resmi

- **Organisasi**: Himpunan Pelajar Mahasiswa Turatea (HPMT) Kabupaten Jeneponto
- **Badan Pengelola**: Badan Khusus Asrama Pengurus Pusat HPMT
- **Instagram Resmi**: [@asrama.hpmt](https://www.instagram.com/asrama.hpmt/)
- **Aspura (Putra)**: Jl. Anggrek I No. 15, Paropo, Panakkukang, Makassar (+62 852-4038-9682)
- **Aspuri (Putri)**: Jl. Minasa Upa No. 9 Blok B1, Karunrung, Kec. Rappocini, Makassar (+62 853-9714-2677)

---

*“Siri' na Pacce ri Butta Turatea — Rawat Persaudaraan, Junjung Tinggi Martabat di Tanah Rantau.”*
