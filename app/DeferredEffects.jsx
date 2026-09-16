'use client';

import { lazy, Suspense, useEffect, useState } from 'react';

const MotionDirector = lazy(() => import('./MotionDirector'));
const PixelBlast = lazy(() => import('./PixelBlast'));

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);
  const [showPixels, setShowPixels] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const sections = ['profile', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px 0px' });

    sections.forEach((section) => observer.observe(section));
    const desktop = window.matchMedia('(min-width: 901px)');
    const updateDisplay = () => setShowPixels(desktop.matches);
    updateDisplay();
    desktop.addEventListener('change', updateDisplay);
    return () => {
      observer.disconnect();
      desktop.removeEventListener('change', updateDisplay);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <Suspense fallback={null}><MotionDirector /></Suspense>
      {showPixels && <Suspense fallback={null}>
        <PixelBlast
          className="home-pixel-blast"
          variant="circle"
          pixelSize={6}
          color="#56c6e8"
          patternScale={3}
          patternDensity={0.5}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.15}
          liquid
          liquidStrength={0.08}
          liquidRadius={1.1}
          liquidWobbleSpeed={5}
          speed={0.22}
          edgeFade={0.22}
          transparent
        />
      </Suspense>}
    </>
  );
}
