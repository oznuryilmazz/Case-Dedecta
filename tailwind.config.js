/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'semantic': {
          primary: '#1D4ED8',
          border: '#E4E4E7',
          warning: '#F97316',
          danger: '#EF4444',
          text: {
            primary: '#18181B',
            secondary: '#3F3F46',
            muted: '#71717A',
            light: '#A1A1AA',
          },
          bg: {
            white: '#FFFFFF',
            light: '#FAFAFA',
            selected: '#EFF6FF',
          }
        },
        'tag': {
          blue: { DEFAULT: '#1D4ED8', light: '#EFF6FF' },
          purple: { DEFAULT: '#7E22CE', light: '#FAF5FF' },
          pink: { DEFAULT: '#BE185D', light: '#FDF2F8' },
          orange: { DEFAULT: '#C2410C', light: '#FFF7ED' },
          green: { DEFAULT: '#4D7C0F', light: '#F7FEE7' },
          teal: { DEFAULT: '#0F766E', light: '#F0FDFA' },
        },
        'sentiment': {
          positive: '#22C55E',
          neutral: '#9CA3AF',
          negative: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        dedecta: {
          "primary": "#6366f1",
          "secondary": "#8b5cf6",
          "accent": "#f59e0b",
          "neutral": "#1e1e2e",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",
      "dark",
    ],
    logs: false,
  },
}
