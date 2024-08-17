import { Button } from "@/components/ui/button";
import { TSocialPlatform } from "@/types";
import { getIconByPlatform } from "@/utils/getIconByPlatform";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

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
  return (
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
                  <Button size="sm" variant="destructive">
                    Remove
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourSocials;
