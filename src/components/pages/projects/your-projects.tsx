import { Button } from "@/components/ui/button";
import { useUpdateUserMutation } from "@/features/user-slice";
import useUserByEmail from "@/hooks/useUserByEmail";
import { TProject } from "@/types";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import RemoveProjectAlert from "./remove-project-alert";

const YourProjects = () => {
  // === remove project alert modal state ===
  const [open, setOpen] = useState(false);
  const [removeItemId, setRemoveItemId] = useState("");

  // === get user info from db ===
  const { id, projects, isLoading } = useUserByEmail();

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === handling remove social ===
  const handleRemoveProject = async () => {
    const newProjectsArray = projects?.filter(
      (project) => project?._id !== removeItemId
    );

    // make payload
    const payload = {
      projects: newProjectsArray,
    };
    // update user profile api mutations
    try {
      const res: any = await updateProfile({
        payload,
        userId: id,
      });
      if (res?.data?.success) {
        toast.success("Project removed.");
        setOpen(false);
      } else {
        toast.error("Failed to remove project. Please try again.");
        setOpen(false);
      }
    } catch (error) {
      console.log("REMOVE PROJECT ERROR", error);
      setOpen(false);
    }
  };

  return (
    <>
      <div className="w-full px-1 pb-1">
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
                  <div className="flex justify-between gap-2">
                    <Image
                      src={project?.thumbnail_url}
                      alt="Project thumbnail"
                      height={480}
                      width={480}
                      className="h-20 w-20 rounded-md object-cover shrink-0"
                    />
                    {/* delete project button */}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setOpen(true);
                        setRemoveItemId(project?._id);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                  <span>
                    <h5 className="text-lg font-medium font-satoshi">
                      {project?.title}
                    </h5>
                    <p className="text-sm font-normal text-muted-foreground">
                      {project?.description}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* remove project alert modal */}
      <RemoveProjectAlert
        open={open}
        setOpen={setOpen}
        isUpdateProfileLoading={isUpdateProfileLoading}
        handleRemoveProject={handleRemoveProject}
      />
    </>
  );
};

export default YourProjects;
