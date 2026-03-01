import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forge-gold disabled:pointer-events-none disabled:opacity-50",
          "h-12 px-6 py-3 rounded-[var(--hx-radius-button)]",
          variant === 'primary' && "bg-forge-gold text-obsidian hover:bg-ember spark-accent",
          variant === 'secondary' && "bg-transparent border border-steel text-white hover:border-forge-gold hover:text-forge-gold",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
