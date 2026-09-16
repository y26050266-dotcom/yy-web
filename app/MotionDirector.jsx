'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MotionDirector.css';

const sections = [
  { selector: '#profile', cards: '.profile-glow-card, .stat-item' },
  { selector: '#projects', cards: '.project-card' },
  { selector: '#contact', cards: '.contact-main > *, .site-footer > *' },
];

export default function MotionDirector() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      sections.forEach(({ selector, cards }) => {
        const section = document.querySelector(selector);
        if (!section) return;

        const title = section.querySelector('.motion-section-title__word');
        const index = section.querySelector('.motion-section-title__index');
        const heading = section.querySelector('.section-heading');
        const cardNodes = section.querySelectorAll(cards);

        const sequence = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        });

        sequence
          .fromTo(title, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
          .fromTo(index, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4')
          .fromTo(heading, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.35')
          .fromTo(cardNodes, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power2.out' }, '-=0.25');
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
