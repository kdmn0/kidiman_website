/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        archivo: ['"Archivo"', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FAFAFA',
          dark: '#09090B',
        },
        secondary: {
          light: '#E4E4E7',
          dark: '#18181B',
        },
        card: {
          light: '#FFFFFF',
          dark: '#27272A',
        },
        textMain: {
          light: '#09090B',
          dark: '#FAFAFA',
        },
        textMuted: {
          light: '#3F3F46',
          dark: '#A1A1AA',
        },
        brand: '#2563EB',
        brandHover: '#1D4ED8',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
