import { useState, useEffect } from 'react';
import { menuItems } from '../data/menuData';

const MenuItemCard = ({ item, index, featured }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (item.images && item.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % item.images.length);
      }, 4000 + Math.random() * 2000);
      return () => clearInterval(timer);
    }
  }, [item.images]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className={`menu-card-v2 reveal ${featured ? 'menu-card-featured' : ''}`} style={{ '--delay': `${index * 0.08}s` }}>
      <div className="mc2-image">
        <div className="mc2-carousel">
          {item.images?.map((img, idx) => (
            <img key={idx} src={img} alt={item.name} className={idx === currentSlide ? 'active' : ''} loading="lazy" />
          ))}
        </div>
        {item.badge && (
          <span className="mc2-badge" style={{ '--badge-color': item.color || 'var(--sage)' }}>
            {item.badge}
          </span>
        )}
        {item.images && item.images.length > 1 && (
          <>
            <button className="carousel-nav prev" onClick={prevSlide}>&#8592;</button>
            <button className="carousel-nav next" onClick={nextSlide}>&#8594;</button>
            <div className="mc2-img-dots">
              {item.images.map((_, idx) => (
                <button key={idx} className={idx === currentSlide ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mc2-body">
        <div className="mc2-top">
          <h3>{item.name}</h3>
          <p className="mc2-desc">{item.desc}</p>
        </div>

        <div className="mc2-pricing">
          {item.options ? (
            item.options.map((opt, idx) => (
              <div key={idx} className="mc2-price-row">
                <span className="mc2-size">{opt.size}</span>
                <span className="mc2-price">{opt.subscription}</span>
              </div>
            ))
          ) : (
            <div className="mc2-price-row">
              <span className="mc2-size">{item.size}</span>
              <span className="mc2-price">{item.subscription}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2 className="section-heading reveal reveal-delay-1">Crafted for your week.</h2>
        <p className="reveal reveal-delay-2" style={{ marginBottom: '24px' }}>
          Salads, cold-pressed juices, soups, and breads. All made in-house with clean-label ingredients.
        </p>
      </div>

      {/* 2x3 grid */}
      <div className="menu-bento">
        <div className="menu-bento-grid">
          {menuItems.map((item, idx) => (
            <MenuItemCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>

    </section>
  );
}
