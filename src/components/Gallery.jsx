const freshProduce = [
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.59.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05.jpeg',
];

export default function Gallery() {
  return (
    <section className="gallery-section-marquee" id="gallery">
      <div className="gallery-header">
        <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>We don&rsquo;t source;<br />we grow.</h2>      </div>

      {/* Track 1: Fresh Produce */}
      <div className="gallery-marquee-container">
        <div className="gallery-marquee-track">
          {[...freshProduce, ...freshProduce].map((src, i) => (
            <div key={`g1-${i}`} className="gallery-marquee-item">
              <img src={src} alt="Fresh produce" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
