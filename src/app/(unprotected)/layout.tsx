import Navbar from "@/components/shared/navbar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default HomeLayout;
