import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver that adds `reveal-visible` to elements
 * with class `reveal`, `reveal-left`, or `reveal-right` when they enter
 * the viewport. Also triggers skill-bar animations.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('reveal-visible');

          entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
            bar.classList.add('skill-bar-animated');
          });
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
