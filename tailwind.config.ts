import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          sky: '#7EC8E3',
          yellow: '#F4C542',
          white: '#FFFFFF',
          gray: '#F5F7FA',
        },
      },
      boxShadow: {
        card: '0 12px 30px -20px rgba(11, 31, 58, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
