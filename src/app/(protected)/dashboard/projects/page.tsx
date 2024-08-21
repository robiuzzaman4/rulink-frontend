import ManageProjects from "@/components/pages/projects/manage-projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageProjects />
    </div>
  );
};

export default ProjectsPage;
