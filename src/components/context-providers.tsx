import { themeConfig } from "@/configs/theme";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ContextProvidersProps {
  children: React.ReactNode;
}
/*
    All context providers are in here
*/
export default function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      {/* Using next-themes package for dark mode toggle, see: https://www.npmjs.com/package/next-themes */}
      <ThemeProvider themes={Object.values(themeConfig)} attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
}
