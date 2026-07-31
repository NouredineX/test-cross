import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Populate message if tour is selected in search params
    const selectedTour = searchParams.get('tour');
    const customRoute = searchParams.get('route');
    if (selectedTour) {
      setFormData(prev => ({
        ...prev,
        message: `Hello Travelling Through Morocco, I would like to request more information or book the "${selectedTour.replace(/-/g, ' ')}" tour.`
      }));
    } else if (customRoute) {
      setFormData(prev => ({
        ...prev,
        message: `Hello Travelling Through Morocco, I have built a custom route on your website and would like a quote: ${customRoute}`
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email/message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelers: '2',
        date: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="glass-card" style={{ padding: '2.5rem' }} id="contact-form-container">
      <h3 style={{ marginBottom: '1.5rem' }}>{t('contact.formTitle')}</h3>
      {submitSuccess ? (
        <div 
          className="success-alert" 
          style={{ 
            padding: '1rem', 
            borderRadius: 'var(--radius-md)', 
            background: 'rgba(27, 94, 75, 0.2)', 
            border: '1px solid var(--color-secondary)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}
          id="contact-form-success"
        >
          ✅ {t('contact.success')}
        </div>
      ) : null}

      <form className="contact-form" onSubmit={handleSubmit} id="contact-agency-form">
        <div className="form-group">
          <label htmlFor="name-input">{t('contact.name')} *</label>
          <input 
            type="text" 
            name="name" 
            id="name-input"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">{t('contact.email')} *</label>
          <input 
            type="email" 
            name="email" 
            id="email-input"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-input">{t('contact.phone')}</label>
          <input 
            type="tel" 
            name="phone" 
            id="phone-input"
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="travelers-input">{t('contact.travelers')}</label>
          <select 
            name="travelers" 
            id="travelers-input"
            value={formData.travelers} 
            onChange={handleChange}
          >
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5+ people</option>
            <option value="10">10+ people (Group)</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label htmlFor="date-input">{t('contact.date')}</label>
          <input 
            type="date" 
            name="date" 
            id="date-input"
            value={formData.date} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="message-input">{t('contact.message')} *</label>
          <textarea 
            name="message" 
            id="message-input"
            value={formData.message} 
            onChange={handleChange} 
            placeholder={t('contact.messagePlaceholder')} 
            required
          />
        </div>
        <div className="form-group full-width" style={{ marginTop: '1rem' }}>
          <button 
            type="submit" 
            className="btn btn-primary btn-lg" 
            style={{ width: '100%' }}
            disabled={isSubmitting}
            id="submit-contact-btn"
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </button>
        </div>
      </form>
    </div>
  );
};
