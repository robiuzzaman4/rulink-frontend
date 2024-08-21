"use client";

import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { useUpdateUserMutation } from "@/features/user-slice";
import useUserByEmail from "@/hooks/useUserByEmail";
import { FolderClosed } from "lucide-react";
import React from "react";

const ManageProjects = () => {
  // === get user info from db ===
  const { id, projects, isLoading } = useUserByEmail();

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <FolderClosed size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Projects</h5>
      </div>
      {/* your skills */}
      {/* <YourSkills
        isLoading={isLoading}
        selectedSkills={selectedSkills}
        handleRemoveSkill={handleRemoveSkill}
      /> */}
      {/* skill presets */}
      {/* <SkillPresets
        selectedSkills={selectedSkills}
        handleSelectSkill={handleSelectSkill}
      /> */}
      <div className="w-fit ml-auto py-4 px-4 sm:px-6">
        <Button
          //   onClick={handleUpdateSkills}
          type="button"
          //   disabled={isLoading || isUpdateProfileLoading}
        >
          Save
          {/* {isUpdateProfileLoading && (
            <Loader size={16} className="animate-spin ml-2" />
          )} */}
        </Button>
      </div>
    </div>
  );
};

export default ManageProjects;
