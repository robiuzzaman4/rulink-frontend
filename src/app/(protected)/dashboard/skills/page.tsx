import ManageSkills from "@/components/pages/skills/manage-skills";
import React from "react";

export const metadata = {
  title: "Rulink - Manage Skills",
  openGraph: {
    title: "Rulink - Manage Skills",
  },
};

const SkillsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageSkills />
    </div>
  );
};

export default SkillsPage;
