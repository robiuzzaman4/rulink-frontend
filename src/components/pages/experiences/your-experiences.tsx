import React, { useState } from "react";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Loader } from "lucide-react";
import { TExperience } from "@/types";
import { getCapitalizeWord } from "@/utils/getCapitalizeWord";
import { Button } from "@/components/ui/button";
import RemoveExperienceAlert from "@/components/pages/experiences/remove-experience-alert";
import { useUpdateUserMutation } from "@/features/user-slice";
import { toast } from "sonner";

const YourExperiences = () => {
  // === remove experience alert modal state ===
  const [open, setOpen] = useState(false);
  const [removeItemId, setRemoveItemId] = useState("");

  // === get user info from db ===
  const { id, isLoading, experiences } = useUserByEmail();

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === handling remove social ===
  const handleRemoveExperience = async () => {
    const newExperiencesArray = experiences?.filter(
      (experience) => experience?._id !== removeItemId
    );

    // make payload
    const payload = {
      experiences: newExperiencesArray,
    };
    // update user profile api mutations
    try {
      const res: any = await updateProfile({
        payload,
        userId: id,
      });
      if (res?.data?.success) {
        toast.success("Experience removed.");
        setOpen(false);
      } else {
        toast.error("Failed to remove experience. Please try again.");
        setOpen(false);
      }
    } catch (error) {
      console.log("REMOVE EXPERIENCE ERROR", error);
      setOpen(false);
    }
  };

  return (
    <>
      <div className="w-full px-1 pb-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Your Experiences</h5>
          {isLoading && (
            <>
              <Loader size={16} className="animate-spin w-fit mx-auto" />
            </>
          )}
          {experiences && experiences?.length > 0 && (
            <div className="w-full grid lg:grid-cols-2 gap-4">
              {experiences?.map((experience: TExperience, index: number) => (
                <div
                  key={index}
                  className="p-4 bg-background border border-border rounded-lg shadow flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-full flex items-start justify-between gap-4">
                      <span className="text-base sm:text-lg font-medium font-satoshi">
                        {experience?.position}
                        {" - "}
                        {getCapitalizeWord(experience?.location_type)}
                      </span>
                      {/* delete project button */}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setOpen(true);
                          setRemoveItemId(experience?._id);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-normal text-muted-foreground">
                        {experience?.company}
                        {" - "}
                        {getCapitalizeWord(experience?.job_type)}
                      </span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {experience?.start_date}
                        {" - "}
                        {getCapitalizeWord(experience?.end_date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* remove experience alert modal */}
      <RemoveExperienceAlert
        open={open}
        setOpen={setOpen}
        isUpdateProfileLoading={isUpdateProfileLoading}
        handleRemoveExperience={handleRemoveExperience}
      />
    </>
  );
};

export default YourExperiences;
