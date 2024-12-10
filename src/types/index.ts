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

export interface Service {
  id: string;
  title: string;
  description: string;
  approaches: string[];
  outcomes: string[];
  sessionInfo: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  icon: string;
  imageUrl: string;
}