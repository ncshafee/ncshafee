export default function ExperiencePage() {
  const experiences = [
      {
        id: 1,
        company: 'SmartHatch Technologies,\n kakkanad, kochi ',
        period: 'December 2025 – Present',
        position: 'UI/UX Designer',
        responsibilities: [
          'Created low to high-fidelity wireframes using Figma & Adobe XD.',
          'Collaborated with teams to iterate designs based on real user feedback.',
          'Focused on improving usability, accessibility, and responsiveness.'
        ]
      },
      {
        id: 1,
        company: 'Codeedex Technologies,\nMalappuram, Kerala',
        period: 'January 2025 – December',
        position: 'UI/UX Designer',
        responsibilities: [
          'Created low to high-fidelity wireframes using Figma & Adobe XD.',
          'Collaborated with teams to iterate designs based on real user feedback.',
          'Focused on improving usability, accessibility, and responsiveness.'
        ]
      },
    {
      id: 2,
      company: 'Softroniics, Malappuram,\nKerala',
      period: 'June 2024 – December 2024',
      position: 'UI/UX Designer (Intern)',
      responsibilities: [
        'Designed wireframes, prototypes, and user flows to visualize concepts.',
        'Conducted usability testing and UX analysis to enhance product performance.',
        'Created detailed web feature specifications and interactive prototypes.'
      ]
    },
    {
      id: 3,
      company: 'Work from Home',
      period: 'June 2023 – May 2024',
      position: 'Graphic Designer – Freelancer',
      responsibilities: [
        'Designed logos, posters, and social media assets for small businesses.',
        'Helped brands establish a consistent and appealing visual identity.'
      ]
    }
  ];

  return (
    <div className="theme-surface px-4 sm:px-6 md:px-10 py-10 flex flex-col justify-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-6 pb-3 border-b-2 theme-border-strong">
          <h1 className="text-3xl sm:text-4xl font-light">Experience</h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line
              - On mobile (default) it's left-4 (left side)
              - On md+ it's centered (left-1/2 with -translate-x-1/2)
          */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 md:transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-0">
                {/* Timeline Dot
                    - aligns with line: left-4 on mobile, centered on md+
                    - apply transform only for md+
                */}
                <div className="absolute left-2 md:left-1/2 top-2 w-5 h-5 bg-[color:var(--color-panel)] border-[3px] border-[color:var(--color-accent)] rounded-full md:transform md:-translate-x-1/2"></div>

                {/* Grid Layout
                    - mobile: single column (content flows to the right because of pl-12)
                    - md+: two columns (company info left, details right)
                */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-start">
                  {/* Left Side - Company Info */}
                  <div className="text-left md:pr-10">
                    <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-text)] mb-1 whitespace-pre-line">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm theme-muted">{exp.period}</p>
                  </div>

                  {/* Right Side - Position and Details */}
                  <div className="md:pl-10">
                    <h4 className="text-sm sm:text-base font-semibold text-[color:var(--color-text)] mb-2">
                      {exp.position}
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm theme-muted flex gap-2"
                        >
                          <span className="text-[color:var(--color-text)] flex-shrink-0 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
