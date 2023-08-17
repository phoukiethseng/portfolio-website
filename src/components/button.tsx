import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

const buttonVariant = cva(["rounded-md text-base hover:opacity-[0.9]"], {
  variants: {
    type: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      outline: "border text-base",
      "no-outline": "border-0 text-base",
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
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      base: "border-base",
    },
    hover: {
      none: "",
      primary: "hover:border-primary hover:bg-primary",
      secondary: "hover:border-secondary hover:bg-secondary",
      accent: "hover:border-accent hover:bg-accent",
    },
  },
  defaultVariants: {
    size: "md",
    type: "primary",
    border: "primary",
    hover: "none",
    textSize: "md",
  },
});

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, type, border, hover, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariant({ size, type, border, hover }), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
