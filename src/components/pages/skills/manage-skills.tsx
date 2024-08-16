"use client";

import IconButton from "@/components/shared/icon-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DESIGN_SKILLS,
  DEVELOPMENT_SKILLS,
  MARKETING_SKILLS,
} from "@/constants/skills";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Minus, Plus, Sparkle } from "lucide-react";
import React, { useEffect, useState } from "react";

const ManageSkills = () => {
  // === get user info from db ===
  const { skills, isLoading } = useUserByEmail();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  console.log("selectedSkills", selectedSkills);

  // === consistacne skills ===
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
      <div className="w-full p-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Your Skills</h5>
          {selectedSkills && selectedSkills?.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {selectedSkills?.map((skill: string, index: number) => (
                <Badge
                  onClick={() => handleRemoveSkill(skill)}
                  key={index}
                  variant="outline"
                  className="text-sm font-normal gap-2 cursor-pointer hover:border-primary"
                >
                  <p>{skill}</p>
                  <Minus size={12} />
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* skill presets */}
      <div className="w-full px-1 pb-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Skill Presets</h5>
          <Tabs defaultValue="development" className="w-full">
            <TabsList>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
            <TabsContent value="development" className="pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                {DEVELOPMENT_SKILLS?.map((skill, index) => (
                  <Badge
                    onClick={() => handleSelectSkill(skill)}
                    key={index}
                    variant={
                      selectedSkills?.includes(skill) ? "default" : "outline"
                    }
                    className="text-sm font-normal gap-2 cursor-pointer hover:border-primary"
                  >
                    <p>{skill}</p>
                    <Plus size={12} />
                  </Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design" className="pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                {DESIGN_SKILLS?.map((skill, index) => (
                  <Badge
                    onClick={() => handleSelectSkill(skill)}
                    key={index}
                    variant={
                      selectedSkills?.includes(skill) ? "default" : "outline"
                    }
                    className="text-sm font-normal gap-2 cursor-pointer hover:border-primary"
                  >
                    <p>{skill}</p>
                    <Plus size={12} />
                  </Badge>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                {MARKETING_SKILLS?.map((skill, index) => (
                  <Badge
                    onClick={() => handleSelectSkill(skill)}
                    key={index}
                    variant={
                      selectedSkills?.includes(skill) ? "default" : "outline"
                    }
                    className="text-sm font-normal gap-2 cursor-pointer hover:border-primary"
                  >
                    <p>{skill}</p>
                    <Plus size={12} />
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="w-fit ml-auto py-4 px-4 sm:px-6">
        <Button
          type="button"
          //   disabled={isUploadFileLoading || isUpdateProfileLoading}
        >
          Save
          {/* {(isUploadFileLoading || isUpdateProfileLoading) && (
                <Loader size={16} className="animate-spin ml-2" />
              )} */}
        </Button>
      </div>
    </div>
  );
};

export default ManageSkills;
