import ManageSkills from "@/components/pages/skills/manage-skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Manage Skills",
  description: "Manage your skills",
};

const SkillsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageSkills />
    </div>
  );
};

export default SkillsPage;
