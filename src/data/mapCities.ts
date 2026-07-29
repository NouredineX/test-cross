import type { MapCity } from '../types';

export const mapCities: MapCity[] = [
  {
    id: 'city-marrakech',
    name: 'Marrakech',
    coords: { lat: 31.6295, lng: -7.9811 },
    pricePerDay: 45,
    description: 'The vibrant Red City — explore the famous Jemaa el-Fnaa square, souks, and palaces.',
    descriptionFr: 'La vibrante Ville Rouge — explorez la célèbre place Jemaa el-Fnaa, les souks et les palais.',
    descriptionEs: 'La vibrante Ciudad Roja — explora la famosa plaza Jemaa el-Fnaa, los zocos y los palacios.',
  },
  {
    id: 'city-fes',
    name: 'Fes',
    coords: { lat: 34.0181, lng: -5.0078 },
    pricePerDay: 40,
    description: 'The spiritual capital — discover the ancient medina, tanneries, and world\'s oldest university.',
    descriptionFr: 'La capitale spirituelle — découvrez la médina ancienne, les tanneries et la plus ancienne université du monde.',
    descriptionEs: 'La capital espiritual — descubre la antigua medina, las curtiembres y la universidad más antigua del mundo.',
  },
  {
    id: 'city-casablanca',
    name: 'Casablanca',
    coords: { lat: 33.5731, lng: -7.5898 },
    pricePerDay: 35,
    description: 'Morocco\'s economic hub — visit the stunning Hassan II Mosque and the Corniche.',
    descriptionFr: 'Le centre économique du Maroc — visitez la mosquée Hassan II et la Corniche.',
    descriptionEs: 'El centro económico de Marruecos — visita la impresionante Mezquita Hassan II y la Corniche.',
  },
  {
    id: 'city-tangier',
    name: 'Tangier',
    coords: { lat: 35.7595, lng: -5.8340 },
    pricePerDay: 40,
    description: 'Where Africa meets Europe — explore the Kasbah, the Caves of Hercules, and the medina.',
    descriptionFr: 'Là où l\'Afrique rencontre l\'Europe — explorez la Kasbah, les Grottes d\'Hercule et la médina.',
    descriptionEs: 'Donde África se encuentra con Europa — explora la Kasbah, las Cuevas de Hércules y la medina.',
  },
  {
    id: 'city-agadir',
    name: 'Agadir',
    coords: { lat: 30.4278, lng: -9.5981 },
    pricePerDay: 35,
    description: 'The beach paradise — relax on golden beaches and enjoy fresh seafood.',
    descriptionFr: 'Le paradis balnéaire — détendez-vous sur les plages dorées et dégustez des fruits de mer frais.',
    descriptionEs: 'El paraíso de playa — relájate en playas doradas y disfruta de mariscos frescos.',
  },
  {
    id: 'city-ouarzazate',
    name: 'Ouarzazate',
    coords: { lat: 30.9189, lng: -6.8936 },
    pricePerDay: 35,
    description: 'The door of the desert — visit Atlas Studios and the famous Ait Benhaddou Kasbah.',
    descriptionFr: 'La porte du désert — visitez Atlas Studios et la célèbre Kasbah Ait Benhaddou.',
    descriptionEs: 'La puerta del desierto — visita Atlas Studios y la famosa Kasbah Ait Benhaddou.',
  },
  {
    id: 'city-chefchaouen',
    name: 'Chefchaouen',
    coords: { lat: 35.1688, lng: -5.2636 },
    pricePerDay: 35,
    description: 'The Blue Pearl — wander through blue-washed streets nestled in the Rif Mountains.',
    descriptionFr: 'La Perle Bleue — promenez-vous dans les rues bleues nichées dans les montagnes du Rif.',
    descriptionEs: 'La Perla Azul — pasea por las calles azules enclavadas en las montañas del Rif.',
  },
  {
    id: 'city-merzouga',
    name: 'Merzouga',
    coords: { lat: 31.0801, lng: -4.0133 },
    pricePerDay: 50,
    description: 'The heart of the Sahara — camel treks, luxury desert camps, and stunning sand dunes.',
    descriptionFr: 'Le cœur du Sahara — treks en chameau, camps de luxe et dunes de sable spectaculaires.',
    descriptionEs: 'El corazón del Sahara — paseos en camello, campamentos de lujo y dunas de arena impresionantes.',
  },
  {
    id: 'city-essaouira',
    name: 'Essaouira',
    coords: { lat: 31.5085, lng: -9.7595 },
    pricePerDay: 30,
    description: 'The windy city — a charming coastal town with a historic medina and artistic soul.',
    descriptionFr: 'La ville du vent — une charmante ville côtière avec une médina historique et une âme artistique.',
    descriptionEs: 'La ciudad del viento — una encantadora ciudad costera con una medina histórica y un alma artística.',
  },
  {
    id: 'city-meknes',
    name: 'Meknes',
    coords: { lat: 33.8938, lng: -5.5662 },
    pricePerDay: 30,
    description: 'The Ismaili capital — visit the grand Bab Mansour gate and the historic granaries.',
    descriptionFr: 'La capitale ismaïlienne — visitez la majestueuse porte Bab Mansour et les greniers historiques.',
    descriptionEs: 'La capital ismaelita — visita la majestuosa puerta Bab Mansour y los graneros históricos.',
  },
  {
    id: 'city-rabat',
    name: 'Rabat',
    coords: { lat: 34.0209, lng: -6.8416 },
    pricePerDay: 35,
    description: 'The capital city — explore the Hassan Tower, Kasbah of the Udayas, and the Royal Palace.',
    descriptionFr: 'La capitale — explorez la Tour Hassan, la Kasbah des Oudayas et le Palais Royal.',
    descriptionEs: 'La capital — explora la Torre Hassan, la Kasbah de los Udayas y el Palacio Real.',
  },
  {
    id: 'city-aitbenhaddou',
    name: 'Ait Benhaddou',
    coords: { lat: 31.0475, lng: -7.1306 },
    pricePerDay: 30,
    description: 'UNESCO World Heritage clay Kasbah, famous movie setting.',
    descriptionFr: 'Kasbah en terre classee par l\'UNESCO, celebre decor de cinema.',
    descriptionEs: 'Kasbah de arcilla Patrimonio de la UNESCO, famoso escenario de cine.',
  },
  {
    id: 'city-dades',
    name: 'Dades Valley',
    coords: { lat: 31.5283, lng: -5.9922 },
    pricePerDay: 35,
    description: 'Stunning winding roads, rock formations, and mountain gorges.',
    descriptionFr: 'Routes sinueuses impressionnantes, formations rocheuses et gorges de montagne.',
    descriptionEs: 'Impresionantes carreteras sinuosas, formaciones rocosas y gargantas de montaña.',
  },
  {
    id: 'city-todra',
    name: 'Todra Gorge',
    coords: { lat: 31.5524, lng: -5.5947 },
    pricePerDay: 30,
    description: 'Majestic limestone canyons popular with climbers and hikers.',
    descriptionFr: 'Canyons calcaires majestueux tres prises des grimpeurs et randonneurs.',
    descriptionEs: 'Majestuosos cañones de piedra caliza populares entre escaladores y excursionistas.',
  },
  {
    id: 'city-ouzoud',
    name: 'Ouzoud Waterfalls',
    coords: { lat: 32.0152, lng: -6.7189 },
    pricePerDay: 35,
    description: '110m high waterfalls nestled in the lush Middle Atlas mountains.',
    descriptionFr: 'Cascades de 110m de haut nichees dans les montagnes verdoyantes du Moyen Atlas.',
    descriptionEs: 'Cascadas de 110m de altura enclavadas en las verdes montañas del Medio Atlas.',
  },
  {
    id: 'city-ifrane',
    name: 'Ifrane',
    coords: { lat: 33.5273, lng: -5.1094 },
    pricePerDay: 35,
    description: 'Morocco\'s alpine-style "Switzerland" surrounded by cedar forests.',
    descriptionFr: 'La "Suisse" du Maroc au style alpin entouree de forets de cedres.',
    descriptionEs: 'La "Suiza" de Marruecos con estilo alpino rodeada de bosques de cedros.',
  },
  {
    id: 'city-zagora',
    name: 'Zagora',
    coords: { lat: 30.3308, lng: -5.8381 },
    pricePerDay: 35,
    description: 'Gateway to the Draa Valley desert, known for the "Timbuktu" sign.',
    descriptionFr: 'Porte du desert de la vallee du Draa, celebre pour son panneau "Tombouctou".',
    descriptionEs: 'Puerta al desierto del Valle del Draa, famosa por el cartel de "Tombuctú".',
  },
  {
    id: 'city-midelt',
    name: 'Midelt',
    coords: { lat: 32.6852, lng: -4.7314 },
    pricePerDay: 30,
    description: 'Lively high plains town, popular stopover between Fes and the desert.',
    descriptionFr: 'Ville animee des hauts plateaux, escale populaire entre Fes et le desert.',
    descriptionEs: 'Ciudad animada de las tierras altas, escala popular entre Fez y el desierto.',
  },
  {
    id: 'city-asilah',
    name: 'Asilah',
    coords: { lat: 35.4667, lng: -6.0333 },
    pricePerDay: 35,
    description: 'Charming coastal town with painted murals, art festivals, and ocean fortresses.',
    descriptionFr: 'Charmante ville cotiere avec fresques murales, festivals d\'art et bastions maritimes.',
    descriptionEs: 'Encantadora ciudad costera con murales pintados, festivales de arte y fortalezas oceánicas.',
  },
];

// Distance matrix (approximate km between cities)
export const cityDistances: Record<string, Record<string, number>> = {
  'Marrakech': { 'Fes': 533, 'Casablanca': 240, 'Tangier': 580, 'Agadir': 260, 'Ouarzazate': 200, 'Chefchaouen': 600, 'Merzouga': 560, 'Essaouira': 175, 'Meknes': 480, 'Rabat': 322 },
  'Fes': { 'Marrakech': 533, 'Casablanca': 295, 'Tangier': 315, 'Agadir': 750, 'Ouarzazate': 430, 'Chefchaouen': 210, 'Merzouga': 465, 'Essaouira': 670, 'Meknes': 60, 'Rabat': 200 },
  'Casablanca': { 'Marrakech': 240, 'Fes': 295, 'Tangier': 340, 'Agadir': 460, 'Ouarzazate': 400, 'Chefchaouen': 430, 'Merzouga': 600, 'Essaouira': 350, 'Meknes': 240, 'Rabat': 87 },
  'Tangier': { 'Marrakech': 580, 'Fes': 315, 'Casablanca': 340, 'Agadir': 830, 'Ouarzazate': 700, 'Chefchaouen': 115, 'Merzouga': 750, 'Essaouira': 730, 'Meknes': 280, 'Rabat': 250 },
  'Agadir': { 'Marrakech': 260, 'Fes': 750, 'Casablanca': 460, 'Tangier': 830, 'Ouarzazate': 370, 'Chefchaouen': 860, 'Merzouga': 680, 'Essaouira': 175, 'Meknes': 690, 'Rabat': 540 },
  'Ouarzazate': { 'Marrakech': 200, 'Fes': 430, 'Casablanca': 400, 'Tangier': 700, 'Agadir': 370, 'Chefchaouen': 640, 'Merzouga': 360, 'Essaouira': 390, 'Meknes': 430, 'Rabat': 450 },
  'Chefchaouen': { 'Marrakech': 600, 'Fes': 210, 'Casablanca': 430, 'Tangier': 115, 'Agadir': 860, 'Ouarzazate': 640, 'Merzouga': 620, 'Essaouira': 750, 'Meknes': 280, 'Rabat': 350 },
  'Merzouga': { 'Marrakech': 560, 'Fes': 465, 'Casablanca': 600, 'Tangier': 750, 'Agadir': 680, 'Ouarzazate': 360, 'Chefchaouen': 620, 'Essaouira': 720, 'Meknes': 500, 'Rabat': 550 },
  'Essaouira': { 'Marrakech': 175, 'Fes': 670, 'Casablanca': 350, 'Tangier': 730, 'Agadir': 175, 'Ouarzazate': 390, 'Chefchaouen': 750, 'Merzouga': 720, 'Meknes': 610, 'Rabat': 430 },
  'Meknes': { 'Marrakech': 480, 'Fes': 60, 'Casablanca': 240, 'Tangier': 280, 'Agadir': 690, 'Ouarzazate': 430, 'Chefchaouen': 280, 'Merzouga': 500, 'Essaouira': 610, 'Rabat': 140 },
  'Rabat': { 'Marrakech': 322, 'Fes': 200, 'Casablanca': 87, 'Tangier': 250, 'Agadir': 540, 'Ouarzazate': 450, 'Chefchaouen': 350, 'Merzouga': 550, 'Essaouira': 430, 'Meknes': 140 },
};

// Haversine formula to compute great-circle distance between two points
function getHaversineDistance(
  coords1: { lat: number; lng: number },
  coords2: { lat: number; lng: number }
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((coords2.lat - coords1.lat) * Math.PI) / 180;
  const dLng = ((coords2.lng - coords1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coords1.lat * Math.PI) / 180) *
      Math.cos((coords2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function calculateDistance(cities: string[]): number {
  let total = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    const from = cities[i];
    const to = cities[i + 1];
    if (cityDistances[from] && cityDistances[from][to]) {
      total += cityDistances[from][to];
    } else {
      // Fallback: Haversine distance with 1.25 multiplier to approximate real road route curves
      const city1 = mapCities.find(c => c.name.toLowerCase() === from.toLowerCase());
      const city2 = mapCities.find(c => c.name.toLowerCase() === to.toLowerCase());
      if (city1 && city2) {
        total += Math.round(getHaversineDistance(city1.coords, city2.coords) * 1.25);
      }
    }
  }
  return total;
}

export function estimateDays(cities: string[]): number {
  return Math.max(cities.length, Math.ceil(calculateDistance(cities) / 300));
}

export function estimatePrice(cities: MapCity[]): number {
  const basePricePerDay = 35;
  const days = estimateDays(cities.map(c => c.name));
  const cityPremium = cities.reduce((sum, city) => sum + city.pricePerDay, 0) / cities.length;
  return Math.round(days * (basePricePerDay + cityPremium));
}

