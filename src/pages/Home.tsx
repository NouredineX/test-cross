import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { StatsCounter } from '../components/StatsCounter';
import { TourCard } from '../components/TourCard';
import { Testimonials } from '../components/Testimonials';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { tours } from '../data/tours';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Filter 3 popular tours to showcase as examples on the homepage
  const popularTours = tours.filter(t => t.badge === 'popular').slice(0, 3);

  // Categories metadata
  const categories = [
    {
      id: 'desert',
      title: 'Sahara Desert Tours',
      titleFr: 'Tours du Désert du Sahara',
      titleEs: 'Tours del Desierto del Sahara',
      desc: 'Ride camels and sleep under the stars in private desert camps.',
      descFr: 'Montez à dos de chameau et dormez sous les étoiles dans des camps privés.',
      descEs: 'Monta en camello y duerme bajo las estrellas en campamentos privados.',
      image: '/images/Family riding camels in the Sahara desert during a Morocco holiday.webp'
    },
    {
      id: 'imperial',
      title: 'Imperial Cities',
      titleFr: 'Villes Impériales',
      titleEs: 'Ciudades Imperiales',
      desc: 'Explore the rich history, ancient palaces, and souks of Fes, Marrakech, and Meknes.',
      descFr: 'Explorez la riche histoire, les palais anciens et les souks de Fès, Marrakech et Meknès.',
      descEs: 'Explora la rica historia, los palacios antiguos y los zocos de Fez, Marrakech y Meknes.',
      image: '/images/1 (10).webp'
    },
    {
      id: 'day-trip',
      title: 'Day Excursions',
      titleFr: 'Excursions d\'une Journée',
      titleEs: 'Excursiones de un Día',
      desc: 'Discover beautiful coastal towns, waterfalls, and valleys in single day trips.',
      descFr: 'Découvrez de belles villes côtières, des cascades et des vallées en une journée.',
      descEs: 'Descubre hermosas ciudades costeras, cascadas y valles en viajes de un día.',
      image: '/images/1 (6).webp'
    },
    {
      id: 'private',
      title: 'Private Custom Trips',
      titleFr: 'Voyages Privés Sur Mesure',
      titleEs: 'Viajes Privados a Medida',
      desc: 'Completely customized itineraries with private drivers and luxury guides.',
      descFr: 'Itinéraires entièrement sur mesure avec chauffeurs privés et guides de luxe.',
      descEs: 'Itinerarios completamente a medida con conductores privados y guías de lujo.',
      image: '/images/1 (14).webp'
    }
  ];

  return (
    <div id="home-page">
      {/* Parallax Hero */}
      <Hero />

      {/* Stats Counter Section */}
      <section className="section" style={{ padding: '3rem 0' }} id="stats-section">
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      {/* Tour Categories Section */}
      <section className="section" id="categories-section" style={{ background: 'var(--bg-dark-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('sections.categoriesSubtitle')}</span>
            <h2>{t('sections.categoriesTitle')}</h2>
            <p>{t('sections.categoriesDesc')}</p>
          </div>

          <div className="grid-4" id="categories-grid">
            {categories.map((cat, idx) => {
              const catTitle = currentLang === 'fr' ? cat.titleFr : currentLang === 'es' ? cat.titleEs : cat.title;
              const catDesc = currentLang === 'fr' ? cat.descFr : currentLang === 'es' ? cat.descEs : cat.desc;

              return (
                <ScrollAnimation animation="scale-in" delay={idx * 100} key={cat.id} id={`cat-card-${cat.id}`}>
                  <div className="glass-card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <img 
                        src={cat.image} 
                        alt={catTitle} 
                        width="300"
                        height="180"
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{catTitle}</h3>
                      <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', flex: 1 }}>{catDesc}</p>
                      <Link to="/tours" className="btn btn-secondary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                        {t('tour.allTours')}
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="section" id="popular-tours-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('sections.popularSubtitle')}</span>
            <h2>{t('sections.popularTitle')}</h2>
            <p>{t('sections.popularDesc')}</p>
          </div>

          <div className="grid-3" id="popular-tours-grid">
            {popularTours.map((tour, idx) => (
              <ScrollAnimation animation="fade-in" delay={idx * 150} key={tour.id}>
                <TourCard tour={tour} />
              </ScrollAnimation>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/tours" className="btn btn-primary btn-lg" id="view-all-tours-btn">
              {t('sections.viewAllTours')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('sections.testimonialsSubtitle')}</span>
            <h2>{t('sections.testimonialsTitle')}</h2>
          </div>
          <ScrollAnimation animation="fade-in">
            <Testimonials />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" id="cta-section" style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-dark-2) 100%)' }}>
        <div className="container">
          <ScrollAnimation animation="scale-in">
            <div className="cta-content">
              <h2>{t('sections.ctaTitle')}</h2>
              <p>{t('sections.ctaDesc')}</p>
              <Link to="/tours" className="btn btn-primary btn-lg" id="cta-contact-btn">
                🗺️ {t('sections.ctaButton')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
