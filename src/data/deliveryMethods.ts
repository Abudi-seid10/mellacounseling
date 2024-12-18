import { ServiceDeliveryMethod } from '../types/services';

export const deliveryMethods: ServiceDeliveryMethod[] = [
  {
    id: 'play-therapy',
    name: 'Play Therapy',
    description: 'Therapeutic play techniques that help children express emotions and develop coping strategies.',
    benefits: [
      'Natural form of expression for children',
      'Builds trust and rapport',
      'Allows processing of complex emotions',
      'Develops problem-solving skills',
    ],
    considerations: [
      'Best suited for children ages 3-12',
      'Requires specialized playroom setup',
      'May need parental involvement',
    ],
    icon: 'toy',
    imageUrl: 'https://images.unsplash.com/photo-1607990283593-6e5e3486ebd6?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'art-therapy',
    name: 'Art Therapy',
    description: 'Creative expression through art to facilitate healing and personal growth.',
    benefits: [
      'Non-verbal expression of emotions',
      'Reduces stress and anxiety',
      'Promotes self-discovery',
      'Supports trauma processing',
    ],
    considerations: [
      'No artistic skill required',
      'Materials provided',
      'Can be integrated with other therapies',
    ],
    icon: 'palette',
    imageUrl: 'https://images.unsplash.com/photo-1548946526-f69e2424cf1c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'online-counseling',
    name: 'Online Counseling',
    description: 'Virtual therapy sessions providing convenient access to mental health support.',
    benefits: [
      'Flexible scheduling',
      'Access from anywhere',
      'Reduced travel time',
      'Comfortable home environment',
    ],
    considerations: [
      'Requires stable internet connection',
      'Private space needed',
      'Some insurance limitations',
    ],
    icon: 'laptop',
    imageUrl: 'https://images.unsplash.com/photo-1598257007281-3a526e40d66c?auto=format&fit=crop&q=80&w=1000',
  },
];