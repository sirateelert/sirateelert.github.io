/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        csii: {
          gold: '#AA8313',
          brown: '#8C610C',
          ochre: '#5D4008',
          black: '#111111',
          paper: '#EDEFEC',
        },
        struct: {
          yellow: '#E6FF50',
          sage: '#F5FFB9',
          sand: '#D3D3AA',
        },
        accent: {
          eco: '#034F3D',
          mint: '#19BF93',
          mintbright: '#46FFDB',
          marine: '#0866BF',
          blue: '#3BA0FF',
          bluebright: '#8AF7FF',
        },
      },
    },
  },
  plugins: [],
};
