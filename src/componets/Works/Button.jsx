import React from 'react';

export default function SegmentedButton({ selected, onSelect, options }) {
  // Default options if none provided
  const buttonOptions = options || ['UI/UX', 'LOGO DESIGN', 'POSTER DESIGN'];
  
  return (
    <div className="flex items-center justify-center mb-8 md:mb-12">
      <div className="inline-flex rounded-full border-2 border-gray-800 overflow-hidden shadow-lg theme-surface">
        {buttonOptions.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`
              px-6 py-2 md:px-8 md:py-3 font-semibold text-sm md:text-base transition-all duration-300
              ${selected === option 
                ? 'bg-[color:var(--color-accent)] text-white' 
                : 'text-[color:var(--color-text)] hover:bg-[color:var(--color-panel)]'
              }
              rounded-full
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}