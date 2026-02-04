// FIX: Import React to enable JSX syntax.
import React from 'react';
import { Project, Skill } from './types';
import { ReactIcon, TypeScriptIcon, TailwindIcon, NodeIcon } from './components/icons';

export const PERSONAL_INFO = {
  name: "Jane Doe",
  title: "Senior Frontend React Engineer",
  bio: "I'm a passionate frontend developer with deep expertise in creating beautiful, responsive, and high-performance web applications using React, TypeScript, and modern web technologies. I love solving complex problems and turning ideas into reality.",
  email: "jane.doe@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  }
};

export const SKILLS: Skill[] = [
  { name: "React",icon:""},
  { name: "TypeScript", icon: "" },
  { name: "JavaScript (ES6+)", icon: "" },
  { name: "Tailwind CSS", icon: "" },
  { name: "Node.js", icon: "" },
  { name: "HTML5 & CSS3", icon: "" },
  { name: "Figma", icon: "" },
  { name: "Git & GitHub", icon: "" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, product catalog, shopping cart, and checkout process. Built with React and Redux for state management.",
    imageUrl: "https://picsum.photos/seed/project1/400/300",
    tags: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets using D3.js and Recharts. Features real-time data updates and customizable charts.",
    imageUrl: "https://picsum.photos/seed/project2/400/300",
    tags: ["React", "D3.js", "Recharts", "API"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "A web app leveraging the Gemini API to generate creative content, from blog posts to social media captions, based on user prompts.",
    imageUrl: "https://picsum.photos/seed/project3/400/300",
    tags: ["React", "Gemini API", "Node.js", "UI/UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Project Management Tool",
    description: "A Kanban-style project management application with drag-and-drop functionality, task assignments, and progress tracking.",
    imageUrl: "https://picsum.photos/seed/project4/400/300",
    tags: ["React", "Firebase", "State Management", "Collaboration"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
