import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import aboutlogo from "../../assets/about.png";

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState('ui-designer');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const services = [
    {
      id: 'ui-designer',
      title: 'UI/UX Designer',
      description: 'Crafting seamless and user-friendly digital experiences through thoughtful design and interaction.'
    },
    {
      id: 'logo-creator',
      title: 'Logo Creator',
      description: 'Creating distinctive brand identities through innovative and memorable logo designs.'
    },
    {
      id: 'poster-designer',
      title: 'Poster Designer',
      description: 'Designing eye-catching posters that communicate your message effectively and creatively.'
    }
  ];

  return (
    <div className="theme-surface p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="flex justify-between items-start mb-6 md:mb-8 border-b-2 theme-border-strong">
          <h1 className="text-3xl sm:text-4xl font-light">
            About Me
          </h1>
          <img 
            src={aboutlogo}
            alt="Shafeek Ali" 
            className="w-16 sm:w-20 h-auto "
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Left Column - Bio */}
          <div className="md:col-span-2">
            <p className="text-sm sm:text-base theme-muted leading-relaxed text-justify " style={{fontSize:"20px"}}>
              I'm <span className="font-semibold">Shafeek Ali</span>, a passionate <span className="font-semibold">UI/UX designer</span> and artist who loves turning ideas into meaningful, human-centered experiences. My design journey began with sketching walls, creating comic characters, and painting on clothes — and that artistic spirit still drives how I design today. I combine creativity, empathy, and functionality to craft interfaces that don't just look good but feel right.
            </p>
          </div>

          {/* Right Column - Services */}
          <div className="md:col-span-1">
            <h2 className="text-xs sm:text-sm font-semibold text-[color:var(--color-accent)] mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-[color:var(--color-accent)] rounded-full flex-shrink-0"></span>
              Your one stop shop for:
            </h2>

            <div className="space-y-0">
              {services.map((service) => (
                <div key={service.id} className="border-b border-[color:var(--color-border)]">
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="w-full py-3 md:py-4 flex items-center justify-between hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    <h3 className="font-semibold text-[color:var(--color-text)] flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-2 h-2 bg-[color:var(--color-accent)] rounded-full flex-shrink-0"></span>
                      {service.title}
                    </h3>
                    {expandedSection === service.id ? (
                      <ChevronUp size={18} className="flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="flex-shrink-0" />
                    )}
                  </button>
                  {expandedSection === service.id && (
                    <p className="px-0 theme-muted text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  