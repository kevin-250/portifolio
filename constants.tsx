import { Github, Linkedin, Twitter, Mail, Code2, User, Layers, PenTool, MessageSquare, Globe, Smartphone, Sparkles, Layout, Instagram } from 'lucide-react';
import { NavItem, Project, Skill, SocialLink } from './types';

export const USER_INFO = {
  name: "Nshimyimana Kevin",
  role: "Frontend Developer",
  location: "Kigali, Rwanda",
  tagline: "Building sleek, scalable web interfaces.",
  subTagline: "// Creating React applications with a focus on UX and Performance.",
  email: "kizkevin3@gmail.com",
  phone: "+250 793 227 877",
  yearsExperience: 4,
  commits: 2150,
  projectsCount: 28
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Start', icon: Code2 },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Work', icon: PenTool },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
  { name: 'Redux / Zustand', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Git / GitHub', level: 85, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
  { name: 'Vite', level: 85, category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nitrai App",
    description: "A smart scheduling application inspired by Cal.ai. Features intelligent calendar management and seamless appointment booking logic.",
    technologies: ["React", "Next.js", "Tailwind", "AI Integration"],
    imageUrl: "https://picsum.photos/600/400?random=10",
    link: "https://nitrai.netlify.app",
    github: "#"
  },
  {
    id: 2,
    title: "FoundrPost",
    description: "AI-powered content generator helping founders and creators draft engaging social media posts instantly.",
    technologies: ["Next.js", "OpenAI API", "Vercel", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=11",
    link: "https://foundrpost.vercel.app",
    github: "#"
  },
  {
    id: 3,
    title: "Uvote",
    description: "A social media voting platform enabling communities to organize and participate in secure, transparent polls (In Development).",
    technologies: ["React", "Firebase", "Real-time DB", "Charts.js"],
    imageUrl: "https://picsum.photos/600/400?random=12",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Upcoming Projects",
    description: "Currently working on a SaaS boilerplate and a local tourism guide for Kigali. Stay tuned for more.",
    technologies: ["Next.js", "Supabase", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=13",
    link: "#",
    github: "#"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Twitter', url: 'https://x.com/KevinKiz/', icon: Twitter },
  { platform: 'Instagram', url: 'https://www.instagram.com/kevin__kiz/', icon: Instagram },
  { platform: 'Email', url: `mailto:${USER_INFO.email}`, icon: Mail },
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
];