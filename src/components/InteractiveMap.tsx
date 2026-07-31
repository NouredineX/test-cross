import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mapCities, calculateDistance, estimateDays, estimatePrice } from '../data/mapCities';
import type { MapCity } from '../types';

export const InteractiveMap: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const polylineRef = useRef<L.Polyline | null>(null);
  const routeGlowRef = useRef<L.Polyline | null>(null);

  const [selectedCities, setSelectedCities] = useState<MapCity[]>([]);
  const [routeCoords, setRouteCoords] = useState<L.LatLng[]>([]);
  const [routeLoading, setRouteLoading] = useState(false);

  // Calculate itinerary statistics
  const selectedCityNames = selectedCities.map(c => c.name);
  const totalDistance = calculateDistance(selectedCityNames);
  const estimatedDays = estimateDays(selectedCityNames);
  const estimatedPrice = estimatePrice(selectedCities);

  // Handle city selection toggles
  const handleToggleCity = (city: MapCity) => {
    setSelectedCities(prev => {
      const isSelected = prev.some(c => c.id === city.id);
      if (isSelected) {
        // Remove city
        return prev.filter(c => c.id !== city.id);
      } else {
        // Add city
        return [...prev, city];
      }
    });
  };

  // Remove city directly
  const handleRemoveCity = (cityId: string) => {
    setSelectedCities(prev => prev.filter(c => c.id !== cityId));
  };

  // Clear route
  const handleClearRoute = () => {
    setSelectedCities([]);
  };

  // Request custom trip via WhatsApp
  const handleRequestQuote = () => {
    const phoneNumber = '212708228026';
    const routeString = selectedCities.map(c => c.name).join(' > ');

    const message = [
      '*New Custom Tour Request - Travelling Through Morocco*',
      '',
      'Hello! I am interested in booking a custom Morocco tour with the following route:',
      '',
      '*Route:* ' + routeString,
      '',
      '*Trip Details:*',
      '- Distance: ' + totalDistance + ' km',
      '- Estimated Duration: ' + estimatedDays + ' days',
      '- Estimated Budget: ~' + estimatedPrice + ' EUR',
      '',
      '*Cities to visit:*',
      ...selectedCities.map((c, i) => (i + 1) + '. ' + c.name),
      '',
      'I would like to discuss availability and pricing. Thank you!'
    ].join('\n');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    // Center map on Meknes / Central Morocco coordinates
    const map = L.map(mapRef.current, {
      center: [32.0, -6.5],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    // Google Maps Satellite / Hybrid tiles
    L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      attribution: '&copy; Google Maps',
      maxZoom: 20
    }).addTo(map);

    leafletMap.current = map;

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  // Sync Markers and City Selection States
  useEffect(() => {
    const map = leafletMap.current;
    if (!map) return;

    // Clear existing markers from previous renders to avoid duplicates
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    mapCities.forEach(city => {
      const isSelected = selectedCities.some(c => c.id === city.id);
      const isMeknesHeadquarters = city.name === 'Meknes';

      // Create a custom styled HTML marker
      const customIcon = L.divIcon({
        className: 'leaflet-custom-marker',
        html: `
          <div class="custom-marker ${isSelected ? 'selected' : ''} ${isMeknesHeadquarters ? 'hq' : ''}" 
               style="
                 width: ${isMeknesHeadquarters ? '20px' : '15px'};
                 height: ${isMeknesHeadquarters ? '20px' : '15px'};
                 background-color: ${isSelected ? 'var(--color-accent)' : isMeknesHeadquarters ? 'var(--color-primary)' : '#A0977D'};
                 border: 2px solid #0A0F1A;
                 border-radius: 50%;
                 box-shadow: 0 0 10px rgba(0,0,0,0.5);
                 position: relative;
                 display: flex;
                 align-items: center;
                 justify-content: center;
               ">
               ${isMeknesHeadquarters ? '<span style="font-size: 8px; color: #0A0F1A;">★</span>' : ''}
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      const cityName = currentLang === 'fr' ? city.name : currentLang === 'es' ? city.name : city.name;
      const cityDesc = currentLang === 'fr' ? city.descriptionFr : currentLang === 'es' ? city.descriptionEs : city.description;

      const marker = L.marker([city.coords.lat, city.coords.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: var(--font-body); padding: 5px; color: var(--text-primary);">
            <h4 style="margin-bottom: 4px; color: var(--color-primary);">${cityName} ${isMeknesHeadquarters ? ' (HQ)' : ''}</h4>
            <p style="font-size: 0.8rem; line-height: 1.4; color: #A0977D; margin-bottom: 8px;">${cityDesc}</p>
            <button class="btn btn-primary btn-sm" id="btn-popup-toggle-${city.id}" style="width: 100%; text-align: center; padding: 4px 8px; font-size: 0.75rem;">
              ${isSelected ? t('map.remove') : t('nav.bookNow')}
            </button>
          </div>
        `);

      marker.on('popupopen', () => {
        const toggleBtn = document.getElementById(`btn-popup-toggle-${city.id}`);
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            handleToggleCity(city);
            marker.closePopup();
          });
        }
      });

      markersRef.current[city.id] = marker;
    });
  }, [selectedCities, currentLang, t]);

  // Fetch real road route from OSRM when cities change
  useEffect(() => {
    if (selectedCities.length < 2) {
      setRouteCoords([]);
      return;
    }

    let cancelled = false;
    setRouteLoading(true);

    const coords = selectedCities.map(c => `${c.coords.lng},${c.coords.lat}`).join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 2000); // 2-second timeout

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeoutId);
        if (cancelled) return;
        if (data.code === 'Ok' && data.routes?.[0]) {
          const latLngs = data.routes[0].geometry.coordinates.map(
            (coord: number[]) => L.latLng(coord[1], coord[0])
          );
          setRouteCoords(latLngs);
        } else {
          setRouteCoords([]);
        }
      })
      .catch(() => {
        clearTimeout(timeoutId);
        if (!cancelled) setRouteCoords([]);
      })
      .finally(() => {
        if (!cancelled) setRouteLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [selectedCities]);

  // Draw route on map (real road or straight-line fallback)
  useEffect(() => {
    const map = leafletMap.current;
    if (!map) return;

    // Remove old route layers
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }
    if (routeGlowRef.current) {
      routeGlowRef.current.remove();
      routeGlowRef.current = null;
    }

    if (selectedCities.length > 1) {
      if (routeCoords.length > 0) {
        // Glow layer (wider, semi-transparent)
        const glow = L.polyline(routeCoords, {
          color: '#C8A96E',
          weight: 9,
          opacity: 0.2,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
        routeGlowRef.current = glow;

        // Main road route
        const polyline = L.polyline(routeCoords, {
          color: '#C8A96E',
          weight: 3.5,
          opacity: 0.9,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
        polylineRef.current = polyline;
      } else if (!routeLoading) {
        // Fallback: straight dashed lines
        const latLngs = selectedCities.map(city => [city.coords.lat, city.coords.lng] as [number, number]);
        const polyline = L.polyline(latLngs, {
          color: '#C8A96E',
          weight: 3,
          opacity: 0.7,
          dashArray: '8, 12',
          lineCap: 'round',
        }).addTo(map);
        polylineRef.current = polyline;
      }
    }
  }, [selectedCities, routeCoords, routeLoading]);

  const popularSuggestions = [
    { id: 'marrakech', name: 'Marrakech', place: currentLang === 'fr' ? 'Place Jemaa el-Fna & Palais de la Bahia' : currentLang === 'es' ? 'Plaza Jemaa el-Fna y Palacio de la Bahía' : 'Jemaa el-Fnaa Square & Bahia Palace', badge: currentLang === 'fr' ? 'Incontournable' : currentLang === 'es' ? 'Imprescindible' : 'Must Visit' },
    { id: 'merzouga', name: 'Merzouga', place: currentLang === 'fr' ? 'Dunes de l\'Erg Chebbi & Promenade à Chameau' : currentLang === 'es' ? 'Dunas de Erg Chebbi y Paseo en Camello' : 'Erg Chebbi Sahara Dunes & Camel Trek', badge: currentLang === 'fr' ? 'Désert Top' : currentLang === 'es' ? 'Top Desierto' : 'Top Desert' },
    { id: 'fes', name: 'Fes', place: currentLang === 'fr' ? 'Université Al-Qarawiyyin & Tanneries Chouara' : currentLang === 'es' ? 'Universidad Al-Qarawiyyin y Curtidurías' : 'Al-Qarawiyyin University & Chouara Tanneries', badge: currentLang === 'fr' ? 'Capitale Culturelle' : currentLang === 'es' ? 'Capital Cultural' : 'Cultural Capital' },
    { id: 'chefchaouen', name: 'Chefchaouen', place: currentLang === 'fr' ? 'Médina Bleue & Montagnes du Rif' : currentLang === 'es' ? 'Medina Azul y Montañas del Rif' : 'Blue-washed Medina & Rif Mountains', badge: currentLang === 'fr' ? 'Ville Bleue' : currentLang === 'es' ? 'Ciudad Azul' : 'Scenic Blue' },
    { id: 'aitbenhaddou', name: 'Ait Benhaddou', place: currentLang === 'fr' ? 'Ksar d\'Aït-ben-Haddou (Patrimoine UNESCO)' : currentLang === 'es' ? 'Ksar de Ait Ben Haddou (Patrimonio UNESCO)' : 'UNESCO World Heritage Clay Kasbah', badge: currentLang === 'fr' ? 'Cinéma & Histoire' : currentLang === 'es' ? 'Cine e Historia' : 'Movie Setting' },
    { id: 'dades', name: 'Dades Valley', place: currentLang === 'fr' ? 'Gorges du Dadès & Route des Kasbahs' : currentLang === 'es' ? 'Gargantas del Dades y Ruta de las Kasbahs' : 'Scenic Winding Roads & Mountain Gorges', badge: currentLang === 'fr' ? 'Nature / Gorges' : currentLang === 'es' ? 'Naturaleza / Gargantas' : 'Nature / Gorges' },
    { id: 'todra', name: 'Todra Gorge', place: currentLang === 'fr' ? 'Gorges du Todra & Palmeraie de Tinghir' : currentLang === 'es' ? 'Gargantas del Todra y Palmeral de Tinghir' : 'Majestic Limestone Canyons & Cliffs', badge: currentLang === 'fr' ? 'Canyon / Trek' : currentLang === 'es' ? 'Cañón / Trek' : 'Canyon / Trek' },
    { id: 'ouzoud', name: 'Ouzoud Waterfalls', place: currentLang === 'fr' ? 'Cascades d\'Ouzoud & Singes Macaques' : currentLang === 'es' ? 'Cascadas de Ouzoud y Monos Macacos' : '110m High Waterfalls in lush Atlas', badge: currentLang === 'fr' ? 'Nature / Eau' : currentLang === 'es' ? 'Naturaleza / Agua' : 'Nature / Water' },
    { id: 'ifrane', name: 'Ifrane', place: currentLang === 'fr' ? 'La Suisse du Maroc & Parc National de Cèdres' : currentLang === 'es' ? 'La Suiza de Marruecos y Parque de Cedros' : 'Alpine-style town & Cedar Forests', badge: currentLang === 'fr' ? 'Suisse Marocaine' : currentLang === 'es' ? 'Suiza Marroquí' : 'Alpine Town' },
    { id: 'zagora', name: 'Zagora', place: currentLang === 'fr' ? 'Porte du Désert & Palmeraie du Draa' : currentLang === 'es' ? 'Puerta del Desierto y Palmeral del Draa' : 'Desert Gate & Draa Valley Oasis', badge: currentLang === 'fr' ? 'Désert / Oasis' : currentLang === 'es' ? 'Desierto / Oasis' : 'Desert Gate' },
    { id: 'midelt', name: 'Midelt', place: currentLang === 'fr' ? 'Escale des Pommes (Moyen/Haut Atlas)' : currentLang === 'es' ? 'Escala de Manzanas (Atlas Medio/Alto)' : 'High Atlas mountains popular stopover', badge: currentLang === 'fr' ? 'Étape Montagne' : currentLang === 'es' ? 'Escala Montaña' : 'Mountain Stop' },
    { id: 'asilah', name: 'Asilah', place: currentLang === 'fr' ? 'Médina Artistique & Remparts sur l\'Océan' : currentLang === 'es' ? 'Medina Artística y Murallas del Océano' : 'Charming painted walls coastal town', badge: currentLang === 'fr' ? 'Art & Océan' : currentLang === 'es' ? 'Arte y Océano' : 'Artistic Coast' },
    { id: 'essaouira', name: 'Essaouira', place: currentLang === 'fr' ? 'Forteresse de Mogador & Port de Pêche' : currentLang === 'es' ? 'Fortaleza de Mogador y Puerto de Pesca' : 'Historic Mogador Fortress & Coastal Port', badge: currentLang === 'fr' ? 'Côte Atlantique' : currentLang === 'es' ? 'Costa Atlántica' : 'Windy Coast' },
    { id: 'meknes', name: 'Meknes', place: currentLang === 'fr' ? 'Porte Bab Mansour & Ruines de Volubilis' : currentLang === 'es' ? 'Puerta Bab Mansour y Ruinas de Volubilis' : 'Bab Mansour Gate & Volubilis Ruins', badge: currentLang === 'fr' ? 'Siège Historique' : currentLang === 'es' ? 'Sede Histórica' : 'Historical HQ' },
    { id: 'rabat', name: 'Rabat', place: currentLang === 'fr' ? 'Tour Hassan & Kasbah des Oudayas' : currentLang === 'es' ? 'Torre Hassan y Kasbah de los Udayas' : 'Hassan Tower & Kasbah of the Udayas', badge: currentLang === 'fr' ? 'Capitale Royale' : currentLang === 'es' ? 'Capital Real' : 'Royal Capital' },
    { id: 'casablanca', name: 'Casablanca', place: currentLang === 'fr' ? 'Grande Mosquée Hassan II & Corniche' : currentLang === 'es' ? 'Gran Mezquita de Hassan II y Corniche' : 'Hassan II Mosque & Atlantic Corniche', badge: currentLang === 'fr' ? 'Centre Économique' : currentLang === 'es' ? 'Centro Económico' : 'Economic Center' }
  ];

  const handleSelectSuggestion = (cityName: string) => {
    const city = mapCities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    if (city) {
      handleToggleCity(city);
    }
  };

  return (
    <div id="custom-itinerary-builder-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="grid-2" style={{ gap: '2rem', alignItems: 'stretch' }} id="interactive-map-wrapper">
        <div 
          className="map-container" 
          ref={mapRef} 
          style={{ minHeight: '450px', zIndex: 1 }} 
          id="leaflet-morocco-map"
        />
        
        <div className="glass-card map-sidebar" id="map-control-sidebar">
          <h3>{t('map.title')}</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t('map.subtitle')}</p>

          <div className="itinerary-list" id="selected-itinerary-list">
            {selectedCities.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                {t('map.noCities')}
              </p>
            ) : (
              selectedCities.map((city, index) => {
                const cityName = currentLang === 'fr' ? city.name : currentLang === 'es' ? city.name : city.name;
                return (
                  <div className="itinerary-item" key={city.id} id={`itinerary-item-${city.id}`}>
                    <div className="city-number">{index + 1}</div>
                    <div className="city-name">{cityName}</div>
                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemoveCity(city.id)}
                      aria-label={`Remove ${cityName}`}
                      id={`remove-city-${city.id}`}
                    >
                      ✕
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {selectedCities.length > 0 && (
            <>
              <div className="itinerary-summary" id="itinerary-statistics">
                <div className="summary-item">
                  <div className="label">{t('map.distance')}</div>
                  <div className="value">{totalDistance} km</div>
                </div>
                <div className="summary-item">
                  <div className="label">{t('map.estimatedDays')}</div>
                  <div className="value">{estimatedDays} {t('tour.days')}</div>
                </div>
                <div className="summary-item">
                  <div className="label">{t('map.estimatedPrice')}</div>
                  <div className="value">~{estimatedPrice}€</div>
                </div>
              </div>

              {/* Route type indicator */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.4rem 0',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }} id="route-type-indicator">
                {routeLoading ? (
                  <>
                    <span style={{ animation: 'pulse 1.2s ease-in-out infinite' }}>⏳</span>
                    {currentLang === 'fr' ? 'Calcul de l\'itinéraire réel...' : currentLang === 'es' ? 'Calculando ruta real...' : 'Calculating real route...'}
                  </>
                ) : routeCoords.length > 0 ? (
                  <>
                    <span style={{ color: '#25D366' }}>✓</span>
                    {currentLang === 'fr' ? 'Itinéraire routier réel affiché' : currentLang === 'es' ? 'Ruta real mostrada' : 'Real road route displayed'}
                  </>
                ) : (
                  <>
                    <span style={{ color: 'var(--color-primary)', letterSpacing: '1px' }}>- -</span>
                    {currentLang === 'fr' ? 'Itinéraire estimé' : currentLang === 'es' ? 'Ruta estimada' : 'Estimated route'}
                  </>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }} id="map-action-buttons">
                <button 
                  className="btn btn-secondary btn-sm" 
                  onClick={handleClearRoute}
                  style={{ flex: 1 }}
                  id="clear-route-btn"
                >
                  {t('map.clearAll')}
                </button>
                <button 
                  className="btn btn-sm" 
                  onClick={handleRequestQuote}
                  style={{ 
                    flex: 2,
                    background: '#25D366',
                    color: '#fff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                  id="request-quote-btn"
                >
                  <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  {t('map.requestTour')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Suggested popular places list section */}
      <div className="popular-suggestions-section" style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem' }}>
        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
          ⭐️ {currentLang === 'fr' ? 'Destinations Recommandées & Suggestions d\'Escale' : currentLang === 'es' ? 'Destinos Recomendados y Sugerencias de Escala' : 'Recommended Destinations & Suggested Stops'}
        </h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {currentLang === 'fr' 
            ? 'Cliquez sur l\'une des destinations les plus visitées pour l\'ajouter ou la retirer instantanément de votre itinéraire sur la carte.' 
            : currentLang === 'es' 
            ? 'Haga clic en cualquiera de los destinos más visitados para agregarlo o eliminarlo instantáneamente de su ruta en el mapa.' 
            : 'Click any of the most visited destinations below to instantly add or remove them from your route on the map.'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {popularSuggestions.map(sug => {
            const isSelected = selectedCities.some(c => c.name.toLowerCase() === sug.name.toLowerCase());
            return (
              <div 
                key={sug.id}
                onClick={() => handleSelectSuggestion(sug.name)}
                style={{
                  background: isSelected ? 'rgba(200, 169, 110, 0.12)' : 'var(--bg-card)',
                  border: isSelected ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-glass)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.2rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-spring)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  position: 'relative',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'none'
                }}
                className="sug-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h5 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>{sug.name}</h5>
                  <span style={{
                    fontSize: '0.7rem',
                    background: isSelected ? 'var(--color-primary)' : 'var(--border-glass-strong)',
                    color: isSelected ? 'var(--bg-dark)' : 'var(--text-primary)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {sug.badge}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: '0.2rem 0 0.5rem 0', lineHeight: '1.4' }}>
                  {sug.place}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: isSelected ? 'var(--color-accent)' : 'var(--color-primary)', 
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    {isSelected ? '✓ ' + (currentLang === 'fr' ? 'Sélectionné' : currentLang === 'es' ? 'Seleccionado' : 'Selected') : '+ ' + (currentLang === 'fr' ? 'Ajouter à l\'itinéraire' : currentLang === 'es' ? 'Añadir a la ruta' : 'Add to Itinerary')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
