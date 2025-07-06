'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface Props {
  animationData: any;
  className?: string;
}

export default function LottiePlayer({ animationData, className = 'w-64 h-64' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy(); // Clean up on unmount
  }, [animationData]);

  return <div ref={containerRef} className={className} />;
}
