import React, { ReactNode } from "react";

const IconButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-12 w-12 rounded-full bg-primary/5 grid place-items-center">
      <div className="h-9 w-9 rounded-full bg-primary/10 grid place-items-center">
        {children}
      </div>
    </div>
  );
};

export default IconButton;
