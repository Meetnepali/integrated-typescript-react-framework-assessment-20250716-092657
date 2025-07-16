import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillShowcaseCard from './SkillShowcaseCard';
import type { Candidate } from '../types/candidate.types';

const mockCandidate: Candidate = {
  id: 'cand1',
  name: 'Jane Dev',
  headline: 'Full Stack Engineer',
  skills: [
    { id: 'skill1', name: 'TypeScript' },
    { id: 'skill2', name: 'React' },
  ],
};

describe('SkillShowcaseCard', () => {
  it('renders candidate name and headline', () => {
    render(<SkillShowcaseCard candidate={mockCandidate} />);
    expect(screen.getByText('Jane Dev')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Engineer')).toBeInTheDocument();
  });

  it('renders candidate skills', () => {
    render(<SkillShowcaseCard candidate={mockCandidate} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
