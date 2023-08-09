export const themeConfig = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeType = (typeof themeConfig)[keyof typeof themeConfig];
