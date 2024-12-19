export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface BaseService {
  id: string;
  title: string;
  description: string;
  approaches: string[];
  outcomes: string[];
  sessionInfo: string;
  faqs?: ServiceFAQ[];
  icon: string;
  imageUrl: string;
}

export interface ServiceDeliveryMethod {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  considerations: string[];
  icon: string;
  imageUrl: string;
}

export type ServiceCategory = 'individual' | 'family' | 'child' | 'specialty';