const values = [
  { icon: '🌿', title: 'Zero Shortcuts', desc: 'Every dressing, sauce, and base is prepared in-house daily. There are no hidden gums, substitutes, thickeners, or \'natural flavors.\' Just food your grandmother would recognize.' },
  { icon: '⚖️', title: 'Farm Fresh — Real Fuel, No Fads', desc: 'Grown locally. Harvested daily. Engineered by nature for maximum nutrition.' },
  { icon: '🍂', title: 'Seasonal Rotation', desc: 'Menus that follow nature\'s calendar. Local vendors, small farms, seasonal ingredients. Different every week, consistent in quality.' },
  { icon: '🔁', title: 'Subscription Model', desc: 'Subscription-built to automate your health. No decision fatigue, just a reliable habit you can trust every single day.' },
];

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy-text">
        <div className="section-label reveal" style={{ textAlign: 'center' }}>Our Philosophy</div>
        <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
          Food is a system,<br />not a product.
        </h2>
        <p className="reveal reveal-delay-2">
          You want to eat well, but the &ldquo;healthy&rdquo; options are often over-processed and inconsistent. Pepperfarm removes that friction. We grow, we cook, we deliver. Real ingredients, seasonal sourcing, and a system built for your body, not for the shelf.
        </p>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal reveal-delay-3">
          <div className="menu-cta-duo">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZVxxjun8254FrxMcxFpl0OGmpIm8-3lTpmtJE0GgvPMyjhw/viewform"
              className="form-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
              Start your Subscription Journey
            </a>
          </div>
        </div>
      </div>
      <div className="philosophy-values">
        {values.map((v, i) => (
          <div key={i} className={`value-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

  );
}
