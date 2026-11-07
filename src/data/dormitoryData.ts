export interface DormitoryUnit {
  id: 'aspura' | 'aspuri';
  code: string;
  name: string;
  shortName: string;
  designation: string;
  locationArea: string;
  fullAddress: string;
  landmark: string;
  environmentCharacter: string;
  curfewAndSecurity: string;
  roomCapacity: string;
  coordinatorName: string;
  coordinatorTitle: string;
  coordinatorPhone: string;
  whatsappNumber: string;
  googleMapsUrl: string;
  embedMapUrl?: string;
  coordinates?: { lat: number; lng: number };
  verifiedPlaceName?: string;
  accentColor: 'forest';
  features: string[];
  description: string;
}

export interface FacilityItem {
  id: string;
  no: string;
  name: string;
  category: 'pokok' | 'iuran' | 'komunal';
  costStatus: string;
  monthlyCost: number; // in IDR (0 if included/free)
  isOptional: boolean;
  description: string;
}

export interface ArchivalPhoto {
  id: string;
  title: string;
  location: string;
  caption: string;
  url: string;
  aspect: string;
}

export const DORMITORY_UNITS: DormitoryUnit[] = [
  {
    id: 'aspura',
    code: 'Unit 01 • ASPURA',
    name: 'Asrama Putra (Aspura) HPMT Jeneponto',
    shortName: 'Aspura HPMT',
    designation: 'Wisma Khusus Mahasiswa Putra',
    locationArea: 'Kawasan Panakkukang',
    fullAddress: 'Jl. Anggrek I No. 15, Paropo, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90233',
    landmark: 'Koridor Pettarani — Akses Tol Reformasi — Dekat Flyover Urip Sumoharjo',
    environmentCharacter: 'Dinamis, strategis, dekat sentra fotokopi, perpustakaan, & kuliner ramah kantong mahasiswa',
    curfewAndSecurity: 'Akses gerbang terkontrol, tertib ronda malam komunal sesama warga',
    roomCapacity: '1 orang per kamar tidur (Kamar Mandiri)',
    coordinatorName: 'Muh. Fatur Idris',
    coordinatorTitle: 'Koordinator Warga Aspura',
    coordinatorPhone: '+62 852-4038-9682',
    whatsappNumber: '6285240389682',
    googleMapsUrl: 'https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c',
    embedMapUrl: 'https://maps.google.com/maps?q=Aspura+hpmt+kab+jeneponto&cid=0x4ca1b970d4be393c&hl=id&z=17&output=embed',
    verifiedPlaceName: 'Aspura hpmt kab jeneponto (Titik Resmi Google Maps)',
    coordinates: { lat: -5.1485, lng: 119.4485 },
    accentColor: 'forest',
    features: [
      'Pusat konsolidasi kader perantau Turatea',
      'Akses cepat koridor Pettarani & Perintis',
      'Ruang rapat & diskusi kaderisasi',
      'Koneksi Wi-Fi broadband 24 jam'
    ],
    description:
      'Berfungsi sebagai pusat konsolidasi kader putra dan hunian mahasiswa yang menempuh pendidikan di koridor timur dan tengah Makassar. Berdekatan dengan jalur transportasi utama dan kampus-kampus besar.'
  },
  {
    id: 'aspuri',
    code: 'Unit 02 • ASPURI',
    name: 'Asrama Putri (Aspuri) HPMT Jeneponto',
    shortName: 'Aspuri HPMT',
    designation: 'Wisma Khusus Mahasiswi Putri',
    locationArea: 'Kawasan Minasa Upa, Rappocini',
    fullAddress: 'Jl. Minasa Upa No. 9 Blok B1, Karunrung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221',
    landmark: 'Dekat Kampus UNM Parangtambung / Gunung Sari & Jalur Sultan Alauddin',
    environmentCharacter: 'Asri, damai, pekarangan hijau dengan naungan pohon rindang, suasana kekeluargaan hangat',
    curfewAndSecurity: 'Gerbang utama terkunci pukul 22.00 WITA, tertib tamu & buku mutasi kunjung',
    roomCapacity: 'Maksimal 2 orang per kamar tidur',
    coordinatorName: 'Nurul Mawaddah',
    coordinatorTitle: 'Koordinator Warga Aspuri',
    coordinatorPhone: '+62 853-9714-2677',
    whatsappNumber: '6285397142677',
    googleMapsUrl: 'https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq',
    embedMapUrl: 'https://maps.google.com/maps?q=-5.1859121,119.4510155&hl=id&z=17&output=embed',
    verifiedPlaceName: 'ASPURI HPMT Jeneponto (Titik Resmi Google Maps)',
    coordinates: { lat: -5.1859121, lng: 119.4510155 },
    accentColor: 'forest',
    features: [
      'Gazebo diskusi santai di pekarangan',
      'Pagar besi kokoh & kontrol jam malam 22.00',
      'Dapur bersih komunal swadaya',
      'Area jemuran luas dan terlindung'
    ],
    description:
      'Hunian khusus mahasiswi asal Jeneponto yang mengedepankan keamanan, kesantunan bertetangga, ketenangan ruang belajar, serta lingkungan pekarangan hijau yang asri dan berpagar besi kokoh.'
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'biaya-masuk-fasilitas',
    no: '01',
    name: 'Biaya Masuk Fasilitas Wisma (Sekali Sampai Lulus)',
    category: 'pokok',
    costStatus: 'Rp1.500.000 (Sekali Sampai Lulus)',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Syarat kontribusi wajib saat resmi diterima masuk asrama. Bebas biaya sewa kamar bulanan sampai lulus kuliah. Seluruh dana digunakan untuk pemeliharaan dan pengadaan fasilitas fisik wisma bersama.'
  },
  {
    id: 'air',
    no: '02',
    name: 'Air Bersih & Sanitasi',
    category: 'pokok',
    costStatus: 'Swakelola / Gratis',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Didukung sumur bor mandiri dan tandon penampungan air. Bebas tagihan bulanan PDAM. Warga piket berkala merawat kebersihan tandon dan saluran kamar mandi.'
  },
  {
    id: 'listrik',
    no: '02',
    name: 'Listrik & Penerangan Pokok',
    category: 'pokok',
    costStatus: 'Gratis / Bersama',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Kebutuhan pokok penerangan kamar, pengecasan gawai studi (laptop/ponsel), dan kipas angin standar. Penggunaan alat daya tinggi (setrika/dispenser) diatur tertib demi keselamatan instalasi.'
  },
  {
    id: 'wifi',
    no: '03',
    name: 'Jaringan Internet Wi-Fi Broadband',
    category: 'iuran',
    costStatus: 'Rp40.000 / bln',
    monthlyCost: 40000,
    isOptional: true,
    description:
      'Iuran kolektif warga per bulan untuk langganan internet kecepatan tinggi 24 jam. Sangat vital untuk riset perkuliahan daring, pengerjaan skripsi, dan komunikasi akademik.'
  },
  {
    id: 'kamar',
    no: '04',
    name: 'Kamar Tidur Warga',
    category: 'pokok',
    costStatus: 'Aspura: 1 Org � Aspuri: Maks 2 Org',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Aspura: 1 orang 1 kamar tidur untuk kenyamanan belajar mandiri. Aspuri: maksimal 2 orang per kamar tidur untuk melatih kedisiplinan berbagi ruang dan kebersamaan.'
  },
  {
    id: 'gazebo',
    no: '05',
    name: 'Gazebo, Pendopo & Ruang Bersama',
    category: 'komunal',
    costStatus: 'Fasilitas Komunal',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Tersedia di area pekarangan sebagai tempat diskusi organisasi, menerima kunjungan sanak famili dari Jeneponto, serta sarana refreshing santai sesama penghuni.'
  },
  {
    id: 'dapur',
    no: '06',
    name: 'Dapur Komunal Swadaya',
    category: 'komunal',
    costStatus: 'Peralatan Bersama',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Ruang masak bersama yang dilengkapi kompor dan perabot swadaya. Memudahkan warga memasak makanan khas kampung halaman secara hemat dan gotong royong.'
  },
  {
    id: 'parkir',
    no: '07',
    name: 'Pekarangan & Parkir Motor Terlindung',
    category: 'komunal',
    costStatus: 'Gratis dalam Pagar',
    monthlyCost: 0,
    isOptional: false,
    description:
      'Area halaman luas berpagar untuk memarkir sepeda motor warga asrama dengan aman pada malam hari.'
  },
  {
    id: 'kas-warga',
    no: '08',
    name: 'Dana Kas Kedaruratan & Sosial Warga',
    category: 'iuran',
    costStatus: 'Rp15.000 / bln (Sukarela)',
    monthlyCost: 15000,
    isOptional: true,
    description:
      'Iuran sukarela kas warga untuk pembelian perlengkapan kebersihan bersama (sapu, pel, pembersih lantai), penggantian bohlam lorong, dan dana santunan sosial bila ada kawan yang sakit.'
  }
];

export const ARCHIVAL_PHOTOS: ArchivalPhoto[] = [
  {
    id: 'gate',
    title: 'Plang Gerbang Masuk Asrama Putri HPMT Kab. Jeneponto',
    location: 'Dokumentasi Wisma Aspuri, Makassar',
    caption: 'Pintu gerbang utama berpagar kokoh yang menjadi penanda identitas resmi mahasiswa Turatea di Makassar.',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1GksOEX4xE3R-eYX36ItaxYcUgOTzWbEG4omirVzNM6GutwPElJVIx8LYpZTIA4Jembw3XRJYj22iGv-uiZ_t8BxBMLOu_nKgxiFZ7szD01Ims961wKm8U3Feu2QJTdor_4w81a0cAQRHN2xDpluy8VTXBPZJTCV8hnYtZtjNTNoC0jidvGp4Z7Vm3gIlz3KWEmHeJ83lqCXG8uDNT-1bPXLxp3-hdXLULCPLTOpcpHS-p4RkmPvSTPZmhRnNDyVJQpM',
    aspect: '16/10'
  },
  {
    id: 'gazebo',
    title: 'Pendopo Diskusi Larut Malam di Gazebo',
    location: 'Area Halaman Wisma Asrama',
    caption: 'Pusat kebersamaan warga wisma bertukar kabar perkuliahan, belajar bersama, dan musyawarah harian.',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrNYcQ2dv69TedEQtEjCDUJYYEq_fAEANmOJFlLiyOGPeqyeF42fZDpngV9_lyCaNb_CBDWL-j2-6vobAETvSGsxr0ljeaU0fBZDuyB-rC9G9jRDNQM2GRb-ARWpgp2XUwJ1zJPRRVlD0xE_LeuRbuLTKEGN_2ogNOcvdse9zAIoD0lSgsmPPsbvhuHCV85dfYMPra4r3EIPS5Eukvlg42m0Kc5rZmZLS0Jh33IPmB-4Cnr-vnsNmwAK55Wj6StR4y164',
    aspect: '16/9'
  },
  {
    id: 'yard',
    title: 'Pekarangan Depan & Naungan Pohon Mangga',
    location: 'Pekarangan Asrama',
    caption: 'Lingkungan asri yang sejuk dan teduh memberikan ruang istirahat yang nyaman di tengah dinamika kota Makassar.',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxgA8yej30dh2OyUXUJ8KJA-CUPiJXg7wx8455iU7KQfGCa_5p38t4DSJ2nJzrl7vj8Z8kCBRPTjGX3mbBHNHhCAfF8wHLCslmco0VClBw_tJw4tM4VlUp-PtybYCMz0awsWthO0LKrwGhykQ5U6_0D_F6Vyxfm-HMKrnf8F4GV4tdzJt9-grp1Ict-dI7DY00jBtGF2pnZBYcER5yUug7WMELQbawSl5U0sqRemk3nzCfbbgjDekUYGw__Y9fFCx33f8',
    aspect: '4/3'
  },
  {
    id: 'side',
    title: 'Lorong Teras Samping & Parkir Kendaraan',
    location: 'Teras & Selasar Asrama',
    caption: 'Area sirkulasi udara alami dan tempat parkir roda dua para penghuni asrama dengan keamanan terjaga.',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_BO_t0ByhiP6Tqg9Mv32Wma8uN7WRr4mJVvR_9igIpFsY3AVok4W9tP1oIqiS-d3nxB46trN0lmCnItCnoEvA3TZwDO1-CT1sUeNey7wiAkmuHG_PXqKS7-4F42ykaGldItEnW6avG5CMV4POVzZU5iNLhf4WbAKT_Lvc5jS705S9F1aYkhxdlrQJFTPqY-u3ysTrAD9n5VfNSweB8A0Un8bEKMtHisbd-hwf2Gt3asmHDT2LQNKrQuhVH2pPGjOJOi4',
    aspect: '4/3'
  }
];

export const OFFICIAL_LOGOS = {
  emblem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8XE5savJ45-EyHiPP0DQNVWm5RjNmLn6mSJqZGA49eQvbGM50Av0gh6Afb5EZMjhkFMqACVjYZ9ytKU-FG4t3jWbHaoso5jgfSLubkLJ-5eO2xXmQ3ze6NSOkJPNX9icM2mZ1-OdbbOK9I1ZGvadPfFRVrJWE8dUmHykwI6V883SWs9ndHdnlEBn40gTtkYCbcSjALHlijskjtaXWsbQP69Xwi9wvw0FaOEGNWISjkhKjh1wuqUnUXcgsPs5_YUPX0oo',
  seal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDibvXMQdZwCUMgXe3Zd4fz21vlQPBuRDioC6MQnnt4k3Uyy2fFsaoFa7a-Au_X5A4uEeoCoj2BPNZ_PVsB-5Dq7qSUVViIJH2iVpE_LcNj0P65cT30PF1kI10_AiHt6L0HTJXDpsMU8Q2ted9yCHi0yMjpjo7zqNIix0PaHw0OAgXG3J_t5b4K-BLSC9w30gL-9MMDGWlBBTOH1HrLJsLarslk16xxg18nyV4F1grwQGunmtUwNM3Ai0qDH85RiFBvAkc'
};

export const JENEPONTO_SUBDISTRICTS = [
  'Binamu',
  'Bangkala',
  'Bangkala Barat',
  'Tamalatea',
  'Bontoramba',
  'Turatea',
  'Kelara',
  'Rumbia',
  'Batang',
  'Arungkeke',
  'Tarowang'
];

export const FAQ_ITEMS = [
  {
    question: 'Siapa sajakah yang berhak tinggal di Asrama HPMT Jeneponto?',
    answer:
      'Setiap mahasiswa aktif jenjang D3/D4/S1 asal Kabupaten Jeneponto (dibuktikan dengan KTP/KK orang tua di Jeneponto dan Kartu Tanda Mahasiswa atau bukti diterima di perguruan tinggi di Makassar) berhak mengajukan permohonan hunian, selama kuota kamar masih tersedia.'
  },
  {
    question: 'Berapa biaya masuk asrama dan apakah ada sewa kamar bulanan?',
    answer:
      'Syarat masuk asrama adalah membayar kontribusi fasilitas sebesar Rp1.500.000 yang dibayarkan satu kali saat resmi diterima. Setelah membayar 1,5 juta rupiah tersebut, warga tidak membayar lagi uang sewa kamar sampai lulus kuliah. Seluruh uang tersebut dialokasikan untuk pemeliharaan sarana dan fasilitas asrama bersama. Pengeluaran rutin bulanan warga hanyalah iuran operasional mandiri (seperti Wi-Fi kolektif Rp40.000/bulan).'
  },
  {
    question: 'Sampai semester berapa batas pendaftaran warga asrama baru?',
    answer:
      'Pendaftaran terbuka maksimal untuk mahasiswa semester 3. Bagi mahasiswa yang berada di atas semester 3, berlaku ketentuan dan pertimbangan khusus dari pengurus asrama saat sowan (seperti komitmen keaktifan organisasi HPMT, rekomendasi, dan musyawarah koordinator wisma).'
  },
  {
    question: 'Bagaimana aturan jam malam bagi penghuni Aspura dan Aspuri?',
    answer:
      'Untuk kenyamanan dan keselamatan warga, khususnya Asrama Putri (Aspuri), gerbang utama ditutup pukul 22.00 WITA. Warga yang memiliki kegiatan akademik mendesak (praktikum/organisasi kampus larut malam) diwajibkan memberitahukan koordinator piket sebelumnya.'
  },
  {
    question: 'Apakah orang tua atau keluarga dari Jeneponto boleh berkunjung menginap?',
    answer:
      'Tentu boleh. Orang tua kandung atau sanak saudara dari kampung halaman yang berkunjung ke Makassar diperkenankan singgah dan bertamu dengan melapor kepada koordinator wisma setempat.'
  }
];
