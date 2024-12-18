export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  title: string;
  specializations: string[];
  biography: string;
  education: string[];
  imageUrl: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  approaches: string[];
  outcomes: string[];
  sessionInfo: string;
  faqs?: ServiceFAQ[]; // Make FAQs optional
  icon: string;
  imageUrl: string;
}

export interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}