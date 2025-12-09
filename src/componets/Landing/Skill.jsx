import React from 'react'

export default function Skill() {

     const skills = [
    "User Research & Analysis",
    "UI Design",
    "Information Architecture (IA)",
    "Prototyping",
    "Wireframing",
    "Motion Design",
    "Typography & Color Theory",
    "Responsive Design",
    "Design Thinking",
    "Human-Centered Design",
    "Persona Creation",
    "Collaboration & Teamwork"
  ];
   
 
  return (
    <div className="theme-surface p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-[color:var(--color-text)] mb-2">Skills</h1>

                <div className="mb-6 pb-3 border-b-2 theme-border-strong"></div>


        {/* Skills Container */}
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-[color:var(--color-accent)] text-[color:var(--color-on-accent)] font-semibold rounded-full hover:brightness-110 transition-colors duration-200 text-sm md:text-base border-2 border-[color:var(--color-border)] shadow-md"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

