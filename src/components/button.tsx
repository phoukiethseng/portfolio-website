import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

const buttonVariant = cva(["rounded-md border text-base"], {
  variants: {
    color: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      none: "",
    },
    size: {
      icon: "p-2",
      xs: "py-1 px-2",
      sm: "py-2 px-3",
      md: "py-4 px-5",
      lg: "py-6 px-7",
    },
    textSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    border: {
      default: "border-border",
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      base: "border-base",
    },
    hoverBorder: {
      none: "",
      primary: "hover:border-primary",
      secondary: "hover:border-secondary",
      accent: "hover:border-accent",
    },
    hoverBackground: {
      none: "",
      primary: "hover:bg-primary",
      secondary: "hover:bg-secondary",
      accent: "hover:bg-accent",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    border: "default",
    hoverBorder: "none",
    hoverBackground: "none",
    textSize: "md",
  },
});

type ButtonProps = VariantProps<typeof buttonVariant> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      size,
      color,
      border,
      hoverBorder,
      hoverBackground,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={cn(
          {
            "opacity-[0.5]": disabled,
            "hover:opacity-[0.85]": !disabled,
          },
          buttonVariant({ size, color, border, hoverBackground, hoverBorder }),
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
