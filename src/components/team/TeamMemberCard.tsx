import React from 'react';
import { TeamMember } from '../../types';
import { GraduationCap, Award } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
        <p className="text-teal-600 mb-2">{member.credentials}</p>
        <p className="text-gray-600 mb-4">{member.title}</p>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Specializations
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {member.specializations.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 mb-4">{member.biography}</p>

        <div>
          <h4 className="text-lg font-medium mb-2 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2" />
            Education
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {member.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};