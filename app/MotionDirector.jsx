'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MotionDirector.css';

const sectionSequences = [
  {
    selector: '#profile',
    cards: '.profile-glow-card, .stat-item',
    images: '.portrait-panel img',
  },
  {
    selector: '#projects',
    cards: '.project-card',
    images: '.project-card img',
  },
  {
    selector: '#contact',
    cards: '.contact-main > *, .site-footer > *',
    images: '',
  },
];

export default function MotionDirector() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const curtain = document.querySelector('.opening-curtain');

    if (reduceMotion) {
      gsap.set(curtain, { display: 'none' });
      return undefined;
    }

    let desktopMotion;
    const refresh = () => ScrollTrigger.refresh();
    const context = gsap.context(() => {
      const deepLink = window.location.hash && window.location.hash !== '#top';

      if (deepLink) {
        gsap.set(curtain, { display: 'none' });
      } else {
        document.body.classList.add('motion-lock');

        const opening = gsap.timeline({
          defaults: { ease: 'power4.inOut' },
          onComplete: () => {
            document.body.classList.remove('motion-lock');
            gsap.set(curtain, { display: 'none' });
            ScrollTrigger.refresh();
          },
        });

        opening
          .fromTo(
            '.opening-lockup__line',
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.85, ease: 'expo.out' },
          )
          .fromTo(
            '.opening-lockup span, .opening-lockup small',
            { yPercent: 125, skewY: 5, opacity: 0 },
            { yPercent: 0, skewY: 0, opacity: 1, duration: 1.05, stagger: 0.11, ease: 'expo.out' },
            '-=0.55',
          )
          .to('.opening-lockup', { opacity: 0, y: -20, duration: 0.45, ease: 'power2.in' }, '+=0.25')
          .to(
            '.opening-curtain__panel',
            { yPercent: -105, duration: 1.25, stagger: 0.09 },
            '-=0.15',
          )
          .fromTo(
            '.hero-stage',
            { scale: 1.075, filter: 'brightness(0.56)' },
            { scale: 1, filter: 'brightness(1)', duration: 1.65, ease: 'power4.out' },
            '-=1.15',
          )
          .fromTo(
            '.hero-stage .site-header',
            { y: -42, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.05, ease: 'power3.out' },
            '-=1.2',
          )
          .fromTo(
            '.arcade-title-panel',
            { clipPath: 'inset(100% 0 0 0)', yPercent: 18, scaleX: 0.68, transformOrigin: 'left center' },
            { clipPath: 'inset(0% 0 0 0)', yPercent: 0, scaleX: 1, duration: 1.7, ease: 'expo.out' },
            '-=1.05',
          )
          .fromTo(
            '.arcade-title-panel h1 i',
            { yPercent: 145, rotateZ: 3, opacity: 0 },
            { yPercent: 0, rotateZ: 0, opacity: 1, duration: 1.25, stagger: 0.055, ease: 'power4.out' },
            '-=1.3',
          )
          .fromTo(
            '.arcade-subtitle, .arcade-menu a, .hero-role, .hero-bottom > *',
            { y: 42, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.05, stagger: 0.08, ease: 'power3.out' },
            '-=0.85',
          );
      }

      sectionSequences.forEach(({ selector, cards, images }) => {
        const section = document.querySelector(selector);
        if (!section) return;

        const title = section.querySelector('.motion-section-title__word');
        const index = section.querySelector('.motion-section-title__index');
        const heading = section.querySelector('.section-heading');
        const cardNodes = section.querySelectorAll(cards);
        const imageNodes = images ? section.querySelectorAll(images) : [];

        const sequence = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        });

        sequence
          .fromTo(
            title,
            { yPercent: 115, scaleX: 0.58, skewX: -9, transformOrigin: 'left bottom' },
            { yPercent: 0, scaleX: 1, skewX: 0, duration: 1.55, ease: 'expo.out' },
          )
          .fromTo(
            index,
            { xPercent: 80, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            '-=1.05',
          )
          .fromTo(
            heading,
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
            '-=0.72',
          )
          .fromTo(
            cardNodes,
            { y: 110, opacity: 0, clipPath: 'inset(0 0 18% 0)', rotateX: 4, transformPerspective: 1200 },
            { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', rotateX: 0, duration: 1.35, stagger: 0.16, ease: 'power4.out', clearProps: 'transformPerspective' },
            '-=0.48',
          );

        if (imageNodes.length) {
          sequence.fromTo(
            imageNodes,
            { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
            { clipPath: 'inset(0 0 0% 0)', scale: 1.055, duration: 1.45, stagger: 0.12, ease: 'power4.out' },
            '-=1.08',
          );
        }
      });

      desktopMotion = gsap.matchMedia();
      desktopMotion.add('(min-width: 901px)', () => {
        const parallaxImages = gsap.utils.toArray('.portrait-panel img, .project-card img');
        parallaxImages.forEach((image) => {
          const trigger = image.closest('.portrait-panel, .project-card') || image;
          gsap.fromTo(
            image,
            { yPercent: -3.5 },
            {
              yPercent: 3.5,
              ease: 'none',
              scrollTrigger: {
                trigger,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.4,
              },
            },
          );
        });
      });

      window.addEventListener('load', refresh, { once: true });
    });

    return () => {
      document.body.classList.remove('motion-lock');
      window.removeEventListener('load', refresh);
      desktopMotion?.revert();
      context.revert();
    };
  }, []);

  return (
    <div className="opening-curtain" aria-hidden="true">
      <div className="opening-curtain__panel" />
      <div className="opening-curtain__panel" />
      <div className="opening-curtain__panel" />
      <div className="opening-lockup">
        <small>CREATIVE PORTFOLIO · 2026</small>
        <div className="opening-lockup__line" />
        <span>YANG YING</span>
        <small>GAME ART / VISUAL SYSTEMS</small>
      </div>
    </div>
  );
}
