'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
};

const imageSelector =
  '.project-detail-page .project-detail-shot img, .project-detail-page .project-detail-hero-frame img';

export default function ProjectImageLightbox() {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const triggerRef = useRef<HTMLImageElement | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(imageSelector);
    if (!images.length) return;
    images.forEach((image) => {
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', `放大查看：${image.alt || '项目图片'}`);
    });

    const openImage = (target: EventTarget | null) => {
      if (!(target instanceof HTMLImageElement) || !target.matches(imageSelector)) {
        return false;
      }

      triggerRef.current = target;
      setSelectedImage({
        src: target.currentSrc || target.src,
        alt: target.alt,
      });
      return true;
    };

    const handleClick = (event: MouseEvent) => {
      openImage(event.target);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Enter' || event.key === ' ') && openImage(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeLightbox, selectedImage]);

  if (!selectedImage) {
    return null;
  }

  return (
    <div
      className="project-image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="项目图片放大预览"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLightbox();
        }
      }}
    >
      <button
        className="project-image-lightbox-close"
        type="button"
        aria-label="关闭图片预览"
        onClick={closeLightbox}
        autoFocus
      >
        ×
      </button>
      <figure>
        <img src={selectedImage.src} alt={selectedImage.alt} />
        {selectedImage.alt ? <figcaption>{selectedImage.alt}</figcaption> : null}
      </figure>
    </div>
  );
}
