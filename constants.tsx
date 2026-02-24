
import { Program, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: 'home' },
  { label: 'About Us', href: 'about' },
  { label: 'Job Opportunities', href: 'jobs' },
  { label: 'Contact', href: 'contact' }
];

export const PROGRAMS: Program[] = [
  { 
    id: 'soumyaa', 
    grade: 'VI & VII', 
    title: 'SOUMYAA (Launch Phase)', 
    description: 'Improve Attention & Focus, Academic Inclination, and strengthen fundamentals to build self-motivation.', 
    color: 'from-blue-500/10' 
  },
  { 
    id: 'saadhana', 
    grade: 'VIII & IX', 
    title: 'SAADHANA (2nd Phase)', 
    description: 'IIT Foundation integrated with School Syllabus. Focus on self-discipline and SMART goal setting.', 
    color: 'from-purple-500/10' 
  },
  { 
    id: 'sarvagjna', 
    grade: 'X', 
    title: 'SARVAGJNA (Crucial Phase)', 
    description: 'Mastering fundamental concepts and board exam excellence while fine-tuning skills for Intermediate level.', 
    color: 'from-orange-500/10' 
  }
];
