import Link from "next/link";
import * as React from "react";

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export type ButtonProps = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "common";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-background hover:opacity-90 cursor-pointer",
  secondary: "bg-secondary text-background hover:opacity-90 cursor-pointer",
  ghost:
    "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer",
  outline:
    "border border-primary text-primary hover:bg-primary/10 cursor-pointer",
  common:
    "bg-primary hover:bg-primary/90 text-white border border-white inline-flex items-center justify-center gap-3 rounded-full px-7 py-2 font-medium transition-all duration-300 hover:scale-105 cursor-pointer",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10",
};

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  icon,
  iconPosition = "left",
  disabled,
}) => {
  if (href) {
    // Render as <a>
    return (
      <Link
        href={disabled ? "#" : href}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          className,
          disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        )}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {text}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </Link>
    );
  }

  // Render as <button>
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        className,
        disabled ? "opacity-50 cursor-not-allowed" : ""
      )}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
