import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollAnimation } from '../components/ScrollAnimation';

export const PrivacyPolicy: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    if (currentLang === 'fr') {
      return (
        <div className="pro-article-content">
          <p className="lead">Chez We Travel Morocco, nous accordons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.</p>
          
          <h2>1. Informations que nous collectons</h2>
          <p>Nous collectons les informations que vous nous fournissez directement lorsque vous remplissez un formulaire de contact, effectuez une réservation ou concevez un itinéraire personnalisé sur notre carte interactive. Ces informations incluent :</p>
          <div className="smart-list">
            <ul>
              <li>Votre nom complet</li>
              <li>Votre adresse e-mail</li>
              <li>Votre numéro de téléphone</li>
              <li>Le nombre de voyageurs</li>
              <li>Les dates de voyage et les préférences d'itinéraire</li>
            </ul>
          </div>

          <h2>2. Comment nous utilisons vos informations</h2>
          <p>Nous utilisons les données collectées pour les finalités suivantes :</p>
          <div className="smart-list">
            <ul>
              <li>Répondre à vos demandes de renseignements et de devis personnalisés.</li>
              <li>Organiser et réserver vos circuits, hébergements et transports au Maroc.</li>
              <li>Améliorer l'expérience utilisateur et les fonctionnalités de notre carte interactive.</li>
              <li>Vous envoyer des informations importantes concernant votre réservation.</li>
            </ul>
          </div>

          <h2>3. Cookies et suivi</h2>
          <p>Notre site utilise des cookies de base et des technologies similaires pour analyser le trafic du site et mémoriser vos préférences (telles que la langue choisie ou le mode d'affichage sombre/clair). Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut limiter certaines fonctionnalités du site.</p>

          <h2>4. Sécurité des données</h2>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification ou divulgation non autorisés. Vos données ne sont jamais vendues ou partagées avec des tiers à des fins commerciales.</p>

          <h2>5. Vos droits</h2>
          <p>Conformément aux réglementations sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à tout moment à l'adresse e-mail ci-dessous.</p>

          <h2>6. Contactez-nous</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter :</p>
          <div className="value-box">
            <strong>We Travel Morocco Support</strong>
            <p>Email : wetravelmoroccoteam@gmail.com</p>
            <p>Adresse : Meknès, Maroc</p>
          </div>
        </div>
      );
    }

    if (currentLang === 'es') {
      return (
        <div className="pro-article-content">
          <p className="lead">En We Travel Morocco, valoramos enormemente la privacidad de sus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestro sitio web.</p>
          
          <h2>1. Información que recopilamos</h2>
          <p>Recopilamos la información que nos proporciona directamente cuando completa un formulario de contacto, realiza una reserva o diseña un itinerario personalizado en nuestro mapa interactivo. Esta información incluye:</p>
          <div className="smart-list">
            <ul>
              <li>Su nombre completo</li>
              <li>Su dirección de correo electrónico</li>
              <li>Su número de teléfono</li>
              <li>El número de viajeros</li>
              <li>Fechas de viaje y preferencias de itinerario</li>
            </ul>
          </div>

          <h2>2. Cómo utilizamos su información</h2>
          <p>Utilizamos los datos recopilados para los siguientes fines:</p>
          <div className="smart-list">
            <ul>
              <li>Responder a sus consultas y solicitudes de presupuestos personalizados.</li>
              <li>Organizar y reservar sus tours, alojamientos y transporte en Marruecos.</li>
              <li>Mejorar la experiencia del usuario y las funciones de nuestro mapa interactivo.</li>
              <li>Enviarle información importante sobre su reserva.</li>
            </ul>
          </div>

          <h2>3. Cookies y seguimiento</h2>
          <p>Nuestro sitio utiliza cookies básicas y tecnologías similares para analizar el tráfico del sitio y recordar sus preferencias (como el idioma elegido o el modo de tema oscuro/claro). Puede configurar su navegador para rechazar las cookies, pero esto puede limitar algunas funciones del sitio.</p>

          <h2>4. Seguridad de los datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso, modificación o divulgación no autorizados. Sus datos nunca se venden ni se comparten con terceros con fines comerciales.</p>

          <h2>5. Sus derechos</h2>
          <p>De acuerdo con la normativa de protección de datos, tiene derecho a acceder, rectificar y eliminar sus datos personales. Para ejercer estos derechos, puede ponerse en contacto con nosotros en cualquier momento en el correo electrónico que figura a continuación.</p>

          <h2>6. Contáctenos</h2>
          <p>Si tiene alguna pregunta sobre esta política de privacidad, puede ponerse en contacto con nosotros:</p>
          <div className="value-box">
            <strong>Soporte de We Travel Morocco</strong>
            <p>Email: wetravelmoroccoteam@gmail.com</p>
            <p>Dirección: Meknes, Marruecos</p>
          </div>
        </div>
      );
    }

    // Default English
    return (
      <div className="pro-article-content">
        <p className="lead">At We Travel Morocco, we highly value the privacy of your personal data. This privacy policy explains how we collect, use, and protect your information when you use our website.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect information that you directly provide to us when filling out a contact form, making a booking request, or building a custom route on our interactive map. This information includes:</p>
        <div className="smart-list">
          <ul>
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>The number of travelers</li>
            <li>Travel dates and itinerary preferences</li>
          </ul>
        </div>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected data for the following purposes:</p>
        <div className="smart-list">
          <ul>
            <li>Responding to your inquiries and custom quote requests.</li>
            <li>Organizing and booking your tours, accommodations, and transport in Morocco.</li>
            <li>Improving user experience and interactive map routing functionality.</li>
            <li>Sending you important updates regarding your custom itinerary.</li>
          </ul>
        </div>

        <h2>3. Cookies and Tracking</h2>
        <p>Our website uses basic cookies and similar technologies to analyze site traffic and remember your preferences (such as language selection or dark/light mode preference). You can configure your browser to decline cookies, though this may limit some website features.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to safeguard your personal data from unauthorized access, alteration, or disclosure. Your data is never sold or shared with third parties for commercial marketing purposes.</p>

        <h2>5. Your Rights</h2>
        <p>In accordance with data protection regulations, you have the right to access, rectify, and delete your personal data. To exercise these rights, please contact us at any time at the email address listed below.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions regarding this privacy policy, you can contact us:</p>
        <div className="value-box">
          <strong>We Travel Morocco Support</strong>
          <p>Email: wetravelmoroccoteam@gmail.com</p>
          <p>Address: Meknes, Morocco</p>
        </div>
      </div>
    );
  };

  return (
    <div id="privacy-policy-page">
      {/* Hero Banner */}
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(10, 15, 26, 0.8), rgba(10, 15, 26, 0.95)), url("/images/1 (8).webp") no-repeat center center/cover' }}>
        <div className="page-hero-content">
          <ScrollAnimation animation="fade-in">
            <h1>{t('footer.privacy')}</h1>
            <div className="breadcrumb">
              <span>{t('nav.home')}</span>
              <span className="separator">/</span>
              <span style={{ color: 'var(--color-primary)' }}>{t('footer.privacy')}</span>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Policy Details Container */}
      <section className="section" id="privacy-policy-body">
        <div className="container container-narrow">
          <ScrollAnimation animation="fade-in">
            <div className="glass-card" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
              {renderContent()}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};
