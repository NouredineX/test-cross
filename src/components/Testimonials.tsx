import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.slice(0, 3).length);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(autoPlay);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.slice(0, 3).length) % testimonials.slice(0, 3).length);
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.slice(0, 3).length);
  };

  return (
    <div className="testimonials-container" style={{ position: 'relative', overflow: 'hidden', padding: '1rem 0' }} id="testimonials-carousel">
      {testimonials.slice(0, 3).map((testimonial, idx) => {
        const text = currentLang === 'fr' ? testimonial.textFr : currentLang === 'es' ? testimonial.textEs : testimonial.text;
        const isCurrent = idx === activeIndex;

        return (
          <div 
            key={testimonial.id}
            className={`testimonial-card glass-card ${isCurrent ? 'active' : ''}`}
            style={{
              display: isCurrent ? 'block' : 'none',
              animation: isCurrent ? 'fadeIn 0.5s ease-in-out' : 'none',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2.5rem'
            }}
            id={`testimonial-card-${testimonial.id}`}
          >
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <blockquote>"{text}"</blockquote>
            <div className="author" id={`testimonial-author-${testimonial.id}`}>{testimonial.name}</div>
            <div className="country">{testimonial.country}</div>
          </div>
        );
      })}

      {/* Navigation arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }} id="testimonials-nav">
        <button 
          onClick={handlePrev}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid var(--border-glass)',
            background: 'var(--bg-glass)',
            color: 'var(--color-primary)',
            fontSize: '1rem'
          }}
          aria-label="Previous review"
          id="prev-testimonial-btn"
        >
          ◀
        </button>
        <button 
          onClick={handleNext}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid var(--border-glass)',
            background: 'var(--bg-glass)',
            color: 'var(--color-primary)',
            fontSize: '1rem'
          }}
          aria-label="Next review"
          id="next-testimonial-btn"
        >
          ▶
        </button>
      </div>

      {/* Simple indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '1rem' }} id="testimonials-indicators">
        {testimonials.slice(0, 3).map((_, idx) => (
          <span 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: idx === activeIndex ? 'var(--color-primary)' : 'var(--border-glass)',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
            id={`testimonial-indicator-${idx}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
