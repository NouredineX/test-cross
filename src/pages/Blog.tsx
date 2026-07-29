import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BlogCard } from '../components/BlogCard';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { blogPosts } from '../data/blogPosts';

export const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Categories helper mapping
  const categories = [
    { id: 'all', label: t('blog.allCategories') },
    { id: 'Travel Tips', label: currentLang === 'fr' ? 'Conseils' : currentLang === 'es' ? 'Consejos' : 'Travel Tips' },
    { id: 'Desert Guide', label: currentLang === 'fr' ? 'Guide Désert' : currentLang === 'es' ? 'Guía Desierto' : 'Desert Guide' },
    { id: 'City Guides', label: currentLang === 'fr' ? 'Guides Villes' : currentLang === 'es' ? 'Guías Ciudades' : 'City Guides' },
    { id: 'Culture', label: currentLang === 'fr' ? 'Culture' : currentLang === 'es' ? 'Cultura' : 'Culture' }
  ];

  // Filter posts based on category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div id="blog-page">
      {/* Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/1 (7).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <h1>{t('nav.blog')}</h1>
          <div className="breadcrumb">
            <a href="/">{t('nav.home')}</a>
            <span className="separator">/</span>
            <span>{t('nav.blog')}</span>
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="section" id="blog-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('blog.subtitle')}</span>
            <h2>{t('blog.title')}</h2>
            <p>{t('blog.desc')}</p>
          </div>

          {/* Filter tabs */}
          <div className="glass-card filter-bar" id="blog-filter-bar" style={{ marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`blog-cat-btn-${cat.id.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid list of posts */}
          <div className="grid-3" id="blog-grid-posts">
            {filteredPosts.map((post, idx) => (
              <ScrollAnimation animation="fade-in" delay={(idx % 3) * 100} key={post.id}>
                <BlogCard post={post} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
