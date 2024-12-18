import { MassageCategory } from '../types/massage';

export const massageServices: MassageCategory[] = [
  {
    id: '4-hand-massage',
    title: '4-Hand Massage',
    description: 'Immerse yourself in the unparalleled luxury of a 4-Hand Massage, where two expert therapists synchronize their movements to deliver a soothing and transformative experience. The result is an indulgent, deep-release massage that elevates the relaxation process to new heights.',
    services: [
      {
        id: '4h-30',
        title: '30-Minute 4-Hand Massage',
        description: 'A quick but effective synchronized massage session',
        duration: 30,
        price: 110,
        type: 'premium'
      },
      {
        id: '4h-60',
        title: '60-Minute 4-Hand Massage',
        description: 'Our most popular 4-hand massage duration',
        duration: 60,
        price: 220,
        type: 'premium'
      },
      {
        id: '4h-90',
        title: '90-Minute 4-Hand Massage',
        description: 'Extended 4-hand massage for complete relaxation',
        duration: 90,
        price: 290,
        type: 'premium'
      }
    ]
  },
  {
    id: 'body-massage',
    title: 'Apex Aesthetics Empire Body Massage',
    description: 'Our signature Apex Aesthetics Empire Body Massage is designed to promote overall wellness while relieving stress, tension, and muscle pain. This carefully crafted treatment combines the perfect balance of relaxation and therapeutic benefits, leaving you in a state of pure bliss.',
    services: [
      {
        id: 'body-60',
        title: '60-Minute Body Massage',
        description: 'Classic full-body massage treatment',
        duration: 60,
        price: 110,
        type: 'regular'
      },
      {
        id: 'body-90',
        title: '90-Minute Body Massage',
        description: 'Extended full-body massage session',
        duration: 90,
        price: 145,
        type: 'regular'
      }
    ]
  },
  {
    id: 'hot-stone',
    title: 'Hot Stone Massage',
    description: 'Experience the ancient art of Hot Stone Massage, where smooth, heated stones are strategically placed on the body to melt away tension, ease sore muscles, and stimulate deep relaxation. Let the warmth of the stones penetrate your skin and muscles, promoting a sense of serenity and renewal.',
    services: [
      {
        id: 'stone-30',
        title: '30-Minute Hot Stone Massage',
        description: 'Introduction to hot stone therapy',
        duration: 30,
        price: 55,
        type: 'specialty'
      },
      {
        id: 'stone-60',
        title: '60-Minute Hot Stone Massage',
        description: 'Complete hot stone massage experience',
        duration: 60,
        price: 110,
        type: 'specialty'
      },
      {
        id: 'stone-90',
        title: '90-Minute Hot Stone Massage',
        description: 'Extended hot stone therapy session',
        duration: 90,
        price: 145,
        type: 'specialty'
      }
    ]
  }
];