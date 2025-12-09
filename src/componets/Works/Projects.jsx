import { useState } from 'react';
import SegmentedButton from './Button';
import keyroute from "../../assets/Projects1.png";
import careplus from "../../assets/careplus.png";
import coffeelab from "../../assets/Coffeelab.png";
import keylogo from "../../assets/Keyroute logo.png";
import landouselogo from "../../assets/Landouselogo.png";
import fluttercraft from "../../assets/fluttercraft.png";

// Sample data for different project types
const projectData = {
  'UI/UX': [
    {
      id: 1,
      title: 'Keyroute',
      subtitle: 'Travel Bus Booking App',
      image: keyroute,
      gradient: 'linear-gradient(135deg, #9A0000, #FF4A4A)',
      url: 'https://www.behance.net/gallery/229756531/Bus-booking-app-UIUX-Case-study'
    },
    {
      id: 2,
      title: 'Care Plus',
      subtitle: 'Medical Web application',
      image: careplus,
      gradient: 'linear-gradient(135deg, #00b1e2ff, #46e7ff)',
      url: 'https://www.behance.net/gallery/215609163/Medical-web-application'
    },
    {
      id: 3,
      title: 'Coffee Lab',
      subtitle: 'E-Commerce App',
      image: coffeelab,
      gradient: 'linear-gradient(135deg, #B8860B, #FFD700)',
      url: 'https://www.behance.net/'
    }
  ],
  'LOGO DESIGN': [
    {
      id: 1,
      title: 'Keyroute logo design',
      subtitle: 'Delivery app logo',
      image: keylogo,
      gradient: 'linear-gradient(135deg, #e22b2bff, #ff7b00ff)',
      url: 'https://www.behance.net/gallery/221989269/K-app-logo'
    },
    {
      id: 2,
      title: 'Landouse',
      subtitle: 'Real estate website ',
      image: landouselogo,
      gradient: 'linear-gradient(135deg, #0070faff, #0058ccff)',
      url: 'https://www.behance.net/gallery/226843289/Home-logo-design-LANDOUSE'
    },
    {
      id: 3,
      title: 'Flutter craft',
      subtitle: 'Youtube channel',
      image: fluttercraft,
      gradient: 'linear-gradient(135deg, #0083e7ff, #ffee00ff)',
      url: 'https://www.behance.net/gallery/219472409/LOGO-DESIGN'
    }
  ],
  'POSTER DESIGN': [
    {
      id: 1,
      title: 'Music Festival',
      subtitle: 'Event Promotion Poster',
      image: keyroute,
      gradient: 'linear-gradient(135deg, #FF4500, #FF6347)',
      url: 'https://www.behance.net/poster1'
    },
    {
      id: 2,
      title: 'Art Exhibition',
      subtitle: 'Cultural Event Poster',
      image: careplus,
      gradient: 'linear-gradient(135deg, #4169E1, #6495ED)',
      url: 'https://www.behance.net/poster2'
    },
    {
      id: 3,
      title: 'Movie Premiere',
      subtitle: 'Film Release Poster',
      image: coffeelab,
      gradient: 'linear-gradient(135deg, #32CD32, #90EE90)',
      url: 'https://www.behance.net/poster3'
    }
  ]
};

// Project Card Component
function ProjectCard({ project, hoveredId, setHoveredId, mousePos, handleMouseMove }) {
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => window.open(project.url, "_blank")}
    >
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--color-text)] mb-1">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base theme-muted">
          {project.subtitle}
        </p>
      </div>

      {/* Card */}
      <div
        className="flex-grow rounded-lg overflow-hidden relative"
        style={{
          backgroundImage: hoveredId === project.id ? project.gradient : 'none',
          backgroundColor: hoveredId === project.id ? 'transparent' : 'var(--color-panel)',
          transition: 'background-color 0.3s ease-out'
        }}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
        onMouseMove={handleMouseMove}
      >
        {hoveredId === project.id && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.25), transparent 100%)`,
              opacity: 3
            }}
          />
        )}

        <div className="relative h-64 sm:h-80 overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className={`w-30 h-60 object-cover transition-transform duration-700 ease-out ${hoveredId === project.id ? 'scale-200 origin-top' : 'scale-100 origin-top'
              }`}
            style={{
              willChange: hoveredId === project.id ? 'transform' : 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Main Projects Page Component
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX');
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Get projects based on selected category
  const projects = projectData[selectedCategory] || [];

  // Define custom options if needed
  const categoryOptions = ['UI/UX', 'LOGO DESIGN', 'POSTER DESIGN'];

  return (
    <div className="theme-surface p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">



        {/* Segmented Button Component */}
        <SegmentedButton
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          options={categoryOptions}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={`${selectedCategory}-${project.id}`}
              project={project}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              mousePos={mousePos}
              handleMouseMove={handleMouseMove}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            className="px-6 py-3 rounded-full text-white font-medium 
              bg-[color:var(--color-accent)] hover:bg-opacity-80 transition-all duration-300"
            onClick={() => {
              const behanceUrls = {
                'UI/UX': 'https://www.behance.net/shafeekalinc',
                'LOGO DESIGN': 'https://www.behance.net/shafeekalinc',
                'POSTER DESIGN': 'https://www.behance.net/shafeekalinc'
              };
              window.open(behanceUrls[selectedCategory] || 'https://www.behance.net/', '_blank');
            }}
          >
            View All {selectedCategory} Projects
          </button>
        </div>

      </div>
    </div>
  );
}