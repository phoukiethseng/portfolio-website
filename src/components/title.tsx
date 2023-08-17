import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("text-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
      xxxl: "text-3xl",
    },
    thickness: {
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    thickness: "semibold",
  },
});

type TitleProps = VariantProps<typeof titleVariants> &
  React.HTMLAttributes<HTMLParagraphElement>;

export default function Title({
  size,
  thickness,
  className,
  children,
}: TitleProps) {
  return (
    <p className={cn(titleVariants({ size, thickness }), className)}>
      {children}
    </p>
  );
}
