import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/i18n'; // Initialise translations
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

// Lazy-loaded pages to support code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Tours = lazy(() => import('./pages/Tours').then(m => ({ default: m.Tours })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const TourDetail = lazy(() => import('./pages/TourDetail').then(m => ({ default: m.TourDetail })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <Suspense fallback={
            <div className="loading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--color-primary)' }}>
              <div className="spinner" style={{ border: '4px solid rgba(200, 169, 110, 0.1)', borderLeftColor: 'var(--color-primary)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tours/:slug" element={<TourDetail />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>


        {/* Footer Area */}
        <Footer />

        {/* Floating Utilities */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
