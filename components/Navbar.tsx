'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <i className="fas fa-film"></i> CLIPZEN
        </a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          id="hamburgerBtn"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a
              href="#services-section"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'services-section')}
            >
              <i className="fas fa-cogs"></i> Services
            </a>
          </li>
          <li>
            <a
              href="#video-editing"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'video-editing')}
            >
              <i className="fas fa-play-circle"></i> Work
            </a>
          </li>
          <li>
            <a
              href="#pricing-section"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'pricing-section')}
            >
              <i className="fas fa-tags"></i> Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'contact-section')}
            >
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
