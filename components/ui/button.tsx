import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forge-gold disabled:pointer-events-none disabled:opacity-50",
      "h-12 px-6 py-3 rounded-[var(--hx-radius-button)]",
      variant === 'primary' && "bg-forge-gold text-obsidian hover:bg-ember spark-accent",
      variant === 'secondary' && "bg-transparent border border-steel text-white hover:border-forge-gold hover:text-forge-gold",
      className
    )

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement<Record<string, unknown>>, {
        className: cn(classes, (props.children as React.ReactElement<{ className?: string }>).props.className),
      })
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
