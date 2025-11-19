// component/AccessibilitySidebar.tsx
'use client';

import { useState, useEffect } from 'react';
import { HiViewGrid } from "react-icons/hi";
import Image from 'next/image';
import {
  FaSmile,
  FaBookOpen,
  FaBolt,
  FaUniversalAccess,
} from 'react-icons/fa';

import styles from '@/app/assets/css/accessibilitySidebar.module.css';

type ModalType = 'survey' | 'contact' | 'quickAccess' | 'accessibility' | null;
type ContactView = 'menu' | 'guestbook' | 'phone' | 'email';

export default function AccessibilitySidebar() {
  const [hovered, setHovered] = useState<ModalType | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [contactView, setContactView] = useState<ContactView>('menu');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // == ACCESSIBILITY STATE ==
  const [largeFont, setLargeFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (largeFont) body.classList.add('a11y-large-font');
    else body.classList.remove('a11y-large-font');

    if (highContrast) body.classList.add('a11y-high-contrast');
    else body.classList.remove('a11y-high-contrast');
  }, [largeFont, highContrast]);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    setIsMobileMenuOpen(false); // tutup menu mobile kalau ada
    if (type === 'contact') {
      setContactView('menu');
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // === MODAL SURVEY (poster + link) ===
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

  // === MODAL KONTAK ===
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

  // === MODAL AKSES CEPAT ===
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
          <p>
            Sampaikan aspirasi dan pengaduan Anda terkait layanan publik.
          </p>
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
          <p>
            Akses cepat ke berita terbaru Dinkominfo dan Pemerintah Kabupaten.
          </p>
        </a>
      </div>

      <div className={styles.modalActions}>
        <button className={styles.btnGhost} onClick={closeModal}>
          Tutup
        </button>
      </div>
    </Modal>
  );

  // === MODAL AKSESIBILITAS ===
  const renderAccessibilityModal = () => (
    <Modal title="Pengaturan Aksesibilitas" onClose={closeModal}>
      <p className={styles.modalIntro}>
        Sesuaikan tampilan agar lebih nyaman digunakan sesuai kebutuhan Anda.
      </p>

      <div className={styles.accessSettings}>
        <label className={styles.toggleRow}>
          <input
            type="checkbox"
            checked={largeFont}
            onChange={(e) => setLargeFont(e.target.checked)}
          />
          <span>Perbesar ukuran font</span>
        </label>

        <label className={styles.toggleRow}>
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
          />
          <span>Mode kontras tinggi</span>
        </label>

        <p className={styles.helperText}>
          Pengaturan ini hanya memengaruhi tampilan di browser Anda saat ini.
        </p>
      </div>

      <div className={styles.modalActions}>
        <button className={styles.btnGhost} onClick={closeModal}>
          Tutup
        </button>
      </div>
    </Modal>
  );

  return (
    <>
      {/* DESKTOP / LAPTOP SIDEBAR */}
      <div className={`${styles.accessSidebar} ${styles.desktopOnly}`}>
        {/* ISI SURVEY */}
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

        {/* KONTAK */}
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

        {/* AKSES CEPAT */}
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

        {/* AKSESIBILITAS */}
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

        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
