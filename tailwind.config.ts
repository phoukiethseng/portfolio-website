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
        "fade-in": "fade-in 0.7s ease-in-out",
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
      },
    },
  },
  keyframes: {
    "accordion-down": {
      from: { height: 0 },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: 0 },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
