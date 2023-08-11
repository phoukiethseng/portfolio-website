import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/lib";
import { type VariantProps } from "class-variance-authority";

const buttonVariant = cva(["rounded-md text-base"], {
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
      sm: "py-2 px-3",
      md: "py-4 px-5",
      lg: "py-6 px-7",
    },
    border: {
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      base: "border-base",
    },
    hover: {
      none: "",
      primary: "hover:border-primary",
      secondary: "hover:border-secondary",
      accent: "hover:border-accent",
    },
  },
  defaultVariants: {
    size: "md",
    type: "primary",
    border: "primary",
    hover: "none",
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
