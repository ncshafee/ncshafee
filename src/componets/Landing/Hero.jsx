import { useState, useEffect } from 'react';
import image1 from "../../assets/shafeekali.jpg"
import image2 from "../../assets/shafeeq.jpg"
import image3 from "../../assets/rounded.jpg"
import main from "../../assets/heroimage.png"
export default function Portfolio() {
  const [fadeIn, setFadeIn] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Shafeek Ali N',
    'a UI/UX Designer',
    'an Artist',
    'a Developer'
  ];
  const images = [
    image1,
    image2,
    image3,
  ];

  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      const fadeOutTimeout = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 500);
      return () => clearTimeout(fadeOutTimeout);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    if (isTyping && displayedText.length < texts[textIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else if (displayedText.length === texts[textIndex].length && isTyping) {
      // Pause before deleting
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(pauseTimeout);
    } else if (!isTyping && displayedText.length > 0) {
      // Deleting text
      const deletingTimeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 50);
      return () => clearTimeout(deletingTimeout);
    } else if (!isTyping && displayedText.length === 0) {
      // Move to next text
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsTyping(true);
    }
  }, [displayedText, isTyping, textIndex, texts]);

  // Reset typing animation on component mount
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
  }, []);

  const heroImage = main;

  return (
    <div className="theme-hero flex items-center justify-center p-4 min-h-screen transition-colors duration-300">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="mb-6">
              {/* Hi I'm with image */}
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[color:var(--color-hero-foreground)] text-lg md:text-xl">Hi, I'm</p>

                {/* Fixed shape and border */}
                <div className="relative w-40 h-18 rounded-4xl border-2 border-[color:var(--color-hero-foreground)] shadow-md overflow-hidden">
                  <img
                    src={images[currentImage]}
                    alt="Profile"
                    className={`w-full h-full object-cover rounded-4xl transition-opacity duration-500 ease-in-out ${
                      fadeIn ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>

              {/* Typing Animation */}
              <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-hero-foreground)] mb-4 h-14 md:h-16 flex items-center">
                <span>{displayedText}</span>
                {isTyping && (
                  <span className="ml-1 w-1 h-10 md:h-12 bg-[color:var(--color-hero-foreground)] animate-pulse"></span>
                )}
              </h1>
            </div>

            <p className="text-[color:var(--color-hero-foreground)] text-base md:text-lg leading-relaxed mb-8">
              I craft intuitive digital experiences with a focus on usability, aesthetics, and meaningful interaction. Blending creativity and logic to design products that people love to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 border-2 border-[color:var(--color-hero-foreground)] text-[color:var(--color-hero-foreground)] font-semibold rounded-full hover:bg-[color:var(--color-hero-foreground)] hover:text-[color:var(--color-accent)] transition-all duration-300 text-center">
                View My Work
              </button>
              <button className="px-6 py-3 border-2 border-[color:var(--color-hero-foreground)] text-[color:var(--color-hero-foreground)] font-semibold rounded-full hover:bg-[color:var(--color-hero-foreground)] hover:text-[color:var(--color-accent)] transition-all duration-300 text-center">
                Download CV
              </button>
              <button className="px-6 py-3 border-2 border-[color:var(--color-hero-foreground)] text-[color:var(--color-hero-foreground)] font-semibold rounded-full hover:bg-[color:var(--color-hero-foreground)] hover:text-[color:var(--color-accent)] transition-all duration-300 text-center">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-end order-1 md:order-2 relative ">
            <div className="w-full max-w-sm translate-y-6 md:translate-y-2">
              <img
                src={heroImage}
                alt="Shafeek Ali N"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}