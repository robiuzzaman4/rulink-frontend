import ManageProjects from "@/components/pages/projects/manage-projects";
import React from "react";

export const metadata = {
  title: "Rulink - Manage Projects",
  openGraph: {
    title: "Rulink - Manage Projects",
  },
};

const ProjectsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageProjects />
    </div>
  );
};

export default ProjectsPage;
