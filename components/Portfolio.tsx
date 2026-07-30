'use client';

import LazyVideo from './LazyVideo';

export default function Portfolio() {
  return (
    <>
      {/* ===== PORTFOLIO: VIDEO EDITING ===== */}
      <section id="video-editing" className="portfolio-section alt-bg">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
            <h2>
              <i className="fas fa-video" style={{ color: '#7B2FF7' }}></i>{' '}
              Cinematic Video Editing
            </h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <LazyVideo src="/part-2.mp4" poster="/posters/part-2.jpg" />
            </div>
            <div className="portfolio-item">
              <LazyVideo src="/ganja.mp4" poster="/posters/ganja.jpg" />
            </div>
            <div className="portfolio-item">
              <LazyVideo src="/davy.mp4" poster="/posters/davy.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO: ADS ===== */}
      <section id="ads" className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
            <h2>
              <i className="fas fa-chart-line" style={{ color: '#7B2FF7' }}></i>{' '}
              High-Converting Ads
            </h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <LazyVideo src="/perfume-ad.mp4" poster="/posters/perfume-ad.jpg" />
            </div>
            <div className="portfolio-item">
              <LazyVideo src="/add-2.mp4" poster="/posters/add-2.jpg" />
            </div>
            <div className="portfolio-item">
              <LazyVideo src="/add-3.mp4" poster="/posters/add-3.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO: GRAPHIC DESIGN ===== */}
      <section id="graphic-design" className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
            <h2>
              <i className="fas fa-paint-brush" style={{ color: '#7B2FF7' }}></i>{' '}
              Premium Poster & Product Design
            </h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/art-board-1.png" alt="branding design" loading="lazy" />
            </div>
            <div className="portfolio-item">
              <img src="/art-board-2-1.png" alt="social media graphic" loading="lazy" />
            </div>
            <div className="portfolio-item">
              <img src="/art-board-2.png" alt="ad creative" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO: THUMBNAILS ===== */}
      <section id="thumbnails" className="portfolio-section alt-bg">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
            <h2>
              <i className="fas fa-thumbs-up" style={{ color: '#7B2FF7' }}></i>{' '}
              High-CTR Thumbnails
            </h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/1-1.png" alt="thumbnail" loading="lazy" />
            </div>
            <div className="portfolio-item">
              <img src="/22.jpg" alt="thumbnail design" loading="lazy" />
            </div>
            <div className="portfolio-item">
              <img src="/33.jpg" alt="clickable thumb" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
