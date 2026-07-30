'use client';

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services-section" className="services-section">
      <div className="container">
        <div className="section-title">
          <span>OUR CORE CAPABILITIES</span>
          <h2>What We Deliver</h2>
        </div>
        <div className="services-grid">
          <div
            className="glass-card service-card-click"
            onClick={() => scrollTo('ads')}
          >
            <i className="fas fa-chart-line service-icon"></i>
            <h3>Ad Production</h3>
            <p>
              Product Ads, UGC Ads, META Ads, Social Media Ads, Brainrot Ads
              production – Complete Ads Production
            </p>
          </div>
          <div
            className="glass-card service-card-click"
            onClick={() => scrollTo('video-editing')}
          >
            <i className="fas fa-video service-icon"></i>
            <h3>Video Editing</h3>
            <p>
              YouTube Videos, Documentary Videos, Multi-cam Videos, Travel
              Videos, Real Estate Videos etc.
            </p>
          </div>
          <div
            className="glass-card service-card-click"
            onClick={() => scrollTo('ads')}
          >
            <i className="fas fa-users service-icon"></i>
            <h3>Short-Form Content</h3>
            <p>
              Instagram Reels, TikTok Videos, YouTube Shorts, Facebook Reels
              etc.
            </p>
          </div>
          <div
            className="glass-card service-card-click"
            onClick={() => scrollTo('graphic-design')}
          >
            <i className="fas fa-palette service-icon"></i>
            <h3>Social Media Designs</h3>
            <p>
              Poster Design, Flyer Design, LinkedIn Post, Facebook & Instagram
              Post etc.
            </p>
          </div>
          <div
            className="glass-card service-card-click"
            onClick={() => scrollTo('thumbnails')}
          >
            <i className="fas fa-thumbs-up service-icon"></i>
            <h3>Thumbnail Design</h3>
            <p>
              High-CTR YouTube thumbnails which boost your YouTube videos – click
              magnets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
