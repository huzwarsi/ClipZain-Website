'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        'service_eok6jfi',
        'template_4v79htw',
        templateParams,
        'ekuskUcrGiLPmY7gR'
      )
      .then(() => {
        setLoading(false);
        setShowToast(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setShowToast(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert('Email sending failed!');
      });
  };

  return (
    <section id="contact-section" className="contact-section">
      <Toast show={showToast} onClose={() => setShowToast(false)} />
      <div className="container">
        <div className="contact-dual">
          <div>
            <h2>
              <i className="fas fa-paper-plane" style={{ color: '#7B2FF7' }}></i>{' '}
              Start Your Sales Journey
            </h2>
            <p>Limited slots — serious brands only. Let&apos;s craft your sales machine.</p>
            <div className="contact-info-block">
              <p>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:clipzenstudio@gmail.com">clipzenstudio@gmail.com</a>
              </p>
              <p>
                <i className="fas fa-phone-alt"></i>{' '}
                <a href="tel:03222664348">03222664348</a>
              </p>
            </div>
            <div className="social-icons">
              <i className="fab fa-instagram"></i> <i className="fab fa-twitter"></i>{' '}
              <i className="fab fa-linkedin"></i> <i className="fab fa-youtube"></i>{' '}
              <i className="fab fa-tiktok"></i>
            </div>
          </div>
          <div>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-field">
                <i className="fas fa-user field-icon"></i>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <i className="fas fa-envelope field-icon"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <i className="fas fa-phone field-icon"></i>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="contact-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <i className="fas fa-comment field-icon"></i>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your brand & goals..."
                  className="contact-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary btn-fullwidth"
                disabled={loading}
              >
                <i className="fas fa-paper-plane"></i>{' '}
                {loading ? 'Sending...' : 'Send Inquiry'}{' '}
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
