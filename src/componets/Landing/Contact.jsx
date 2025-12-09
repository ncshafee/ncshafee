import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    inquiry: 'Collab/Client',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        inquiry: 'Collab/Client',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen theme-surface p-8 md:p-12 transition-colors duration-300" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[color:var(--color-text)] mb-2">Say Hello</h1>
                <div className="mb-6 pb-3 border-b-2 theme-border-strong"></div>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="theme-muted leading-relaxed">
              I'm always open to exciting projects, creative collaborations, or just a good conversation about design. Whether you're building a <span className="font-bold">brand</span>, designing a <span className="font-bold">digital product</span>, or refining your user experience, I'd love to help turn your ideas into meaningful visuals and intuitive interfaces.
            </p>

            <p className="theme-muted leading-relaxed">
              Let's connect and create something impactful together!
            </p>

            <div className="space-y-2">
              <p className="text-[color:var(--color-text)] font-semibold">
                ncshafee228@gmail.com
              </p>
              <p className="text-[color:var(--color-text)] font-semibold">
                9946827567
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm">
                    Name <span className="text-[color:var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-2 border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-panel)] text-[color:var(--color-text)] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-panel)] text-[color:var(--color-text)] focus:outline-none mt-8"
                  />
                </div>
              </div>

              {/* Inquiry Field */}
              <div>
                <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm">
                  Inquiry <span className="text-[color:var(--color-accent)]">*</span>
                </label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-panel)] text-[color:var(--color-text)] focus:outline-none"
                >
                  <option>Collab/Client</option>
                  <option>General Inquiry</option>
                  <option>Freelance</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm">
                  Email <span className="text-[color:var(--color-accent)]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@arnau.design"
                  className="w-full px-4 py-2 border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-panel)] text-[color:var(--color-text)] focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[color:var(--color-text)] font-semibold mb-2 text-sm">
                  Message <span className="text-[color:var(--color-accent)]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello..."
                  className="w-full px-4 py-2 border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-panel)] text-[color:var(--color-text)] focus:outline-none h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-[color:var(--color-accent)] text-[color:var(--color-on-accent)] font-semibold hover:brightness-110 transition-colors duration-200 border-2 border-[color:var(--color-border)] shadow-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}