/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d12',
        night: '#10131b',
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,99,235,.35), 0 14px 60px rgba(0,0,0,.18)',
        soft: '0 10px 30px rgba(0,0,0,.12)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 500px at 50% 0%, rgba(37,99,235,.18), rgba(255,255,255,0) 60%)',
      },
    },
  },
  plugins: [],
}
