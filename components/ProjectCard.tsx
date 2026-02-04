
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Live Demo &rarr;
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
