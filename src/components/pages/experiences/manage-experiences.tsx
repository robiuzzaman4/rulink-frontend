"use client";

import React from "react";
import IconButton from "@/components/shared/icon-button";
import { BriefcaseBusiness } from "lucide-react";
import YourExperiences from "@/components/pages/experiences/your-experiences";
import AddNewExperiencForm from "@/components/pages/experiences/add-new-experience-form";

const ManageExperiences = () => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <BriefcaseBusiness size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Experiences</h5>
      </div>
      {/* your experiences */}
      <YourExperiences />
      {/* add new experience form */}
      <AddNewExperiencForm />
    </div>
  );
};

export default ManageExperiences;
