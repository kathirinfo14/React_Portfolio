
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400">BLOSSOM</a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-slate-300 mb-1.5 transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className="w-6 h-0.5 bg-slate-300 transition-opacity duration-300 ease-in-out" style={{ opacity: isOpen ? 0 : 1 }}></div>
          <div className="w-6 h-0.5 bg-slate-300 mt-1.5 transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-slate-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-slate-300 hover:text-cyan-400 py-4"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
