import { useTheme } from "next-themes";
import Button from "./button";
import { Icons } from "./icons";
import { themeConfig } from "@/configs/theme";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Button
      className="transition-all duration-150 hover:text-primary" // Icons will be primary color when hovered
      hoverBorder={"primary"}
      border={"base"}
      color={"outline"}
      size={"icon"}
      onClick={() =>
        setTheme(
          theme === themeConfig.LIGHT ? themeConfig.DARK : themeConfig.LIGHT
        )
      }
    >
      {hasMounted &&
        theme === themeConfig.LIGHT && ( // Only render on client, if pre-rendered will throw a hydration error
          <Icons.sun
            className="animate-fade-in h-6 w-6"
            strokeWidth={1}
            suppressHydrationWarning
          />
        )}
      {hasMounted &&
        theme !== themeConfig.LIGHT && ( // Only render on client, if pre-rendered will throw a hydration error
          <Icons.moon
            className="animate-fade-in h-6 w-6"
            strokeWidth={1}
            suppressHydrationWarning
          />
        )}
    </Button>
  );
}
