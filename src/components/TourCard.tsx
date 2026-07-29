import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  // Multi-language title and highlights
  const title = currentLang === 'fr' ? tour.titleFr : currentLang === 'es' ? tour.titleEs : tour.title;
  const highlights = currentLang === 'fr' ? tour.highlightsFr : currentLang === 'es' ? tour.highlightsEs : tour.highlights;

  return (
    <article className="tour-card glass-card" id={`tour-card-${tour.id}`}>
      <div className="tour-card-image">
        {tour.badge && (
          <span className={`badge badge-${tour.badge}`}>
            {tour.badge}
          </span>
        )}
        {/* Placeholder images from /images/ or using an image url, fallback to simple styling if image isn't loaded */}
        <img 
          src={`/images/${tour.image}`} 
          alt={title} 
          onError={(e) => {
            // Simple placeholder styling if image fails to load
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80';
          }}
        />
        <div className="tour-price">
          {t('tour.from')} {tour.currency}{tour.pricePerPerson}
        </div>
      </div>
      <div className="tour-card-body">
        <div className="tour-card-meta">
          <span className="meta-item" id={`tour-duration-${tour.id}`}>
            🕒 {tour.duration} {tour.duration > 1 ? t('tour.days') : t('tour.day')}
          </span>
          <span className="meta-item" id={`tour-departure-${tour.id}`}>
            📍 {t('tour.departure')}: {tour.departure}
          </span>
        </div>
        <h3>
          <Link to={`/tours/${tour.slug}`} id={`tour-title-link-${tour.id}`}>{title}</Link>
        </h3>
        <div className="tour-card-rating">
          <span>⭐ {tour.rating.toFixed(1)}</span>
          <span style={{ color: 'var(--text-muted)' }}>({tour.reviewCount} {t('tour.reviews')})</span>
        </div>
        <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', listStyleType: 'circle', marginBottom: '1.5rem' }}>
          {highlights.slice(0, 3).map((hl, idx) => (
            <li key={idx}>{hl}</li>
          ))}
        </ul>
        <div className="tour-card-footer">
          <Link to={`/contact?tour=${tour.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%', textAlign: 'center' }} id={`tour-book-btn-${tour.id}`}>
            {t('tour.bookNow')}
          </Link>
        </div>
      </div>
    </article>
  );
};
