import React from 'react';
import { Instagram, Phone, MessageCircle, Globe } from 'lucide-react';
import { SlSocialBehance } from "react-icons/sl";
import logo from "../../assets/logo.png"

export default function FooterBottom() {
  return (
    <div className="theme-surface px-8 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Border */}
     
        {/* Footer Content */}
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
              aria-label="Website"
            >
             <SlSocialBehance size={20}  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}