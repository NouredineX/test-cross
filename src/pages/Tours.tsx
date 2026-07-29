import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TourCard } from '../components/TourCard';
import { InteractiveMap } from '../components/InteractiveMap';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { tours, tourCategories } from '../data/tours';


export const Tours: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter tours by active category selection
  const filteredTours = activeCategory === 'all'
    ? tours
    : tours.filter(tour => tour.category === activeCategory);

  return (
    <div id="tours-page">
      {/* Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/1 (12).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <h1>{t('nav.tours')}</h1>
          <div className="breadcrumb">
            <a href="/">{t('nav.home')}</a>
            <span className="separator">/</span>
            <span>{t('nav.tours')}</span>
          </div>
        </div>
      </section>

      {/* Filter & Tour Grid */}
      <section className="section" id="tours-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Morocco Sahara Adventures</span>
            <h2>Best Morocco Desert Tours & Excursions</h2>
            <p>Select from our pre-planned curated itineraries or build your own trip using our custom map builder below.</p>
          </div>

          {/* Filter Bar */}
          <div className="glass-card filter-bar" id="tours-filter-bar">
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t('tour.filterBy')}:</span>
            {tourCategories.map(cat => {
              const label = currentLang === 'fr' ? cat.labelFr : currentLang === 'es' ? cat.labelEs : cat.label;
              return (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`filter-btn-${cat.id}`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tours Grid */}
          {filteredTours.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
              <p>{t('tour.noTours')}</p>
            </div>
          ) : (
            <div className="grid-3" id="all-tours-grid">
              {filteredTours.map((tour, idx) => (
                <ScrollAnimation animation="fade-in" delay={(idx % 3) * 100} key={tour.id}>
                  <TourCard tour={tour} />
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Interactive Route Builder Section */}
      <section className="section" style={{ background: 'var(--bg-dark-2)', borderTop: '1px solid var(--border-glass)' }} id="custom-map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Plan Your Path</span>
            <h2>Build Your Custom Morocco Itinerary</h2>
            <p>Click on the map markers to choose cities in Morocco and see your live path, estimated days, and estimated costs automatically calculated!</p>
          </div>
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};
