import { useEffect, useRef, useState } from 'react';
import { heroShowcaseImages } from '../data/menuData';

export default function Hero() {
  const headlineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  /* ── Headline reveal ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      headlineRef.current?.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  /* ── Auto-advance carousel ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((p) => (p + 1) % heroShowcaseImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      {/* ── Carousel background images ── */}
      <div className="hero-carousel-bg" aria-hidden="true">
        {heroShowcaseImages.map((img, i) => (
          <div
            key={i}
            className={`hero-carousel-slide${i === activeSlide ? ' active' : ''}`}
          >
            <img
              src={img.src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero-content" ref={headlineRef}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Farm to Table
          <span className="hero-eyebrow-line" />
        </div>

        <h1 className="hero-headline">
          Farm-Grown. Chef-Crafted.<br />
          Everyday food that<br />
          actually <em>loves you back.</em>
        </h1>

        <div className="hero-stats-bar">
          <div className="hero-stat">
            <span className="num">∞</span>
            <span className="label">Recipes</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="num">3x</span>
            <span className="label">Weekly Delivery</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="num">₹150</span>
            <span className="label">Per Bowl</span>
          </div>
        </div>
      </div>

      {/* ── Carousel dots ── */}
      <div className="hero-dots" aria-hidden="true">
        {heroShowcaseImages.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === activeSlide ? ' active' : ''}`}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
