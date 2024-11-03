import * as React from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  /**
   * Renders a textarea component with forwarded props and ref.
   * @param {Object} props - The props object.
   * @param {string} [props.className] - The CSS class name for the textarea.
   * @param {React.Ref} ref - The ref to be forwarded to the textarea element.
   * @returns {React.Element} A textarea React element with the provided props and ref.
   */
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea" 