import React from 'react';

export default function ToolsSection() {
  const tools = [
    'HTML / CSS',
    'Canva',
    'Notion',
    'Figma',
    'Miro',
    'Figjam',
    'Chat GBT',
    'Adobe XD'
  ];

  return (
    <div className="theme-surface px-8 md:px-12 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Tools List - Scrolling */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-container {
              display: flex;
              animation: scroll 40s linear infinite;
              gap: 2rem;
            }
            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="scroll-container">
            {[...tools, ...tools].map((tool, index) => (
              <React.Fragment key={index}>
                <span className="text-[color:var(--color-text)] font-medium text-sm md:text-base whitespace-nowrap">
                  {tool}
                </span>
                <span className="text-[color:var(--color-text)] text-lg">·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}