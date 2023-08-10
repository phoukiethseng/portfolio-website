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
      type={"outline"}
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
            className="h-8 w-8 animate-fade-in"
            strokeWidth={1}
            suppressHydrationWarning
            fill="var(--color-primary)"
            color="var(--color-primary)"
          />
        )}
      {hasMounted &&
        theme !== themeConfig.LIGHT && ( // Only render on client, if pre-rendered will throw a hydration error
          <Icons.moon
            className="h-8 w-8 animate-fade-in"
            strokeWidth={1}
            suppressHydrationWarning
            fill="var(--color-primary)"
            color="var(--color-primary)"
          />
        )}
    </Button>
  );
}
