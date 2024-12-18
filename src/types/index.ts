export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  slug: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  contraindications: string[];
  frequency: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}