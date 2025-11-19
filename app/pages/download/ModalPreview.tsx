"use client";

import React, { useEffect } from "react";
import styles from "./ModalPreview.module.css";

type Props = {
  isOpen: boolean;
  fileUrl: string | null;
  onClose: () => void;
};

export default function ModalPreview({ isOpen, fileUrl, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // kunci scroll body
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !fileUrl) return null;

  const ext = fileUrl.split(".").pop()?.toLowerCase();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalBox}
        onClick={(e) => e.stopPropagation()} // cegah close bila klik dalam box
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.viewerArea}>
          {ext === "pdf" && (
            <iframe src={fileUrl} className={styles.viewerIframe} />
          )}

          {(ext === "xlsx" || ext === "xls") && (
            <iframe
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                window.location.origin + fileUrl
              )}`}
              className={styles.viewerIframe}
            />
          )}
        </div>
      </div>
    </div>
  );
}
