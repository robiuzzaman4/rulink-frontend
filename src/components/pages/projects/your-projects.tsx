import { Badge } from "@/components/ui/badge";
import { TProject } from "@/types";
import { Loader, Minus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface YourSkillsProps {
  //   selectedSkills: string[];
  //   handleRemoveSkill: (skill: string) => void;
  isLoading: boolean;
  projects: TProject[];
}

const YourProjects = ({ isLoading, projects }: YourSkillsProps) => {
  return (
    <div className="w-full p-1">
      <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
        <h5 className="text-lg font-medium font-satoshi">Your Projects</h5>
        {isLoading && (
          <>
            <Loader size={16} className="animate-spin w-fit mx-auto" />
          </>
        )}
        {projects && projects?.length > 0 && (
          <div className="w-full grid lg:grid-cols-2 gap-4">
            {projects?.map((project: TProject, index: number) => (
              <div
                key={index}
                className="p-4 bg-background border border-border rounded-lg shadow flex flex-col gap-4"
              >
                <Image
                  src={project?.thumbnail_url}
                  alt="Project thumbnail"
                  height={480}
                  width={480}
                  className="h-20 w-32 rounded-md object-cover shrink-0"
                />
                <span>
                  <h5 className="text-lg font-medium font-satoshi">{project?.title}</h5>
                  <p className="text-sm font-normal text-muted-foreground">{project?.description}</p>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourProjects;
