"use client";

import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { useUpdateUserMutation } from "@/features/user-slice";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Loader, Sparkle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import SkillPresets from "./skill-presets";
import YourSkills from "./your-skills";

const ManageSkills = () => {
  // === get user info from db ===
  const { id, skills, isLoading } = useUserByEmail();

  // === selected skills ===
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === consistance skills ===
  useEffect(() => {
    if (!isLoading && skills) {
      setSelectedSkills(skills);
    }
  }, [isLoading, skills]);

  // === handle select skill ===
  const handleSelectSkill = (skill: string) => {
    if (!selectedSkills?.includes(skill)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  // === hanlde remove skill ===
  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills((prevSkills) => prevSkills?.filter((s) => s !== skill));
  };

  // === handle update skills ===
  const handleUpdateSkills = async () => {
    // make payload with new img
    const payload = {
      skills: selectedSkills,
    };
    // update user profile api mutations
    try {
      const res: any = await updateProfile({
        payload,
        userId: id,
      });
      if (res?.data?.success) {
        toast.success("Skills updated.");
      } else {
        toast.error("Failed to update skills. Please try again.");
      }
    } catch (error) {
      console.log("UPDATE SKILLS ERROR", error);
    }
  };

  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <Sparkle size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Skills</h5>
      </div>
      {/* your skills */}
      <YourSkills
        isLoading={isLoading}
        selectedSkills={selectedSkills}
        handleRemoveSkill={handleRemoveSkill}
      />
      {/* skill presets */}
      <SkillPresets
        selectedSkills={selectedSkills}
        handleSelectSkill={handleSelectSkill}
      />
      <div className="w-fit ml-auto py-4 px-4 sm:px-6">
        <Button
          onClick={handleUpdateSkills}
          type="button"
          disabled={isLoading || isUpdateProfileLoading}
        >
          Save
          {isUpdateProfileLoading && (
            <Loader size={16} className="animate-spin ml-2" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ManageSkills;
