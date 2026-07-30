'use client';

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2>Ready to Scale Your Brand with High-Converting Ads?</h2>
        <button className="btn-primary" onClick={scrollToContact}>
          Work With Us <i className="fas fa-crown"></i>
        </button>
      </div>
    </section>
  );
}
