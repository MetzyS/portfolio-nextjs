"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer group">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
        <MdDarkMode className="ml-1 w-5 h-5 text-slate-700 group-hover:text-slate-600 dark:text-yellow-300 group-hover:dark:text-yellow-200" />
      </label>
    </div>
  );
};
