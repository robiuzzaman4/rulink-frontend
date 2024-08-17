"use client";

import React from "react";
import { Earth } from "lucide-react";
import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import AvailableSocials from "@/components/pages/socials/available-socials";

const ManageSocials = () => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <Earth size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Socials</h5>
      </div>
      {/* available socials */}
      <AvailableSocials/>
      

      {/* <div className="w-fit ml-auto py-4 px-4 sm:px-6">
        <Button
          //   onClick={handleUpdateSkills}
          type="button"
          //   disabled={isLoading || isUpdateProfileLoading}
        >
          Save
          {isUpdateProfileLoading && (
            <Loader size={16} className="animate-spin ml-2" />
          )}
        </Button>
      </div> */}
    </div>
  );
};

export default ManageSocials;
