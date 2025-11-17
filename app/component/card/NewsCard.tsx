import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/assets/css/NewsCard.module.css';

interface NewsCardProps {
  href: string;
  imageUrl: string;
  altText: string;
  date: string;
  title: string;
}

export default function NewsCard({ href, imageUrl, altText, date, title }: NewsCardProps) {
  return (
    // Gunakan Link untuk membungkus seluruh kartu
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={altText}
            fill // Gunakan 'fill' untuk mengisi div
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.image}
            // Aktifkan unoptimized jika Anda memakai placeholder eksternal
            unoptimized={imageUrl.startsWith('https')}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.date}>{date}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}