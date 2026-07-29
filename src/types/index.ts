export interface Tour {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleEs: string;
  description: string;
  descriptionFr: string;
  descriptionEs: string;
  duration: number;
  durationUnit: 'days' | 'hours';
  departure: string;
  pricePerPerson: number;
  currency: string;
  image: string;
  category: TourCategory;
  highlights: string[];
  highlightsFr: string[];
  highlightsEs: string[];
  rating: number;
  reviewCount: number;
  badge?: 'popular' | 'discount' | 'new';
  cities: string[];
}

export type TourCategory = 'desert' | 'imperial' | 'day-trip' | 'private' | 'special';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  nameFr: string;
  nameEs: string;
  tagline: string;
  taglineFr: string;
  taglineEs: string;
  description: string;
  descriptionFr: string;
  descriptionEs: string;
  image: string;
  tourCount: number;
  coords: { lat: number; lng: number };
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  textFr: string;
  textEs: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  titleEs: string;
  excerpt: string;
  excerptFr: string;
  excerptEs: string;
  content: string;
  contentFr: string;
  contentEs: string;
  image: string;
  date: string;
  author: string;
  category: string;
  categoryFr: string;
  categoryEs: string;
  readTime: number;
  focusKeyword: string;
}

export interface MapCity {
  id: string;
  name: string;
  coords: { lat: number; lng: number };
  pricePerDay: number;
  description: string;
  descriptionFr: string;
  descriptionEs: string;
}

export interface CustomItinerary {
  cities: MapCity[];
  totalDistance: number;
  estimatedDays: number;
  estimatedPrice: number;
}

export type Language = 'en' | 'fr' | 'es';
