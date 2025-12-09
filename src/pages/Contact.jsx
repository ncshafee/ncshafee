import React, { useState } from 'react';
import Header from '../componets/Header';
import { Instagram, Phone, MessageCircle, Globe } from 'lucide-react';
import { SlSocialBehance } from "react-icons/sl";
import { FaFacebook, FaDribbble } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out!');
      setFormData({
        name: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="theme-surface min-h-screen transition-colors duration-300">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Contact Me Section */}
        <section className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-text)] mb-2">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--color-text)] mb-4">
            For Any Project Knock Us
          </p>
          <div className="border-b-2 border-[color:var(--color-text)] w-full mb-8"></div>
        </section>

        {/* Get in Touch Section */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Heading */}
            <div className="flex items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-text)]">
                Get in Touch With Us
              </h2>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b-2 border-[color:var(--color-text)] bg-transparent text-[color:var(--color-text)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b-2 border-[color:var(--color-text)] bg-transparent text-[color:var(--color-text)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-0 py-2 border-b-2 border-[color:var(--color-text)] bg-transparent text-[color:var(--color-text)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-[color:var(--color-accent)] text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-200"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Laptop Image Section */}
        <section className="mb-12 md:mb-16">
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative" style={{ aspectRatio: '16/10' }}>
              {/* Laptop Screen */}
              <div className="relative w-full h-[75%] bg-gray-800 dark:bg-gray-900 rounded-t-2xl shadow-2xl overflow-hidden border-4 border-gray-700 dark:border-gray-600">
                {/* Screen Bezel */}
                <div className="absolute inset-0 bg-black rounded-t-2xl p-2">
                  {/* Screen Content - Vibrant colorful display */}
                  <div className="w-full h-full relative overflow-hidden rounded-lg">
                    {/* Colorful gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-pink-500 to-orange-500 opacity-90"></div>
                    {/* Abstract colorful patterns */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-blue-600 via-blue-400 to-transparent opacity-70"></div>
                      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-pink-600 via-pink-400 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-1/3 w-1/3 h-2/3 bg-gradient-to-t from-orange-600 via-orange-400 to-transparent opacity-80"></div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
                    </div>
                  </div>
                </div>
                {/* Screen glow effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 blur-sm"></div>
              </div>
              
              {/* Laptop Base/Keyboard */}
              <div className="relative w-full h-[25%] bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-b-2xl shadow-xl border-4 border-gray-400 dark:border-gray-600 border-t-0">
                {/* Trackpad */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/4 h-8 bg-gray-500 dark:bg-gray-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-[color:var(--color-text)]">
            <p className="text-base md:text-lg font-medium">Palakkad</p>
            <p className="text-base md:text-lg font-medium">+91 9946827567</p>
            <p className="text-base md:text-lg font-medium">ncshafee228@gmail.com</p>
          </div>
          {/* Decorative Wavy Line */}
          <div className="mt-8">
            <svg className="w-full h-6" viewBox="0 0 2400 30" preserveAspectRatio="none">
              <path
                d="M0,15 Q300,0 600,15 T1200,15 T1800,15 T2400,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[color:var(--color-text)]"
              />
            </svg>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8">
          {/* Logo and Quote */}
          <div className="flex flex-col items-center text-center space-y-6 mb-8">
            {/* Logo */}
            <div className="w-24 h-32 bg-[color:var(--color-accent)] flex-shrink-0">
              <img
                src={logo}
                alt="Shafeek ali N"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote */}
            <div className="max-w-2xl">
              <p className="text-[color:var(--color-text)] text-lg md:text-xl font-semibold leading-relaxed">
                <span className="text-2xl">◆</span> Design is not just what it looks like — it's how it feels to use. <span className="text-2xl">◆</span>
              </p>
            </div>

            {/* Privacy Policy */}
            <p className="text-sm theme-muted">
              We'll never share your details. See our <a href="#" className="underline hover:text-[color:var(--color-accent)]">Privacy Policy</a>
            </p>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[color:var(--color-border)]">
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
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
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
                aria-label="Dribbble"
              >
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

