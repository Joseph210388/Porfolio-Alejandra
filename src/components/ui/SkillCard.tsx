import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  variants: Variants;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, variants }) => {
  const IconComponent = skill.Icon;

  return (
    <motion.div
      variants={variants}
      className="flex-shrink-0 bg-white/5 backdrop-blur-[2px] border border-dashed border-white/35 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 min-w-[140px] sm:min-w-[160px] hover:bg-white/10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      {IconComponent && (
        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      )}
      <span className="text-white font-dancing text-lg sm:text-xl text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};