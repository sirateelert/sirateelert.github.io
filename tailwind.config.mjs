/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#12161C",
        midnight: "#0B0E14",
        cloud: "#F4F5F7",
        gold: {
          50: "#FBF6EC",
          100: "#F3E5C6",
          200: "#E6CC93",
          300: "#D6B265",
          400: "#C39A45",
          500: "#B8935F",
          600: "#9C7638",
          700: "#7A5B2C",
          800: "#5A4321",
          900: "#3D2D16",
        },
        slate: {
          50: "#F6F7F8",
          100: "#EBEDF0",
          200: "#D3D7DD",
          300: "#AEB4BE",
          400: "#828A97",
          500: "#5F6874",
          600: "#48505A",
          700: "#363C44",
          800: "#22262C",
          900: "#15181C",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Manrope"', "Inter", "ui-sans-serif", "sans-serif"],
        serif: ['"Lora"', "Georgia", "Cambria", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18,22,28,0.04), 0 8px 24px -8px rgba(18,22,28,0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
