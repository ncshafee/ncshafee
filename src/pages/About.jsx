import React from 'react';
import Header from '../componets/Header';
import { Instagram, Phone, MessageCircle, Globe } from 'lucide-react';
import { SlSocialBehance } from "react-icons/sl";
import image1 from "../assets/shafeeq.jpg";
import image2 from "../assets/shafeekali.jpg";
import logo from "../assets/logo.png";
import FluidGlass from '../components/FluidGlass';

export default function AboutPage() {
  return (
    <div className="theme-surface min-h-screen transition-colors duration-300">
      <Header />
      
      {/* Fluid Glass Animation Section
      <div style={{ height: '600px', position: 'relative', marginBottom: '4rem' }}>
        <FluidGlass 
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01  
          }}
        />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* About Me Section */}
        <section className="mb-16 md:mb-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-[color:var(--color-text)]">
            About Me
          </h1>
          
          {/* Sub Heading */}
          <h2 className="text-xl md:text-2xl font-light mb-8 theme-muted">
            A Little Brief About Myself
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Mission Heading */}
              <h3 className="text-lg md:text-xl font-medium text-[color:var(--color-text)]">
                My mission is to make design simple, smart, and impactful.
              </h3>
              
              {/* Body Content */}
              <div className="space-y-4">
                <p className="text-base md:text-lg theme-muted leading-relaxed">
                  I help brands and individuals create custom digital experiences that not only look beautiful but convert better. With thoughtful UI/UX design, clean aesthetics, and meaningful interactions, I craft visuals that connect with users instantly.
                </p>
                <p className="text-base md:text-lg theme-muted leading-relaxed">
                  Whether it's a logo, a poster, or a complete UI/UX design, I make the process smooth and hassle-free. With multiple concepts, clear communication, and refined revisions, you can build the perfect design without any confusion or "design problems."
                </p>
              </div>
            </div>
            
            {/* Two Grayscale Photos */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={image1} 
                  alt="Shafeek Ali" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 mt-8 md:mt-12">
                <img 
                  src={image2} 
                  alt="Shafeek Ali" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Follow Me On Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[color:var(--color-text)]">
            Follow me on
          </h2>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="#"
              className="flex items-center gap-2 text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors group"
              aria-label="Instagram"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-base md:text-lg">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors group"
              aria-label="Behance"
            >
              <SlSocialBehance size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-base md:text-lg">Behance</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors group"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-base md:text-lg">WhatsApp</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors group"
              aria-label="Website"
            >
              <Globe size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-base md:text-lg">Website</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[color:var(--color-border)] pt-8 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Logo & Copyright */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-16 bg-[color:var(--color-accent)] flex-shrink-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="theme-muted text-xs md:text-sm">
                © 2025 Shafeek ali n, LLC. All rights reserved.
              </p>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="#"
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] transition-colors"
                aria-label="Behance"
              >
                <SlSocialBehance size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

