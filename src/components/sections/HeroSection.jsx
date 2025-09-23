import React, { useEffect, useState } from 'react';
import { heroContent } from '../../data/portfolioData';
import TerminalPrompt from '../common/TerminalPrompt';
import Chip from '../common/Chip';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = 'whoami';
    let index = 0;

    const typingTimer = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(typingTimer);
      }
    }, 150);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <TerminalPrompt command="whoami" typingText={typingText} showCursor={showCursor} />
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-mono leading-tight">
            Jagriti <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B63] to-[#FF9AAE]">{heroContent.titleHighlight}</span> Jain
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-xl">
            {heroContent.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Chip variant="primary" href={heroContent.resumeUrl}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Chip>
            <Chip href={`mailto:${heroContent.email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Chip>
            <Chip href={heroContent.githubUrl}>
              <Github className="w-4 h-4" />
            </Chip>
            <Chip href={heroContent.linkedinUrl}>
              <Linkedin className="w-4 h-4" />
            </Chip>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FF3B63] via-[#8c1335] to-[#1f0611] p-1">
              <div className="w-full h-full rounded-full bg-[#0a0410] flex items-center justify-center">
                <img
                  src="/api/placeholder/240/240"
                  alt="Jojo headshot"
                  className="w-56 h-56 rounded-full object-cover border-4 border-[#FF3B63]/40"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FF3B63]/20 border border-[#FF3B63]/40 rounded-2xl px-4 py-3 backdrop-blur-sm text-sm">
              <p className="font-mono uppercase tracking-wide text-[#FF9AAE]">Controls Engineer</p>
              <p className="text-gray-200">Blending hardware, software & data for reliable robots.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
