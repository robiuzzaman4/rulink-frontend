import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const IconButton = ({
  children,
  className,
  size,
}: {
  children: ReactNode;
  className?: string;
  size?: "sm";
}) => {
  return (
    <div
      className={cn(
        "h-12 w-12 rounded-full bg-primary/5 grid place-items-center",
        className,
        {
          "h-8 w-8": size === "sm",
        }
      )}
    >
      <div
        className={cn(
          "h-9 w-9 rounded-full bg-primary/10 grid place-items-center",
          {
            "h-7 w-7": size === "sm",
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default IconButton;
