export interface Skill {
  id: string;
  name: string;
  level?: string;
}

export interface Candidate {
  id: string;
  name: string;
  headline: string;
  skills?: Skill[];
  // ...other future fields
}
