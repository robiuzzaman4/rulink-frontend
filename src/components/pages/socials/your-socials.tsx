import { Button } from "@/components/ui/button";
import { TSocialPlatform } from "@/types";
import { getIconByPlatform } from "@/utils/getIconByPlatform";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import RemoveSocialAlert from "@/components/pages/socials/remove-social-alert";
import { useUpdateUserMutation } from "@/features/user-slice";
import useUserByEmail from "@/hooks/useUserByEmail";
import { toast } from "sonner";

interface Social {
  label: string;
  platform: string;
  url: string;
}
interface YourSocialsProps {
  isLoading: boolean;
  addedSocials: Social[];
}

const YourSocials = ({ isLoading, addedSocials }: YourSocialsProps) => {
  // === user information ===
  const { id } = useUserByEmail();
  
  // === remove social alert modal state ===
  const [open, setOpen] = useState(false);
  const [removeItemPlatform, setRemoveItemPlatform] = useState("");

  // === update profile api mutation hook ===
  const [updateProfile, { isLoading: isUpdateProfileLoading }] =
    useUpdateUserMutation();

  // === handling remove social ===
  const handleRemoveSocial = async () => {
    const newSocialsArray = addedSocials?.filter(
      (social) => social?.platform !== removeItemPlatform
    );

    // make payload
    const payload = {
      socials: newSocialsArray,
    };
    // update user profile api mutations
    try {
      const res: any = await updateProfile({
        payload,
        userId: id,
      });
      if (res?.data?.success) {
        toast.success("Removed social.");
        setOpen(false);
      } else {
        toast.error("Failed to remove socials. Please try again.");
        setOpen(false);
      }
    } catch (error) {
      console.log("REMOVE SOCIALS ERROR", error);
      setOpen(false);
    }
  };

  return (
    <>
      <div className="w-full p-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">
            Your Social Accounts
          </h5>
          {isLoading && (
            <>
              <Loader size={16} className="animate-spin w-fit mx-auto" />
            </>
          )}
          {addedSocials && addedSocials?.length > 0 && (
            <div className="w-full grid lg:grid-cols-2 gap-4">
              {addedSocials?.map((item, index) => {
                // generate icon src
                const { src, alt } = getIconByPlatform(
                  item?.platform as TSocialPlatform
                );
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 w-full border border-border p-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-full grid place-items-center border border-border">
                        <Image
                          src={src}
                          alt={alt}
                          height={200}
                          width={200}
                          className="w-full h-full object-cover p-2"
                        />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setRemoveItemPlatform(item?.platform);
                      }}
                      size="sm"
                      variant="destructive"
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* remove socials alert modal */}
      <RemoveSocialAlert
        open={open}
        setOpen={setOpen}
        handleRemoveSocial={handleRemoveSocial}
        isUpdateProfileLoading={isUpdateProfileLoading}
      />
    </>
  );
};

export default YourSocials;
