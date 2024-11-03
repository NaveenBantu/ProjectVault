import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Creates a styled div element with customizable properties
 * @param {Object} props - The properties to be applied to the div
 * @param {string} props.className - Additional CSS class names to be applied
 * @param {React.Ref} ref - React ref to be forwarded to the div element
 * @returns {React.Element} A styled div element with applied properties and ref
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a flexible container component with customizable className and props
 * @param {Object} props - The props object
 * @param {string} props.className - Additional CSS class names to apply to the container
 * @param {React.Ref} ref - Reference to the underlying DOM element
 * @returns {React.Element} A div element with applied className, ref, and other props
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
/**
 * Renders a customizable h3 heading component with optional className and additional props.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS classes to apply to the h3 element.
 * @param {React.Ref} ref - A ref object to attach to the h3 element for imperative access.
 * @returns {JSX.Element} A React h3 element with applied className and additional props.
 */
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
/**
 * Renders a styled paragraph element with customizable properties.
 * @param {Object} props - The props object containing className and other properties.
 * @param {string} [props.className] - Additional CSS class names to apply to the paragraph.
 * @param {React.Ref} ref - React ref object to be attached to the paragraph element.
 * @returns {React.ReactElement} A React paragraph element with applied styles and properties.
 */
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a div element with customizable className and additional props
 * @param {Object} props - The props object
 * @param {string} props.className - Additional CSS class names to apply to the div
 * @param {React.Ref} ref - The ref to be forwarded to the div element
 * @returns {JSX.Element} A div element with applied className and props
 */
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a flexible container component with customizable className and additional props.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS class names to apply to the container.
 * @param {React.Ref} ref - The forwarded ref to attach to the rendered div element.
 * @returns {React.Element} A div element with the specified properties and ref.
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
