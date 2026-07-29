import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../components/ContactForm';
import { ScrollAnimation } from '../components/ScrollAnimation';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="contact-page">
      {/* Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/1 (11).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <h1>{t('nav.contact')}</h1>
          <div className="breadcrumb">
            <a href="/">{t('nav.home')}</a>
            <span className="separator">/</span>
            <span>{t('nav.contact')}</span>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section" id="contact-details-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('contact.subtitle')}</span>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.desc')}</p>
          </div>

          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }} id="contact-grid-container">
            {/* Left Column: Form */}
            <ScrollAnimation animation="slide-left">
              <ContactForm />
            </ScrollAnimation>

            {/* Right Column: Info Cards */}
            <ScrollAnimation animation="slide-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} id="contact-cards-container">
                {/* Address Card */}
                <div className="glass-card contact-info-card" id="contact-card-address">
                  <div className="icon">📍</div>
                  <h4>{t('contact.addressLabel')}</h4>
                  <p>{t('contact.address')}</p>
                </div>

                {/* Phone Card */}
                <a href="https://wa.me/212708228026?text=Hello%20We%20Travel%20Morocco%2C%20I%20would%20like%20to%20inquire%20about%20your%20tours!" target="_blank" rel="noopener noreferrer" className="glass-card contact-info-card" id="contact-card-phone" style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>
                  <div className="icon">📞</div>
                  <h4>{t('contact.phoneLabel')}</h4>
                  <p>+212 708-228026</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>WhatsApp Available</p>
                </a>

                {/* Email Card */}
                <a href="mailto:wetravelmoroccoteam@gmail.com?subject=Inquiry%20-%20We%20Travel%20Morocco" className="glass-card contact-info-card" id="contact-card-email" style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>
                  <div className="icon">✉️</div>
                  <h4>{t('contact.emailLabel')}</h4>
                  <p>wetravelmoroccoteam@gmail.com</p>
                </a>

                {/* Hours Card */}
                <div className="glass-card contact-info-card" id="contact-card-hours">
                  <div className="icon">🕒</div>
                  <h4>Working Hours</h4>
                  <p>{t('contact.hours')}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Google Maps Iframe Section (HQ in Meknes) */}
      <section className="section" style={{ background: 'var(--bg-dark-2)', borderTop: '1px solid var(--border-glass)' }} id="contact-map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('contact.mapTitle')}</span>
            <h2>Our Headquarters in Meknes</h2>
            <p>Visit us or reach out to coordinate your custom Morocco adventures starting from Meknes, Marrakech, Casablanca, or Fes.</p>
          </div>

          <ScrollAnimation animation="scale-in">
            <div className="google-map" id="google-map-iframe-container">
              <iframe 
                title="Google Maps Headquarters Meknes"
                src="https://maps.google.com/maps?q=33.8938,-5.5662&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="450" 
                allowFullScreen={true} 
                loading="lazy"
                id="meknes-google-map-iframe"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
