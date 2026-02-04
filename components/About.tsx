
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="text-lg text-slate-400 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mt-4">
            With a solid foundation in computer science and years of hands-on experience, I've had the privilege of working on diverse projects, from dynamic e-commerce platforms to complex data visualization dashboards. My goal is always to deliver clean, efficient, and scalable code while ensuring a seamless user experience.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-cyan-500 rounded-lg transform -rotate-6"></div>
            <img 
              src="https://picsum.photos/seed/profile/400/400" 
              alt="Jane Doe" 
              className="relative w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
