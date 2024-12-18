import { ServiceDetail } from '../../types';

export const ledTherapyService: ServiceDetail = {
  id: '4',
  title: 'LED Light Therapy',
  description: 'LED Light Therapy is a non-invasive, soothing treatment that uses different wavelengths of light to penetrate the skin at various depths, promoting skin rejuvenation and healing.',
  benefits: [
    'Anti-Aging Benefits',
    'Acne Treatment',
    'Improves Skin Tone & Texture',
    'Soothes & Calms the Skin',
    'Boosts Circulation',
    'Safe & Non-Invasive',
    'No Downtime'
  ],
  contraindications: [
    'Active Skin Infections',
    'Pregnancy (consult physician)',
    'Light Sensitivity',
    'Photosensitive Conditions'
  ],
  frequency: 'Treatments can be performed once or twice a week, with maintenance sessions recommended for optimal results.',
  image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80'
};