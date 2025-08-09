import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "cursor-pointer font-medium inline-flex justify-center items-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-nogogeni-orange text-nogogeni-white hover:bg-nogogeni-orange/35 active:bg-nogogeni-orange/35 active:inset-shadow-md",
        secondary:
          "bg-nogogeni-white text-nogogeni-orange hover:bg-nogogeni-white/90 active:bg-nogogeni-white/35 active:text-nogogeni-white active:inset-shadow-md",
      },
      size: {
        small: "text-sm [&_svg]:w-5 [&_svg]:h-5 gap-2 px-4 py-2",
        medium: "text-base [&_svg]:w-6 [&_svg]:h-6 gap-2 px-4 py-2",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        data-slot="button"
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
