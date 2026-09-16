'use client';

import { useEffect, useState } from 'react';

export default function FloatingNavigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return undefined;

    setVisible(hero.getBoundingClientRect().bottom <= 80);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    }, { rootMargin: '-80px 0px 0px 0px' });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const linkTabIndex = visible ? 0 : -1;

  return (
    <header
      className={`site-header floating-site-header${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
    >
      <a className="terminal-brand" href="#top" aria-label="回到首页" tabIndex={linkTabIndex}>
        <span>YY_OS / PLAYER 01</span>
        <small>PORTFOLIO SYSTEM · 2026</small>
      </a>
      <nav className="main-nav" aria-label="悬浮导航">
        <a href="#profile" tabIndex={linkTabIndex}>PROFILE</a>
        <a href="#projects" tabIndex={linkTabIndex}>PROJECTS</a>
      </nav>
      <a
        className="contact-pill"
        href="mailto:yangying25of@163.com"
        tabIndex={linkTabIndex}
      >
        CONTACT ↗
      </a>
    </header>
  );
}
