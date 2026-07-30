'use client';

export default function Pricing() {
  const whatsappUrl =
    'https://wa.me/923222664348?text=Hi%20Clipzen%20Studio%2C%20I%20want%20to%20start%20a%20project';

  const handleSelectPlan = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing-section" className="pricing-section">
      <div className="container">
        <div className="section-title">
          <h2>
            <i className="fas fa-tags" style={{ color: '#7B2FF7' }}></i> Investment Plans
          </h2>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>
              <i className="fas fa-fire" style={{ color: '#FF6B35' }}></i> Ignite
            </h3>
            <p className="price">
              <del>$799</del> $499/month{' '}
              <span style={{ fontSize: '0.7rem', color: '#00C6FF' }}>
                (Save 38%)
              </span>
            </p>
            <ul>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 8 Short Videos + 2 Long Videos
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 5 Ad Creatives (AI, Meta & Product Ads)
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 2 High-CTR Thumbnails + 2 Revisions
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 3 Days Delivery
              </li>
            </ul>
            <button className="btn-secondary pricing-cta" onClick={handleSelectPlan}>
              <i className="fab fa-whatsapp"></i> Select Ignite
            </button>
          </div>

          <div className="pricing-card elite">
            <h3>
              <i className="fas fa-rocket" style={{ color: '#7B2FF7' }}></i> Ascend{' '}
              <span className="badge-popular">Most Popular</span>
            </h3>
            <p className="price">
              <del>$1,499</del> $999/month
            </p>
            <ul>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 20 Short Videos + 6 Long Videos
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 21 Ad Creatives (8 Meta, 8 Product & 5 AI Ads)
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 8 High-CTR Thumbnails + Unlimited Revisions
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> 5 Days Priority Delivery
              </li>
            </ul>
            <button className="btn-primary pricing-cta" onClick={handleSelectPlan}>
              <i className="fab fa-whatsapp"></i> Choose Ascend
            </button>
          </div>

          <div className="pricing-card">
            <h3>
              <i className="fas fa-crown" style={{ color: '#FFD700' }}></i> Apex
            </h3>
            <p className="price">
              <del>$2,999</del> $1,999/month
            </p>
            <ul>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> Unlimited Short Videos + 15 Long Videos
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> Unlimited AI, Meta & Product Ads
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> Unlimited Thumbnails + Dedicated Creative Team
              </li>
              <li>
                <i className="fas fa-check" style={{ color: '#00C6FF' }}></i> VIP Priority Support & Fastest Delivery
              </li>
            </ul>
            <button className="btn-secondary pricing-cta" onClick={handleSelectPlan}>
              <i className="fab fa-whatsapp"></i> Contact Apex Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
