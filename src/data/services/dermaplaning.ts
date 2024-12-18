import { ServiceDetail } from '../../types';

export const dermaplaningService: ServiceDetail = {
  id: '1',
  title: 'Dermaplaning',
  description: 'Dermaplaning is a non-invasive facial treatment that uses a small, sterile blade to gently exfoliate the skin by removing dead skin cells and vellus hair (peach fuzz). This process helps reveal a smoother, brighter complexion.',
  benefits: [
    'Eliminates Vellus Hair & Dead Skin Cells',
    'Improves Skin Texture',
    'Better Product Absorption',
    'Brightens Skin',
    'Flawless Makeup Application',
    'Stimulates Circulation',
    'Sensitive Skin Friendly',
    'Safe During Pregnancy/Nursing'
  ],
  contraindications: [
    'Inflamed or Cystic Acne',
    'Severe Rosacea',
    'Open Wounds or Lesions'
  ],
  frequency: 'Dermaplaning can be performed every 2-3 weeks, or as needed, based on hair growth and skin condition.',
  image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80'
};