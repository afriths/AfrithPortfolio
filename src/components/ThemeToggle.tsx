import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Button clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 right-6 z-[9999] p-3 rounded-full backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 group bg-white/90 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 cursor-pointer"
      aria-label="Toggle theme"
      style={{ pointerEvents: 'auto' }}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
