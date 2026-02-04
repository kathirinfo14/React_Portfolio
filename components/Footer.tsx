
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built by {PERSONAL_INFO.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
