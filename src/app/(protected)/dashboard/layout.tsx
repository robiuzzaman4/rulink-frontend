import DashboardNavbar from "@/components/shared/dashboard-navbar";
import Sidebar from "@/components/shared/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex-1 items-start lg:grid lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]">
      <Sidebar />
      <div className="">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
