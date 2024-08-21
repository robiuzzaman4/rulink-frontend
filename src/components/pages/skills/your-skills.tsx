import { Badge } from "@/components/ui/badge";
import { Loader, Minus } from "lucide-react";
import React from "react";

interface YourSkillsProps {
  selectedSkills: string[];
  handleRemoveSkill: (skill: string) => void;
  isLoading: boolean;
}

const YourSkills = ({
  isLoading,
  selectedSkills,
  handleRemoveSkill,
}: YourSkillsProps) => {
  return (
    <div className="w-full px-1 pb-1">
      <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
        <h5 className="text-lg font-medium font-satoshi">Your Skills</h5>
        {isLoading && (
          <>
            <Loader size={16} className="animate-spin w-fit mx-auto" />
          </>
        )}
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
  );
};

export default YourSkills;
