export interface Project {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  buttonColor: string;
  windowHeader: string;
  windowStatus: string;
  theme: 'light' | 'dark';
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  details: {
    problem: string;
    solution: string;
    techFeatures: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconType: 'web' | 'animation' | 'figma';
  tags: string[];
}

export interface TimelineItem {
  year: string;
  yearBg: string;
  content: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  cardBg: string;
  badge: string;
}
