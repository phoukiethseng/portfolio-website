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
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        base: {
          DEFAULT: "var(--color-text)",
        },
      },
      keyframes: {
        "shrink-rotate": {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "100%": {
            transform: "rotate(360deg) scale(0)",
          },
        },
      },
      animation: {
        shrink: "shrink-rotate 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
