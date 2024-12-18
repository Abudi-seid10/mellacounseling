import { BaseService } from '../types/services';

export const coreServices: BaseService[] = [
  {
    id: 'family-counseling',
    title: 'Family Counseling',
    description: 'Strengthen family bonds and improve communication through collaborative therapy.',
    approaches: [
      'Systemic Family Therapy',
      'Narrative Family Therapy',
      'Structural Family Therapy',
      'Communication-Based Interventions',
    ],
    outcomes: [
      'Improved family communication',
      'Better conflict resolution',
      'Enhanced relationships',
      'Stronger family bonds',
    ],
    sessionInfo: '60-90 minute sessions, frequency based on family needs',
    icon: 'users2',
    imageUrl: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'adolescent-counseling',
    title: 'Adolescent Counseling',
    description: 'Specialized support for teens navigating life challenges.',
    approaches: [
      'Cognitive Behavioral Therapy',
      'Solution-Focused Therapy',
      'Mindfulness Techniques',
      'Family Systems Integration',
    ],
    outcomes: [
      'Improved emotional regulation',
      'Better social skills',
      'Enhanced self-esteem',
      'Academic success support',
    ],
    sessionInfo: '50-minute sessions, tailored to teen schedules',
    icon: 'smile',
    imageUrl: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&q=80&w=1000',
  },
  // Add more core services...
];