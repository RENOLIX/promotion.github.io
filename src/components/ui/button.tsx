import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonVariants(variant: ButtonVariant = "primary") {
  return cn(
    "inline-flex items-center justify-center gap-3 px-6 py-3 text-sm tracking-[0.18em] uppercase font-semibold transition-all cursor-pointer",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:bg-primary/90",
    variant === "secondary" &&
      "border border-border text-foreground hover:border-primary hover:text-primary",
    variant === "ghost" && "text-muted-foreground hover:text-primary",
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return <button className={cn(buttonVariants(variant), className)} type={type} {...props} />;
}
