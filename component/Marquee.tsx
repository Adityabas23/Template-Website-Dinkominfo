import React from 'react';
import styles from './Marquee.module.css'; // Kita akan buat file ini selanjutnya

interface MarqueeProps {
  children: React.ReactNode;
  duration?: string; // Opsional, untuk kecepatan
}

const Marquee: React.FC<MarqueeProps> = ({ children, duration = '30s' }) => {
  return (
    <div className={styles.marqueeWrapper}>
      <div 
        className={styles.marqueeContent} 
        style={{ '--animation-duration': duration } as React.CSSProperties}
      >
        {/* Render konten 2x untuk loop yang mulus */}
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;