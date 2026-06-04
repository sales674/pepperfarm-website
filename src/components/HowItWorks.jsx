const steps = [
  { num: '01', title: 'Harvested in the Morning', desc: 'All herbs, vegetables, and fruits are harvested in the morning or the previous evening and shipped to the kitchen immediately.' },
  { num: '02', title: 'Prepared the Same Afternoon', desc: 'Small-batch preparation using locally sourced, seasonal ingredients, made into your favourite product that\'s ready to be consumed.' },
  { num: '03', title: 'Delivered by Evening', desc: 'Route-optimised delivery every Monday, Wednesday, and Friday evening to spread across the week.' },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how">
      <div className="how-header">
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-heading reveal reveal-delay-1">Harvested at Sunrise. Served by Sunset.</h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: '520px', margin: '16px auto 0' }}>
            While the rest of the world is eating food that&rsquo;s been in a warehouse or a fridge for a week, we&rsquo;re in the fields. We harvest your ingredients the same morning we deliver your meal. No cold storage, no transit lag&mdash;just the highest nutritional &lsquo;uptake&rsquo; possible.
          </p>
        </div>
      </div>

      <div className="howitworks-grid">
        {steps.map((s, i) => (
          <div key={i} className={`step-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
