export interface DetailedItinerary {
  tourId: string;
  focusKeyword: string;
  seoDescription: string;
  seoDescriptionFr: string;
  seoDescriptionEs: string;
  inclusions: string[];
  inclusionsFr: string[];
  inclusionsEs: string[];
  exclusions: string[];
  exclusionsFr: string[];
  exclusionsEs: string[];
  days: {
    dayNumber: number;
    title: string;
    titleFr: string;
    titleEs: string;
    content: string;
    contentFr: string;
    contentEs: string;
  }[];
}

// Database of city/activity descriptions in multiple languages
const cityGuides: Record<string, {
  name: string;
  nameFr: string;
  nameEs: string;
  desc: string;
  descFr: string;
  descEs: string;
}> = {
  'Marrakech': {
    name: 'Marrakech Red City',
    nameFr: 'Marrakech la Ville Rouge',
    nameEs: 'Marrakech la Ciudad Roja',
    desc: 'Explore the historic red city of Marrakech. Visit the magnificent Bahia Palace, the Saadian Tombs, and the Jardin Majorelle. In the evening, immerse yourself in the lively atmosphere of Jemaa el-Fnaa square, where storytellers, musicians, and street food stalls bring the night to life.',
    descFr: 'Explorez la ville rouge historique de Marrakech. Visitez le magnifique palais de la Bahia, les tombeaux saadiens et le jardin Majorelle. Le soir, plongez dans l\'ambiance animée de la place Jemaa el-Fnaa.',
    descEs: 'Explore la histórica ciudad roja de Marrakech. Visite el magnífico Palacio de la Bahía, las Tumbas Saadidas y el Jardín Majorelle. Por la noche, sumérjase en el animado ambiente de la plaza Jemaa el-Fnaa.'
  },
  'Casablanca': {
    name: 'Casablanca Metropolis',
    nameFr: 'Casablanca Métropole',
    nameEs: 'Casablanca Metrópolis',
    desc: 'Discover Casablanca, Morocco\'s modern economic capital. Tour the spectacular Hassan II Mosque, one of the largest mosques in the world, which features a 210-meter minaret overlooking the Atlantic Ocean. Stroll along the scenic Ain Diab Corniche and visit the historic Habous quarter.',
    descFr: 'Découvrez Casablanca, la capitale économique moderne du Maroc. Visitez la spectaculaire mosquée Hassan II, l\'une des plus grandes mosquées au monde avec son minaret de 210 mètres surplombant l\'océan Atlantique.',
    descEs: 'Descubra Casablanca, la moderna capital económica de Marruecos. Visite la espectacular Mezquita de Hassan II, una de las mezquitas más grandes del mundo con su alminar de 210 metros sobre el océano Atlántico.'
  },
  'Rabat': {
    name: 'Rabat Capital',
    nameFr: 'Rabat Capitale',
    nameEs: 'Rabat Capital',
    desc: 'Explore Rabat, the political capital of Morocco. Walk through the ancient Kasbah of the Udayas with its beautiful blue and white streets. Visit the iconic Hassan Tower and the Mausoleum of Mohammed V, showcasing grand Alaouite architectural heritage.',
    descFr: 'Explorez Rabat, la capitale politique du Maroc. Promenez-vous dans la Kasbah des Oudayas avec ses jolies ruelles bleues et blanches. Visitez la tour Hassan et le mausolée de Mohammed V.',
    descEs: 'Explore Rabat, la capital política de Marruecos. Pasee por la Kasbah de los Udayas con sus hermosas calles azules y blancas. Visite la torre Hassan y el mausoleo de Mohammed V.'
  },
  'Chefchaouen': {
    name: 'Chefchaouen Blue City',
    nameFr: 'Chefchaouen la Ville Bleue',
    nameEs: 'Chefchaouen la Ciudad Azul',
    desc: 'Wander through the dreamy blue-washed streets of Chefchaouen, nestled in the Rif Mountains. Every corner offers a picturesque view of local handicrafts, leather goods, and weaving workshops. Relax at Outa el-Hammam square and visit the Spanish Mosque for a panoramic sunset view.',
    descFr: 'Flânez dans les ruelles bleues de Chefchaouen, nichée dans les montagnes du Rif. Visitez la place Outa el-Hammam et la mosquée espagnole pour admirer le coucher du soleil.',
    descEs: 'Pasee por las calles de color azul de Chefchaouen, en las montañas del Rif. Visite la plaza Outa el-Hammam y la mezquita española para admirar el atardecer.'
  },
  'Fes': {
    name: 'Fes Medina',
    nameFr: 'Fès Médina',
    nameEs: 'Fez Medina',
    desc: 'Step back in time as you enter Fes el-Bali, the oldest medieval medina in the world. Walk through its labyrinth of 9,000 narrow streets, visiting the Al-Qarawiyyin University, the Bou Inania Madrasa, and the famous Chouara Tanneries, where traditional leather dyeing is still practiced.',
    descFr: 'Remontez le temps en entrant dans Fès el-Bali, la plus ancienne médina médiévale du monde. Visitez l\'université Al-Qarawiyyin, la madrasa Bou Inania et les tanneries de Chouara.',
    descEs: 'Retroceda en el tiempo al ingresar a Fez el-Bali, la medina medieval más antigua del mundo. Visite la universidad Al-Qarawiyyin, la madrasa Bou Inania y las curtidurías de Chouara.'
  },
  'Meknes': {
    name: 'Meknes Imperial Gates',
    nameFr: 'Meknès Portes Impériales',
    nameEs: 'Meknes Puertas Imperiales',
    desc: 'Discover Meknes, the Ismaili capital. Admire the monumental Bab Mansour gate, explore the royal granaries, and visit the Moulay Ismail Mausoleum. Later, visit the nearby ancient Roman ruins of Volubilis, a UNESCO World Heritage site featuring stunning preserved mosaics.',
    descFr: 'Découvrez Meknès, la capitale ismaélienne. Admirez la porte monumentale Bab Mansour, explorez les greniers royaux et visitez les ruines romaines de Volubilis.',
    descEs: 'Descubra Meknes, la capital ismaelita. Admire la monumental puerta Bab Mansour, explore los graneros reales y visite las ruinas romanas de Volubilis.'
  },
  'Ouarzazate': {
    name: 'Ouarzazate Kasbahs & Cinema',
    nameFr: 'Ouarzazate Kasbahs & Cinéma',
    nameEs: 'Ouarzazate Kasbahs y Cine',
    desc: 'Explore Ouarzazate, the Hollywood of Morocco. Visit the famous Kasbah Ait Benhaddou, a fortified clay village featured in Gladiator and Game of Thrones. Explore the Atlas Film Studios and learn how this unique desert town became a backdrop for cinematic history.',
    descFr: 'Explorez Ouarzazate, le Hollywood du Maroc. Visitez la célèbre Kasbah Ait Benhaddou, un village d\'argile fortifié classé à l\'UNESCO. Explorez les studios de cinéma Atlas.',
    descEs: 'Explore Ouarzazate, el Hollywood de Marruecos. Visite la famosa Kasbah Ait Benhaddou, un pueblo de arcilla fortificado catalogado por la UNESCO. Explore los estudios cinematográficos.'
  },
  'Merzouga': {
    name: 'Merzouga Sahara Desert Camp',
    nameFr: 'Merzouga Camp du Désert',
    nameEs: 'Merzouga Campamento en el Desierto',
    desc: 'Experience the magic of the Sahara Desert. Ride camels across the golden dunes of Erg Chebbi as the sun sets. Spend an unforgettable night in a private luxury desert camp, enjoy a traditional dinner around the campfire, listen to live Berber drumming music, and stargaze under the clear sky.',
    descFr: 'Vivez la magie du désert du Sahara. Randonnez à dos de chameau dans les dunes dorées de l\'Erg Chebbi au coucher du soleil. Passez la nuit dans un camp de luxe avec musique berbère traditionnelle.',
    descEs: 'Viva la magia del desierto del Sahara. Pasee en camello por las dunas de Erg Chebbi al atardecer. Pase la noche en un campamento de lujo con cena y música bereber tradicional.'
  },
  'Dades': {
    name: 'Dades & Todra Gorges',
    nameFr: 'Gorges du Dadès & Todra',
    nameEs: 'Gargantas del Dades y Todra',
    desc: 'Drive through the dramatic landscapes of the Dades Valley and check out the spectacular monkey fingers rock formations. Hike through the stunning Todra Gorges, where vertical limestone cliffs rise 300 meters high, lining a beautiful palm oasis and running river canyon.',
    descFr: 'Traversez les paysages spectaculaires de la vallée du Dadès. Promenez-vous dans les gorges du Todra, où des falaises de calcaire s\'élèvent à 300 mètres de hauteur.',
    descEs: 'Conduzca a través de los espectaculares paisajes del Valle del Dades. Pasee por las Gargantas del Todra, donde los acantilados de piedra caliza se elevan 300 metros.'
  },
  'Essaouira': {
    name: 'Essaouira Coastal Escape',
    nameFr: 'Essaouira Échappée Côtière',
    nameEs: 'Essaouira Escapada Costera',
    desc: 'Visit the coastal gem of Essaouira, an ancient Portuguese fortress city. Walk along the historic stone ramparts, explore the white-and-blue medina, watch fishermen bring in their daily catch at the port, and enjoy a fresh grilled seafood lunch by the ocean.',
    descFr: 'Visitez Essaouira, une ancienne forteresse portugaise. Promenez-vous le long des remparts historiques, explorez la médina et dégustez des poissons grillés frais.',
    descEs: 'Visite Essaouira, una antigua ciudad fortaleza portuguesa. Pasee por las murallas históricas, explore la medina blanca y azul y disfrute de marisco fresco.'
  },
  'Ouzoud': {
    name: 'Ouzoud Waterfalls',
    nameFr: 'Cascades d\'Ouzoud',
    nameEs: 'Cascadas de Ouzoud',
    desc: 'Hike through the olive trees down to the bottom of the spectacular Ouzoud Waterfalls. These 110-meter falls are the highest in North Africa. Take a traditional raft boat ride, enjoy a lunch by the rushing waters, and spot the friendly wild Barbary monkeys playing in the trees.',
    descFr: 'Randonnez jusqu\'au pied des cascades d\'Ouzoud, les plus hautes d\'Afrique du Nord (110 mètres). Faites un tour en bateau et observez les singes magots sauvages.',
    descEs: 'Camine hasta el pie de las cascadas de Ouzoud, las más altas del norte de África (110 metros). Disfrute de un paseo en bote y observe los monos salvajes.'
  },
  'Zagora': {
    name: 'Zagora Desert Gateway',
    nameFr: 'Zagora Porte du Désert',
    nameEs: 'Zagora Puerta del Desierto',
    desc: 'Travel through the lush Draa Valley, home to millions of date palms and old clay fortresses. Reach the rocky desert dunes of Zagora, take a camel ride at sunset, and spend a peaceful night in a Berber desert camp under the stars.',
    descFr: 'Traversez la vallée du Draa avec ses palmeraies. Rejoignez les dunes du désert de Zagora, faites une balade à dos de chameau et passez la nuit dans un camp berbère.',
    descEs: 'Viaje a través del Valle del Draa. Llegue al desierto de Zagora, disfrute de un paseo en camello al atardecer y pase la noche en un campamento bereber.'
  }
};

// Travel Advisory text to append to guarantee 815+ words count on every tour details page
export const getTravelAdvisoryText = (focusKeyword: string, lang: string): string => {
  if (lang === 'fr') {
    return `
      <h2>Conseils de Voyage Importants pour votre ${focusKeyword}</h2>
      <p>Pour tirer le meilleur parti de votre voyage au Maroc, voici quelques recommandations de notre agence locale Travelling Through Morocco. Préparez vos bagages avec soin, car les températures varient énormément entre le jour et la nuit dans le désert ou en altitude.</p>
      
      <h3>1. Que faut-il emporter dans le désert ?</h3>
      <p>Nous vous conseillons d'apporter des vêtements légers et respirants pour la journée, mais n'oubliez pas des vêtements chauds pour les nuits fraîches dans le désert. Un chapeau, des lunettes de soleil et une crème solaire haute protection sont indispensables pour faire face au soleil du Sahara. Une gourde réutilisable est également recommandée pour rester hydraté.</p>

      <h3>2. Respect et Culture locale au Maroc</h3>
      <p>Le Maroc est un pays musulman accueillant et chaleureux. Pour respecter les coutumes locales, nous vous conseillons de vous habiller de manière pudique, en particulier lors de la visite de villages ruraux ou de sites historiques. Demandez toujours la permission avant de prendre en photo les habitants locaux.</p>

      <h3>3. Monnaie et Pourboires</h3>
      <p>La monnaie officielle est le Dirham marocain (MAD). Bien que les cartes de crédit soient acceptées dans les grands hôtels et restaurants de Marrakech ou Casablanca, le liquide reste indispensable pour les petits achats dans les souks ou dans le désert. Le pourboire est une pratique courante au Maroc pour saluer un bon service.</p>
    `;
  }
  
  if (lang === 'es') {
    return `
      <h2>Consejos Importantes para su viaje de ${focusKeyword}</h2>
      <p>Para aprovechar al máximo su experiencia en Marruecos, aquí tiene algunas recomendaciones de nuestra agencia de viajes Travelling Through Morocco. Prepare sus maletas con cuidado para disfrutar de una estancia cómoda y segura.</p>

      <h3>1. ¿Qué llevar al Desierto del Sahara?</h3>
      <p>Recomendamos llevar ropa ligera y cómoda durante el día, pero no olvide abrigarse bien por la noche, ya que la temperatura en el desierto puede bajar drásticamente. Lleve gafas de sol, protector solar de alto factor y un sombrero para protegerse del sol. Es importante mantenerse hidratado durante todo el viaje.</p>

      <h3>2. Respeto y Cultura Local</h3>
      <p>Marruecos es un país muy hospitalario. Para respetar la cultura local, vista de manera modesta, especialmente cuando visite áreas rurales o lugares históricos. Siempre es una buena costumbre pedir permiso antes de fotografiar a las personas locales.</p>

      <h3>3. Moneda y Propinas en Marruecos</h3>
      <p>La moneda oficial es el Dirham marroquí (MAD). Aunque se aceptan tarjetas en establecimientos grandes de Marrakech o Casablanca, es necesario llevar dinero en efectivo para compras pequeñas en los mercados locales. Dar propina es una costumbre muy común en Marruecos para agradecer un buen servicio.</p>
    `;
  }

  return `
    <h2>Important Travel Advisory for your ${focusKeyword}</h2>
    <p>To get the absolute best experience out of your <b>${focusKeyword}</b>, we have compiled a set of essential tips and guidelines from our local tour guides. Planning ahead will ensure a comfortable, safe, and truly unforgettable adventure through Morocco's unique landscapes.</p>
    
    <h3>1. What to Pack for the Sahara Desert</h3>
    <p>The Sahara Desert is famous for its extreme temperatures. During the daytime, the sun is intense, so we recommend lightweight, breathable long-sleeve shirts and trousers to protect your skin. Sunglasses, a wide-brimmed hat, and high-factor sunscreen are absolutely essential. However, desert temperatures can drop rapidly after sunset. Even in the warmer months, night temperatures in Erg Chebbi can feel chilly, and in winter, they can drop close to freezing. Always bring warm layers, including a fleece jacket, thermal wear, and a warm beanie for your night in the camp.</p>

    <h3>2. Respecting Moroccan Culture & Customs</h3>
    <p>Morocco is a peaceful, welcoming Islamic country known for its legendary hospitality. When traveling through rural villages, imperial medinas, or mountain passes, it is respectful to dress modestly. Both men and women should cover their shoulders and knees. When taking photos of local people, particularly in busy souks or remote villages, always ask for their permission first. Learning a few basic words in Moroccan Arabic (Darija), such as "Salam" (Hello) and "Shokran" (Thank you), goes a long way in showing respect and building friendly connections with the locals.</p>

    <h3>3. Currency, Payments, and Tipping</h3>
    <p>The official currency is the Moroccan Dirham (MAD). While credit cards are widely accepted in major hotels, riads, and upscale restaurants in Marrakech, Casablanca, and Fes, cash is still king in smaller towns, local souks, and desert oasis stations. We highly recommend carrying a sufficient amount of Dirhams in cash for small purchases, lunches, and beverages along the route. Tipping (Baksheesh) is deeply integrated into Moroccan culture. It is customary to tip drivers, camel guides, and restaurant staff to show appreciation for their hard work and dedication.</p>

    <h3>4. Staying Hydrated and Safe</h3>
    <p>Moroccan tap water is generally not recommended for drinking by foreign travelers. We strongly advise drinking bottled mineral water, which is cheap and widely available at every stop during your tour. Additionally, ensure you protect yourself from heatstroke by staying in the shade when possible and drinking water regularly, even if you do not feel thirsty. All our private 4x4 vehicles are equipped with air conditioning and first-aid kits, and our professional drivers are trained in route safety to guarantee a smooth travel experience.</p>
  `;
};

// Dynamic helper function to generate the unique itinerary for ALL 16 tours
export const getDetailedItinerary = (_tourId: string, tour: {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleEs: string;
  description: string;
  descriptionFr: string;
  descriptionEs: string;
  duration: number;
  departure: string;
  cities: string[];
}): DetailedItinerary => {
  const focusKeyword = `${tour.departure} to Merzouga desert tour`;

  // Custom inclusions/exclusions based on tour type
  const isInDesertTour = tour.cities.includes('Merzouga') || tour.cities.includes('Zagora') || tour.slug.includes('desert');
  const isDayTrip = tour.duration === 1;

  const inclusions = isDayTrip
    ? [
        `Private transportation in comfortable A/C 4x4 or minivan`,
        `Professional local driver speaking English/French/Spanish`,
        `Fuel, road tolls, and parking fees`,
        `Pick up and drop off from your accommodation`,
        `Local guide in the destination (if applicable)`
      ]
    : [
        `Private transportation in comfortable A/C 4x4 or minivan`,
        `Professional local driver speaking English/French/Spanish`,
        `Fuel and road tolls`,
        `Comfortable accommodations in traditional riads/hotels (half board)`,
        isInDesertTour ? `Luxury Sahara Desert camp overnight stay with private tent` : `Hotel stays with breakfast and dinner included`,
        isInDesertTour ? `Camel trek at sunset and sunrise in the dunes` : `Guided city tours of Fes, Marrakech, or Meknes`,
        isInDesertTour ? `Traditional live drumming music around the campfire` : `Entrance fees to royal historical sights`
      ];

  const inclusionsFr = isDayTrip
    ? [
        `Transport privé en 4x4 ou minivan confortable avec climatisation`,
        `Chauffeur local professionnel parlant anglais/français/espagnol`,
        `Carburant, péages et frais de parking`,
        `Prise en charge et retour à votre hébergement`
      ]
    : [
        `Transport privé en 4x4 ou minivan confortable avec climatisation`,
        `Chauffeur local professionnel parlant anglais/français/espagnol`,
        `Carburant et péages routiers`,
        `Hébergements confortables dans des riads/hôtels traditionnels (demi-pension)`,
        isInDesertTour ? `Nuit dans un camp de luxe dans le désert du Sahara` : `Nuits d'hôtel avec dîner et petit-déjeuner`,
        isInDesertTour ? `Balade à dos de chameau dans le désert` : `Visites guidées des médinas historiques`,
        isInDesertTour ? `Musique traditionnelle berbère autour du feu` : `Entrées aux monuments historiques`
      ];

  const inclusionsEs = isDayTrip
    ? [
        `Transporte privado en cómodo 4x4 o minivan con aire acondicionado`,
        `Conductor local profesional de habla inglesa/francesa/española`,
        `Combustible, peajes y tasas de aparcamiento`,
        `Recogida y regreso a su alojamiento`
      ]
    : [
        `Transporte privado en cómodo 4x4 o minivan con aire acondicionado`,
        `Conductor local profesional de habla inglesa/francesa/española`,
        `Combustible y peajes de carretera`,
        `Alojamientos cómodos en riads/hoteles tradicionales (media pensión)`,
        isInDesertTour ? `Noche en campamento de lujo en el desierto del Sahara` : `Noches de hotel con cena y desayuno`,
        isInDesertTour ? `Paseo en camello en las dunas` : `Visitas guiadas de las medinas históricas`,
        isInDesertTour ? `Música bereber tradicional alrededor de la hoguera` : `Entradas a los monumentos históricos`
      ];

  const exclusions = [
    `Lunches and beverages/drinks`,
    `Tips for the driver and local guides`,
    `Personal travel insurance`,
    `Any optional activities not listed in the program`
  ];

  const exclusionsFr = [
    `Déjeuners et boissons`,
    `Pourboires pour le chauffeur et les guides locaux`,
    `Assurance voyage personnelle`,
    `Activités facultatives non incluses dans le programme`
  ];

  const exclusionsEs = [
    `Almuerzos y bebidas`,
    `Propinas para el conductor y los guías locales`,
    `Seguro de viaje personal`,
    `Cualquier actividad opcional no incluida en el programa`
  ];

  // Dynamic Day generation algorithm matching the actual cities in the tour
  const days: DetailedItinerary['days'] = [];
  const duration = tour.duration;
  const tourCities = tour.cities.length > 0 ? tour.cities : [tour.departure];

  for (let i = 1; i <= duration; i++) {
    // Determine the current city for this day
    const currentCityIndex = Math.min(i - 1, tourCities.length - 1);
    const nextCityIndex = Math.min(i, tourCities.length - 1);
    
    const city = tourCities[currentCityIndex];
    const nextCity = tourCities[nextCityIndex];
    
    const isLastDay = i === duration;
    const isFirstDay = i === 1;

    let title = '';
    let titleFr = '';
    let titleEs = '';
    let content = '';
    let contentFr = '';
    let contentEs = '';

    // Custom text building based on city guide templates
    if (isFirstDay) {
      const guide = cityGuides[city] || cityGuides['Marrakech'];
      
      title = `Day 1: Departure from ${tour.departure} to ${nextCity}`;
      titleFr = `Jour 1: Départ de ${tour.departure} vers ${nextCity}`;
      titleEs = `Día 1: Salida de ${tour.departure} hacia ${nextCity}`;
      
      content = `Your premium ${focusKeyword} starts early today. Our professional driver will pick you up from your riad. We set off on our journey towards ${nextCity}. Along the way, we pass through changing scenery, taking breaks to admire the breathtaking panoramic views. ${guide.desc} Continuing our drive, we arrive in ${nextCity} in the late afternoon, check into our riad, and enjoy a traditional dinner.`;
      contentFr = `Votre voyage commence à ${tour.departure}. Nous prenons la route vers ${nextCity}. En chemin, vous profiterez de magnifiques paysages. ${guide.descFr} Nous arrivons à ${nextCity} en fin d'après-midi.`;
      contentEs = `Su viaje comienza en ${tour.departure}. Conducimos hacia ${nextCity}. En el camino, disfrutará de hermosos paisajes. ${guide.descEs} Llegamos a ${nextCity} por la tarde.`;
    } else if (isLastDay) {
      title = `Day ${i}: Final exploration of ${city} and return`;
      titleFr = `Jour ${i}: Exploration finale de ${city} et retour`;
      titleEs = `Día ${i}: Exploración final de ${city} y regreso`;
      
      content = `On the final day of your ${focusKeyword}, we explore ${city}. After a hearty breakfast, we stroll through the local crafts markets and historic sites. ${cityGuides[city]?.desc || 'We enjoy sightseeing the panoramic spots.'} We then board our comfortable vehicle for the return journey, enjoying the scenic mountain roads or coastal highways. We arrive back in the evening, where our driver drops you off at your hotel, marking the end of your holiday.`;
      contentFr = `Pour ce dernier jour de voyage, nous explorons ${city}. ${cityGuides[city]?.descFr || 'Nous faisons des visites de monuments.'} Ensuite, nous prenons la route du retour vers notre point de départ.`;
      contentEs = `En el último día de su viaje, exploramos ${city}. ${cityGuides[city]?.descEs || 'Hacemos visitas históricas.'} Luego iniciamos el viaje de regreso al punto de partida.`;
    } else {
      // Intermediate days
      const guide = cityGuides[city] || cityGuides['Merzouga'];
      title = `Day ${i}: Journey through ${city} to ${nextCity}`;
      titleFr = `Jour ${i}: Voyage à travers ${city} vers ${nextCity}`;
      titleEs = `Día ${i}: Viaje a través de ${city} hacia ${nextCity}`;
      
      content = `Today is dedicated to exploring ${city} before heading towards ${nextCity}. ${guide.desc} We travel through stunning scenic valleys, stopping for a local lunch along the route. In the afternoon, we continue towards ${nextCity}, passing beautiful date palms, ancient kasbahs, and local communities. In the evening, we check into our traditional hotel or luxury camp.`;
      contentFr = `Aujourd'hui, nous explorons ${city}. ${guide.descFr} Nous continuons ensuite notre route vers ${nextCity} pour y passer la nuit.`;
      contentEs = `Hoy exploramos ${city}. ${guide.descEs} Continuamos nuestro viaje hacia ${nextCity} donde pasaremos la noche.`;
    }

    days.push({
      dayNumber: i,
      title,
      titleFr,
      titleEs,
      content,
      contentFr,
      contentEs
    });
  }

  return {
    tourId: tour.id,
    focusKeyword,
    seoDescription: `Book the custom ${tour.duration}-day ${tour.title} starting from ${tour.departure}. Complete itinerary with local driver, luxury riads, and authentic experiences.`,
    seoDescriptionFr: `Réservez le circuit de ${tour.duration} jours ${tour.titleFr} au départ de ${tour.departure}.`,
    seoDescriptionEs: `Reserve el tour de ${tour.duration} días ${tour.titleEs} saliendo de ${tour.departure}.`,
    inclusions,
    inclusionsFr,
    inclusionsEs,
    exclusions,
    exclusionsFr,
    exclusionsEs,
    days
  };
};
