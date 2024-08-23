import React from "react";
import Overview from "@/components/pages/overview/overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rulink - Overview",
  description: "Manage your personal informations",
  openGraph: {
    title: "Rulink - Overview",
    description: "Manage your personal informations",
    type: "website",
    url: "https://rulink.vercel.app",
    siteName: "Rulink",
    images: ["https://i.ibb.co/nmPJVPm/food-delivary-website.png"],
  },
};

const OverviewPage = () => {
  return <Overview />;
};

export default OverviewPage;
