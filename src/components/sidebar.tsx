"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FolderKanban, BookOpen, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Projects", href: "/project", icon: FolderKanban },
  { name: "Knowledge Bank", href: "/knowledge", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
]

/**
 * Renders a sidebar component for the Projects Vault application.
 * This component includes a title, theme toggle, and navigation links.
 * It uses the current pathname to highlight the active navigation item.
 * @returns {JSX.Element} A JSX element representing the sidebar
 */
export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Projects Vault</h1>
        <ThemeToggle />
      </div>
      
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 