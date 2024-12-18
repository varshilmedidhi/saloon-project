export interface MassageService {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  type: 'regular' | 'premium' | 'specialty';
}

export interface MassageCategory {
  id: string;
  title: string;
  description: string;
  services: MassageService[];
}