import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-violet-600 text-white hover:bg-violet-500 shadow-sm": variant === "primary",
            "bg-zinc-800 text-zinc-50 hover:bg-zinc-700": variant === "secondary",
            "border border-zinc-800 bg-transparent hover:bg-zinc-900": variant === "outline",
            "hover:bg-zinc-800 text-zinc-300 hover:text-zinc-50": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-12 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
