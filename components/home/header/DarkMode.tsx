"use client";

import IconMoon from "@/components/ui/icon-moon";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function handleSwitchDarkMode(checked: boolean) {
    setTheme(checked ? "dark" : "light");
  }

  return (
    <div className="flex items-center space-x-2.5 md:space-x-5">
      <Switch
        checked={theme === "dark" || (theme === "system" && prefersDark)}
        onCheckedChange={handleSwitchDarkMode}
        id="dark-mode"
        className="cursor-pointer"
      />
      <Label htmlFor="dark-mode">
        <IconMoon className="stroke-muted dark:stroke-primary" />
      </Label>
    </div>
  );
}

export default DarkMode;
