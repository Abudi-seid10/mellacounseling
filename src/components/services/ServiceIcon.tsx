import React from 'react';
import {
  Users,
  Heart,
  Users2,
  Brain,
  Smile,
  Frown,
  School,
  Book,
  Laptop,
  Palette,
  Baby,
  Gamepad2
} from 'lucide-react';

const iconMap = {
  user: Users,
  heart: Heart,
  group: Users2,
  brain: Brain,
  smile: Smile,
  frown: Frown,
  school: School,
  book: Book,
  laptop: Laptop,
  palette: Palette,
  baby: Baby,
  toy: Gamepad2
};

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ iconName, className = "w-6 h-6 text-white" }) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Users;
  return <IconComponent className={className} />;
};