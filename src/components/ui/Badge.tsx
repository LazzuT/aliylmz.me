import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-medium transition-colors text-zinc-300",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
