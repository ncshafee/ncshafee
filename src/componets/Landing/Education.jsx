import React from 'react';
import nirmala from "../../assets/NCM.png"
import softronics from "../../assets/Softroniics.png"

export default function EducationSection() {
  const educationItems = [
    {
      degree: "B.A. in Hindi Language and Literature,",
      institution: "Nirmala College, Muvattupuzha (2021–2024) Mahatma Gandhi University, Kottayam",
      image: nirmala
    },
    {
      degree: "Diploma in UI/UX Designing,",
      institution: "Softroniics (March 2024)",
      image: softronics
    }
  ];

  return (
    <div className="theme-surface p-8 md:p-5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-[color:var(--color-text)] mb-2">Education</h1>
        <div className="mb-6 pb-3 border-b-2 theme-border-strong"></div>

        {/* Education Items */}
        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <div key={index} className="flex gap-6 md:gap-8 items-start justify-between">
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[color:var(--color-text)] mb-2">
                  {item.degree}
                </h3>
                <p className="theme-muted text-base">
                  {item.institution}
                </p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <img 
                  src={item.image} 
                  alt="Education logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}