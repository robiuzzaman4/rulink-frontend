"use client";

import IconButton from "@/components/shared/icon-button";
import { FolderClosed } from "lucide-react";
import React from "react";
import YourProjects from "@/components/pages/projects/your-projects";
import AddNewProjectForm from "@/components/pages/projects/add-new-project-form";

const ManageProjects = () => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <FolderClosed size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Projects</h5>
      </div>
      {/* your projects */}
      <YourProjects />
      {/* add new project */}
      <AddNewProjectForm />
    </div>
  );
};

export default ManageProjects;
