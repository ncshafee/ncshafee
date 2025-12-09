import { useEffect, useState } from 'react';
import { MoonStar, Sun } from 'lucide-react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function AnimatedThemeToggler({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`relative inline-flex h-10 w-[72px] items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel)] px-1 transition-colors duration-300 hover:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] ${className}`}
    >
      <span
        className={`absolute inset-y-1 w-8 rounded-full bg-[color:var(--color-accent)] shadow-md transition-all duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
      <span className="relative flex flex-1 items-center justify-between text-sm font-medium">
        <Sun
          size={18}
          className={`transition-colors ${theme === 'light' ? 'text-[color:var(--color-on-accent)]' : 'text-[color:var(--color-muted)]'}`}
        />
        <MoonStar
          size={18}
          className={`transition-colors ${theme === 'dark' ? 'text-[color:var(--color-on-accent)]' : 'text-[color:var(--color-muted)]'}`}
        />
      </span>
    </button>
  );
}

