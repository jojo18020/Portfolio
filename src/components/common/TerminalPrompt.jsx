import React from 'react';

const TerminalPrompt = ({ command, typingText, showCursor }) => (
  <div className="flex items-center font-mono text-sm mb-6">
    <span className="text-[#FFC906]">jojo@portfolio:~$</span>
    <span className="ml-2 text-white">
      {typingText ?? command}
      {typingText && (
        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} text-[#FFC906]`}>
          _
        </span>
      )}
    </span>
  </div>
);

export default TerminalPrompt;