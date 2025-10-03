/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        neon: {
          red: '#FF416C',
          pink: '#FF4B2B',
          white: '#F6F6F7'
        }
      },
      fontFamily: {
        inter: ['Inter_400Regular', 'Inter_600SemiBold', 'System']
      },
      borderRadius: {
        '4xl': '24px'
      }
    }
  },
  plugins: []
};
