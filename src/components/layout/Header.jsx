import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections } from '../../data/portfolioData';

const Header = ({ currentPath, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    setOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#190712]/95 via-[#2b0a1f]/95 to-[#3c0b21]/95 backdrop-blur-md border-b border-[#FF3B63]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            onClick={(event) => handleNavigate(event, '/')}
            className="text-2xl font-semibold text-white tracking-wide"
          >
            Jagriti Jain
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navSections.map((section) => {
              const isActive = currentPath === section.path;
              return (
                <a
                  key={section.id}
                  href={section.path}
                  onClick={(event) => handleNavigate(event, section.path)}
                  className={`relative text-sm uppercase tracking-wide transition-colors ${
                    isActive ? 'text-[#FF6B8D]' : 'text-gray-200 hover:text-[#FF6B8D]'
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#FF6B8D] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#FF3B63]/30 bg-[#1a0a15]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={section.path}
                onClick={(event) => handleNavigate(event, section.path)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === section.path
                    ? 'bg-[#FF6B8D]/20 text-[#FF6B8D]'
                    : 'text-gray-200 hover:bg-[#FF6B8D]/10'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;