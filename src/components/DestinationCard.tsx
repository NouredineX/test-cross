import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick?: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const name = currentLang === 'fr' ? destination.nameFr : currentLang === 'es' ? destination.nameEs : destination.name;
  const tagline = currentLang === 'fr' ? destination.taglineFr : currentLang === 'es' ? destination.taglineEs : destination.tagline;

  return (
    <div 
      className="dest-card" 
      onClick={onClick}
      id={`dest-card-${destination.id}`}
    >
      <div className="dest-card-image">
        <img 
          src={`/images/${destination.image}`} 
          alt={name} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80';
          }}
        />
      </div>
      <div className="dest-card-overlay">
        <h3>{name}</h3>
        <p className="dest-tagline">{tagline}</p>
        <div className="dest-tours">
          📁 {destination.tourCount} {t('destinations.tours')}
        </div>
      </div>
    </div>
  );
};
