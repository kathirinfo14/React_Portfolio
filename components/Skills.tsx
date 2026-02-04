
import React from 'react';
import { SKILLS } from '../constants';
import SkillBadge from './SkillBadge';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        My Tech Stack
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {SKILLS.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
