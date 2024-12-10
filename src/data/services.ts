import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'individual-counseling',
    title: 'Individual Counseling',
    description: 'Personalized one-on-one therapy sessions tailored to your unique needs and goals.',
    approaches: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mindfulness-Based Therapy',
      'Solution-Focused Brief Therapy',
      'Psychodynamic Therapy',
      'EMDR Therapy',
    ],
    outcomes: [
      'Improved emotional regulation',
      'Better coping strategies',
      'Enhanced self-awareness',
      'Stronger relationships',
      'Increased resilience',
    ],
    sessionInfo: 'Sessions are typically 50 minutes long and scheduled weekly or bi-weekly based on individual needs.',
    faqs: [
      {
        question: 'How long will I need therapy?',
        answer: 'The duration varies depending on your specific needs and goals. We will work together to determine the best treatment timeline for you.',
      },
      {
        question: 'What can I expect in the first session?',
        answer: 'Your first session focuses on getting to know you, understanding your concerns, and developing an initial treatment plan.',
      },
      {
        question: 'Is therapy confidential?',
        answer: 'Yes, all sessions are strictly confidential. We adhere to HIPAA guidelines and professional ethical standards to protect your privacy.',
      },
    ],
    icon: 'brain',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'couples-therapy',
    title: 'Couples Therapy',
    description: 'Strengthen your relationship through improved communication and understanding.',
    approaches: [
      'Emotionally Focused Therapy (EFT)',
      'Gottman Method',
      'Narrative Therapy',
      'Imago Relationship Therapy',
    ],
    outcomes: [
      'Enhanced communication skills',
      'Deeper emotional connection',
      'Conflict resolution strategies',
      'Renewed intimacy and trust',
      'Stronger partnership',
    ],
    sessionInfo: 'Couples sessions are 75 minutes long, typically scheduled weekly or bi-weekly.',
    faqs: [
      {
        question: 'Should we come together for every session?',
        answer: 'While most sessions are together, there may be times when individual sessions are beneficial. We\'ll discuss this during your initial consultation.',
      },
      {
        question: 'What if my partner is reluctant to attend?',
        answer: 'We can start with individual sessions and work towards including your partner when they feel ready.',
      },
    ],
    icon: 'heart',
    imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'family-counseling',
    title: 'Family Counseling',
    description: 'Collaborative therapy sessions designed to improve communication, resolve conflicts, and strengthen family bonds.',
    approaches: [
      'Systemic Family Therapy',
      'Narrative Family Therapy',
      'Structural Family Therapy',
      'Communication-Based Interventions',
      'Attachment-Based Family Therapy'
    ],
    outcomes: [
      'Improved family communication',
      'Conflict resolution skills',
      'Enhanced mutual understanding',
      'Healthier relationship dynamics',
      'Supportive family environment'
    ],
    sessionInfo: 'Sessions typically last 60-90 minutes and can include various family members, with frequency tailored to family needs.',
    faqs: [
      {
        question: 'Do all family members need to attend?',
        answer: 'While participation of all family members is ideal, we can work flexibly based on your specific family situation and dynamics.'
      }
    ],
    icon: 'users2',
    imageUrl: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'child-adolescent',
    title: 'Child & Adolescent Services',
    description: 'Specialized therapy services for young people facing emotional and behavioral challenges.',
    approaches: [
      'Play Therapy',
      'Art Therapy',
      'Family Systems Therapy',
      'Behavioral Interventions',
    ],
    outcomes: [
      'Improved emotional expression',
      'Better behavioral management',
      'Enhanced social skills',
      'Stronger family relationships',
      'Academic success support',
    ],
    sessionInfo: 'Sessions are adapted to age and needs, typically 45-50 minutes, with parent consultations included.',
    faqs: [
      {
        question: 'How are parents involved in the therapy process?',
        answer: 'Parents are essential partners in the therapeutic process. We provide regular updates and guidance while maintaining appropriate confidentiality.',
      },
      {
        question: 'What age groups do you work with?',
        answer: 'We work with children as young as 4 years old through late adolescence (18 years).',
      },
    ],
    icon: 'smile',
    imageUrl: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'parent-counseling',
    title: 'Parent Counseling',
    description: 'Specialized support to help parents develop effective parenting strategies, manage challenges, and foster positive family relationships.',
    icon: 'heart',
    imageUrl: 'https://images.unsplash.com/photo-1467818829420-cashing-parents-with-a-child-780x520.jpg?auto=format&fit=crop&q=80&w=1000',
    approaches: [
      'Positive Parenting Techniques',
      'Behavioral Management Strategies',
      'Communication Skill Development',
      'Stress Management for Parents',
      'Attachment-Based Parenting Support'
    ],
    outcomes: [
      'Improved parenting confidence',
      'Enhanced parent-child communication',
      'Effective discipline strategies',
      'Reduced parental stress',
      'Better understanding of child development'
    ],
    sessionInfo: 'Sessions are 50 minutes long, with flexible scheduling to accommodate parental schedules.',
    faqs: [
      {
        question: 'Is parent counseling only for parents experiencing difficulties?',
        answer: 'Parent counseling is beneficial for all parents seeking to enhance their parenting skills and strengthen family relationships, regardless of current challenges.'
      }
    ]
},
  {
    id: 'school-counseling',
    title: 'School Counseling',
    description: 'Supportive services designed to help students navigate academic, social, and emotional challenges within the school environment.',
    icon: 'book',
    imageUrl: 'https://images.unsplash.com/photo-1517816428853-7d10697dec1a?auto=format&fit=crop&q=80&w=1000',
    approaches: [
      'Developmental Guidance',
      'Academic Support Counseling',
      'Social-Emotional Learning',
      'Crisis Intervention',
      'Educational Success Planning'
    ],
    outcomes: [
      'Improved academic performance',
      'Enhanced social skills',
      'Better emotional regulation',
      'Increased school engagement',
      'Personalized learning strategies'
    ],
    sessionInfo: 'Sessions are typically 30-45 minutes, conducted during school hours with parental consent and coordination with educators.',
    faqs: [
      {
        question: 'How are parents involved in school counseling?',
        answer: 'Parents are key partners in the counseling process. We maintain open communication and collaborate to support the student\'s holistic development.'
      }
    ]
}
];