import React from 'react';

export type SkillCategory = 'personal' | 'professional';

export interface Skill {
  name: string;
  Icon?: React.ComponentType;
}

export interface Language {
  name: string;
  level: number;
}
