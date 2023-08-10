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
      animation: {
        "fade-in-and-slide-up": "fade-in-and-slide-up 1s ease-in-out",
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
