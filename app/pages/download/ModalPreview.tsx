"use client";

import styles from "./ModalPreview.module.css";

interface ModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string | null;
}

export default function ModalPreview({ isOpen, onClose, fileUrl }: ModalPreviewProps) {
  if (!isOpen || !fileUrl) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <iframe src={fileUrl} className={styles.iframe} />
      </div>
    </div>
  );
}
