import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu} id="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="logo-svg">
            <path d="M50 15C32 15 18 29 18 47V85H32V47C32 37 40 29 50 29C60 29 68 37 68 47V85H82V47C82 29 68 15 50 15Z" fill="url(#duneGrad)" />
            <path d="M50 10C51.5 25 65 38.5 80 40C65 41.5 51.5 55 50 70C48.5 55 35 41.5 20 40C35 38.5 48.5 25 50 10Z" fill="var(--color-primary)" />
            <defs>
              <linearGradient id="duneGrad" x1="18" y1="50" x2="82" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--color-primary-dark)" />
                <stop offset="50%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-primary-light)" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-primary)' }}>We Travel</span>
            <span style={{ color: 'var(--text-primary)', marginLeft: '4.5px' }}>Morocco</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links" id="desktop-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} id="nav-home">{t('nav.home')}</NavLink>
          <NavLink to="/tours" className={({ isActive }) => isActive ? 'active' : ''} id="nav-tours">{t('nav.tours')}</NavLink>
          <NavLink to="/destinations" className={({ isActive }) => isActive ? 'active' : ''} id="nav-destinations">{t('nav.destinations')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} id="nav-about">{t('nav.about')}</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} id="nav-blog">{t('nav.blog')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} id="nav-contact">{t('nav.contact')}</NavLink>
        </nav>

        <div className="navbar-actions" id="header-actions">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              fontSize: '1.1rem',
              transition: 'all var(--transition-fast)',
              padding: 0,
              marginRight: '0.5rem'
            }}
            aria-label="Toggle Theme"
            id="theme-toggle-btn"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ display: 'none' }} id="book-btn-desktop">
            {t('nav.bookNow')}
          </Link>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobile-nav-overlay">
        <NavLink to="/" onClick={closeMobileMenu} id="mob-nav-home">{t('nav.home')}</NavLink>
        <NavLink to="/tours" onClick={closeMobileMenu} id="mob-nav-tours">{t('nav.tours')}</NavLink>
        <NavLink to="/destinations" onClick={closeMobileMenu} id="mob-nav-destinations">{t('nav.destinations')}</NavLink>
        <NavLink to="/about" onClick={closeMobileMenu} id="mob-nav-about">{t('nav.about')}</NavLink>
        <NavLink to="/blog" onClick={closeMobileMenu} id="mob-nav-blog">{t('nav.blog')}</NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu} id="mob-nav-contact">{t('nav.contact')}</NavLink>
        <Link to="/contact" onClick={closeMobileMenu} className="btn btn-primary" id="mob-book-btn">
          {t('nav.bookNow')}
        </Link>
        <button
          onClick={() => {
            toggleTheme();
            closeMobileMenu();
          }}
          className="theme-toggle-mobile"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-md)',
            padding: '0.8rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            marginTop: '1.5rem',
            width: '100%'
          }}
          id="theme-toggle-mobile-btn"
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
};
