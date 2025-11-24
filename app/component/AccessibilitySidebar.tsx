// component/AccessibilitySidebar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { HiViewGrid } from 'react-icons/hi';
import Image from 'next/image';
import { FaSmile, FaBookOpen, FaBolt, FaUniversalAccess } from 'react-icons/fa';

import styles from '@/app/assets/css/accessibilitySidebar.module.css';

type ModalType = 'survey' | 'contact' | 'quickAccess' | 'accessibility' | null;
type ContactView = 'menu' | 'guestbook' | 'phone' | 'email';

export default function AccessibilitySidebar() {
  const [hovered, setHovered] = useState<ModalType | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [contactView, setContactView] = useState<ContactView>('menu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ========= STATE AKSESIBILITAS =========
  // level 0 = kecil, 1 = normal, 2 = besar
  const [textSizeLevel, setTextSizeLevel] = useState<0 | 1 | 2>(1);
  const [lineHeightLevel, setLineHeightLevel] = useState<0 | 1 | 2>(1);
  const [textSpacingLevel, setTextSpacingLevel] = useState<'small' | 'medium' | 'large'>('medium');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'justify'>('left');

  const [boldText, setBoldText] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [monochrome, setMonochrome] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false); // garis panduan
  const [highlightFocus, setHighlightFocus] = useState(false); // stabilo elemen fokus

  // ref untuk garis pandu membaca
  const readingGuideRef = useRef<HTMLDivElement | null>(null);

  // ====== TERAPKAN CLASS KE <body> UNTUK (hampir) SEMUA PENGATURAN ======
  useEffect(() => {
    const body = document.body;

    // ukuran teks
    body.classList.toggle('a11y-font-small', textSizeLevel === 0);
    body.classList.toggle('a11y-font-normal', textSizeLevel === 1);
    body.classList.toggle('a11y-font-large', textSizeLevel === 2);

    // tinggi baris
    body.classList.toggle('a11y-line-tight', lineHeightLevel === 0);
    body.classList.toggle('a11y-line-normal', lineHeightLevel === 1);
    body.classList.toggle('a11y-line-loose', lineHeightLevel === 2);

    // spasi teks
    body.classList.toggle('a11y-spacing-small', textSpacingLevel === 'small');
    body.classList.toggle('a11y-spacing-medium', textSpacingLevel === 'medium');
    body.classList.toggle('a11y-spacing-large', textSpacingLevel === 'large');

    // rata tulisan
    body.classList.toggle('a11y-align-left', textAlign === 'left');
    body.classList.toggle('a11y-align-center', textAlign === 'center');
    body.classList.toggle('a11y-align-justify', textAlign === 'justify');

    // boolean toggles
    body.classList.toggle('a11y-bold-text', boldText);
    body.classList.toggle('a11y-highlight-links', highlightLinks);
    body.classList.toggle('a11y-monochrome', monochrome);
    body.classList.toggle('a11y-high-contrast', highContrast);
    body.classList.toggle('a11y-large-cursor', largeCursor);
    body.classList.toggle('a11y-pause-animations', pauseAnimations);
    body.classList.toggle('a11y-hide-images', hideImages);
    body.classList.toggle('a11y-highlight-focus', highlightFocus);
  }, [
    textSizeLevel,
    lineHeightLevel,
    textSpacingLevel,
    textAlign,
    boldText,
    highlightLinks,
    monochrome,
    highContrast,
    largeCursor,
    pauseAnimations,
    hideImages,
    highlightFocus,
  ]);

  // ====== KHUSUS: PERBESAR KURSOR (tambahan inline-style agar pasti jalan) ======
  useEffect(() => {
    const body = document.body;

    if (largeCursor) {
      // kalau image tidak valid, browser fallback ke auto (tetap aman)
      body.style.cursor = "url('/big-cursor.png'), auto";
    } else {
      body.style.cursor = ''; // reset ke default
    }

    return () => {
      body.style.cursor = '';
    };
  }, [largeCursor]);

  // ====== GARIS PANDUAN MEMBACA (BAR KUNING MENGIKUTI KURSOR) ======
  useEffect(() => {
    // kalau toggle OFF, jangan buat apa-apa
    if (!readingGuide) return;

    // 1. buat elemen bar
    const guideEl = document.createElement('div');
    guideEl.id = 'a11y-reading-guide';
    document.body.appendChild(guideEl);

    // 2. geser posisi pakai "top" (tanpa transform)
    const height = 80; // sama dengan CSS
    const handleMouseMove = (e: MouseEvent) => {
      const top = e.clientY - height / 2;
      guideEl.style.top = `${top}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3. cleanup kalau dimatikan
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      guideEl.remove();
    };
  }, [readingGuide]);


  // RESET semua pengaturan
  const resetAccessibility = () => {
    setTextSizeLevel(1);
    setLineHeightLevel(1);
    setTextSpacingLevel('medium');
    setTextAlign('left');

    setBoldText(false);
    setHighlightLinks(false);
    setMonochrome(false);
    setHighContrast(false);
    setLargeCursor(false);
    setPauseAnimations(false);
    setHideImages(false);
    setReadingGuide(false);
    setHighlightFocus(false);
  };

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    setIsMobileMenuOpen(false);
    if (type === 'contact') setContactView('menu');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // ===== MODAL SURVEI =====
  const renderSurveyModal = () => (
    <Modal title="Survei Kepuasan Masyarakat" onClose={closeModal}>
      <div className={styles.modalIntro}>
        <p>
          Silakan ikuti Survei Kepuasan Layanan Publik DINKOMINFO Kabupaten
          Banyumas melalui tautan resmi berikut. Klik gambar atau tombol di
          bawah ini.
        </p>
      </div>

      <a
        href="https://bitly.cx/tmZwd"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.surveyImageLink}
      >
        <Image
          src="/info1.png"
          alt="Survei Kepuasan Layanan Publik Dinas Kominfo Kab. Banyumas 2025"
          width={900}
          height={600}
          className={styles.surveyImage}
        />
      </a>

      <div className={styles.modalActions}>
        <button className={styles.btnGhost} onClick={closeModal}>
          Tutup
        </button>
        <a
          href="https://bitly.cx/tmZwd"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btnPrimary} ${styles.btnPrimaryLink}`}
        >
          Buka Survei
        </a>
      </div>
    </Modal>
  );

  // ===== MODAL KONTAK =====
  const renderContactModal = () => {
    if (contactView === 'menu') {
      return (
        <Modal title="Kontak & Buku Tamu" onClose={closeModal}>
          <p className={styles.modalIntro}>
            Silakan pilih jenis kontak yang ingin Anda gunakan.
          </p>
          <div className={styles.contactMenu}>
            <button
              className={styles.contactItem}
              onClick={() => setContactView('guestbook')}
            >
              <span>📝</span>
              <div>
                <h4>Sampaikan Komentar</h4>
                <p>Isi Buku Tamu dan sampaikan masukan Anda.</p>
              </div>
            </button>
            <button
              className={styles.contactItem}
              onClick={() => setContactView('phone')}
            >
              <span>📞</span>
              <div>
                <h4>Nomor Telepon</h4>
                <p>Telepon/Faximile Dinas Kominfo Banyumas.</p>
              </div>
            </button>
            <button
              className={styles.contactItem}
              onClick={() => setContactView('email')}
            >
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>Alamat email resmi yang dapat dihubungi.</p>
              </div>
            </button>
          </div>
          <div className={styles.modalActions}>
            <button className={styles.btnGhost} onClick={closeModal}>
              Tutup
            </button>
          </div>
        </Modal>
      );
    }

    if (contactView === 'guestbook') {
      return (
        <Modal
          title="Buku Tamu"
          onClose={closeModal}
          onBack={() => setContactView('menu')}
        >
          <form className={styles.guestbookForm}>
            <label>
              Nama
              <input type="text" placeholder="Nama lengkap" />
            </label>
            <label>
              No Telepon
              <input type="tel" placeholder="Nomor telepon yang bisa dihubungi" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Alamat email aktif" />
            </label>
            <label>
              Komentar
              <textarea rows={4} placeholder="Tuliskan komentar atau saran Anda" />
            </label>

            <div className={styles.fakeCaptcha}>
              I&apos;m not a robot (tempat reCAPTCHA)
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => setContactView('menu')}
              >
                Batal
              </button>
              <button type="submit" className={styles.btnPrimary}>
                Simpan
              </button>
            </div>
          </form>
        </Modal>
      );
    }

    if (contactView === 'phone') {
      return (
        <Modal
          title="Kontak Telepon"
          onClose={closeModal}
          onBack={() => setContactView('menu')}
        >
          <p className={styles.modalIntro}>
            Anda dapat menghubungi kami pada jam kerja melalui nomor berikut:
          </p>
          <p className={styles.bigContact}>
            Telepon/Faximile: <strong>(0281) 632338</strong>
          </p>
          <div className={styles.modalActions}>
            <button
              className={styles.btnGhost}
              onClick={() => setContactView('menu')}
            >
              Kembali
            </button>
          </div>
        </Modal>
      );
    }

    return (
      <Modal
        title="Kontak Email"
        onClose={closeModal}
        onBack={() => setContactView('menu')}
      >
        <p className={styles.modalIntro}>
          Untuk pertanyaan non-darurat dan korespondensi resmi, silakan kirim email ke:
        </p>
        <p className={styles.bigContact}>
          <a href="mailto:dinkominfo@banyumaskab.go.id">
            dinkominfo@banyumaskab.go.id
          </a>
        </p>
        <div className={styles.modalActions}>
          <button
            className={styles.btnGhost}
            onClick={() => setContactView('menu')}
          >
            Kembali
          </button>
        </div>
      </Modal>
    );
  };

  // ===== MODAL AKSES CEPAT =====
  const renderQuickAccessModal = () => (
    <Modal title="Akses Cepat" onClose={closeModal}>
      <p className={styles.modalIntro}>
        Dapatkan kemudahan akses ke beberapa layanan Pemerintah Kabupaten
        Banyumas untuk kebutuhan Anda.
      </p>

      <div className={styles.quickGrid}>
        <a href="http://lpse.banyumaskab.go.id/" className={styles.quickCard}>
          <div className={styles.quickIcon}>🏛️</div>
          <h4>LPSE Kab. Banyumas</h4>
          <p>
            Layanan pengadaan secara elektronik Pemerintah Kabupaten Banyumas.
          </p>
        </a>

        <a href="https://siap.banyumaskab.go.id" className={styles.quickCard}>
          <div className={styles.quickIcon}>📢</div>
          <h4>SIAP (Aspirasi & Pengaduan)</h4>
          <p>Sampaikan aspirasi dan pengaduan Anda terkait layanan publik.</p>
        </a>

        <a href="https://perizinan.banyumaskab.go.id/" className={styles.quickCard}>
          <div className={styles.quickIcon}>📊</div>
          <h4>Sipanjimas</h4>
          <p>
            Sistem informasi perencanaan, penganggaran, dan kinerja pembangunan.
          </p>
        </a>

        <a href="#" className={styles.quickCard}>
          <div className={styles.quickIcon}>📰</div>
          <h4>Berita & Informasi</h4>
          <p>Akses cepat ke berita terbaru Dinkominfo dan Pemerintah Kabupaten.</p>
        </a>
      </div>

      <div className={styles.modalActions}>
        <button className={styles.btnGhost} onClick={closeModal}>
          Tutup
        </button>
      </div>
    </Modal>
  );

  // ===== MODAL AKSESIBILITAS (UI seperti screenshot kedua) =====
  const renderAccessibilityModal = () => {
    const sizePercent = textSizeLevel === 0 ? 90 : textSizeLevel === 1 ? 100 : 120;
    const lineLabel = lineHeightLevel === 0 ? '0.9x' : lineHeightLevel === 1 ? '1x' : '1.2x';

    return (
      <Modal title="Pengaturan Aksesibilitas" onClose={closeModal}>
        <p className={styles.modalIntro}>
          Sesuaikan tampilan agar lebih nyaman digunakan sesuai kebutuhan Anda.
        </p>

        <div className={styles.accessPanel}>
          {/* ATUR UKURAN TEKS */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Atur Ukuran Teks</span>
            </div>
            <div className={styles.stepRow}>
              <button
                type="button"
                className={styles.circleBtn}
                onClick={() =>
                  setTextSizeLevel(prev => (prev > 0 ? ((prev - 1) as 0 | 1 | 2) : prev))
              }>
                −
              </button>
              <span className={styles.valueLabel}>{sizePercent}%</span>
              <button
                type="button"
                className={styles.circleBtn}
                onClick={() =>
                  setTextSizeLevel(prev => (prev < 2 ? ((prev + 1) as 0 | 1 | 2) : prev))
              }>
                +
              </button>
            </div>
          </div>

          {/* ATUR TINGGI BARIS */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Atur Tinggi Baris</span>
            </div>
            <div className={styles.stepRow}>
              <button
                type="button"
                className={styles.circleBtn}
                onClick={() =>
                  setLineHeightLevel(prev => (prev > 0 ? ((prev - 1) as 0 | 1 | 2) : prev))
              }>
                −
              </button>
              <span className={styles.valueLabel}>{lineLabel}</span>
              <button
                type="button"
                className={styles.circleBtn}
                onClick={() =>
                  setLineHeightLevel(prev => (prev < 2 ? ((prev + 1) as 0 | 1 | 2) : prev))
              }>
                +
              </button>
            </div>
          </div>

          {/* SPASI TEKS */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Spasi Teks</span>
            </div>
            <div className={styles.chipRow}>
              <button
                type="button"
                className={`${styles.chipBtn} ${
                  textSpacingLevel === 'small' ? styles.chipActive : ''
                }`}
                onClick={() => setTextSpacingLevel('small')}
              >
                Kecil
              </button>
              <button
                type="button"
                className={`${styles.chipBtn} ${
                  textSpacingLevel === 'medium' ? styles.chipActive : ''
                }`}
                onClick={() => setTextSpacingLevel('medium')}
              >
                Sedang
              </button>
              <button
                type="button"
                className={`${styles.chipBtn} ${
                  textSpacingLevel === 'large' ? styles.chipActive : ''
                }`}
                onClick={() => setTextSpacingLevel('large')}
              >
                Besar
              </button>
            </div>
          </div>

          {/* RATA TULISAN */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Rata Tulisan</span>
            </div>
            <div className={styles.chipRow}>
              <button
                type="button"
                className={`${styles.chipBtnIcon} ${
                  textAlign === 'left' ? styles.chipActive : ''
                }`}
                onClick={() => setTextAlign('left')}
              >
                ☰
              </button>
              <button
                type="button"
                className={`${styles.chipBtnIcon} ${
                  textAlign === 'center' ? styles.chipActive : ''
                }`}
                onClick={() => setTextAlign('center')}
              >
                ≡
              </button>
              <button
                type="button"
                className={`${styles.chipBtnIcon} ${
                  textAlign === 'justify' ? styles.chipActive : ''
                }`}
                onClick={() => setTextAlign('justify')}
              >
                ≋
              </button>
            </div>
          </div>

          {/* TEKS & WARNA */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Teks & Warna</span>
            </div>

            <ToggleRow
              label="Pertebal Huruf"
              active={boldText}
              onChange={setBoldText}
            />
            <ToggleRow
              label="Sorot Tautan"
              active={highlightLinks}
              onChange={setHighlightLinks}
            />
            <ToggleRow
              label="Mode Monokrom"
              active={monochrome}
              onChange={setMonochrome}
            />
            <ToggleRow
              label="Mode Kontras Terang"
              active={highContrast}
              onChange={setHighContrast}
            />
          </div>

          {/* KURSOR & FOKUS */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Kursor & Fokus</span>
            </div>

            <ToggleRow
              label="Perbesar Kursor"
              active={largeCursor}
              onChange={setLargeCursor}
            />
            <ToggleRow
              label="Stabilo Elemen yang Difokuskan"
              active={highlightFocus}
              onChange={setHighlightFocus}
            />
            <ToggleRow
              label="Garis Panduan Membaca"
              active={readingGuide}
              onChange={setReadingGuide}
            />
          </div>

          {/* KONTEN & ANIMASI */}
          <div className={styles.accessBlock}>
            <div className={styles.accessBlockHeader}>
              <span className={styles.accessBlockTitle}>Konten & Animasi</span>
            </div>

            <ToggleRow
              label="Animasi Dijeda"
              active={pauseAnimations}
              onChange={setPauseAnimations}
            />
            <ToggleRow
              label="Sembunyikan Gambar"
              active={hideImages}
              onChange={setHideImages}
            />
          </div>

          <p className={styles.helperText}>
            Pengaturan ini hanya memengaruhi tampilan di browser Anda saat ini.
          </p>

          <button
            type="button"
            className={styles.resetBtn}
            onClick={resetAccessibility}
          >
            Atur Ulang Pengaturan
          </button>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.btnGhost} onClick={closeModal}>
            Tutup
          </button>
        </div>
      </Modal>
    );
  };

  return (
    <>
      {/* DESKTOP / LAPTOP SIDEBAR */}
      <div className={`${styles.accessSidebar} ${styles.desktopOnly}`}>
        <button
          className={`${styles.accessBtn} ${
            hovered === 'survey' ? styles.accessBtnExpanded : ''
          }`}
          onMouseEnter={() => setHovered('survey')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => openModal('survey')}
        >
          <span className={styles.accessIcon}>
            <FaSmile />
          </span>
          <span className={styles.accessLabel}>Isi Survey</span>
        </button>

        <button
          className={`${styles.accessBtn} ${
            hovered === 'contact' ? styles.accessBtnExpanded : ''
          }`}
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => openModal('contact')}
        >
          <span className={styles.accessIcon}>
            <FaBookOpen />
          </span>
          <span className={styles.accessLabel}>Kontak</span>
        </button>

        <button
          className={`${styles.accessBtn} ${
            hovered === 'quickAccess' ? styles.accessBtnExpanded : ''
          }`}
          onMouseEnter={() => setHovered('quickAccess')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => openModal('quickAccess')}
        >
          <span className={styles.accessIcon}>
            <FaBolt />
          </span>
          <span className={styles.accessLabel}>Akses Cepat</span>
        </button>

        <button
          className={`${styles.accessBtn} ${
            hovered === 'accessibility' ? styles.accessBtnExpanded : ''
          }`}
          onMouseEnter={() => setHovered('accessibility')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => openModal('accessibility')}
        >
          <span className={styles.accessIcon}>
            <FaUniversalAccess />
          </span>
          <span className={styles.accessLabel}>Aksesibilitas</span>
        </button>
      </div>

      {/* MOBILE FLOATING BUTTON + MENU */}
      <div className={styles.mobileFabWrapper}>
        {isMobileMenuOpen && (
          <div className={styles.mobileMenuCard}>
            <button
              className={styles.mobileMenuItem}
              onClick={() => openModal('survey')}
            >
              <span className={styles.mobileMenuIcon}>
                <FaSmile />
              </span>
              <div className={styles.mobileMenuText}>
                <h4>Beri Penilaian</h4>
                <p>Berikan penilaian untuk website ini.</p>
              </div>
            </button>

            <button
              className={styles.mobileMenuItem}
              onClick={() => openModal('contact')}
            >
              <span className={styles.mobileMenuIcon}>
                <FaBookOpen />
              </span>
              <div className={styles.mobileMenuText}>
                <h4>Kontak & Aduan</h4>
                <p>Sampaikan aduan atau hubungi kami.</p>
              </div>
            </button>

            <button
              className={styles.mobileMenuItem}
              onClick={() => openModal('quickAccess')}
            >
              <span className={styles.mobileMenuIcon}>
                <FaBolt />
              </span>
              <div className={styles.mobileMenuText}>
                <h4>Akses Cepat</h4>
                <p>Jelajahi fitur utama dengan cepat.</p>
              </div>
            </button>

            <button
              className={styles.mobileMenuItem}
              onClick={() => openModal('accessibility')}
            >
              <span className={styles.mobileMenuIcon}>
                <FaUniversalAccess />
              </span>
              <div className={styles.mobileMenuText}>
                <h4>Aksesibilitas</h4>
                <p>Atur teks, kontras, dan tampilan.</p>
              </div>
            </button>
          </div>
        )}

        <button
          className={styles.mobileFabButton}
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          <HiViewGrid className={styles.mobileFabIcon} />
          <span className={styles.mobileFabLabel}>Fitur</span>
        </button>
      </div>

      {/* MODALS */}
      {activeModal === 'survey' && renderSurveyModal()}
      {activeModal === 'contact' && renderContactModal()}
      {activeModal === 'quickAccess' && renderQuickAccessModal()}
      {activeModal === 'accessibility' && renderAccessibilityModal()}
    </>
  );
}

/* --- Komponen Toggle Row kecil (untuk switch) --- */
type ToggleRowProps = {
  label: string;
  active: boolean;
  onChange: (val: boolean) => void;
};

function ToggleRow({ label, active, onChange }: ToggleRowProps) {
  return (
    <button
      type="button"
      className={`${styles.toggleRow} ${active ? styles.toggleRowActive : ''}`}
      onClick={() => onChange(!active)}
    >
      <span>{label}</span>
      <span
        className={`${styles.toggleSwitch} ${
          active ? styles.toggleSwitchOn : ''
        }`}
      >
        <span className={styles.toggleKnob} />
      </span>
    </button>
  );
}

/* --- Komponen Modal sederhana --- */

type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onBack?: () => void;
};

function Modal({ title, children, onClose, onBack }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalShell}>
        <header className={styles.modalHeader}>
          <div className={styles.modalTitleRow}>
            {onBack && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={onBack}
              >
                ←
              </button>
            )}
            <h3>{title}</h3>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Tutup"
          >
            ×
          </button>
        </header>

        {/* body bisa scroll */}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
