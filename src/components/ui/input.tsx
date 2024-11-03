import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  /**
   * Creates an input element with the provided properties and a ref.
   * @param {Object} props - The properties for the input element.
   * @param {string} props.className - The CSS class name for the input.
   * @param {string} props.type - The type of the input element.
   * @param {React.Ref} ref - The ref to be attached to the input element.
   * @returns {JSX.Element} A React input element with the specified properties and ref.
   */
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input" 