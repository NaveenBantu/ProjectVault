export interface Project {
  id: number;
  name: string;
  description: string;
}

export interface Issue {
  id: number;
  title: string;
  solution: string;
  tags?: string[];
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}