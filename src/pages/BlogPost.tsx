import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../data/blogPosts';
import { ScrollAnimation } from '../components/ScrollAnimation';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Find the post
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>{t('common.notFound')}</h2>
        <p style={{ marginBottom: '2rem' }}>The article you are looking for does not exist.</p>
        <Link to="/blog" className="btn btn-primary">{t('common.goHome')}</Link>
      </div>
    );
  }

  const title = currentLang === 'fr' ? post.titleFr : currentLang === 'es' ? post.titleEs : post.title;
  const category = currentLang === 'fr' ? post.categoryFr : currentLang === 'es' ? post.categoryEs : post.category;
  
  const formattedDate = new Date(post.date).toLocaleDateString(currentLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Example content following the precise structure from the HTML templates in BLOG WRITER
  const getDummyContent = () => {
    if (post.id === 'blog-1') {
      return `
        <div class="pro-article-content">
          <p>Morocco is a land of sensory overload, where ancient history mixes with vibrant modern life. If you are planning a trip to Morocco, one of the most crucial decisions is deciding <b>when to visit Morocco</b>. The weather varies dramatically across the country's diverse landscapes: from the scorching sands of the Sahara to the snowy peaks of the Atlas Mountains and the breezy Atlantic coast. Here is our expert guide to help you find the absolute best time for your adventure.</p>
          
          <div class="image-box">
            <img src="/images/best_time_visit.jpg" alt="Sahara Desert Dunes sunset" title="Sunset over Sahara Desert Dunes in Morocco" />
            <div class="image-caption">Sunset over the majestic Erg Chebbi dunes in Merzouga.</div>
          </div>

          <h2>Spring & Autumn: The Golden Seasons</h2>
          <p>Generally, the best times to visit Morocco are spring (March to May) and autumn (September to November). During these seasons, the weather is pleasantly warm across the country, making it ideal for exploring the bustling souks of Marrakech, walking through the historic medina of Fes, or trekking in the mountains.</p>

          <div class="elegant-quote">
            "To travel in Morocco during the spring is to witness the countryside covered in wildflowers and the valleys lush with green life."
          </div>

          <h2>Tackling the Sahara: Desert Climate Guide</h2>
          <p>The Sahara Desert requires careful timing. During summer (June to August), temperatures routinely exceed 45°C (113°F), making desert treks and camping uncomfortable and even hazardous. In contrast, winter nights can drop below freezing. Therefore, spring and autumn offer the perfect balance of warm days and cool, comfortable desert nights.</p>

          <div class="table-wrap">
            <table class="compare-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Average Day Temp</th>
                  <th>Average Night Temp</th>
                  <th>Desert Suitability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spring (Mar - May)</td>
                  <td>24°C - 30°C</td>
                  <td>12°C - 18°C</td>
                  <td>⭐ Excellent (Warm & pleasant)</td>
                </tr>
                <tr>
                  <td>Summer (Jun - Aug)</td>
                  <td>40°C - 48°C</td>
                  <td>22°C - 28°C</td>
                  <td>⚠️ Not Recommended (Extreme heat)</td>
                </tr>
                <tr>
                  <td>Autumn (Sep - Nov)</td>
                  <td>25°C - 32°C</td>
                  <td>14°C - 20°C</td>
                  <td>⭐ Excellent (Perfect nights)</td>
                </tr>
                <tr>
                  <td>Winter (Dec - Feb)</td>
                  <td>16°C - 22°C</td>
                  <td>2°C - 8°C</td>
                  <td>👍 Good (Very cold nights)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="value-box">
            <strong>Pro Tip for Winter Desert Travel</strong>
            <p>If you choose to visit the Sahara in December or January, bring high-quality thermals and layers. While the daytime is sunny and perfect, desert tents (even luxury ones) get very cold once the sun goes down.</p>
          </div>

          <h2>The Best Months for Specific Activities</h2>
          <ul class="smart-list">
            <li><strong>Sightseeing Imperial Cities:</strong> April, May, October, and November offer the most pleasant weather for long walks through Fes and Marrakech.</li>
            <li><strong>Hiking in the Atlas Mountains:</strong> April to June is best as the snow melts and mountain trails become fully accessible.</li>
            <li><strong>Surfing & Coastal Retreats:</strong> Essaouira and Taghazout enjoy pleasant weather year-round, but winter brings the best Atlantic swells for surfers.</li>
          </ul>

          <div class="expert-verdict-new">
            <h3>Conclusion: Our Expert Verdict</h3>
            <p>If we had to pick the single best month to visit Morocco, it would be <b>October</b>. The summer heat has subsided, the desert is welcoming, the sea is still warm enough for swimming, and the tourist crowds are slightly smaller than in spring. Plan ahead, secure your booking with our local agency, and get ready for an unforgettable journey!</p>
          </div>
        </div>
      `;
    }
    
    // Fallback content for other posts
    return `
      <div class="pro-article-content">
        <p>Welcome to our official travel guide for <b>${title}</b>. In this article, our local experts share insider knowledge and professional tips to help you get the most out of your Morocco travel experience.</p>
        
        <div class="image-box">
          <img src="/images/${post.image}" alt="${title}" title="${title}" />
          <div class="image-caption">Discovering the authentic beauty and culture of Morocco.</div>
        </div>

        <h2>Overview & Background</h2>
        <p>Morocco is a country of deep traditions, historic imperial cities, and spectacular natural wonders. Planning a visit can be overwhelming, which is why having advice from local guides makes all the difference.</p>

        <div class="elegant-quote">
          "Travel is the only thing you buy that makes you richer. Morocco will enrich your soul."
        </div>

        <h2>Key Travel Advice</h2>
        <p>Here are some of the most critical things to keep in mind when exploring this gorgeous North African kingdom:</p>

        <ul class="smart-list">
          <li><strong>Hire Local Guides:</strong> Navigating medinas can be tricky. A local guide keeps you safe and shares history you won't find in books.</li>
          <li><strong>Respect the Culture:</strong> Dress modestly, especially when visiting religious or rural areas.</li>
          <li><strong>Try Street Food:</strong> From freshly baked bread to snail soup, Moroccan street food is delicious and safe when eaten at busy stalls.</li>
        </ul>

        <div class="value-box">
          <strong>Important Booking Information</strong>
          <p>Always book your tours through a licensed local agency to ensure professional service, fair pricing, and proper safety standards throughout your trip.</p>
        </div>

        <div class="expert-verdict-new">
          <h3>The Final Verdict</h3>
          <p>Whether you have 3 days or 15 days, Morocco offers a rich, diverse experience. Let our team at Travelling Through Morocco customize your itinerary and turn your dream vacation into a reality.</p>
        </div>
      </div>
    `;
  };

  return (
    <div id="blog-post-detail">
      {/* Banner */}
      <section className="page-hero" style={{ background: `linear-gradient(rgba(10, 15, 26, 0.7), rgba(10, 15, 26, 0.9)), url("/images/${post.image}") no-repeat center center/cover` }}>
        <div className="page-hero-content" style={{ maxWidth: '800px', padding: '0 1rem' }}>
          <span className="badge badge-popular" style={{ marginBottom: '1rem' }}>{category}</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: '1.2' }}>{title}</h1>
          <div className="breadcrumb" style={{ marginTop: '1rem' }}>
            <Link to="/">{t('nav.home')}</Link>
            <span className="separator">/</span>
            <Link to="/blog">{t('nav.blog')}</Link>
            <span className="separator">/</span>
            <span style={{ color: 'var(--text-muted)' }}>{post.slug.substring(0, 20)}...</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" id="blog-post-content-section">
        <div className="container container-narrow">
          <ScrollAnimation animation="fade-in">
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
              <span>✍️ {post.author}</span>
              <span>📅 {formattedDate}</span>
              <span>⏱️ {post.readTime} {t('blog.readTime')}</span>
            </div>

            {/* Structured HTML Template Content */}
            <div 
              id="article-html-body"
              dangerouslySetInnerHTML={{ __html: getDummyContent() }} 
            />

            {/* Back button */}
            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
              <Link to="/blog" className="btn btn-secondary" id="back-to-blog-btn">
                ← Back to Blog
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Structured CSS mapping of BLOG WRITER HTML elements */}
      <style>{`
        .pro-article-content h2 {
          color: var(--color-primary);
          border-bottom: 2px solid var(--border-primary);
          padding-bottom: 8px;
          margin-top: 2.5rem;
          margin-bottom: 1.2rem;
          font-size: 1.6rem;
        }
        .pro-article-content h3 {
          color: var(--text-primary);
          border-left: 3px solid var(--color-primary);
          padding-left: 12px;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        .pro-article-content p {
          font-size: 1.05rem;
          line-height: 1.9;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }
        .pro-article-content .image-box {
          margin: 2.5rem 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-glass);
        }
        .pro-article-content .image-box img {
          width: 100%;
          height: auto;
          max-height: 450px;
          object-fit: cover;
        }
        .pro-article-content .image-caption {
          background: var(--bg-dark-2);
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          border-top: 1px solid var(--border-glass);
        }
        .pro-article-content .elegant-quote {
          background: var(--bg-glass);
          border-left: 4px solid var(--color-primary);
          padding: 1.8rem 2rem;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--text-primary);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin: 2.5rem 0;
        }
        .pro-article-content .table-wrap {
          margin: 2.5rem 0;
          overflow-x: auto;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
        }
        .pro-article-content .compare-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.95rem;
        }
        .pro-article-content .compare-table th {
          background: var(--bg-dark-2);
          color: var(--color-primary);
          padding: 1rem;
          font-weight: 600;
          border-bottom: 2px solid var(--border-glass);
        }
        .pro-article-content .compare-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-glass);
          color: var(--text-secondary);
        }
        .pro-article-content .compare-table tr:last-child td {
          border-bottom: none;
        }
        .pro-article-content .value-box {
          background: rgba(200, 169, 110, 0.05);
          border: 1px dashed var(--color-primary);
          padding: 1.8rem 2rem;
          border-radius: var(--radius-md);
          margin: 2.5rem 0;
        }
        .pro-article-content .value-box strong {
          display: block;
          color: var(--color-primary);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .pro-article-content .value-box p {
          margin: 0;
          font-size: 0.95rem;
        }
        .pro-article-content .smart-list {
          margin: 2rem 0;
          padding-left: 0;
        }
        .pro-article-content .smart-list li {
          position: relative;
          padding-left: 1.8rem;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }
        .pro-article-content .smart-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }
        .pro-article-content .expert-verdict-new {
          background: rgba(27, 94, 75, 0.06);
          border: 2px solid var(--color-secondary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          margin: 3rem 0;
        }
        .pro-article-content .expert-verdict-new h3 {
          color: var(--color-primary) !important;
          border-left: none !important;
          padding-left: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 1rem !important;
          font-size: 1.4rem !important;
        }
        .pro-article-content .expert-verdict-new p {
          margin: 0;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};
