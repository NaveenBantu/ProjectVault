"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
/**
 * Renders a styled list container for tabs.
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS class names to apply to the list.
 * @param {React.Ref} ref - The forwarded ref for the underlying DOM element.
 * @returns {JSX.Element} A styled TabsPrimitive.List component.
 */
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
/**
 * Renders a customizable tab trigger component with specific styling and behavior.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Additional CSS classes to apply to the component.
 * @param {React.Ref} ref - A ref object to access the underlying DOM element.
 * @returns {React.ReactElement} A styled and interactive tab trigger component.
 */
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
/**
 * Renders a tab content component with custom styling and accessibility features.
 * @param {Object} props - The props object containing className and other properties.
 * @param {string} props.className - Additional CSS class names to apply to the component.
 * @param {React.Ref} ref - A ref to be forwarded to the underlying DOM element.
 * @returns {React.Element} A styled TabsPrimitive.Content component.
 */
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
