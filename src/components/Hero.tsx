import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero" id="main-hero-section">
      <div className="hero-bg">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/1 (13)-mobile.webp" />
          <img 
            src="/images/1 (13).webp" 
            alt="Sahara Desert Dunes Parallax" 
            width="1920"
            height="1280"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <span className="hero-accent">{t('hero.accent')}</span>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        
        <div className="hero-buttons">
          <Link to="/tours" className="btn btn-primary btn-lg" id="hero-btn-tours">
            {t('hero.exploreTours')}
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg" id="hero-btn-contact">
            {t('hero.contactUs')}
          </Link>
        </div>
      </div>

      <button 
        className="scroll-indicator" 
        onClick={handleScrollDown}
        aria-label="Scroll to content"
        id="hero-scroll-btn"
      >
        <span>{t('hero.scroll')}</span>
        <div className="arrow"></div>
      </button>
    </section>
  );
};
