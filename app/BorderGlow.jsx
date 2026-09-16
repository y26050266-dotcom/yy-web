'use client';

import { useCallback, useEffect, useRef } from 'react';
import './BorderGlow.css';

function parseHSL(value) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 192, s: 72, l: 70 };
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars = {};

  opacities.forEach((opacity, index) => {
    vars[`--glow-color${keys[index]}`] = `hsl(${base} / ${Math.min(opacity * intensity, 100)}%)`;
  });

  return vars;
}

const gradientPositions = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const gradientKeys = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
const colorMap = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors) {
  const vars = {};

  gradientKeys.forEach((key, index) => {
    const color = colors[Math.min(colorMap[index], colors.length - 1)];
    vars[key] = `radial-gradient(at ${gradientPositions[index]}, ${color} 0, transparent 50%)`;
  });

  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInCubic(value) {
  return value * value * value;
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 26,
  glowColor = '192 72 70',
  backgroundColor = '#252a2f',
  borderRadius = 10,
  glowRadius = 34,
  glowIntensity = 0.9,
  coneSpread = 25,
  animated = false,
  colors = ['#56c6e8', '#8b68e5', '#f04a2f'],
  fillOpacity = 0.4,
}) {
  const cardRef = useRef(null);

  const setPointerPosition = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
    const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
    const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3));
    card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!animated || !card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const duration = 3000;
    let frame = 0;
    let startedAt = 0;

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const proximity = progress < 0.5
        ? easeOutCubic(progress * 2) * 100
        : easeInCubic((1 - progress) * 2) * 100;
      const angle = 110 + 355 * progress;

      card.style.setProperty('--edge-proximity', proximity.toFixed(3));
      card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        card.classList.remove('sweep-active');
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      startedAt = performance.now();
      card.classList.add('sweep-active');
      frame = requestAnimationFrame(tick);
    }, { rootMargin: '100px 0px' });
    observer.observe(card);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      card.classList.remove('sweep-active');
    };
  }, [animated]);

  return (
    <div
      ref={cardRef}
      onPointerMove={setPointerPosition}
      className={`border-glow-card ${className}`.trim()}
      style={{
        '--card-bg': backgroundColor,
        '--edge-sensitivity': edgeSensitivity,
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--cone-spread': coneSpread,
        '--fill-opacity': fillOpacity,
        ...buildGlowVars(glowColor, glowIntensity),
        ...buildGradientVars(colors),
      }}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
