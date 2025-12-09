import { useState } from 'react';
import keyroute from "../../assets/projects1.png"
import careplus from "../../assets/careplus.png"
import coffeelab from "../../assets/Coffeelab.png"
import { Link } from 'react-router-dom';
export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const projects = [
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
  ];


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="theme-surface p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 pb-4 border-b-2 theme-border-strong">

          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl font-light">
              Projects
            </h1>

            <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
              <button>View all</button>
            </Link>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div onClick={() => window.open(project.url, "_blank")}
              key={project.id} className="flex flex-col">
              {/* Project Title and Subtitle */}
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--color-text)] mb-1">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base theme-muted">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Card */}
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
                {/* Light Effect Glow */}
                {hoveredId === project.id && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.25), transparent 100%)`,
                      opacity: 3
                    }}
                  />
                )}

                {/* Image Container */}
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
          ))}
        </div>
      </div>
    </div>
  );
}