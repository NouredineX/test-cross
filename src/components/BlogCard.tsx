import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const title = currentLang === 'fr' ? post.titleFr : currentLang === 'es' ? post.titleEs : post.title;
  const excerpt = currentLang === 'fr' ? post.excerptFr : currentLang === 'es' ? post.excerptEs : post.excerpt;
  const category = currentLang === 'fr' ? post.categoryFr : currentLang === 'es' ? post.categoryEs : post.category;

  const formattedDate = new Date(post.date).toLocaleDateString(currentLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="blog-card glass-card" id={`blog-card-${post.id}`}>
      <div className="blog-card-image">
        <Link to={`/blog/${post.slug}`}>
          <img 
            src={`/images/${post.image}`} 
            alt={title}
            width="400"
            height="200"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80';
            }}
          />
        </Link>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-category" id={`blog-category-${post.id}`}>{category}</div>
        <h3>
          <Link to={`/blog/${post.slug}`} id={`blog-title-link-${post.id}`}>{title}</Link>
        </h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-footer">
          <span id={`blog-date-${post.id}`}>📅 {formattedDate}</span>
          <span id={`blog-readtime-${post.id}`}>⏱️ {post.readTime} {t('blog.readTime')}</span>
        </div>
      </div>
    </article>
  );
};
