'use client';

import LazyVideo from './LazyVideo';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <LazyVideo
        src="/vlog-video.mp4"
        poster="/posters/vlog-video.jpg"
        className="hero-bg-video"
      />
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <div className="hero-logo-text">
              <i className="fas fa-crown" style={{ color: '#7B2FF7' }}></i>{' '}
              CLIPZEN STUDIO
            </div>
            <div className="hero-logo-line"></div>
          </div>
          <h1 className="hero-headline">
            High-Converting Creatives For Every Screen. Long-Form, Short-Form &
            Paid Ads.
          </h1>
          <p className="hero-subtext">
            <i className="fas fa-check-circle" style={{ color: '#7B2FF7' }}></i>{' '}
            Product Ads • UGC Ads • Video Editing • High-CTR Thumbnails • Reels
            • Complete Content Suites
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo('pricing-section')}
            >
              Start Your Project <i className="fas fa-arrow-right"></i>
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo('video-editing')}
            >
              View Our Work <i className="fas fa-play-circle"></i>
            </button>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>420+</strong>
              <span>Campaigns launched</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Average client rating</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Response time</span>
            </div>
          </div>
          <div className="hero-stats-mini">
            <i className="fas fa-clock" style={{ color: '#7B2FF7' }}></i> Limited
            Slots Available – Book Your Project Today
          </div>
        </div>
      </div>
    </section>
  );
}
