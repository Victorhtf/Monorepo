"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className="flex items-center p-2 rounded bg-light-mode hover:bg-hover-color transition duration-300"
        aria-label="Switch to light mode"
      >
        <FaSun className="text-yellow-500" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="flex items-center p-2 rounded bg-dark-mode hover:bg-hover-color transition duration-300"
        aria-label="Switch to dark mode"
      >
        <FaMoon className="text-gray-400" />
      </button>
    </div>
  );
}
