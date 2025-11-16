import Image from 'next/image';
import Link from 'next/link';
import styles from './EdukasiCard.module.css';
// Kita butuh ikon 'Play' dari react-icons
import { FaPlay } from 'react-icons/fa'; 

// Tipe props
interface EdukasiCardProps {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  type: 'image' | 'video'; // Tipe konten: gambar atau video
}

export default function EdukasiCard({ href, imageUrl, altText, title, type }: EdukasiCardProps) {
  // Cek apakah link eksternal (misal: ke YouTube)
  const isExternal = href.startsWith('http');

  return (
    <Link 
      href={href} 
      className={styles.cardLink}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
            unoptimized={true} // Wajib untuk gambar eksternal/lokal
          />
          {/* Tampilkan ikon play JIKA tipenya 'video' */}
          {type === 'video' && (
            <div className={styles.playOverlay}>
              <FaPlay className={styles.playIcon} />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}