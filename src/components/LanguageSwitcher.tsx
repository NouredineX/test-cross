import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="lang-switcher" ref={dropdownRef} id="lang-switcher-container">
      <button 
        className="lang-switcher-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id="lang-switcher-trigger"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.label}</span>
        <span style={{ fontSize: '0.6rem', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
      </button>
      <div className={`lang-dropdown ${isOpen ? 'open' : ''}`} id="lang-switcher-dropdown">
        {languages.map(lang => (
          <button
            key={lang.code}
            className={i18n.language === lang.code ? 'active' : ''}
            onClick={() => changeLanguage(lang.code)}
            id={`lang-btn-${lang.code}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
