
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 p-4 rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-300">
      <div className="mb-2">{skill.icon}</div>
      <p className="text-sm font-medium text-white">{skill.name}</p>
    </div>
  );
};

export default SkillBadge;
