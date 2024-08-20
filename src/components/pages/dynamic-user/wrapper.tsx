import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-background rounded-xl p-4 border border-border shadow">
      {children}
    </div>
  );
};

export default Wrapper;
