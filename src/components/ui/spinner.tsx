import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Spinner({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Chargement"
      className={cn(
        "inline-block size-6 animate-spin rounded-full border-2 border-primary/20 border-t-primary",
        className,
      )}
      role="status"
      {...props}
    />
  );
}
