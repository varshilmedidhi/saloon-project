import { Service, ServiceDetail } from '../../types';
import { dermaplaningService } from './dermaplaning';
import { microdermabrasionService } from './microdermabrasion';
import { microneedlingService } from './microneedling';
import { ledTherapyService } from './led-therapy';
import { nailCareService } from './nail-care';
import { bodyContouringService } from './body-contouring';

// Service summaries for cards
export const services: Service[] = [
  {
    id: '1',
    title: 'Dermaplaning',
    description: 'A non-invasive facial treatment that gently exfoliates the skin and removes peach fuzz for a smoother, brighter complexion.',
    image: dermaplaningService.image,
    price: 'From $99',
    slug: 'dermaplaning'
  },
  {
    id: '2',
    title: 'Microdermabrasion',
    description: 'Advanced skin resurfacing treatment with Dermal Pod technology for enhanced results and deeper product penetration.',
    image: microdermabrasionService.image,
    price: 'From $199',
    slug: 'microdermabrasion'
  },
  {
    id: '3',
    title: 'Microneedling',
    description: 'Collagen Induction Therapy that stimulates natural skin healing for firmer, smoother, and more youthful-looking skin.',
    image: microneedlingService.image,
    price: 'From $149',
    slug: 'microneedling'
  },
  {
    id: '4',
    title: 'LED Light Therapy',
    description: 'Non-invasive treatment using different wavelengths of light to promote skin rejuvenation and healing.',
    image: ledTherapyService.image,
    price: 'From $99',
    slug: 'led-light-therapy'
  },
  {
    id: '5',
    title: 'Pedicure & Manicure',
    description: 'Luxurious nail care treatments designed to improve the health, appearance, and aesthetics of your hands and feet.',
    image: nailCareService.image,
    price: 'From $79',
    slug: 'pedicure-manicure'
  },
  {
    id: '6',
    title: 'Body Contouring',
    description: 'Advanced non-invasive treatments to sculpt and tone your body using ultrasound, RF, and vacuum technologies.',
    image: bodyContouringService.image,
    price: 'From $299',
    slug: 'body-contouring'
  }
];

// Detailed service information
export const serviceDetails: Record<string, ServiceDetail> = {
  'dermaplaning': dermaplaningService,
  'microdermabrasion': microdermabrasionService,
  'microneedling': microneedlingService,
  'led-light-therapy': ledTherapyService,
  'pedicure-manicure': nailCareService,
  'body-contouring': bodyContouringService
};