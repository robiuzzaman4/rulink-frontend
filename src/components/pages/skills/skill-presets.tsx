import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DESIGN_SKILLS,
  DEVELOPMENT_SKILLS,
  MARKETING_SKILLS,
} from "@/constants/skills";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddCustomSkillModal from "@/components/pages/skills/add-custom-skill-modal";

interface SkillPresetsProps {
  selectedSkills: string[];
  handleSelectSkill: (skill: string) => void;
}

const SkillPresets = ({
  selectedSkills,
  handleSelectSkill,
}: SkillPresetsProps) => {
  // === custom skill popover state ===
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-full w-full">
      <div className="w-full px-1 pb-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Skill Presets</h5>
          <Tabs defaultValue="development" className="w-full">
            <TabsList>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
            {/* development skills */}
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
                {/* add custom skill button */}
                <Badge
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="text-sm font-normal gap-2 cursor-pointer relative"
                >
                  <p>Add Custom</p>
                  <Plus size={12} />
                </Badge>
              </div>
            </TabsContent>

            {/* design skills */}
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
                {/* add custom skill button */}
                <Badge
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="text-sm font-normal gap-2 cursor-pointer relative"
                >
                  <p>Add Custom</p>
                  <Plus size={12} />
                </Badge>
              </div>
            </TabsContent>

            {/* marketing skills */}
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
                {/* add custom skill button */}
                <Badge
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="text-sm font-normal gap-2 cursor-pointer relative"
                >
                  <p>Add Custom</p>
                  <Plus size={12} />
                </Badge>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AddCustomSkillModal
        open={open}
        setOpen={setOpen}
        handleSelectSkill={handleSelectSkill}
        selectedSkills={selectedSkills}
      />
    </div>
  );
};

export default SkillPresets;
