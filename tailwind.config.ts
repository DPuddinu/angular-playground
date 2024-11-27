import type { Config } from 'tailwindcss'

const config = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff',
          content: '#0f172a',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          content: '#334155',
        },
        'dark-primary': {
          DEFAULT: '#0f172a',
          content: '#ffffff',
        },
        'dark-secondary': {
          DEFAULT: '#1e293b',
          content: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config