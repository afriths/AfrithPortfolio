/** @type {import('tailwindcss').Config} */
export default {
  // --- Standard Configuration ---
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      // --- Marquee Animation Configuration (CORRECTED) ---
      animation: {
        // Defines the animation name, duration, timing, and repetition
        marquee: 'marquee 10s linear infinite', 
      },
      keyframes: {
        // Defines the keyframes for the marquee movement
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // --- End of Marquee Configuration ---
    },
  },
  
  plugins: [],
};