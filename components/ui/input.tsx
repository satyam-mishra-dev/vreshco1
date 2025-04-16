import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-black text-white px-3 py-1 text-sm shadow-xs transition-colors outline-none file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus:outline-none focus:ring-0 focus:border-transparent",
        className
      )}
      style={{backgroundColor: 'black'}}
      {...props}
    />
  )
}

export { Input }
