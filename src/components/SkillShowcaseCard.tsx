/*
Root Cause Explanation:
- Recent refactor changed the Candidate type and broke strict prop compatibility. Unsafe 'any' assertions were added to silence TypeScript, causing the build to fail in strict mode. Also, hooks lack correct dependency arrays and list keys are unstable. This file must restore strict typing, clean up hook usage, and ensure stable keys—without using any 'as any' or 'any'.
*/

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { Candidate, Skill } from '../types/candidate.types';

// Mock selector for demonstration; replace with real selector in app
const selectSkillsForCandidate = (id: string): Skill[] => [];

interface SkillShowcaseCardProps {
  candidate: Pick<Candidate, 'id' | 'name' | 'headline'> & Partial<Pick<Candidate, 'skills'>>;
}

const SkillShowcaseCard: React.FC<SkillShowcaseCardProps> = ({ candidate }) => {
  // Fetch skills from Redux
  const skills = useSelector(() => selectSkillsForCandidate(candidate.id));

  // Memoize skills list to avoid unnecessary renders
  const displayedSkills = useMemo(() => candidate.skills || skills || [], [candidate.skills, skills]);

  return (
    <div className="card">
      <h2>{candidate.name}</h2>
      <h4>{candidate.headline}</h4>
      <ul>
        {displayedSkills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillShowcaseCard;
