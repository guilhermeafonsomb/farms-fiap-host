import { cn } from "@/utils/cmMerge";
import { forwardRef, type ComponentProps } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex-1 p-3 bg-white rounded text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
