import React from 'react';
import { TeamMemberCard } from '../components/team/TeamMemberCard';
import { team } from '../data/team';

export const Team = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team of mental health professionals is dedicated to providing 
            compassionate care and support for your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};