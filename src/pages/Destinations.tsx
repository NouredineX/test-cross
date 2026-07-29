import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DestinationCard } from '../components/DestinationCard';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { destinations } from '../data/destinations';

export const Destinations: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDestinationClick = (_slug: string) => {
    // Navigate to tours page with destination filter or show customized content
    navigate(`/tours`);
  };

  return (
    <div id="destinations-page">
      {/* Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/1 (9).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <h1>{t('nav.destinations')}</h1>
          <div className="breadcrumb">
            <a href="/">{t('nav.home')}</a>
            <span className="separator">/</span>
            <span>{t('nav.destinations')}</span>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section" id="destinations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('destinations.subtitle')}</span>
            <h2>{t('destinations.title')}</h2>
            <p>{t('destinations.desc')}</p>
          </div>

          <div className="grid-3" id="destinations-grid">
            {destinations.map((dest, idx) => (
              <ScrollAnimation animation="scale-in" delay={(idx % 3) * 100} key={dest.id}>
                <DestinationCard 
                  destination={dest} 
                  onClick={() => handleDestinationClick(dest.slug)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
