"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

/**
 * Renders a theme toggle button component that switches between light and dark modes.
 * @returns {JSX.Element} A button element with sun and moon icons for theme toggling.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md p-2 hover:bg-accent flex items-center gap-2"
    >
      <Sun className="h-5 w-5 transition-all dark:hidden" />
      <Moon className="h-5 w-5 transition-all hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 