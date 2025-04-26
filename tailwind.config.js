/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0088cc', // Telegram blue
          dark: '#006699',
          light: '#e6f3ff',
        },
        secondary: {
          DEFAULT: '#5abcdb',
          dark: '#4a9bb8',
          light: '#e8f7fc',
        },
        success: {
          DEFAULT: '#4caf50',
          dark: '#3d8b40',
          light: '#e8f5e9',
        },
        warning: {
          DEFAULT: '#ff9800',
          dark: '#f57c00',
          light: '#fff3e0',
        },
        error: {
          DEFAULT: '#f44336',
          dark: '#d32f2f',
          light: '#ffebee',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 10s ease-in-out infinite',
        'icon-pulse': 'icon-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(15px)' },
          '50%': { transform: 'translateY(-30px) translateX(0px)' },
          '75%': { transform: 'translateY(-15px) translateX(-15px)' },
        },
        'icon-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(0, 136, 204, 0.5)',
        'glow-secondary': '0 0 15px rgba(90, 188, 219, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};