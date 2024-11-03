import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Creates a div element with customizable className and additional props
 * @param {Object} props - The props object
 * @param {string} props.className - Additional CSS class names to apply to the div
 * @param {React.Ref} ref - React ref object to be attached to the div
 * @returns {React.Element} A div element with applied className and props
 */
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Creates a div element with additional styling and forwarded props
 * @param {Object} props - The props object
 * @param {string} props.className - Additional class names to be applied to the div
 * @param {React.Ref} ref - The ref to be forwarded to the div element
 * @returns {React.Element} A div element with the specified className and forwarded props
 */
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative pl-8", className)} {...props} />
))
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a vertical line component with customizable styling.
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS class names for the component.
 * @param {React.Ref} ref - The ref to be forwarded to the div element.
 * @returns {JSX.Element} A div element representing a vertical line.
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute left-3 top-[14px] -bottom-[14px] w-[2px] bg-gray-200", className)}
    {...props}
  />
))
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a flexible container component with customizable styling
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the container
 * @param {React.Ref} ref - React ref object for accessing the underlying DOM element
 * @returns {React.Element} A div element with applied styling and props
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 py-2", className)}
    {...props}
  />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a customizable circular container component.
 * @param {Object} props - The component props.
 * @param {string} props.className - Additional CSS classes to apply to the container.
 * @param {React.Ref} ref - The ref to be forwarded to the div element.
 * @returns {React.Element} A div element with circular styling and forwarded ref.
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-10 flex h-6 w-6 rounded-full items-center justify-center",
      className
    )}
    {...props}
  />
))
TimelineIcon.displayName = "TimelineIcon"

const TimelineBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * Renders a div element with custom className and additional props
 * @param {Object} props - The props object
 * @param {string} props.className - Additional CSS class names to apply to the div
 * @param {React.Ref} ref - The ref to be attached to the div element
 * @returns {React.ReactElement} A div element with the specified properties
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pb-4", className)}
    {...props}
  />
))
TimelineBody.displayName = "TimelineBody"

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody
}