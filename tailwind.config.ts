import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#e6f1ff',
          500: '#ccd6f6',
        },
        slate: {
          200: '#ccd6f6',
          300: '#a8b2d1',
          400: '#8892b0',
          500: '#495670',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      spacing: {
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
      }
    },
  },
  plugins: [],
};

export default config;