// components/HeaderWrapper.tsx
'use client';

import Header from './header';
import { useEffect, useRef, useState } from 'react';

export default function HeaderWrapper() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height + 16); // +1rem untuk transform
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <div style={{ height: `${headerHeight}px` }} />
    </>
  );
}