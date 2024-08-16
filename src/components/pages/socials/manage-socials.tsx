"use client";

import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";

import { Earth } from "lucide-react";
import React from "react";

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
      {/* your skills */}
      <div className="w-full p-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Socials</h5>
        </div>
      </div>

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

export default ManageSocials;
