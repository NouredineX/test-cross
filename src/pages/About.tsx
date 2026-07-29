import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollAnimation } from '../components/ScrollAnimation';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const valueKeys = ['agency', 'safety', 'pricing', 'custom', 'booking', 'guides'];

  return (
    <div id="about-page">
      {/* Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/1 (8).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <h1>{t('nav.about')}</h1>
          <div className="breadcrumb">
            <a href="/">{t('nav.home')}</a>
            <span className="separator">/</span>
            <span>{t('nav.about')}</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" id="about-story-section">
        <div className="container container-narrow">
          <ScrollAnimation animation="fade-in">
            <div className="section-header">
              <span className="section-subtitle">{t('about.storyTitle')}</span>
              <h2>Local Expert Morocco Travel Agency</h2>
            </div>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-secondary)' }} id="agency-story-content">
              <p style={{ marginBottom: '1.5rem' }}>{t('about.story1')}</p>
              <p style={{ marginBottom: '1.5rem' }}>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="section" id="about-values-section" style={{ background: 'var(--bg-dark-2)', borderTop: '1px solid var(--border-glass)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('about.subtitle')}</span>
            <h2>{t('about.valuesTitle')}</h2>
          </div>

          <div className="grid-3" id="values-grid">
            {valueKeys.map((key, idx) => (
              <ScrollAnimation animation="scale-in" delay={idx * 100} key={key} id={`value-card-${key}`}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                    {key === 'agency' ? '🏆' : key === 'safety' ? '🛡️' : key === 'pricing' ? '💎' : key === 'custom' ? '⚙️' : key === 'booking' ? '⚡' : '🗺️'}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{t(`about.values.${key}.title`)}</h3>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>{t(`about.values.${key}.desc`)}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* TripAdvisor Badge Section */}
      <section className="section" id="about-tripadvisor-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollAnimation animation="fade-in">
            <div className="glass-card" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '1rem' }}>We Travel Morocco TripAdvisor Rating</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem', color: '#00AF87' }}>⬤⬤⬤⬤⬤</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 700 }}>5.0</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Based on over 250 verified traveler reviews from around the globe. Proud winner of TripAdvisor Travelers' Choice.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
