"use client";

import { Button } from "@/components/ui/button";
import { AVAILABLE_SOCIALS } from "@/constants/socials";
import Image from "next/image";
import React, { useState } from "react";
import AddSocialModal from "@/components/pages/socials/add-social-modal";

interface Social {
  label: string;
  platform: string;
  url: string;
}
interface AvailableSocialsProps {
  isLoading: boolean;
  addedSocials: Social[];
}
const AvailableSocials = ({
  addedSocials,
  isLoading,
}: AvailableSocialsProps) => {
  // === add socials form modal state ===
  const [open, setOpen] = useState(false);

  // === check is social is already added or not ===
  const isSocialAdded = (platform: string) => {
    const result = addedSocials?.find(
      (social) => social?.platform === platform
    );
    return result ? true : false;
  };

  return (
    <>
      <div className="w-full p-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">
            Choose from bellow
          </h5>
          <div className="w-full grid lg:grid-cols-2 gap-4">
            {AVAILABLE_SOCIALS?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 w-full border border-border p-2 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full grid place-items-center border border-border">
                      <Image
                        src={item?.icon}
                        alt={item?.platform}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover p-2"
                      />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setOpen(true)}
                    disabled={isSocialAdded(item?.platform)}
                  >
                    Add
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* add socials modal */}
      <AddSocialModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AvailableSocials;
