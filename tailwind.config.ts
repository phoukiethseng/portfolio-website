import { type Config } from "tailwindcss";

export default {
  darkMode: "class", // Manually enable dark mode, see: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        base: {
          DEFAULT: "var(--color-text)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
