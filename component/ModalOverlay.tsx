// components/ModalOverlay.tsx
'use client';

import React from 'react';
import styles from '@/app/page.module.css';

type ModalOverlayProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'md' | 'lg';
};

export default function ModalOverlay({
  open,
  title,
  onClose,
  children,
  size = 'md',
}: ModalOverlayProps) {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div
        className={`${styles.modalCard} ${
          size === 'lg' ? styles.modalCardLg : ''
        }`}
      >
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className={styles.modalClose}
            aria-label="Tutup"
          >
            ×
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
