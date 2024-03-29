import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Switch } from "@/components/ui/switch";

export const ModeToggle = () => {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("dark");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Switch
      checked={theme === "dark"}
      value={theme}
      onClick={(event) => {
        if ((event.target as HTMLButtonElement).value === "dark") {
          setThemeState("theme-light");
        } else {
          setThemeState("dark");
        }
      }}
    />
  );
};
