// app/i18n/messages.ts
export type Lang = 'id' | 'en';

/* =========================
   1. KAMUS BAHASA INDONESIA
   ========================= */
const idMessages = {
  // ===== HEADER & NAV =====
  'header.title': 'Pemerintah Kabupaten Banyumas',
  'header.subTitle': 'Dinas Komunikasi dan Informatika',

  'nav.home': 'Beranda',
  'nav.profile': 'Profil',
  'nav.ppid': 'PPID',
  'nav.publicMenu': 'Menu Publik',
  'nav.staffData': 'Data Pegawai',
  'nav.download': 'Download',
  'nav.faq': 'F.A.Q',
  'nav.contact': 'Kontak',

  // ===== MEGA MENU COMMON =====
  'mega.close': 'Tutup',
  'mega.profil.title': 'Profil Dinkominfo',
  'mega.profil.subtitle':
    'Informasi mengenai profil, tugas, fungsi, serta struktur organisasi Dinkominfo Kabupaten Banyumas.',
  'mega.ppid.title': 'PPID',
  'mega.ppid.subtitle':
    'Layanan informasi publik, dasar hukum, dan tata cara permohonan informasi di lingkungan Pemerintah Kabupaten Banyumas.',
  'mega.menuPublik.title': 'Menu Publik',
  'mega.menuPublik.subtitle':
    'Pintu masuk ke konten utama layanan informasi publik Dinkominfo Banyumas.',

  // ===== PROFIL =====
  'profil.visiMisi.title': 'Visi dan Misi',
  'profil.visiMisi.desc': 'Arah dan tujuan Dinkominfo Kabupaten Banyumas.',
  'profil.tugasFungsi.title': 'Tugas dan Fungsi',
  'profil.tugasFungsi.desc': 'Ruang lingkup tugas dan fungsi Dinkominfo.',
  'profil.struktur.title': 'Struktur Organisasi',
  'profil.struktur.desc': 'Susunan organisasi dan unit kerja Dinkominfo.',
  'profil.sejarah.title': 'Sejarah Dinkominfo',
  'profil.sejarah.desc':
    'Perjalanan dan perkembangan Dinkominfo Banyumas.',
  'profil.alamatKontak.title': 'Alamat dan Kontak',
  'profil.alamatKontak.desc':
    'Lokasi kantor dan informasi kontak resmi.',
  'profil.iku.title': 'Indikator Kinerja Utama',
  'profil.iku.desc': 'Target dan indikator kinerja Dinkominfo.',

  // ===== PPID =====
  'ppid.skDip.title': 'SK DIP Dikecualikan',
  'ppid.skDip.desc': 'Daftar informasi yang dikecualikan sesuai ketentuan.',
  'ppid.berkala.title': 'Berkala',
  'ppid.berkala.desc':
    'Informasi publik yang diumumkan secara berkala.',
  'ppid.setiapSaat.title': 'Setiap Saat',
  'ppid.setiapSaat.desc':
    'Informasi yang dapat diakses sewaktu-waktu.',
  'ppid.sertaMerta.title': 'Serta Merta',
  'ppid.sertaMerta.desc':
    'Informasi yang wajib disampaikan segera kepada publik.',
  'ppid.struktur.title': 'Struktur PPID',
  'ppid.struktur.desc': 'Susunan dan personel pengelola PPID.',
  'ppid.maklumat.title': 'Maklumat Pelayanan',
  'ppid.maklumat.desc':
    'Komitmen pelayanan informasi publik oleh PPID.',
  'ppid.laporanTahunan.title': 'Laporan Tahunan',
  'ppid.laporanTahunan.desc':
    'Laporan pelaksanaan layanan informasi publik.',
  'ppid.skPpid.title': 'SK PPID',
  'ppid.skPpid.desc':
    'Dasar hukum pembentukan PPID Banyumas.',
  'ppid.skDipPenetapan.title': 'SK Penetapan DIP',
  'ppid.skDipPenetapan.desc':
    'Penetapan daftar informasi publik yang dikelola.',
  'ppid.permohonan.title':
    'Permohonan Informasi',
  'ppid.permohonan.desc':
    'Prosedur permohonan informasi.',
  'ppid.form_keberatan.title': 
    'Formulir Keberatan',
  'ppid.form_keberatan.desc':
    'Prosedur dan formulir pengajuan keberatan informasi.',
  'ppid.sop.title':
    'SOP Layanan Informasi Publik',
  'ppid.sop.desc':
    'Standar operasional prosedur layanan informasi publik.',

  // ===== MENU PUBLIK =====
  'menuPublik.berita.title': 'Berita',
  'menuPublik.berita.desc':
    'Kumpulan berita terkini Dinkominfo Banyumas.',
  'menuPublik.pelayanan.title': 'Pelayanan',
  'menuPublik.pelayanan.desc':
    'Informasi layanan publik yang tersedia.',
  'menuPublik.pengumuman.title': 'Pengumuman',
  'menuPublik.pengumuman.desc':
    'Informasi penting dan pengumuman resmi.',
  'menuPublik.materiBimtek.title': 'Materi Bimtek',
  'menuPublik.materiBimtek.desc':
    'Dokumen dan materi kegiatan bimbingan teknis.',
  'menuPublik.galeri.title': 'Galeri',
  'menuPublik.galeri.desc':
    'Dokumentasi foto dan kegiatan Dinkominfo.',
  'menuPublik.reformasi.title': 'Reformasi Birokrasi',
  'menuPublik.reformasi.desc':
    'Informasi program reformasi birokrasi.',

   // ===== HERO BANNER =====
  'hero.title': 'Menjawab kebutuhan Informasi Warga Banyumas',
  'hero.subtitle':
    'Temukan informasi publik terkini dari Pemerintahan Kabupaten Banyumas.',
  'hero.popularTitle': 'Pencarian Populer di Banyumas',

  'hero.placeholder.search': 'Cari artikel, berita, atau layanan...',
  'hero.placeholder.perizinan': 'Perizinan Online',
  'hero.placeholder.pajak': 'Info Pajak',
  'hero.placeholder.lapor': 'Lapor!',
  'hero.placeholder.ppid': 'PPID',
  'hero.today': 'HARI INI',

  // ===== SECTION HOME =====
  'home.section.news': 'Berita Terbaru',
  'home.section.news.all': 'Lihat Semua Berita >',

  'home.section.info': 'Informasi',
  'home.section.info.all': 'Lihat Semua Informasi >',

  'home.section.education': 'Edukasi Publik',
  'home.section.education.all': 'Lihat Semua Edukasi >',

  'home.section.agenda': 'Agenda',
  'home.section.agenda.all': 'Lihat Semua Agenda >',
  'home.section.agenda.empty': 'Belum ada agenda terdekat.',

  // ===== FOOTER =====
  'footer.copyright':
    '© 2025 Dinas Komunikasi dan Informatika Kabupaten Banyumas.',
  'footer.address.title': 'Alamat',
  'footer.contact.title': 'Kontak',
  'footer.followUs': 'Ikuti kami',
    'counter.today': 'Hari ini',
    'counter.thisWeek': 'Minggu ini',
    'counter.thisMonth': 'Bulan ini',
    'counter.thisYear': 'Tahun ini',
    'counter.totalVisitors': 'Total Pengunjung',
    'counter.lastStats': 'Statistik Terakhir',
    'counter.postPrefix': 'Post',
    'counter.visitors': 'Pengunjung',
} as const;

/* ===== 2. JENIS KEY (dipakai di Header dll) ===== */
export type MessageKey = keyof typeof idMessages;

/* Value untuk semua bahasa: string biasa */
type Messages = Record<MessageKey, string>;

/* =========================
   3. KAMUS BAHASA INGGRIS
   ========================= */
const enMessages: Messages = {
  // HEADER & NAV
  'header.title': 'Banyumas Regency Government',
  'header.subTitle': 'Department of Communication and Informatics',

  'nav.home': 'Home',
  'nav.profile': 'Profile',
  'nav.ppid': 'PPID',
  'nav.publicMenu': 'Public Menu',
  'nav.staffData': 'Staff Data',
  'nav.download': 'Download',
  'nav.faq': 'F.A.Q',
  'nav.contact': 'Contact',

  // MEGA COMMON
  'mega.close': 'Close',
  'mega.profil.title': 'Dinkominfo Profile',
  'mega.profil.subtitle':
    'Information about the profile, duties, functions, and organisation structure of Dinkominfo Banyumas.',
  'mega.ppid.title': 'PPID',
  'mega.ppid.subtitle':
    'Public information service, legal basis, and procedures for information requests.',
  'mega.menuPublik.title': 'Public Menu',
  'mega.menuPublik.subtitle':
    'Entry point to the main public information content of Dinkominfo Banyumas.',

  // PROFIL
  'profil.visiMisi.title': 'Vision and Mission',
  'profil.visiMisi.desc': 'Direction and goals of Dinkominfo Banyumas.',
  'profil.tugasFungsi.title': 'Duties and Functions',
  'profil.tugasFungsi.desc': 'Scope of duties and functions of Dinkominfo.',
  'profil.struktur.title': 'Organisation Structure',
  'profil.struktur.desc':
    'Organisation structure and units of Dinkominfo.',
  'profil.sejarah.title': 'History of Dinkominfo',
  'profil.sejarah.desc':
    'History and development of Dinkominfo Banyumas.',
  'profil.alamatKontak.title': 'Address and Contact',
  'profil.alamatKontak.desc':
    'Office location and official contact information.',
  'profil.iku.title': 'Key Performance Indicators',
  'profil.iku.desc':
    'Targets and performance indicators of Dinkominfo.',

  // PPID
  'ppid.skDip.title': 'Excluded DIP Decree',
  'ppid.skDip.desc':
    'List of information excluded according to regulations.',
  'ppid.berkala.title': 'Periodic',
  'ppid.berkala.desc':
    'Public information announced periodically.',
  'ppid.setiapSaat.title': 'Any Time',
  'ppid.setiapSaat.desc':
    'Information that can be accessed any time.',
  'ppid.sertaMerta.title': 'Immediate',
  'ppid.sertaMerta.desc':
    'Information that must be immediately delivered to the public.',
  'ppid.struktur.title': 'PPID Structure',
  'ppid.struktur.desc': 'Composition and personnel of PPID.',
  'ppid.maklumat.title': 'Service Charter',
  'ppid.maklumat.desc':
    'Public information service commitment by PPID.',
  'ppid.laporanTahunan.title': 'Annual Report',
  'ppid.laporanTahunan.desc':
    'Annual report of public information services.',
  'ppid.skPpid.title': 'PPID Decree',
  'ppid.skPpid.desc':
    'Legal basis for the establishment of PPID Banyumas.',
  'ppid.skDipPenetapan.title': 'DIP Determination Decree',
  'ppid.skDipPenetapan.desc':
    'Determination of public information managed.',
  'ppid.permohonan.title':
    'Information Request & Objection Form',
  'ppid.permohonan.desc':
    'Procedures and forms for information requests and objections.',
  'ppid.form_keberatan.title': 
    'Objection Form',
  'ppid.form_keberatan.desc': 
    'Procedures and forms for submitting information objections.',
  'ppid.sop.title':
    'Public Information Service SOP',
  'ppid.sop.desc':
    'Standard operating procedures for public information services.',

  // MENU PUBLIK
  'menuPublik.berita.title': 'News',
  'menuPublik.berita.desc':
    'Latest news from Dinkominfo Banyumas.',
  'menuPublik.pelayanan.title': 'Services',
  'menuPublik.pelayanan.desc':
    'Available public service information.',
  'menuPublik.pengumuman.title': 'Announcements',
  'menuPublik.pengumuman.desc':
    'Important information and official announcements.',
  'menuPublik.materiBimtek.title': 'Training Materials',
  'menuPublik.materiBimtek.desc':
    'Documents and materials from technical trainings.',
  'menuPublik.galeri.title': 'Gallery',
  'menuPublik.galeri.desc':
    'Photo documentation of Dinkominfo activities.',
  'menuPublik.reformasi.title': 'Bureaucratic Reform',
  'menuPublik.reformasi.desc':
    'Information about bureaucratic reform programmes.',

    // ===== HERO BANNER =====
  'hero.title': 'Answering the Information Needs of Banyumas Citizens',
  'hero.subtitle':
    'Find the latest public information from the Government of Banyumas Regency.',
  'hero.popularTitle': 'Popular Searches in Banyumas',

  'hero.placeholder.search': 'Search articles, news or services...',
  'hero.placeholder.perizinan': 'Online Licensing',
  'hero.placeholder.pajak': 'Tax Information',
  'hero.placeholder.lapor': 'Report!',
  'hero.placeholder.ppid': 'PPID',
  'hero.today': 'TODAY',

  // ===== HOME SECTIONS =====
  'home.section.news': 'Latest News',
  'home.section.news.all': 'View All News >',

  'home.section.info': 'Information',
  'home.section.info.all': 'View All Information >',

  'home.section.education': 'Public Education',
  'home.section.education.all': 'View All Education >',

  'home.section.agenda': 'Agenda',
  'home.section.agenda.all': 'View All Agenda >',
  'home.section.agenda.empty': 'No upcoming agenda yet.',

  // ===== FOOTER =====
  'footer.copyright':
    '© 2025 Department of Communication and Informatics of Banyumas Regency.',
  'footer.address.title': 'Address',
  'footer.contact.title': 'Contact',
  'footer.followUs': 'Follow us',
    'counter.today': 'Today',
    'counter.thisWeek': 'This Week',
    'counter.thisMonth': 'This Month',
    'counter.thisYear': 'This Year',
    'counter.totalVisitors': 'Total Visitors',
    'counter.lastStats': 'Last Statistics',
    'counter.postPrefix': 'Post',
    'counter.visitors': 'Visitors',

};

/* =========================
   4. EXPORT KEDUA BAHASA
   ========================= */
export const messages: Record<Lang, Messages> = {
  id: idMessages,
  en: enMessages,
};
