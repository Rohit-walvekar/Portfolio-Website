import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a 'visible' class to elements with the 'reveal' class
 * when they enter the viewport via IntersectionObserver.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const revealEls = container.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return ref;
}
