import React from "react";
import Overview from "@/components/pages/overview/overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Manage your contents",
};

const OverviewPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14">
      <Overview />
    </div>
  );
};

export default OverviewPage;
