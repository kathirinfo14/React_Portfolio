
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="text-center md:text-left max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="block text-cyan-400 text-lg md:text-xl font-medium mb-2">Hi, my name is</span>
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6">
          I build things for the web.
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mb-8">
          I'm a {PERSONAL_INFO.title.toLowerCase()} specializing in creating exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
