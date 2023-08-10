import * as React from "react";
import { cva, cx } from "class-variance-authority";
import { type VariantProps } from "class-variance-authority";

const buttonVariant = cva(["rounded-md text-base"], {
  variants: {
    type: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      outline: "border border-primary",
      "no-outline": "border-0",
    },
    size: {
      icon: "p-2",
      sm: "py-2 px-3",
      md: "py-4 px-5",
      lg: "py-6 px-7",
    },
  },
  defaultVariants: {
    size: "md",
    type: "primary",
  },
});

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cx(buttonVariant({ size, type }), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
