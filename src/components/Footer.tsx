import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" id="footer-col-about">
            <Link to="/" className="navbar-logo" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }} id="footer-logo">
              <img 
                src="/images/logo-icon.png" 
                alt="Travelling Through Morocco Logo" 
                width="31"
                height="38"
                style={{ 
                  height: '38px', 
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
              <span className="logo-text">
                <span className="logo-part-1">Travelling Through</span>
                <span className="logo-part-2">Morocco</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {t('footer.aboutText')}
            </p>
          </div>

          <div className="footer-col" id="footer-col-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/" id="footer-link-home">{t('nav.home')}</Link></li>
              <li><Link to="/tours" id="footer-link-tours">{t('nav.tours')}</Link></li>
              <li><Link to="/destinations" id="footer-link-destinations">{t('nav.destinations')}</Link></li>
              <li><Link to="/about" id="footer-link-about">{t('nav.about')}</Link></li>
              <li><Link to="/blog" id="footer-link-blog">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" id="footer-link-contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-col" id="footer-col-destinations">
            <h4>{t('footer.topDestinations')}</h4>
            <ul>
              <li><Link to="/destinations" id="footer-dest-marrakech">Marrakech</Link></li>
              <li><Link to="/destinations" id="footer-dest-fes">Fes</Link></li>
              <li><Link to="/destinations" id="footer-dest-sahara">Sahara Desert</Link></li>
              <li><Link to="/destinations" id="footer-dest-chefchaouen">Chefchaouen</Link></li>
              <li><Link to="/destinations" id="footer-dest-essaouira">Essaouira</Link></li>
            </ul>
          </div>

          <div className="footer-col" id="footer-col-contact">
            <h4>{t('footer.contactInfo')}</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-primary)', marginRight: '6px' }}>📍</span>
                {t('contact.address')}
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-primary)', marginRight: '6px' }}>✉️</span>
                <a href="mailto:travellingthroughmorocco@gmail.com?subject=Inquiry%20-%20Travelling%20Through%20Morocco" style={{ color: 'inherit', textDecoration: 'none' }} id="footer-contact-email-link">
                  travellingthroughmorocco@gmail.com
                </a>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-primary)', marginRight: '6px' }}>📞</span>
                <a href="https://wa.me/212708228026?text=Hello%20We%20Travel%20Morocco%2C%20I%20would%20like%20to%20inquire%20about%20your%20tours!" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} id="footer-contact-phone-link">
                  +212 708-228026
                </a>
              </li>
              <li>
                <span style={{ color: 'var(--color-primary)', marginRight: '6px' }}>🕒</span>
                {t('contact.hours')}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} travellingthroughmorocco.com. {t('footer.rights')} |{' '}
            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginLeft: '6px', fontSize: '0.85rem' }} id="footer-privacy-policy-link">
              {t('footer.privacy')}
            </Link>
          </p>
          <div className="social-links" id="footer-socials">
            <a href="https://web.facebook.com/profile.php?id=61592802445563" target="_blank" rel="noopener noreferrer" aria-label="Facebook" id="social-fb">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/travellingthroughmorocco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" id="social-ig">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.pinterest.com/travellingthroughmorocco/?actingBusinessId=1121607619606772868" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" id="social-pin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.17 2.56 7.75 6.19 9.27-.1-.78-.2-1.99.04-2.85.22-.78 1.4-5.92 1.4-5.92s-.36-.71-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.25 3.76-5.49 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.9 2.74.1.12.11.23.08.35-.09.37-.29 1.18-.33 1.34-.05.21-.17.26-.39.16-1.46-.68-2.38-2.81-2.38-4.52 0-3.68 2.68-7.07 7.72-7.07 4.05 0 7.2 2.89 7.2 6.75 0 4.03-2.54 7.27-6.07 7.27-1.19 0-2.3-.62-2.68-1.35l-.73 2.79c-.26 1.01-1 2.27-1.49 3.08C10.15 21.75 11.06 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
            <a href="https://wa.me/212708228026" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" id="social-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href="https://www.tripadvisor.com/Profile/Noureddine_Bms" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" id="social-ta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.75 13.5c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm5.25-2.25c0-.69.56-1.25 1.25-1.25s1.25 0 1.25 1.25S14.44 14.5 13.75 14.5s-1.25-.56-1.25-1.25zm4.25 2.25c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zM12 4.5c-3.03 0-5.5 2.47-5.5 5.5h11c0-3.03-2.47-5.5-5.5-5.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
