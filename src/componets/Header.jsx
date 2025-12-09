import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger menu
import logo from "../assets/logo.png";
import cvPdf from "../assets/Shafeek Ali N C.pdf"; 
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[color:var(--color-surface)]/90 text-[color:var(--color-text)] py-3 sticky top-0 z-50 border-b border-[color:var(--color-border)] backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-15 h-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/work" className="hover:text-[color:var(--color-accent)] transition-colors">
            Work
          </a>
          <a href="/about" className="hover:text-[color:var(--color-accent)] transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-[color:var(--color-accent)] transition-colors">
            Contact
          </a>

          {/* Download CV as a real file download. The `download` attribute forces download in supported browsers. */}
          <a
            href={cvPdf}
            download="Shafiq_Ali_CV.pdf"
            className="hover:text-[color:var(--color-accent)] transition-colors"
          >
            Download CV
          </a>

          <AnimatedThemeToggler />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <AnimatedThemeToggler />
          {/* Mobile Menu Button */}
          <button
            className="text-[color:var(--color-accent)] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-[color:var(--color-surface)] border-t border-[color:var(--color-border)]">
    <nav className="flex flex-col items-center space-y-4 py-4 text-[color:var(--color-text)] font-medium">

      <Link 
        to="/work"
        onClick={() => setIsOpen(false)}
        className="hover:text-[color:var(--color-accent)]"
      >
        Work
      </Link>

      <Link 
        to="/about"
        onClick={() => setIsOpen(false)}
        className="hover:text-[color:var(--color-accent)]"
      >
        About
      </Link>

      <Link
        to="/contact"
        onClick={() => setIsOpen(false)}
        className="hover:text-[color:var(--color-accent)]"
      >
        Contact
      </Link>

      {/* Mobile download link */}
      <a
        href={cvPdf}
        download="Shafiq_Ali_CV.pdf"
        onClick={() => setIsOpen(false)}
        className="hover:text-[color:var(--color-accent)]"
      >
        Download CV
      </a>
    </nav>
  </div>
)}

    </header>
  );
}
