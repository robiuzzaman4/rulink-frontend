import ManageExperiences from "@/components/pages/experiences/manage-experiences";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Manage Experiences",
  description: "Manage your experiences",
};

const ExperiencesPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageExperiences />
    </div>
  );
};

export default ExperiencesPage;
