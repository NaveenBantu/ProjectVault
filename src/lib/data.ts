import { Project, Issue, TimelineEvent } from '@/types'

export const projects: Project[] = [
  { id: 1, name: "Project Alpha", description: "A cutting-edge web application" },
  { id: 2, name: "Project Beta", description: "Mobile app for fitness tracking" },
  { id: 3, name: "Project Gamma", description: "AI-powered data analysis tool" },
]

export const issues: Issue[] = [
  { 
    id: 1, 
    title: 'Database connection error', 
    solution: 'Check connection string and firewall settings',
    tags: ['database', 'configuration']
  },
  { 
    id: 2, 
    title: 'API rate limiting', 
    solution: 'Implement caching and optimize API calls',
    tags: ['api', 'performance']
  },
  { 
    id: 3, 
    title: 'Mobile responsiveness issues', 
    solution: 'Use responsive design patterns and test on various devices',
    tags: ['ui', 'mobile']
  },
]

export const timelineEvents: TimelineEvent[] = [
  { 
    id: 1,
    date: '2023-01-01', 
    title: 'Project Kickoff', 
    description: 'Initial planning and team formation',
    status: 'completed'
  },
  { 
    id: 2,
    date: '2023-03-15', 
    title: 'Phase 1 Complete', 
    description: 'Core features implemented',
    status: 'completed'
  },
  { 
    id: 3,
    date: '2023-06-30', 
    title: 'Beta Launch', 
    description: 'Limited release to test users',
    status: 'in-progress'
  },
  { 
    id: 4,
    date: '2023-09-01', 
    title: 'Public Release', 
    description: 'Full launch to all users',
    status: 'planned'
  },
]
