import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#1a1a1a',
        border: 'rgba(201, 168, 76, 0.15)',
        foreground: '#f2f0ea',
        muted: '#8a8a86',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#f0d78c',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-ring': '0 0 0 1px rgba(201, 168, 76, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
