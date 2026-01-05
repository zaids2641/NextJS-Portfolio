"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 flex items-center justify-center  transition-colors cursor-pointer"
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 hover:text-yellow-600" />
      ) : (
        <Moon className="w-5 h-5 text-yellow-400 hover:text-yellow-600" />
      )}
    </button>
  );
}
