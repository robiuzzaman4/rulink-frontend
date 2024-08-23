import React from "react";
import Overview from "@/components/pages/overview/overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Manage your contents",
};

const OverviewPage = () => {
  return <Overview />;
};

export default OverviewPage;
