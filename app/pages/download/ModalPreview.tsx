"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import styles from "./ModalPreview.module.css";

type ModalPreviewProps = {
  isOpen: boolean;
  fileUrl: string | null;
  onClose: () => void;
};

type ExcelRow = (string | number | boolean | null)[];

export default function ModalPreview({
  isOpen,
  fileUrl,
  onClose,
}: ModalPreviewProps) {
  const [excelData, setExcelData] = useState<ExcelRow[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // lock scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !fileUrl) {
      setExcelData(null);
      setError(null);
      return;
    }

    const ext = fileUrl.split(".").pop()?.toLowerCase();
    if (ext !== "xlsx" && ext !== "xls") {
      setExcelData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil file");
        }
        return res.arrayBuffer();
      })
      .then((buf) => {
        const wb = XLSX.read(buf, { type: "array" });
        const sheetName = wb.SheetNames[0];
        const sheet = wb.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json<ExcelRow>(sheet, {
          header: 1,
        });
        setExcelData(rows);
      })
      .catch((err: any) => {
        setError(err.message ?? "Terjadi kesalahan saat membaca Excel");
      })
      .finally(() => setLoading(false));
  }, [isOpen, fileUrl]);

  if (!isOpen || !fileUrl) return null;

  const ext = fileUrl.split(".").pop()?.toLowerCase();
  const isPdf = ext === "pdf";
  const isExcel = ext === "xlsx" || ext === "xls";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak close
      >
        <div className={styles.header}>
          <span className={styles.title}>Preview Dokumen</span>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {isPdf && (
            <object
              data={fileUrl}
              type="application/pdf"
              className={styles.pdfObject}
            >
              <p>
                Tidak dapat menampilkan PDF.{" "}
                <a href={fileUrl} target="_blank" rel="noreferrer">
                  Buka di tab baru
                </a>
              </p>
            </object>
          )}

          {isExcel && (
            <div className={styles.excelWrapper}>
              {loading && (
                <div className={styles.info}>Memuat data Excel…</div>
              )}
              {error && <div className={styles.error}>{error}</div>}
              {!loading && !error && excelData && (
                <table className={styles.excelTable}>
                  <tbody>
                    {excelData.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell as any}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {!loading && !error && !excelData && (
                <div className={styles.info}>Tidak ada data.</div>
              )}
            </div>
          )}

          {!isPdf && !isExcel && (
            <div className={styles.info}>
              Jenis file belum didukung untuk preview.{" "}
              <a href={fileUrl} target="_blank" rel="noreferrer">
                Buka di tab baru
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
