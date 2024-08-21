"use client";

import React, { useEffect, useState } from "react";
import { Earth } from "lucide-react";
import IconButton from "@/components/shared/icon-button";
import AvailableSocials from "@/components/pages/socials/available-socials";
import YourSocials from "@/components/pages/socials/your-socials";
import useUserByEmail from "@/hooks/useUserByEmail";

interface Social {
  label: string;
  platform: string;
  url: string;
}
const ManageSocials = () => {
  // === get user info from db ===
  const { id, socials, isLoading } = useUserByEmail();

  // === added socials ===
  const [addedSocials, setAddedSocials] = useState<Social[]>([]);

  // === consistance socials ===
  useEffect(() => {
    if (!isLoading && socials) {
      setAddedSocials(socials);
    }
  }, [isLoading, socials]);

  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl mx-auto bg-secondary/50 rounded-2xl border border-border shadow-lg">
      {/* header */}
      <div className="grid gap-2 px-4 sm:px-6 py-4">
        <IconButton>
          <Earth size={20} />
        </IconButton>
        <h5 className="text-lg font-medium font-satoshi">Manage Socials</h5>
      </div>
      {/* your socials */}
      <YourSocials isLoading={isLoading} addedSocials={addedSocials} />
      {/* available socials */}
      <AvailableSocials addedSocials={addedSocials} id={id} />
    </div>
  );
};

export default ManageSocials;
