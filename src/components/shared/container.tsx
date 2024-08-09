import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Container {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Container) => {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto px-4 sm:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
