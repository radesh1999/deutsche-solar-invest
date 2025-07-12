import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-green': '#1E4631',
        'brand-green': '#22C55E',
        'brand-light-green': '#EAF7F0',
        'brand-light-gray': '#F3F4F6',
        'brand-text-dark': '#1F2937',
        'brand-text-light': '#6B7280',
        'brand-gold': '#D9A42E',
        'brand-yellow-btn': '#FBBF24',
        'brand-yellow-btn-hover': '#F59E0B',
        'status-reply-bg': '#E0E7FF',
        'status-reply-text': '#4338CA',
        'status-open-bg': '#D1FAE5',
        'status-open-text': '#065F46'
      },
    },
  },
  plugins: [tailwindScrollbar],
}
